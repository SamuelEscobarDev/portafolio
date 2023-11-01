// Add JavaScript for smooth scrolling
var selectedSection = null;
var allSections = [];
var allLabels = [];
var rightPanel = document.getElementById("right-panel");

function selectSection(element) {
    if (selectedSection !== null)
        selectedSection.classList.remove("selected");

    var section = element;
    section.classList.add("selected");

    selectedSection = section;
}

function selectSectionLabelDisplay(element) {
    allSections.forEach((sect) => {
        const currentLinkElementId = "link-" + element.getAttribute("id");
        const currentLinkElement = document.getElementById(currentLinkElementId);

        const linkElementId = "link-" + sect.getAttribute("id");
        const linkElement = document.getElementById(linkElementId);

        linkElement.classList.remove("selected")

        if (sect.getAttribute("id") === element.getAttribute("id")) {
            linkElement.classList.add("selected");
        }
    });

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    allLabels.push(anchor)

    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        //selectSection(this)

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });
        }
    });
});

selectSection(document.getElementById("link-about"))

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 100 || rect.top - viewHeight >= 0);
}

document.getElementById("right-panel").addEventListener("scroll", (event) => {
    if (projectVisible != undefined && projectVisible)
        return;

    event.preventDefault();
    // Example of usage
    allSections.forEach((sect) => {
        if (checkVisible(sect)) {
            selectSectionLabelDisplay(sect)
        }
    })
})

var isMouseOver = false;
document.getElementById("right-panel").addEventListener("mouseenter", () => {
    isMouseOver = true;
});
document.getElementById("right-panel").addEventListener("mouseleave", () => {
    isMouseOver = false;
});

// Funcion para rectificar el elemento
const stickyElements = document.querySelectorAll('.label-mobile:not([ignore-bar])');
const blogCloseBar = document.getElementById("blog-close-bar");

var scrollStep = 10; // The size of smooth scrolling step
var scrollInterval = null;
document.addEventListener('wheel', function (event) {
    if (isMouseOver || (projectVisible != undefined && projectVisible))
        return;

    var delta = event.deltaY;

    event.preventDefault(); // Prevent default browser scrolling

    // Apply smooth scrolling in small increments
    var step = (delta > 0) ? scrollStep : -scrollStep;
    if (scrollInterval == null)
        scrollInterval = setInterval(function () {
            rightPanel.scrollTop += step * 5;

            delta -= step;
            if (Math.abs(delta) < scrollStep) {
                clearInterval(scrollInterval);
                scrollInterval = null;
            }
        }, 10); // Adjust scroll speed as needed
});

var lastBlogEntry = "";
setInterval(() => {
    const url = new URL(window.location.href);
    const blog = url.searchParams.has("blog") ? url.searchParams.get('blog') : "-";
    const home = url.searchParams.has("home");

    if (firstTime) {
        lastBlogEntry = blog;
        firstTime = false;
    }

    if (home && projectVisible) {
        hideProject();
        lastBlogEntry = blog;
    } else {
        if (blog.length > 0 && lastBlogEntry != blog) {
            lastBlogEntry = blog;
            detectProject(blog);
        }
    }

    if (projectVisible) {
        // Obtiene la posición actual del elemento
        const rect = blogCloseBar.getBoundingClientRect();

        // Verifica si la parte superior del elemento se adhiere a la parte superior de la ventana
        if (rect.top === 0 && rect.y === 0) {
            // Realiza aquí las acciones que desees cuando se adhiera
            if (!blogCloseBar.classList.contains("label-blog-bar"))
                blogCloseBar.classList.add("label-blog-bar");
        } else {
            blogCloseBar.classList.remove("label-blog-bar");
        }
    } else {
        stickyElements.forEach((stickyEl) => {
            // Obtiene la posición actual del elemento
            const rect = stickyEl.getBoundingClientRect();

            // Verifica si la parte superior del elemento se adhiere a la parte superior de la ventana
            if (rect.top === 0 && rect.y === 0) {
                // Realiza aquí las acciones que desees cuando se adhiera
                if (!stickyEl.classList.contains("label-bar"))
                    stickyEl.classList.add("label-bar");
            } else {
                stickyEl.classList.remove("label-bar");
            }
        });
    }
}, 100);


var rightPanel = document.getElementById('right-panel');
var sections = rightPanel.querySelectorAll('.section');

sections.forEach((sec) => {
    allSections.push(sec);
})

allSections = allSections.reverse();


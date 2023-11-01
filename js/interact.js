// Funciones para proyectos
var projectVisible = false;
var firstTime = true;


const contactButton = document.getElementById("contact-button");
const reelRoot = document.getElementById("reel-container");
const mainContainer = document.getElementById("main-container");
const projectContainer = document.getElementById("project-container");
const projectCards = document.querySelectorAll('[project]');
const reelButton = document.getElementById("reel-buttton");
const closeReelButton = document.getElementById("close-reel-buttton");

const backButton = document.getElementById("back-project-btn");
const backButtonDesktop = document.getElementById("back-desktop");

const animatedBackground = document.getElementById("animated-background");
const animatedBackgroundProject = document.getElementById("animated-background-project");

const blogRoot = document.getElementById("blog-back-drop");
const urlBlog = new URL(window.location.href);
var isBlog = urlBlog.searchParams.has("blog");
const blogId = isBlog ? urlBlog.searchParams.get("blog") : "-";
const pjBlogData = projects.find((pj) => pj.id == blogId);
isBlog = isBlog && pjBlogData != undefined;
var canNavigate = true;
projectVisible = isBlog;

function navigate(destination) {
    if (destination == -1)
    {
        if (!canNavigate)
        {
            setTimeout(()=>{
                navigate(destination);
            }, 200)
        }else{
            canNavigate = false;
            history.pushState({}, '', `?home`);
            setTimeout(() => {
                blogScrollRoot.scrollTop = 0;
                console.log(blogScrollRoot.scrollTop)
                canNavigate = true;
            }, 200)
        }
    }
    else
        history.pushState({}, '', `?blog=${encodeURIComponent(destination)}`);

}

var isChangingReelStatus = false;
var isTimeout = true;
function setReelStatus(visible){
    if (isChangingReelStatus)
    {
        if (isTimeout)
            return;

        isTimeout =  true;
        console.log("Is trying to intercept");
        setTimeout(()=>{
            isTimeout =  false;
            setReelStatus(visible);
        },200);

        return;
    }

    isChangingReelStatus = true;

    if (visible){
        reelRoot.style.display = "";
        reelRoot.style.filter = "opacity(0)";
        
        reelPlayer.restart();
        reelPlayer.play();

        setTimeout(() => {
     
            reelRoot.style.filter = "";

            reelRoot.classList.remove("main-reel-invisible")
            if (!reelRoot.classList.contains("main-reel-visible"))
                reelRoot.classList.add("main-reel-visible")

            isChangingReelStatus = false;
        }, 10);
    }
    else 
    {
        reelRoot.classList.remove("main-reel-visible")

        if (!reelRoot.classList.contains("main-reel-invisible"))
            reelRoot.classList.add("main-reel-invisible")

        reelPlayer.stop();
        setTimeout(() => {
            reelRoot.style.display = "none";
            isChangingReelStatus = false;
            console.log("stopping");
            reelPlayer.stop();
            console.log(reelPlayer.playing);

        }, 200);
    }
}

function detectProject(id) {
    const projectData = projects.find((pj) => pj.id == id);
    if (projectData == undefined) {
        navigate(-1);
        return;
    }
    
    cleanUpBlog();
    setBlogTittle(projectData.tittle);
    setBlogBanner(projectData.banner);
    setTags(projectData.tags);
    
    for (let i = 0; i < projectData.content.length; i++) {
        const projectContent = projectData.content[i];
        switch (projectContent.type) {
            case "tittle":
                createBlogTitle(projectContent.value);
                break;
            case "video":
                createVideoElement(projectContent.value, projectContent.loop);
                break;
            case "banner":
                createBlogBanner(projectContent.value);
                break;
            case "article":
                createBlogArticle(projectContent.value);
                break;
            default:
                break;
        }
    }
    projectVisible = true;
    mainContainer.classList.add("no-events");
    projectContainer.classList.remove("container-invisible")
    projectContainer.style.display = "unset";

    mainContainer.classList.add("container-invisible")
    projectContainer.classList.add("container-visible")

    animatedBackground.classList.remove("area-hidden");
    animatedBackground.classList.remove("area-show");
    animatedBackgroundProject.classList.remove("area-show");
    animatedBackgroundProject.classList.remove("area-hidden");

    animatedBackground.classList.add("area-hidden");
    animatedBackgroundProject.classList.add("area-show");
}

function hideProject() {
    projectVisible = false;

    mainContainer.classList.remove("no-events");
    mainContainer.classList.remove("container-invisible")

    mainContainer.classList.add("container-visible")
    projectContainer.classList.add("container-invisible")

    animatedBackground.classList.remove("area-hidden");
    animatedBackground.classList.remove("area-show");

    animatedBackgroundProject.classList.remove("area-show");
    animatedBackgroundProject.classList.remove("area-hidden");

    animatedBackground.classList.add("area-show");
    animatedBackgroundProject.classList.add("area-hidden");

    setTimeout(() => {
        projectContainer.style.display = "none";
        cleanUpBlog();
    }, 250);
}


// Establecer los eventos para los botones
projectCards.forEach((pjCard) => {
    pjCard.addEventListener("click", () => {
        navigate(pjCard.getAttribute("project"));
    })
});


// Funcion para el boton de regreso
backButton.addEventListener("click", () => {;
navigate(-1) });
backButtonDesktop.addEventListener("click", () => { navigate(-1) });

// Se preparan las paginas para la carga
if (projectVisible) {
    detectProject(blogId);

    projectContainer.style.filter = "opacity(1)";
    projectContainer.style.filter = "";

} else {
    hideProject();
    navigate(-1);

    mainContainer.style.filter = "opacity(1)";
    mainContainer.style.filter = "";
}


reelRoot.style.display = "none";
setTimeout(() => {
    projectContainer.style.display = "";
    mainContainer.style.display = "";
}, 100);

closeReelButton.addEventListener("click", (event)=> {
    setReelStatus(false)
});
reelButton.addEventListener("click", ()=> setReelStatus(true));
contactButton.addEventListener("click", ()=> window.open("https://www.facebook.com/SamuelEscobarDev/", "_blank"));
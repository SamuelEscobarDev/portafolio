const blogContentRoot = document.getElementById("blog-content-root");
const blogContentMainTittle = document.getElementById("blog-main-tittle");
const blogContentTags = document.getElementById("tags");
const blogMainBanner = document.getElementById("main-banner-blog");
const blogScrollRoot = document.getElementById("blog-scroll-root");

function createBlogArticle(text) {
    // Crear un elemento div
    const div = document.createElement('div');
    div.classList.add('blog-article');

    // Crear un párrafo y asignar el texto recibido como parámetro
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.classList.add("blog-article")
    // Agregar el párrafo al elemento div
    blogContentRoot.appendChild(paragraph);
}

function createBlogBanner(imageSource) {
    // Crear un elemento div
    const div = document.createElement('div');
    div.classList.add('banner-blog-content');

    // Crear un elemento img y asignar el atributo src con la fuente de la imagen recibida como parámetro
    const img = document.createElement('img');
    img.src = imageSource;
    img.alt = ''; // Asignar un valor para el atributo alt, puedes cambiarlo según lo necesites

    // Agregar la imagen al div
    div.appendChild(img);

    // Agregar el div al cuerpo del documento (puedes cambiar el contenedor donde se agrega)
    blogContentRoot.appendChild(div); // Cambia document.body a tu contenedor deseado
}

function createBlogTitle(titleText) {
    // Crear un elemento div
    const div = document.createElement('div');
    div.classList.add('blog-content-tittle');

    // Agregar el texto al div
    div.textContent = titleText;

    // Agregar el div al cuerpo del documento (o cambia el contenedor deseado)
    blogContentRoot.appendChild(div); // Cambia document.body si deseas otro contenedor
}

function setBlogTittle(titleText) {
    blogContentMainTittle.innerText = titleText;
}

function setBlogBanner(banner) {
    blogMainBanner.setAttribute("src", banner);
}

function createVideoElement(videoSource, loop) {
    // Crear un elemento video
    const video = document.createElement('video');
    video.classList.add("banner-blog")
    video.classList.add("vid-blog")
    video.autoplay = true;
    video.controls = false;
    video.muted = true;
    video.loop = loop;
    video.height = 240;
    video.width = 320;

    // Establecer mensaje alternativo si el navegador no admite el tag de video
    video.src = videoSource;

    // Agregar el video al cuerpo del documento (o cambia el contenedor deseado)
    blogContentRoot.appendChild(video); // Cambia document.body si deseas otro contenedor
}

function setTags(tags) {
    while (blogContentTags.firstChild) {
        blogContentTags.removeChild(blogContentTags.firstChild);
    }
    tags.forEach(tag => {
        var div = document.createElement("div");
        div.classList.add("tag");
        div.textContent = tag;

        blogContentTags.appendChild(div)
    });
}


function cleanUpBlog() {
    while (blogContentRoot.firstChild) {
        blogContentRoot.removeChild(blogContentRoot.firstChild);
    }

    setBlogBanner("");
}


const reelPlayer = new Plyr('#reel-player-f');
reelPlayer.clickToPlay = false;
reelPlayer.toggleControls(false)


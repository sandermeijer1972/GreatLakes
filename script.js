const main = document.getElementById("main");
const home = document.getElementById("home");
const boten = document.getElementById("boten");
const lossen = document.getElementById("lossen");
const webcams = document.getElementById("webcams");

const addHomeTextToDOM = () => {
    main.innerHTML = '';
    console.log("clicked Home");
    const newArticle = document.createElement("article");
    newArticle.classList.add("home");
    const newImg = document.createElement("img");
    newImg.id = "map";
    newImg.src = "great-lakes-map.gif";
    newArticle.appendChild(newImg);
    homedata.forEach(par => {
        const newSection = document.createElement("section");
        newSection.classList.add("lakes");
        newSection.classList.add(par.onderwerp);
        newSection.innerText = par.tekst;
        newArticle.appendChild(newSection);
    });
    main.appendChild(newArticle);
};

addHomeTextToDOM();

home.addEventListener("click", addHomeTextToDOM);

const addBoatsToDOM = () => {
    main.innerHTML = '';
    console.log("clicked Boten");
    boats.forEach(boat => {
        const newArticle = document.createElement("article");
        newArticle.classList.add("boot");
        const newTitleDiv = document.createElement("div");
        newTitleDiv.classList.add("titel");
        newTitleDiv.innerText = boat.naam;
        newArticle.appendChild(newTitleDiv);
        const newFotoDiv = document.createElement("div");
        newFotoDiv.classList.add("fotos");
        const newImgLeft = document.createElement("img");
        newImgLeft.src = boat.media.foto1;
        newFotoDiv.appendChild(newImgLeft);
        const newImgMiddle = document.createElement("img");
        newImgMiddle.src = boat.media.foto2;
        newFotoDiv.appendChild(newImgMiddle);
        const newImgRight = document.createElement("img");
        newImgRight.src = boat.media.foto3;
        newFotoDiv.appendChild(newImgRight);
        newArticle.appendChild(newFotoDiv);
        const newInfoDiv = document.createElement("div");
        newInfoDiv.classList.add("info");
        const newTextDiv = document.createElement("div");
        newTextDiv.classList.add("tekst");
        const newPNaam = document.createElement("p");
        newPNaam.innerText = ("naam: " + boat.naam);
        newTextDiv.appendChild(newPNaam);
        const newPBedrijf = document.createElement("p");
        newPBedrijf.innerText = ("bedrijf: " + boat.bedrijf);
        newTextDiv.appendChild(newPBedrijf);
        const newPBouwjaar = document.createElement("p");
        newPBouwjaar.innerText = ("bouwjaar: " + boat.bouwjaar);
        newTextDiv.appendChild(newPBouwjaar);
        const newPLengte = document.createElement("p");
        newPLengte.innerText = ("lengte: " + boat.lengte.feet + " feet / " + boat.lengte.meter + " meter");
        newTextDiv.appendChild(newPLengte);
        const newPBreedte = document.createElement("p");
        newPBreedte.innerText = ("breedte: " + boat.breedte.feet + " feet / " + boat.breedte.meter + " meter");
        newTextDiv.appendChild(newPBreedte);
        const newPLaad = document.createElement("p");
        newPLaad.innerText = ("laadcapaciteit: " + boat.laadcapaciteit + " ton");
        newTextDiv.appendChild(newPLaad);
        const newPMotor = document.createElement("p");
        newPMotor.innerText = ("motorvermogen: " + boat.motorvermogen);
        newTextDiv.appendChild(newPMotor);
        newInfoDiv.appendChild(newTextDiv);
        const newVideoDiv = document.createElement("div");
        newVideoDiv.classList.add("video");
        const newFrame = document.createElement("iframe");
        newFrame.setAttribute('allowFullScreen', '');
        newFrame.src = boat.media.youtube;
        newVideoDiv.appendChild(newFrame);
        newInfoDiv.appendChild(newVideoDiv);
        newArticle.appendChild(newInfoDiv);
        const newWeetjeDiv = document.createElement("div");
        newWeetjeDiv.classList.add("weetjes");
        const newPW1 = document.createElement("p");
        newPW1.innerText = boat.weetjes.w1;
        newWeetjeDiv.appendChild(newPW1);
        const newPW2 = document.createElement("p");
        newPW2.innerText = boat.weetjes.w2;
        newWeetjeDiv.appendChild(newPW2);
        newArticle.appendChild(newWeetjeDiv);
        main.appendChild(newArticle);
    });
};

boten.addEventListener("click", addBoatsToDOM);

const addLosTextToDOM = () => {
    main.innerHTML = '';
    console.log("clicked Lossen");
    const newArticle = document.createElement("article");
    newArticle.classList.add("lossen");
    const newImg = document.createElement("img");
    newImg.id = "los";
    newImg.src = "unloading_coal_animation2.gif";
    newArticle.appendChild(newImg);
    const newDiv = document.createElement("div");
    newDiv.classList.add("video");
    const newFrame = document.createElement("iframe");
    newFrame.setAttribute('allowFullScreen', '');
    newFrame.src = "https://www.youtube.com/embed/ud6QiHw7SU0";
    newDiv.appendChild(newFrame);  
    newArticle.appendChild(newDiv); 
    losdata.forEach(par => {
        const newSection = document.createElement("section");
        newSection.classList.add("lakes");
        newSection.classList.add(par.onderwerp);
        newSection.innerText = par.tekst;
        newArticle.appendChild(newSection);
    });
    main.appendChild(newArticle);
};

lossen.addEventListener("click", addLosTextToDOM);

const addVideoTextToDOM = () => {
    main.innerHTML = '';
    console.log("clicked Webcams");
    const newArticle = document.createElement("article");
    newArticle.classList.add("camera");
    const newDivCam = document.createElement("div");
    newDivCam.classList.add("camtext");
    const newDivText = document.createElement("div");
    newDivText.innerText = camtext;
    newDivCam.appendChild(newDivText);
    const newImg = document.createElement("img");
    newImg.src = "cameras.gif";
    newDivCam.appendChild(newImg);
    newArticle.appendChild(newDivCam);
    camdata.forEach(camera => {
        const newSection = document.createElement("section");
        newSection.classList.add("webcam");
        const newDivPlaats = document.createElement("div");
        newDivPlaats.classList.add("plaats");
        newDivPlaats.innerText = camera.plaats;
        newSection.appendChild(newDivPlaats);
        const newDivPositie = document.createElement("div");
        newDivPositie.classList.add("positie");
        newDivPositie.innerText = ("plek op de kaart: " + camera.positie);
        newSection.appendChild(newDivPositie);
        const newDivInfo = document.createElement("div");
        newDivInfo.classList.add("info");
        newDivInfo.innerText = camera.info;
        newSection.appendChild(newDivInfo);
        const newDivVideo = document.createElement("div");
        newDivVideo.classList.add("video");
        const newFrame = document.createElement("iframe");
        newFrame.src = camera.youtube;
        newFrame.setAttribute('allowFullScreen', '');
        newDivVideo.appendChild(newFrame);
        newSection.appendChild(newDivVideo);
        newArticle.appendChild(newSection);
    });
    main.appendChild(newArticle);
};

webcams.addEventListener("click", addVideoTextToDOM);

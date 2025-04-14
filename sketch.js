let projects = document.querySelectorAll('.proj');
let modalProj = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');

let projTitle = document.querySelector('.projTitle');
let projDesc = document.querySelector('.projDesc');
let projPage = document.querySelector('.more');

let playBtn = document.querySelector('.playToggle');
let video = document.querySelector('video');

let backdrop = document.querySelector('.backdrop');

if(projects){
projects.forEach((project) => {
    project.addEventListener('click', ()=>{
        modalProj.showModal();
        console.log('clicked');

        if(project.classList.contains('one')){
            projTitle.innerHTML = 'Genart';
            projDesc.innerHTML = 'In samenwerking met Ananya van het Conservatorium Maastricht een generatieve art installatie gemaakt. Het idee was om dit te laten veranderen door de muziek die Ananya live speelt...';
            projPage.setAttribute('href', 'genart.html');
        }else if(project.classList.contains('two')){
            projTitle.innerHTML = 'Carlo de Mosasaurus';
            projDesc.innerHTML = 'Aan ons werd gevraagd of we het Natuurhistorisch Museum in Maastricht wilden helpen met het museum meer interactie te geven. In teams van vier mochten we tien weken lang hieraan knutselen...';
            projPage.setAttribute('href', 'carlo.html');
        }else if(project.classList.contains('three')){
            projTitle.innerHTML = 'Van Groen tot Goud';
            projDesc.innerHTML = 'Het CBS (Centraal Bureau voor de Statistiek) heeft ons gevraagd om een multimedia website te maken over verschillende onderwerpen. Mijn team en ik hebben gekozen om het over de avocadohandel van Nederland te doen...';  
            projPage.setAttribute('href', 'vgg.html');
        }
        else if(project.classList.contains('four')){
            projTitle.innerHTML = 'TechnoArt';
            projDesc.innerHTML = 'Het lectoraat Technology Driven Art van Hogeschool Zuyd heeft ons gevraagd om een interactieve installatie te maken. Het onderwerp mochten we zelf verzinnen, zolang kunst en technologie maarr samenkwamen...';
            projPage.setAttribute('href', 'technoart.html');
        }

        projPage.addEventListener('click', ()=>{
            location.open(projPage.getAttribute('href'));
        });
 });

});
}

if(closeBtn){
closeBtn.addEventListener('click', ()=>{
    modalProj.close();
});
}

if (playBtn){
playBtn.addEventListener('click', () => {
    console.log('click');
  if(video.paused) {
    video.play();
    playBtn.style.backgroundImage = 'url(assets/svg/pause.svg)';
  }
  else {
    video.pause();
    playBtn.style.backgroundImage = 'url(assets/svg/playBtn.svg)';
  }
  
});
}


if(document.body.classList.contains('carlo')){
    backdrop.style.background = 'url(assets/video/carlo1.gif)';
    backdrop.style.backgroundSize = 'contain';
    backdrop.style.backgroundColor = 'transparent';
    backdrop.style.backgroundClip = 'text';
}

if(document.body.classList.contains('vgg')){
    backdrop.style.background = 'url(assets/video/cbs1.gif)';
    backdrop.style.backgroundSize = 'contain';
    backdrop.style.backgroundColor = 'transparent';
    backdrop.style.backgroundClip = 'text';
}

if(document.body.classList.contains('tda')){
    backdrop.style.background = 'url(assets/video/technoart1.gif)';
    backdrop.style.backgroundSize = 'cover';
    backdrop.style.backgroundColor = 'transparent';
    backdrop.style.backgroundClip = 'text';
}
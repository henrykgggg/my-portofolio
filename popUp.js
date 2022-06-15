const projects = [
    {
      title: 'TONIC 1',
      prof:['Canopy','back end Dev','2015'],
      src: "img/Snapshoot.png",
      description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
      technologies: ['html', 'Ruby', 'css', 'Github'],
      seeLiveLink: '#',
      seeSourceLink: '#',
    },
    {
      title: 'TONIC 2',
      prof:['Canopy','back end Dev','2015'],
      src: "img/Snapshoot.png",
      description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
      technologies: ['html', 'Ruby ', 'css', 'Github'],
      seeLiveLink: '#',
      seeSourceLink: '#',
    },
    {
      title: 'TONIC 3',
      prof:['Canopy','back end Dev','2015'],
      src: "img/Snapshoot.png",
      description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
      technologies: ['html', 'Ruby', 'css', 'Github'],
      seeLiveLink: '#',
      seeSourceLink: '#',
    },
    {
      title: 'TONIC 4',
      prof:['Canopy','back end Dev','2015'],
      src: "img/Snapshoot.png",
      description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
      technologies: ['html', 'Ruby', 'css', 'Github'],
      seeLiveLink: '#',
      seeSourceLink: '#',
    },
  ];

  const projectDetailCard = document.createElement('div');
  projectDetailCard.className = "project-detail-card";
  const popUp = document.getElementById('project-details');
  const Allbuttons = document.querySelectorAll('.click-btn');
  const btns = Array.from(Allbuttons);

  function desktop (index) {
    popUp.style.display='block';
    popUp.appendChild(projectDetailCard);
    projectDetailCard.innerHTML=`
    <div class="modal-content">

    <i class="fa-solid fa-xmark" id="close-popUp"></i>
        <div class="modal-head">

            <h2>${projects[index].title}</h2>

        </div>
        <div class="modal-prof">
            <span>${projects[index].prof}</span> 

        </div>
        <div class="modal-image">
            <img src =${projects[index].src}
        </div>
        </div>
        <div class="modal-main">
  <div class="modal-description">
    <p>${projects[index].description}</p>
  </div>
  <div class="modal-tech">
  <div class="modal-technolog">
  <ul class="project-lists">
  
    <li class="list">${projects[index].technologies[0]}</li>
    
    <li class="list">${projects[index].technologies[1]}</li>

    <li class="list">${projects[index].technologies[2]}</li>
 
    <li class="list">${projects[index].technologies[3]}</li>
 
  </ul>
</div>
<button class="click-btn">
<a href="${projects[index].seeLiveLink}">See Live <img src="img/github.png" alt="See live"></i></a>
</button>
<button class="click-btn">
<a href="${projects[index].seeSourceLink}">See Source <img src="img/github.png" alt="Github icon"></a>
</button>
</div>
</div>
</div>
    </div>
    </section>
    `
  }
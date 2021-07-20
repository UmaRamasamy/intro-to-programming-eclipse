let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Uma Maheswari &copy; ${thisYear}`;
footer.appendChild(copyright);


let skills = ['Oracle9i/10g','SQL','Windows','Mac OS','HTML','CSS','JavaScript','Git'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('[name="leave_message"]');
console.log(messageForm);

messageForm.addEventListener('submit',(event)=>{
    event.preventDefault();
      let Name = event.target.name.value;
      let Email = event.target.email.value;
      let Message = event.target.message.value;
      
      console.log(Name,Email,Message);

        const messageSection= document.getElementById('messages');
         const messageList = messageSection.querySelector('ul');
          const newMessage = document.createElement('li');
              newMessage.innerHTML = `<a href="mailto:${Email}"> ${Name} </a> wrote: <span> 
                ${Message}</span>`;
               console.log(newMessage);

          const removeButton = document.createElement('button');
              removeButton.innerText = 'remove';
              removeButton.type ='button';
 // Creation of editButton             
        const editButton = document.createElement('button');
             editButton.innerText = 'edit';
             editButton.type ='button';
        
        
    removeButton.addEventListener('click',(e)=>{
          const entry =e.target.parentNode; 
          entry.remove();
  })
     newMessage.appendChild(removeButton);
        newMessage.appendChild(editButton);
        messageList.appendChild(newMessage);
      
      messageForm.reset();


});



   // Assignment 6-1
      /** 
        const githubRequest = new XMLHttpRequest();
        githubRequest.open("GET", "https://api.github.com/users/UmaRamasamy/repos");
        githubRequest.send();

        
        githubRequest.addEventListener('load', function(){
        const repositories = JSON.parse(this.response);
          console.log(repositories);
        
       const projectSection = document.getElementById('projects');
       const projectList = projectSection.querySelector('ul');
       for (let i = 0; i < repositories.length; i++){
         const project = document.createElement('li');
         project.innerText = repositories[i].name
         projectList.appendChild(project)
       }
      }) */

      // Assignment 6-2
        fetch('https://api.github.com/users/UmaRamasamy/repos')
           .then(response => response.json())
          .then(data => load(data))
          .catch(err => console.log('Request Failed', err)); // Catch errors
       
      function load(data){
                   const projectSection = document.getElementById('projects');
                    const projectList = projectSection.querySelector('ul');
                  for (let i = 0; i < data.length; i++){
                      const project = document.createElement('li');
                    project.innerHTML =`<a href = '${data[i].html_url}' target = '_blank' }> ${data[i].name}</a>  created on ${data[i].created_at.slice(0,10)}`;
                    projectList.appendChild(project)
                  }
                }
      
          
    
       
       
        

  
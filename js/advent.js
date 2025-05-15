
const date = new Date();
let todayMonth = date.getMonth()+1;
let todayDay = date.getDate();

window.onload = function()
{
  const main = document.querySelector('main');
  const nop = document.querySelector('#nop');
  const boxes = fetch('./js/boxes.json')
    .then(response => response.json())
    .then(data => {
      console.log(todayMonth);
      for(let i = 0; i<data.length; i++) {
        let button = document.createElement('button');
        let img = document.createElement('img');
        img.className='calendarItem';
        img.src = data[i].image;
        button.appendChild(img);

        let day=document.createElement('p');
        day.className='day';
        day.innerText=data[i].number;
        button.appendChild(day);

        let modal = document.createElement('dialog');
        let form = document.createElement('form');
        form.method='dialog';
        let closeButton = document.createElement('button');
        closeButton.innerText='X';
        closeButton.className='close';

        let intro = document.createElement('h2');
        intro.innerText=data[i].intro;

        let content = document.createElement('p');
        content.innerText=data[i].content;

        let conclusion = document.createElement('p');
        conclusion.innerText=data[i].conclusion;
        form.appendChild(intro);
        form.appendChild(content);
        form.appendChild(conclusion);
        form.appendChild(closeButton);
        modal.appendChild(form);
        main.appendChild(button);
        main.appendChild(modal);
        console.log(button);
        button.addEventListener('click', () => {
          if(todayMonth<12 || day.innerHTML > todayDay)
          {
            nop.showModal();
          }
          else
          {
            modal.showModal();
          }
        });
      }    
    })
    .catch(error => console.error('Erreur lors du chargement du JSON', error));
};


  function selectDay(day){
    console.info(day.dataset.date);
    let today = new Date(day.dataset.date);
    //nb: getDay et getMonth donne des valeurs de tableau, donc il faut incrémenter pour avoir la bonne date.
    todayDay = today.getDate();
    todayMonth = today.getMonth()+1;
  }
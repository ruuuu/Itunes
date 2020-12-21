import { radioPlayerInit } from './radioPlayer.js';    //импорт фукнии radioPlayerInit из  файла radioPlayer.js
import { videoPlayerInit } from './videoPlayer.js'; 
import { musicPlayerInit } from './musicPlayer.js'; 

//елстрелочная фукния принимает один агрумет, то скобки можно не указывать для аргумента, Если стрелоч функция выплняет один оператор, тос кобки тоже можно не

const playerBtn = document.querySelectorAll('.player-btn'); //получили коллекуию кнопок
const playerBlock = document.querySelectorAll('.player-block'); //получили коллекуию блоков
const temp = document.querySelector('.temp');//


const deactivationPlayer = () => {

  temp.style.display = 'none'; //элементу temp. добавили свойство display: none; оно будет пропсиано в вертске  в тэге как style="display: none;" 

  playerBtn.forEach((item) => { //item - i ая кнопка
      item.classList.remove('active');
  });

  playerBlock.forEach((item) => { //item - i ый блок
      item.classList.remove('active');
  });
};




playerBtn.forEach((btn, i) => { //циклу передаил фукнцию, в цикде передаем кнопку из масива playerBtn
  //console.log(btn);
  //console.log(playerBlock[i]);

  btn.addEventListener('click', () => { //на каждую кнпоку навешали событие, вторым парамтером мтеода addEventListener будет коллбэк фукния 
      deactivationPlayer();
      btn.classList.add('active');
      playerBlock[i].classList.add('active'); //класс active содердит стиль display:block 

      //btn.classList.toggle('active');
      //playerBlock[i].classList.toggle('active');
  });
})

//console.log(playerBtn);
//console.log(playerBlock);




radioPlayerInit();//вызызваемф укнцию
videoPlayerInit();
musicPlayerInit();
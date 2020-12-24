import { radioPlayerInit } from './radioPlayer.js';    //импорт фукнии radioPlayerInit из  файла radioPlayer.js
import { videoPlayerInit } from './videoPlayer.js'; 
import { musicPlayerInit } from './musicPlayer.js'; 

//если стрелочная фукния принимает один аргумент, то скобки можно не указывать для аргумента, Если стрелоч функция выплняет один оператор, то скобки тоже можно не ставить

const playerBtn = document.querySelectorAll('.player-btn'); //получили коллекцию кнопок
const playerBlock = document.querySelectorAll('.player-block'); //получили коллекцию блоков
const temp = document.querySelector('.temp');//


const deactivationPlayer = () => {

  temp.style.display = 'none'; //элементу temp добавили свойство display: none; оно будет пропсиано в верстке  в тэге как style="display: none;" 

  //mas.forEach
  playerBtn.forEach((item) => { //item - i ая кнопка
      item.classList.remove('active');
  });

  //mas.forEach
  playerBlock.forEach((item) => { //item - i ый блок
      item.classList.remove('active');
  });
};




playerBtn.forEach((btn, i) => { //циклу передали фукнцию, в цикле передаем кнопку из масива playerBtn
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


//test.addEventListener('change', () => console.log(test.value));//после ввода строки, кликнув по полю будет проиходить собтие

//test.addEventListener('input', () => console.log(test.value)); //при каждом вводе симлвоа будет происхоить событие
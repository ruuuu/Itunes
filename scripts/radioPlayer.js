export const  radioPlayerInit = () => { //  экспортируем функцию radioPlayerInit и здесь же ее опсиываем
  
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioHeaderBig = document.querySelector('.radio-header__big');//h1
  const radioNavigation = document.querySelector('.radio-navigation');//form 
  const radioItem = document.querySelectorAll('.radio-item');///получили псевдомассив
  const radio = document.querySelector('.radio');
  const radioStop = document.querySelector('.radio-stop');//кнопка плей

  const audio = new Audio();//создали объект
  audio.type = 'audio/aac';//

  radioStop.disabled = true; //задизейблили кнопку radioStop, в баузере в  верстке появится это свойство
  
  const changeIconPlay = () => {
    if(audio.paused){//если на паузе
        radio.classList.remove('play');
        radioStop.classList.remove('fa-stop');
        radioStop.classList.add('fa-play');
        
    }
    else{
      radio.classList.add('play');
      radioStop.classList.add('fa-stop');
      radioStop.classList.remove('fa-play');
    }
  };


  const selectItem = (elem) => {
    //mas.foerEach()
    radioItem.forEach((item) => item.classList.remove('select'));//для каждого item  выполнится
    elem.classList.add('select');//добавляет серую  обводку
  };



  radioNavigation.addEventListener('change', (event) => { //на форму вешаем событие, при перключении радиостанций срабатывает событие
    const target = event.target;
    const parrent = target.closest('.radio-item');//(li). Ищет родителя по указанному классу,  у элемента target
    selectItem(parrent);

    const title = parrent.querySelector('.radio-name').textContent;//взяли значение у элемента
    radioHeaderBig.textContent = title;

    const img = parrent.querySelector('.radio-img').src;
    console.log(img);
    radioCoverImg.src = img;

    radioStop.disabled = false;//раздизейблили кнпоку

    //console.log(event.target);// выведет <input type='radiobutton' ...>
    //console.log(target.dataset);//выведет data атрибут(уже в camelcase) и его значение
    //console.log(target.dataset.radioStantion);

    audio.src = target.dataset.radioStantion; //
    audio.play();//встроенный метод, при нажатии проигрывает
    changeIconPlay();
  });



  radioStop.addEventListener('click', () => {//обработчик кнопки radioStop

      if(audio.paused){//если на паузе, у audio есть свойство paused
          audio.play();
      }
      else{
        audio.pause();//иначе ставим на паузу
      }
      changeIconPlay();
  });

};


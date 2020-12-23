export const  musicPlayerInit = () => {
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed'); 
    const videoProgress = document.querySelector('.video-progress');//прогрессбар
    const videoTimeTotal = document.querySelector('.video-time__total');
    

    const toogleIcon = () => {
        if(videoPlayer.paused){ //если видео не идет
          videoButtonPlay.classList.remove('fa-pause'); //у кнопки videoButtonPlay удалеям иконку паузы
          videoButtonPlay.classList.add('fa-play');//у кнопки videoButtonPlay менеям иконку на плей
        }
        else{//если видео запущено
          videoButtonPlay.classList.add('fa-pause');
          videoButtonPlay.classList.remove('fa-play');//
        }

    };


    const togglePlay = () => {
        if(videoPlayer.paused){ //если видео на паузе
            videoPlayer.play(); // у видеоплеера есть такой метод play()
        }
        else{
          videoPlayer.pause(); //ставим на паузу
        } 

        //toogleIcon();
    };

    const stopPlay = () => {
        videoPlayer.pause(); //ставим на паузу
        videoPlayer.currentTime = 0; //начальная точка откуда видео начинается, у видео еть свойство currentTime
        
    };

    const addZero = n => n < 10 ? '0' + n : n;  //если n<10  то добавляем вначало 0, иначе возвращаем. Здесь у парамтра n  скобки неставим, тк он один
    //либо выше строку можно перписать так:
    // const addZero = n => {
    //    return n < 10 ? '0' + n : n;
    // }




    videoPlayer.addEventListener('click', togglePlay); //при нажати на видео визывется фукнция  togglePlay
    videoButtonPlay.addEventListener('click', togglePlay);//при нажатии на кнпоку плей в меню, вызвватся функция togglePlay
      
    //
    videoPlayer.addEventListener('play', toogleIcon); //у видео есть событие  play, это собтыие будет происходить когда нажали на видео чтоб запустить 
    videoPlayer.addEventListener('pause', toogleIcon);//у видео есть событие  pause, это собтыие будет происходить когда нажали на видео чтоб  остановить

    videoButtonStop.addEventListener('click', stopPlay); //после клика на кнпоку квадратки videoButtonStop вызываеся функция stopPlay

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime; //у видеоплеера етсь свойство currentTime, получили сколкьок времени прошло уже
        const duration =  videoPlayer.duration; //это константа, у видеоплеера етсь свойство duration , длительность видео

        videoProgress.value = (currentTime /  duration) * 100; //у этого элемента есть атрибут value, его значение меняем

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60); //остаток от деления

        //общее время -константа
        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60); //остаток от деления

        //videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondsPassed); //сколько ушло
        //можно строку вверху перписать через интерполяцию так: 
        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;

        //videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondsTotal);//общее время 
        //либо через интерполяцию так:
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;


        //console.log(secondsPassed);
        //console.log(secondsTotal);

    });

    videoProgress.addEventListener('change', () => { //обработчик прогрессбара videoProgress, тк  у поля type=range у него есть событие change
        const duration =  videoPlayer.duration; 
        const value = videoProgress.value; //получаем значнее на прогрессбаре

        videoPlayer.currentTime = (value * duration) / 100;//получем то время, на котрое мы кликнули по прорессбару
    });

};





//  экспортируем цункцию radioPlayerInit и здесь же ее опсиываем




//втрой вариант экспорта
//export default musicPlayerInit; //тогда в файле индек в иморте фигурнеы скобки не ставимм у фукнции
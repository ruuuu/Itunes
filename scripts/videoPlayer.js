import { addZero } from './supScript.js'; //импортируем функицю  addZero из файла supScript.js

export const  videoPlayerInit = () => { //  экспортируем цункцию radioPlayerInit и здесь же ее опсиываем
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed'); 
    const videoProgress = document.querySelector('.video-progress');//прогрессбар
    const videoTimeTotal = document.querySelector('.video-time__total');
    const videoVolume = document.querySelector('.video-volume');//сладйер увеличения звука
    const videoFullScreen = document.querySelector('.video-fullscreen');// иконка полного размера окна

    //console.log(videoFullScreen.dir());

    

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

    

    const changeValue = () => { //меням значнеие звука
        const valueVolum = videoVolume.value;//значнеие звука
        console.log(videoPlayer.volume);
        videoPlayer.volume = valueVolum / 100;

    };


    videoPlayer.addEventListener('click', togglePlay); //при нажатии на видео визывется фукнция  togglePlay
    videoButtonPlay.addEventListener('click', togglePlay);//при нажатии на кнопку плей в меню, вызыватся функция togglePlay
    
    //
    videoPlayer.addEventListener('play', toogleIcon); //у видео есть событие  play, это событие будет происходить когда нажали на видео чтоб запустить 
    videoPlayer.addEventListener('pause', toogleIcon);//у видео есть событие  pause, это событие будет происходить когда нажали на видео чтоб  остановить

    videoButtonStop.addEventListener('click', stopPlay); //после клика на кнпоку квадратки videoButtonStop вызываеся функция stopPlay

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime; //у видеоплеера етсь свойство currentTime, получили сколкько времени прошло уже
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
                                  //можно вставить событие input   вместо change
    videoProgress.addEventListener('input', () => { //обработчик прогрессбара videoProgress, тк  у поля type=range у него есть событие change, оно проиходит когда  передвинули движок
        const duration = videoPlayer.duration; 
        const value = videoProgress.value; //получаем значнее на прогрессбаре

        videoPlayer.currentTime = (value * duration) / 100;//получем то время, на котрое мы кликнули по прорессбару
    });


    videoVolume.addEventListener('input', changeValue); // оработчик события на звуке, при смене звука, вызывется фукнция
    
    videoFullScreen.addEventListener('click', () => { //на иконку навесиил собыие клика
        videoPlayer.requestFullscreen();//видео есть втсроенный метод, открыватевидео на весь экран
    });


    videoPlayer.addEventListener('volumechange', () =>{
        console.log("звук меняется");
        console.log(videoPlayer.volume * 100);
        videoVolume.value = Math.round(videoPlayer.volume * 100);//уронеь звука
    });
    
    changeValue(); // по умолчанию  устанвоит то значение , котрое стоит в в ерстке в атрибуте value="10"

    

    //console.dir(videoPlayer);//выводит в ввиде объекта т есть video.video-player
};


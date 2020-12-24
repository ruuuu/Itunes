import { addZero } from './supScript.js'; //импортируем функицю  addZero из файла supScript.js

export const  musicPlayerInit = () => { //  экспортируем цункцию radioPlayerInit и здесь же ее описываем
    
    const  audio = document.querySelector('.audio'); 
    const  audioImg = document.querySelector('.audio-img'); //каринка на крутящемся круге
    const  audioHeader = document.querySelector('.audio-header'); 
    const  audioPlayer = document.querySelector('.audio-player');//<audio src="hello.mp3"> 
    const  audioNavigation = document.querySelector('.audio-navigation'); 
    const  audioButtonPlay = document.querySelector('.audio-button__play'); 
    const  audioProgress = document.querySelector('.audio-progress'); //прогрессбар
    const  audioProgressTiming = document.querySelector('.audio-progress__timing'); //закрашиваем прогрессбара красной полосой
    const  audioTimePassed = document.querySelector('.audio-time__passed'); 
    const  audioTimeTotal = document.querySelector('.audio-time__total'); 

    const playList = ['hello', 'flow', 'speed'];//список названий песен

    let trackIndex = 0; //индекс той песни котрая играет

    const loadTrack = () => {//запуск песни
        const isPlayed = audioPlayer.paused; //если при переключении не играла, вернет true. Иначе false
    
        audioPlayer.src = `./audio/${playList[trackIndex]}.mp3`;  
        audioImg.src = `./audio/${playList[trackIndex]}.jpg`;
        audioHeader.textContent = playList[trackIndex].toUpperCase();

        if(isPlayed){//
            audioPlayer.pause();
        }
        else{ //если при переключении  играла
            audioPlayer.play();
        }
        
    };

    const prevTrack = () =>{
        if(trackIndex !== 0 ){
            trackIndex --;
        }
        else{
            trackIndex = playList.length - 1;
        }
        loadTrack();//запуск песни
    }; 


    const nextTrack = () =>{
        if(trackIndex === playList.length - 1){
            trackIndex = 0;
        }
        else{
            trackIndex++;
        }
        loadTrack();//запуск песни
    }; 

   

    audioNavigation.addEventListener('click', (event) => { //на панель управления вешаем событие
        const target = event.target;  //хранит элемет на котроый нажали
        console.log(target);

        if(target.classList.contains('audio-button__play')){  //если у нажатого эелмнета есть класс 'audio-button__play', то есть если нажали на кнопку плей
            audio.classList.toggle('play');//будет крутиться кружок большой
            audioButtonPlay.classList.toggle('fa-play');
            audioButtonPlay.classList.toggle('fa-pause');
            
            if(audioPlayer.paused){ //если на паузе
                audioPlayer.play();  //музыка появится 
            }
            else{
                audioPlayer.pause(); //музыка остановится
            }
        }

        if(target.classList.contains('audio-button__prev')){  //если у нажатого эелмнета есть класс 'audio-button__prev', то есть если нажали на кнопку prev
            prevTrack();
        }

        if(target.classList.contains('audio-button__next')){  //если у нажатого эелмнета есть класс 'audio-button__next', то есть если нажали на кнопку next
            nextTrack();
        }
    });

    audioPlayer .addEventListener('ended', () => { //когда трек закончился
        nextTrack(); //запустим трэк слдеюущий
        audioPlayer.play();//так как  когда трек закончится,  то isPlayed=false 
    }); 
    
    
    audioPlayer.addEventListener('timeupdate', () => { //изменение времени

        const currentTime = audioPlayer.currentTime; //у аудиоплеера есть свойство currentTime, получили сколкько времени прошло уже
        const duration =  audioPlayer.duration; //это константа, у аудио етсь свойство duration , длительность аудио

        const progress = (currentTime /  duration) * 100; // его значение меняем

        audioProgressTiming.style.width = progress + '%'; //конкатенация  с процентом, в верстке в барузере будет style="width:...%"


        let minutePassed = Math.floor(currentTime / 60) || '0'; //если левая часть вернет nan, то выведется 0
        let secondsPassed = Math.floor(currentTime % 60) || '0'; //остаток от деления

        //общее время -константа
        let minuteTotal = Math.floor(duration / 60) || '0';
        let secondsTotal = Math.floor(duration % 60) || '0'//остаток от деления

        //audioTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondsPassed); //сколько ушло
        //можно строку вверху перписать через интерполяцию так: 
        audioTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;

        //audioTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondsTotal);//общее время 
        //либо через интерполяцию так:
        audioTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
    });
    

    audioProgress.addEventListener('click', (event) => {
        const x = event.offsetX;  //корлината по х, получим то метсо куда кликнули
        console.log(x);
        
        const allWidth = audioProgress.clientWidth; //длина прогрессбара
        
        const progress = (x / allWidth) * audioPlayer.duration;;
        audioPlayer.currentTime = progress;
    });
    
    
    
    

};










//втрой вариант экспорта фукнции
//export default musicPlayerInit; //тогда в файле индек в иморте фигурнеы скобки не ставимм у фукнции
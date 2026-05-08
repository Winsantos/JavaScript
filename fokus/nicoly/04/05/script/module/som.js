    export default function initAudio(){
        const audio = document.getElementById('alternar-musica')
        const ativaAudio = new Audio('../sons/luna-rise-part-one.mp3')
        ativaAudio.loop = true

        audio.addEventListener('change', ()=>{
            if(ativaAudio.paused){
                audioAtivo.play()
            }else{
                ativaAudio.pause()
            }
        })
    }
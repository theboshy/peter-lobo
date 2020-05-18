import React, {useEffect, useState} from 'react';
import './music.player.component.scss';

const MusicPlayerComponent = (props: any) => {
    var playOnStart = true;
    const [audio] = useState(new Audio(process.env.PUBLIC_URL + '/sources/spaceslug-proton-lander.mp3'));
    const [playing, setPlaying] = useState(playOnStart);

    function toggle () {
        setPlaying(!playing);
    }

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.volume = 0.4;
        audio.currentTime = 300;
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    var normalClass = 'music-player';
    var playingClass = ' music-player music-player--disabled';
    return <>
        <div className="music-player__wrapper">

            <div className={playing ? normalClass : playingClass} id="musicContainer" onClick={() => toggle()}>
                <audio id="audio-player" autoPlay loop>
                    <source src="" type="audio/mpeg"/>
                        <p className="sr-only">Your browser does not support the audio element.</p>
                </audio>

                <div className="music-player__bar music-player__bar1"></div>
                <div className="music-player__bar music-player__bar2"></div>
                <div className="music-player__bar music-player__bar3"></div>
                <div className="music-player__bar music-player__bar4"></div>

                <button  onClick={ () => toggle()} className="music-player__button music-player__play">
                    <span className="sr-only">Play</span>
                </button>
                <button onClick={ () => toggle()} className="music-player__button music-player__pause">
                    <span className="sr-only">Pause</span>
                </button>
            </div>

        </div>
    </>
}

export default MusicPlayerComponent;

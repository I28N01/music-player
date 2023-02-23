import { useState, useRef } from "react";
import React, { useEffect } from "react";
import track from '../../public/Bobby_Marleni_-_Dropin.mp3'
import BarCSS from './Bar.module.scss';
import prev from '../../img/icon/prev.png';
import play from '../../img/icon/play.png';
import pause from '../../img/icon/pause.png';
import next from '../../img/icon/next.png';
import repeat from '../../img/icon/repeat.png';
import shuffle from '../../img/icon/shuffle.png';
import like from '../../img/icon/like.png';
import dislike from '../../img/icon/dislike.png';
// import trackCover from '../../img/cover.png';


function Bar(props) {
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState('0');
  const [currentTime, setCurrentTime] = useState('0');
  const [playPause, setPlayPause] = useState(play);
  const ref = useRef(null);

  const handleStop = () => {
    ref.current.pause();
    setPlayPause (play);
  };

  const handleStart = () => {
    ref.current.play();
    setDuration  (ref.current.duration);
    setPlayPause (pause);
  };

  const togglePlay = isPlaying ? handleStop : handleStart

  useEffect((useEffect) => {
    const interval = setInterval(() => {
      setCurrentTime (ref.current.currentTime);
    }, 1000);
    return (useEffect) => clearInterval(interval);
  }, []);


    return (
      <div className={BarCSS.bar__content}>
      <input className={BarCSS.bar__player_progress}  type="range" min={0} max={duration} defaultValue={currentTime} />
      <div className={BarCSS.bar__player_block}>
        <div className={BarCSS.bar__player}>
          <div className={BarCSS.player__controls}>
            <div className={BarCSS.player__btn_prev}>
              <img
                className={BarCSS.player__btn_prev_svg}
                src={prev}
                alt="prev"
              />
            </div>
            <div className={BarCSS.player__btn_play} onClick={togglePlay}>
              <img
                src={playPause}
                alt="play"
              />
            </div>
            <div className={BarCSS.player__btn_next}>
              <img
                src={next}
                alt="next"
              />
            </div>
             <div className={BarCSS.player__btn_repeat}>
              <img
                src={repeat}
                alt="repeat"
              />
            </div>
            <div className={BarCSS.player__btn_shuffle}>
              <img
                src={shuffle}
                alt="shuffle"
              />
            </div>
          </div>

          <div className={BarCSS.player__track_play}>
            <div className={BarCSS.track_play__contain}>
              <div className={BarCSS.track_play__image}></div>
              <div className={BarCSS.track_play__author}>
                <a className={BarCSS.track_play__author_link} href={props.titleHref}>{props.title} <span className="track__title_span">{props.titleSpan}</span></a>
              </div>
              <div className={BarCSS.track_play__album}>
                <a className={BarCSS.track_play__album_link} href={props.authorHref}>{props.author} <span className="track__title_span">{props.titleSpan}</span></a>
              </div>
            </div>

            <div className={BarCSS.track_play__like_dis}>
              <div className={BarCSS.track_play__like}>{/*_btn-icon */}
                <img
                src={like}
                alt="like"
              />
              </div>
              <div className={BarCSS.track_play__dislike}>{/*_btn-icon */}
                <img
                src={dislike}
                alt="dislike"
              />
              </div>
            </div>
          </div>
        </div>
        <div className={BarCSS.bar__volume_block}>
          <div className={BarCSS.volume__content}>
            <div className={BarCSS.volume__image}>
              <svg className={BarCSS.volume__svg} alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </svg>
            </div>
            <div className={BarCSS.volume__progress}>
              <input
                className={BarCSS.volume__progress_line}
                type="range"
                name="range"
              />
            </div>
          </div>
        </div>
      </div>
      <audio
      controls
        ref={ref}
        src={track}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        style={{ display: 'none' }}
      />
    </div>
    );
  }

  Bar.defaultProps = {
    title: "title",  
    titleSpan: "",
    titleHref:"#",
    album: "#",
    albumHref:"#",
  }

  export default Bar;
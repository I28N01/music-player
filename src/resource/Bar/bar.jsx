import React from 'react';
import BarCSS from './Bar.module.scss';
import prev from '../../img/icon/prev.png';
import play from '../../img/icon/play.png';
import next from '../../img/icon/next.png';
import repeat from '../../img/icon/repeat.png';
import shuffle from '../../img/icon/shuffle.png';
import like from '../../img/icon/like.png';
import dislike from '../../img/icon/dislike.png';
import trackCover from '../../img/icon/cover.png';


function Bar(props) {
    return (
      <div className={BarCSS.bar__content}>
    <div className={BarCSS.bar__player_progress}></div>
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
            <div className={BarCSS.player__btn_play}>
              <img
                src={play}
                alt="play"
              />
            </div>
            <div className={BarCSS.player__btn_next}>
              <img
                src={next}
                alt="next"
              />
            </div>
             <div className={BarCSS.player__btn_repeat}> {/*_btn-icon */}
              <img
                src={repeat}
                alt="repeat"
              />
            </div>
            <div className={BarCSS.player__btn_shuffle}>{/*_btn-icon */}
              <img
                src={shuffle}
                alt="shuffle"
              />
            </div>
          </div>

          <div className={BarCSS.player__track_play}>
            <div className={BarCSS.track_play__contain}>
              <div className={BarCSS.track_play__image}>
              <img src={trackCover} alt="music" />
              </div>
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
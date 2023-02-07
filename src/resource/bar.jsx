import React from 'react';
import prev from '../img/icon/prev.png';
import play from '../img/icon/play.png';
import next from '../img/icon/next.png';
import repeat from '../img/icon/repeat.png';
import shuffle from '../img/icon/shuffle.png';
import like from '../img/icon/like.png';
import dislike from '../img/icon/dislike.png';
import trackCover from '../img/icon/cover.png';


function Bar(props) {
    return (
      <div className="bar__content">
      <div className="bar__player-progress"></div>
      <div className="bar__player-block">
        <div className="bar__player player">
          <div className="player__controls">
            <div className="player__btn-prev">
              <img
                className="player__btn-prev-svg"
                src={prev}
                alt="prev"
              />
            </div>
            <div className="player__btn-play _btn">
              <img
                // className="player__btn-play-svg"
                src={play}
                alt="play"
              />
            </div>
            <div className="player__btn-next">
              <img
                // className="player__btn-next-svg"
                src={next}
                alt="next"
              />
            </div>
            <div className="player__btn-repeat _btn-icon">
              <img
                // className="player__btn-repeat _btn-icon"
                src={repeat}
                alt="repeat"
              />
            </div>
            <div className="player__btn-shuffle _btn-icon">
              <img
                // className="player__btn-shuffle-svg"
                src={shuffle}
                alt="shuffle"
              />
            </div>
          </div>

          <div className="player__track-play track-play">
            <div className="track-play__contain">
              <div className="track-play__image">
              <img src={trackCover} alt="music" />
              </div>
              <div className="track-play__author">
                <a className="track-play__author-link" href={props.titleHref}>{props.title} <span className="track__title-span">{props.titleSpan}</span></a>
              </div>
              <div className="track-play__album">
                <a className="track-play__album-link" href={props.authorHref}>{props.author} <span className="track__title-span">{props.titleSpan}</span></a>
              </div>
            </div>

            <div className="track-play__like-dis">
              <div className="track-play__like _btn-icon">
                <img
                // className="track-play__like-svg"
                src={like}
                alt="like"
              />
              </div>
              <div className="track-play__dislike _btn-icon">
                <img
                // className="track-play__dislike-svg"
                src={dislike}
                alt="dislike"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="bar__volume-block volume">
          <div className="volume__content">
            <div className="volume__image">
              <svg className="volume__svg" alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </svg>
            </div>
            <div className="volume__progress _btn">
              <input
                className="volume__progress-line _btn"
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
import React from 'react';
import trackCover from '../img/icon/cover.png';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function PlaylistItem(props) {
    return (
        <div className="playlist__item">
        <div className="playlist__track track">
            <div className="track__title">
                <div className="track__title-image">
                <img src={trackCover} alt="music" />
                </div>
                <div className="track__title-text">
                    <a className="track__title-link" href={props.titleHref} >{props.title  || <Skeleton />} <span className="track__title-span">{props.titleSpan}</span></a>
                </div>
            </div>
            <div className="track__author">
                <a className="track__author-link" href={props.authorHref}>{props.author || <Skeleton />}</a>
            </div>
            <div className="track__album">
                <a className="track__album-link" href={props.albumHref}>{props.album || <Skeleton />}</a>
            </div>
            <div className="track__time">
                <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">{props.time}</span>
            </div>
        </div>
    </div>
    );
  }

  PlaylistItem.defaultProps = {
    title: "title",  
    titleSpan: "",
    album: "#",
    author: "author",
    authorHref: "#", 
    album: "album", 
    albumHref: "#", 
    time: "0:00"
  }

  export default PlaylistItem;
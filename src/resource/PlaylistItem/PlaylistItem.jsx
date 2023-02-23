import React from 'react';
import PlaylistItemCSS from './PlaylistItem.module.scss';
// import trackCover from '../../img/icon/cover.png';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function PlaylistItem(props) {
    return (
        <div className={PlaylistItemCSS.playlist__item}>
        <div className={PlaylistItemCSS.playlist__track}>
            <div className={PlaylistItemCSS.track__title}>
                <div className={PlaylistItemCSS.track__title_image}>
                {/* <img src={trackCover} alt="music" /> */}
                </div>
                <div className={PlaylistItemCSS.track__title_text}>
                    <a className={PlaylistItemCSS.track__title_link} href={props.titleHref} >{props.title  || <Skeleton />} <span className={PlaylistItemCSS.track__title_span}>{props.titleSpan}</span></a>
                </div>
            </div>
            <div className={PlaylistItemCSS.track__author}>
                <a className={PlaylistItemCSS.track__author_link} href={props.authorHref}>{props.author || <Skeleton />}</a>
            </div>
            <div className={PlaylistItemCSS.track__album}>
                <a className={PlaylistItemCSS.track__album_link} href={props.albumHref}>{props.album || <Skeleton />}</a>
            </div>
            <div className={PlaylistItemCSS.track__time}>
                <svg className={PlaylistItemCSS.track__time_svg} alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={PlaylistItemCSS.track__time_text}>{props.time}</span>
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
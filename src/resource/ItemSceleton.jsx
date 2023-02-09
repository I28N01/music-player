import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function PlaylistItem(props) {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="playlist__item">
        <div className="playlist__track track">
            <div className="track__title">
                <div className="track__title-image">
                <img src={trackCover} alt="music" />
                </div>
                <div className="track__title-text">
                    {/* <a className="track__title-link" href={props.titleHref}>{props.title} <span className="track__title-span">{props.titleSpan}</span></a> */}
                    <Skeleton />
                </div>
            </div>
            <div className="track__author">
                {/* <a className="track__author-link" href={props.authorHref}>{props.author}</a> */}
                <Skeleton />
            </div>
            <div className="track__album">
                <a className="track__album-link" href={props.albumHref}>{props.album}</a>
            </div>
            <div className="track__time">
                <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">{props.time}</span>
            </div>
        </div>
    </div>
    </SkeletonTheme>
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
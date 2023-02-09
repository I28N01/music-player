import React from 'react';
import {useState} from 'react';
import img1 from '../../img/playlist01.png';
import img2 from '../../img/playlist02.png';
import img3 from '../../img/playlist03.png';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



  
function Sidebar() {
  const [isLoading, setIsLoading] = useState (true);
  const onLoad = () => {
    setIsLoading(false);
    console.log('loaded ')
  };
  
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
            {isLoading && <Skeleton count={3} width={250} height={150} style={{marginBottom: "30px"}} />}
              <img
                className="sidebar__img"
                src={img1}
                onLoad={onLoad}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={img2}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={img3}
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
      </SkeletonTheme>
    );
  }

  export default Sidebar;
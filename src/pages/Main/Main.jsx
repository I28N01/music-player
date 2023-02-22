import MainCSS from './Main.module.scss';
import Navigation from '../../resource/Navigation/Navigation';
import Search from '../../resource/Search/Search';
import Filter from '../../resource/Filter/Filter';
import PlaylistTitle from '../../resource/PlaylistTitle/PlaylistTitle';
import PlaylistItem from '../../resource/PlaylistItem/PlaylistItem';
import Account from '../../resource/Account/Account';
import Sidebar from '../../resource/Sidebar/Sidebar';
import Bar from '../../resource/Bar/bar';


function Main() {
  return (
  <div className={MainCSS.wrapper}>
      <div className={MainCSS.container}>
        <main className={MainCSS.main}>
          <Navigation />
          <div className={MainCSS.main__centerblock}>
            <Search />
            <h2 className={MainCSS.centerblock__h2}>Треки</h2>
            <Filter />
            <div className={MainCSS.centerblock__content}>
              <PlaylistTitle />
            </div>
            <div className={MainCSS.content__playlist}>
            <PlaylistItem title = "Guilt"  author="Nero" album="Welcome Reality" time ="4:33"/>
            <PlaylistItem title = "Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time ="2:22"/>
            <PlaylistItem title = "I’m Fire" author="Ali Bakgor" album="I’m Fire" time ="2:22"/>
            <PlaylistItem title = "Non Stop" titleSpan =" (Remix)"  author="тоункат, Psychopath" album="Non Sto" time ="4:12"/>
            <PlaylistItem title = "Run Run" titleSpan =" (feat. AR/CO)" author="Jaded, Will Clarke, AR/CO" album="Run Run" time ="2:54"/>
            <PlaylistItem title = "Eyes on Fire" titleSpan =" (Zeds Dead Remix)" author="Blue Foundation, Zeds Deadero" album="Eyes on Fire" time ="5:20"/>
            <PlaylistItem title = "Mucho Bien" titleSpan =" (Hi Profile Remix)" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time ="4:33"/>
            <PlaylistItem title = "Knives n Cherries" author="minthaze" album="Captivating" time ="1:48"/>
            <PlaylistItem title = "How Deep Is Your Love" author="Calvin Harris, Disciples" album="How Deep Is Your Love" time ="3:32"/>
            <PlaylistItem title = "Morena" author="Tom Boxer" album="Soundz Made in Romania" time ="3:36"/>
            </div>
          </div>
          <div className={MainCSS.main__sidebar}>
              <Account login = "Ilyas.Beisenov" />
              <Sidebar />
            </div>
        </main>
        <div className={MainCSS.bar}>
          <Bar title = "Ты та..." author = "Баста"/>
        </div>
      </div>
  </div>
  );
}

export default Main;

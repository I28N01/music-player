import './css/style.css';
import Navigation from './resource/Navigation';
import Search from './resource/Search';
import Filter from './resource/Filter/Filter';
import PlaylistTitle from './resource/PlaylistTitle';
import PlaylistItem from './resource/PlaylistItem';
import Account from './resource/Account';
import Sidebar from './resource/Sidebar/Sidebar';
import Bar from './resource/bar';


function App() {
  return (
  <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <div className="centerblock__content">
              <PlaylistTitle />
            </div>
            <div className="content__playlist playlist">
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
          <div className="main__sidebar sidebar">
              <Account login = "Ilyas.Beisenov" />
              <Sidebar />
            </div>
        </main>
        <div className="bar">
          <Bar title = "Ты та..." author = "Баста"/>
        </div>
        <footer className="footer"></footer>
      </div>
  </div>
  );
}

export default App;

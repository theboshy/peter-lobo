import React, {useState} from 'react';
import './App.scss';
import MusicPlayerComponent from "./components/musicplayer/music.player.component";


function App() {
    const [show, setShow] = useState(false);

  return (
      <>
        <div className="header" onClick={() => setShow(!show)}>
          <h1>Peter <br/> Lobo</h1>
           <h1 className="subtitle">Full Stack Software Enginering</h1>
        </div>
          <MusicPlayerComponent/>
        <section className={!show ? "fullsize-video-bg fullsize-video-bg-c" : "fullsize-video-bg fullsize-video-bg-c fullsize-video-bg-s"} onClick={() => setShow(false)}>
          <div id="video-viewport">
            <video width="1920" height="1280" autoPlay={true} muted loop>
                <source src="./sources/video_cover_2.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

          <div className={show ? "hiden-info-modal-show" : ""}>
              <div className={show ? "overlay" : ""}>
                  <nav className={show ? "overlay-menu" : ""}>

                      <section className={show ? "content" : ""}>
                          <nav className={show ? "menu menu--adsila" : "hidden"}>
                              <a className="menu__item" href="/bio">
                                  <span className="menu__item-name">Bio</span>
                                  <span className="menu__item-label">Explore Peter`s portfolios</span>
                              </a>
                              <a className="menu__item" href="/career">
                                  <span className="menu__item-name">Studies</span>
                                  <span className="menu__item-label">Discover Career</span>
                              </a>
                              <a className="menu__item" href="/project">
                                  <span className="menu__item-name">Projects</span>
                                  <span className="menu__item-label">View all achievements  </span>
                              </a>
                              <a className="menu__item" href="/contact">
                                  <span className="menu__item-name">Contact</span>
                                  <span className="menu__item-label">Contact with me </span>
                              </a>

                          </nav>
                      </section>


                  </nav>
              </div>


          </div>

          </>
  );
}

export default App;

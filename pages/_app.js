import '../styles/globals.css'
import Header from "../components/header/header"
import Footer from "../components/footer/footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function MyApp({ Component, pageProps }) {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Header />
      <Particles
          className="particles"
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#F8B400",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "top",
                enable: true,
                outMode: "out",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.9,
              },
              shape: {
                type: "edge",
              },
              size: {
                random: true,
                value: 3,
              },
            },
            detectRetina: true,
          }}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

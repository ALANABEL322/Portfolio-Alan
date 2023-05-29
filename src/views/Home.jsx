import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import worksMen from "../assets/image-men5-works.jpg";
import worksWoman from "../assets/image-woman-works.jpg";

const Home = () => {
  return (
    <>
      {/* <div className="circulos">
        <svg
          className="circulo circulo1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M46.3,25.3C37.6,41.8,-7.3,36,-21,16.5C-34.8,-2.9,-17.4,-35.8,5.1,-32.9C27.5,-30,55,8.8,46.3,25.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="circulo circulo2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M43,-34.4C57.7,-15.9,72.9,2.1,72.7,21.9C72.4,41.7,56.7,63.4,38.1,68.1C19.5,72.9,-2,60.8,-19.6,49.1C-37.2,37.4,-50.8,26.1,-54,12.3C-57.2,-1.5,-50,-17.8,-39.2,-35.4C-28.5,-53,-14.2,-72,0,-71.9C14.2,-71.9,28.3,-52.9,43,-34.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="circulo circulo3"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M40.8,-45.7C56.7,-35.3,76,-26,79.2,-13.2C82.4,-0.3,69.5,16.2,55.7,24.9C42,33.6,27.4,34.5,12.9,43C-1.6,51.5,-16.1,67.7,-31.1,69.3C-46.2,70.8,-61.8,57.8,-63.1,42.7C-64.3,27.6,-51.2,10.4,-41.8,-1.2C-32.4,-12.9,-26.8,-19.1,-20.5,-31.2C-14.2,-43.3,-7.1,-61.2,2.7,-64.4C12.5,-67.6,24.9,-56.1,40.8,-45.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="circulo circulo4"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M39.4,-47.3C53.8,-34.9,70,-25,72.2,-12.7C74.4,-0.4,62.5,14.4,52.6,29.2C42.7,44,34.7,58.8,21.5,67.1C8.3,75.3,-10.1,76.9,-26.1,71.3C-42.1,65.7,-55.7,52.8,-57.6,38.6C-59.6,24.3,-49.9,8.6,-47.1,-8.5C-44.3,-25.5,-48.3,-44,-41.6,-57.7C-34.9,-71.4,-17.5,-80.4,-2.5,-77.5C12.5,-74.6,25,-59.6,39.4,-47.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div> */}

      <header className="header">
        <h1 className="h1">
          <a
            href="#inicio"
            title="
        Alan Pereyra"
            className="a"
          >
            Alan Pereyra
          </a>
        </h1>
        <nav className="nav">
          <ul className="ul">
            <li className="li">
              <a href="#inicio" title="Inicio" className="a">
                Inicio
              </a>
            </li>
            <li className="li">
              <a href="#works" title="Works" className="a">
                Works
              </a>
            </li>
            <li className="li">
              <a href="#about" title="About" className="a">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="seccion" id="inicio">
          <section className="section info">
            <h2 className="h2">Alan Abel Pereyra</h2>
            <h3 className="h3">FullStack Developer</h3>

            <ul className="ul">
              <li className="li">
                <a href="#" className="a" title="Github">
                  Visitar mi Github
                </a>
              </li>
              <li className="li">
                <a href="#" className="a" title="LinkedIn">
                  Visitar mi LinkedIn
                </a>
              </li>
            </ul>
          </section>
        </div>
        <section className="seccion works" id="works">
          <h2 className="h2">Trabajos</h2>
          <p className="p">
            Aquí te presento mis proyectos cuando fuí estudiante en el Bootcamp
            Soy Henry
          </p>

          <div className="grid">
            <article className="article">
              <a className="a" href="#" title="Trabajos1">
                <figure className="figure">
                  <img
                    src={worksMen}
                    alt="imagen"
                    className="img"
                    loading="lazy"
                  />
                </figure>
                <h4 className="h4">Nombre trabajo</h4>
              </a>
            </article>
            <article className="article">
              <a className="a" href="#" title="Trabajos1">
                <figure className="figure">
                  <img
                    src={worksWoman}
                    alt="imagen"
                    className="img"
                    loading="lazy"
                  />
                </figure>
                <h4 className="h4">Nombre trabajo</h4>
              </a>
            </article>
          </div>
        </section>

        <section className="seccion about" id="about">
          <h2 className="h2">Sobre Mí</h2>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui
            quo perferendis aperiam laborum ratione numquam eos earum saepe
            quasi explicabo aspernatur deserunt corrupti ipsum eaque repellendus
            similique dolores enim.
          </p>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui
            quo perferendis aperiam laborum ratione numquam eos earum saepe
            quasi explicabo aspernatur deserunt corrupti ipsum eaque repellendus
            similique dolores enim.
          </p>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui
            quo perferendis aperiam laborum ratione numquam eos earum saepe
            quasi explicabo aspernatur deserunt corrupti ipsum eaque repellendus
            similique dolores enim.
          </p>

          <ul className="rrss">
            <li className="li">
              <a
                href=""
                className="a"
                title="Nombre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
            <li className="li">
              <a
                href="#"
                className="a"
                title="Nombre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <span className="span"> Hecho con mucho 💕 Alan Pereyra</span>
      </footer>
    </>
  );
};

export default Home;

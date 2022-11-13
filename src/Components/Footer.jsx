import React from "react";
import "./style/style.css"
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className=" text-center text-lg-start footerBackground">
      <div className="container p-4 footerBackground">
        <div className="row footerBackground">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Información</h5>
            <p>
              El trabajo consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje y de cuyo personaje obtendremos una página dedicada con su información. Esta aplicación es responsive y ha sido desarrollada con React, HTML5 y CSS3

            </p>
            <p> La API de Rick and Morty es una API RESTful donde se accederá a datos sobre cientos de personajes, imágenes, ubicaciones y estados</p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 footerBackground">
            <h5 className="text-uppercase">Redes Sociales</h5>

            <p>
              <i className="bi bi-twitter">Twitter:</i> @TheRickAndMortyApp
            </p>
            <p>
              <i className="bi bi-facebook">Facebook:</i> The Rick And Morty App
            </p>
            <p>
              <i className="bi bi-instagram">Instagram:</i> The Rick And Morty App
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-3 footerBackground">
        Trabajo Final CUI 2022 - Camila Bertolani
      </div>

    </footer>
  );
};

export default Footer;

//Code de Andrew
"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import moment from 'moment';

export default function Home() {

  const [events, setEvents] = useState([]) // Variable Dynamic data Events

  const [weather, setWeather] = useState("") // Variable Dynamic data Weather

  /* ATTENTION: Les API de Furality fermerons le 11 Juin 2023 donc nous avons fait un "Capture" du API. */
  useEffect(() => {
    setInterval(async () => {
      const responseWeather = await fetch('/fst/furality-sylva/weather'); // Aller chercher les informations de la route /fst/furality-sylva/weather
      const weatherData = await responseWeather.json(); // Convertir les informations en JSON

      const responseEvents = await fetch('/fst/furality-sylva/events'); // Aller chercher les informations de la route /fst/furality-sylva/events
      const eventsData = await responseEvents.json(); // Convertir les informations en JSON

      setEvents(eventsData) // Mettre les informations dans la variable events
      setWeather(weatherData?.weather) // Mettre les informations dans la variable weather
    }, 2000) // 2000ms = 2 secondes (temps de rafraichissement)
  }, []) // [] = une seule fois au chargement de la page

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <link href="CSS.css" rel="stylesheet" media="screen" />
        <title> Projet de Groupe - API </title>
        {/*Logo*/}
        <div id="logo">
        </div>
        {/*Banner*/}
        <div id="banner">
        </div>
        {/*Contenue*/}
        <div id="centertext">
          <h2>  Welcome! </h2>
          <h4><a href="https://furality.org"> Click here to learn more about Furality Sylva!</a></h4>
          <h2>Weather: <span className='weather'>{weather}</span></h2> {/* Ceci va chercher la variable weather et la faire apparaitre */}
        </div>
        {/*Event Cards - Grid System */}
        <div id="eventcardsgrid">
          {/*Event Cards - With Information*/}
          {events.map((event) => (
            <>{/*Card 1*/}
              <div id="eventcards">
                <img src={event?.imageUrl} alt="Event Image" /> {/* Ceci va chercher l'image de l'événement */}
                <div className="eventcardsdetails">
                  <h3 className="eventcardstitle">{event?.name}</h3> {/* Ceci va chercher le nom de l'événement */}
                  <p className="eventcardsdate">{moment.unix(event?.start).format('MMMM Do YYYY, h:mm a')}</p> {/* Ceci va chercher la date de l'événement et transformer UNIX en format human */}
                </div>
              </div></>
          ))}

        </div>
        {/* Footer */}
        <div id="footer">
          <p>Website created by a Team of Cybersecurity Students - Year of 2023 </p>
        </div>
      </div>

    </>
  )
}

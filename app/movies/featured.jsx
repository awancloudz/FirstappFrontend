'use client'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic";

const Featured = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
       fetch('http://45.93.137.78:4445/api/movies/movie')
       .then((res) => res.json())
       .then((data) => {
          setData(data.movie)
          setLoading(false)
       })
    }, [])

    var textloading;
    if(isLoading){
          textloading = "Now Loading..."
    } 
    else{
          textloading = "";
    }

    return(
        <>
        <div className="col-12" align="center">{textloading}</div>
        {data && data.slice(0, 24).map((item, i) => {
            return (
            <div className="col-xl-2 col-lg-2 col-md-3 col-6" key={i}>
                <div className="gen-carousel-movies-style-2 movie-grid style-2">
                    <div className="gen-movie-contain">
                        <div className="gen-movie-img">
                            <img src={item.posterImg} alt="streamlab-image"/>
                            <div className="gen-movie-add">
                                <ul className="menu bottomRight">
                                    <li className="share top">
                                        <i className="fa fa-share-alt"></i>
                                        <ul className="submenu">
                                            <li><a href="#" className="facebook"><i
                                                        className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#" className="facebook"><i
                                                        className="fab fa-instagram"></i></a>
                                            </li>
                                            <li><a href="#" className="facebook"><i
                                                        className="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="gen-movie-action">
                                <a href="single-movie.html" className="gen-button">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                        <div className="gen-info-contain">
                            <div className="gen-movie-info">
                                <h3><a href="single-movie.html">{item.title}</a></h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                                <ul>
                                    <li><i className="far fa-star"></i> {item.rating}</li>
                                    <li>
                                        <a href="single-movie.html"><span>{item.genres[0].toUpperCase()}</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default dynamic (() => Promise.resolve(Featured), {ssr: false})
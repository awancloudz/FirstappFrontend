'use client'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import Script from 'next/script';

const Indonesia = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
       fetch('http://45.93.137.78:4445/api/movies/1185933')
       .then((res) => res.json())
       .then((data) => {
          setData(data.doodmovies.result.files)
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
        <div className="gen-style-2">
            <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                data-lap_num="4" data-tab_num="4" data-mob_num="4" data-mob_sm="2" data-autoplay="false"
                data-loop="false" data-margin="30">
            {data && data.slice(0, 10).map((item, i) => {
                return (
                <>
                <div className="item" key={i}>
                    <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                        <div className="gen-carousel-movies-style-2 movie-grid style-2">
                            <div className="gen-movie-contain">
                                <div className="gen-movie-img">
                                    <img src={item.single_img} alt="owl-carousel-video-image" style={{"object-fit": "none","object-position": "center","width":312,"height":176}}/>
                                    <div className="gen-movie-add">
                                    <div className="wpulike wpulike-heart">
                                        <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                    </div>
                                    <ul className="menu bottomRight">
                                        <li className="share top">
                                            <i className="fa fa-share-alt"></i>
                                            <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="movie-actions--link_add-to-playlist dropdown">
                                        <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                        <div className="dropdown-menu mCustomScrollbar">
                                            <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                <a className="login-link" href="register.html">Sign in to add this movie
                                                    to a
                                                    playlist.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="gen-movie-action">
                                    <a href="single-movie.html" className="gen-button">
                                        <i className="fa fa-play"></i>
                                    </a>
                                    </div>
                                </div>
                                <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                    <h3><a href="single-movie.html">{item.title}</a>
                                    </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                    <ul>
                                        <li><i className="far fa-star"></i> 5.0</li>
                                        <li>
                                            <a href="action.html"><span>GENRE</span></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Script async src="js/streamlab-core.js" strategy="lazyOnload"/>
                </>
                )
            })}
            </div>
        </div>
        </>
    )
}

export default dynamic (() => Promise.resolve(Indonesia), {ssr: false})
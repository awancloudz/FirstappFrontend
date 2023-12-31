'use client'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import Script from 'next/script';
import Featured from './movies/featured';
import Carousel from './movies/carousel';
import Indonesia from './movies/indonesia';

const Home = () => {
  return(
    <>
    {/* <!-- Owl Carousel --> */}
    <section class="pt-0 pb-0">
        <div class="container-fluid px-0">
            <div class="row no-gutters">
                <div class="col-12">                    
                  <Carousel/>                        
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Featured --> */}
    <section class="gen-section-padding-2">
        <div class="container">
            <div className="row">
              <div class="col-12">
                <h4 class="gen-heading-title">Featured</h4>
              </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12">
                    <div class="row">
                    <Featured/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- New Release --> */}
    <section class="pt-0 gen-section-padding-2">
        <div class="container">
          <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <h4 class="gen-heading-title">Indonesia</h4>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                <div class="gen-movie-action">
                    <div class="gen-btn-container text-right">
                      <a href="tv-shows-pagination.html" class="gen-button gen-button-flat">
                          <span class="text">More Videos</span>
                      </a>
                    </div>
                </div>
              </div>
          </div>
          <div class="row mt-3">
              <div class="col-12">
                <Indonesia/>
              </div>
          </div>
        </div>
    </section>

    {/* <!-- Category #1 --> */}
    <section class="pt-0 gen-section-padding-2">
        <div class="container">
          <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <h4 class="gen-heading-title">Teen</h4>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                <div class="gen-movie-action">
                    <div class="gen-btn-container text-right">
                      <a href="tv-shows-pagination.html" class="gen-button gen-button-flat">
                          <span class="text">More Videos</span>
                      </a>
                    </div>
                </div>
              </div>
          </div>
          <div class="row mt-3">
              <div class="col-12">
                <div class="gen-style-2">
                    <div class="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                      data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                      data-loop="false" data-margin="30">
                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-5.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">The
                                              warrior life</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>2hr 00mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>

                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-6.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">machine
                                              war</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1h 22mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-7.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              horse lady</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 24 mins</li>
                                            <li>
                                              <a href="drama.html"><span>Drama</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-8.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Ship
                                              of full moon</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 35mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-9.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Rebuneka
                                              the doll</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 44 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-4.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">thieve
                                              the bank</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>30min</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-8.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Ship of full moon</a></h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 35mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-11.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              giant ship</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1h 02 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-12.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">common
                                              man’s idea</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 51 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-13.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              jin’s friend</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 42 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>

    {/* <!-- Category #2 --> */}
    <section class="pt-0 gen-section-padding-2">
        <div class="container">
          <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <h4 class="gen-heading-title">Big Tits</h4>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                <div class="gen-movie-action">
                    <div class="gen-btn-container text-right">
                      <a href="tv-shows-pagination.html" class="gen-button gen-button-flat">
                          <span class="text">More Videos</span>
                      </a>
                    </div>
                </div>
              </div>
          </div>
          <div class="row mt-3">
              <div class="col-12">
                <div class="gen-style-2">
                    <div class="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                      data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                      data-loop="false" data-margin="30">
                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-5.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">The
                                              warrior life</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>2hr 00mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>

                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-6.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">machine
                                              war</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1h 22mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-7.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              horse lady</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 24 mins</li>
                                            <li>
                                              <a href="drama.html"><span>Drama</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-8.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Ship
                                              of full moon</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 35mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-9.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Rebuneka
                                              the doll</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 44 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-4.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">thieve
                                              the bank</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>30min</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-8.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Ship of full moon</a></h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 35mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-11.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              giant ship</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1h 02 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-12.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">common
                                              man’s idea</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 51 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-13.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              jin’s friend</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 42 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>

    {/* <!-- Category #3 --> */}
    <section class="pt-0 gen-section-padding-2">
        <div class="container">
          <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <h4 class="gen-heading-title">Milf</h4>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                <div class="gen-movie-action">
                    <div class="gen-btn-container text-right">
                      <a href="tv-shows-pagination.html" class="gen-button gen-button-flat">
                          <span class="text">More Videos</span>
                      </a>
                    </div>
                </div>
              </div>
          </div>
          <div class="row mt-3">
              <div class="col-12">
                <div class="gen-style-2">
                    <div class="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                      data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                      data-loop="false" data-margin="30">
                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-5.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">The
                                              warrior life</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>2hr 00mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>

                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-6.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">machine
                                              war</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1h 22mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-7.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              horse lady</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 24 mins</li>
                                            <li>
                                              <a href="drama.html"><span>Drama</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-8.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Ship
                                              of full moon</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 35mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-9.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Rebuneka
                                              the doll</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 44 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-4.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">thieve
                                              the bank</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>30min</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-8.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">Ship of full moon</a></h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 35mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-11.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              giant ship</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1h 02 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-12.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">common
                                              man’s idea</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 51 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>


                      <div class="item">
                          <div
                            class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                            <div class="gen-carousel-movies-style-2 movie-grid style-2">
                                <div class="gen-movie-contain">
                                  <div class="gen-movie-img">
                                      <img src="images/background/asset-13.jpg" alt="owl-carousel-video-image"/>
                                      <div class="gen-movie-add">
                                        <div class="wpulike wpulike-heart">
                                            <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                  type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                                        </div>
                                        <ul class="menu bottomRight">
                                            <li class="share top">
                                              <i class="fa fa-share-alt"></i>
                                              <ul class="submenu">
                                                  <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                                                  </li>
                                                  <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                                              </ul>
                                            </li>
                                        </ul>
                                        <div class="movie-actions--link_add-to-playlist dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                  class="fa fa-plus"></i></a>
                                            <div class="dropdown-menu mCustomScrollbar">
                                              <div class="mCustomScrollBox">
                                                  <div class="mCSB_container">
                                                    <a class="login-link" href="register.html">Sign in to add this movie
                                                        to a
                                                        playlist.</a>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="gen-movie-action">
                                        <a href="single-movie.html" class="gen-button">
                                            <i class="fa fa-play"></i>
                                        </a>
                                      </div>
                                  </div>
                                  <div class="gen-info-contain">
                                      <div class="gen-movie-info">
                                        <h3><a href="single-movie.html">the
                                              jin’s friend</a>
                                        </h3>
                                      </div>
                                      <div class="gen-movie-meta-holder">
                                        <ul>
                                            <li>1hr 42 mins</li>
                                            <li>
                                              <a href="action.html"><span>Action</span></a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>    
    
    <Script async src="js/script.js" strategy="lazyOnload"/>
    </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
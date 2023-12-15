import Navbar from '@/component/navbar'
import Footer from '@/component/footer'
import Head from 'next/head'
import Script from 'next/script'
import './css/bootstrap.min.css'
import './css/style.css'
import './css/responsive.css'

export const metadata = {
  title: 'LustStream - Free Entertainment For You',
  description: 'LustStream - Free Entertainment For You',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="utf-8"/>
        <meta name="keywords" content="LustStream - Free Entertainment For You" />
        <meta name="description" content="LustStream - Free Entertainment For You" />
        <meta name="author" content="StreamLab" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      </Head>
      <body>
      {/* <!--=========== Loader =============--> 
      <div id="gen-loading">
        <div id="gen-loading-center">
          <img src="images/logo-1.png" alt="loading"/>
        </div>
      </div>*/}
      <Navbar/>
      {children}
      <Footer/>
      {/* <!-- Back-to-Top start --> */}
      <div id="back-to-top">
          <a className="top" id="top" href="#top"> <i className="ion-ios-arrow-up"></i> </a>
      </div>

      <Script async src="js/jquery-3.6.0.min.js"/>
      <Script async src="js/asyncloader.min.js"/>
      <Script async src="js/bootstrap.min.js"/>
      <Script async src="js/owl.carousel.min.js"/>
      <Script async src="js/jquery.waypoints.min.js"/>
      <Script async src="js/jquery.counterup.min.js"/>
      <Script async src="js/popper.min.js"/>
      <Script async src="js/swiper-bundle.min.js"/>
      <Script async src="js/isotope.pkgd.min.js"/>
      <Script async src="js/jquery.magnific-popup.min.js"/>
      <Script async src="js/slick.min.js"/>
      </body>
    </html>
  )
}

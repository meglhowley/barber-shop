import { useRef, useState } from 'react'
import { Application, ProgressCircular } from 'react-rainbow-components'

const Home = () => {
  const titleRef = useRef()
  const topRef = useRef()
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)

  function handleDownClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => setValue1(10), 400)
    setTimeout(() => setValue1(20), 450)
    setTimeout(() => setValue1(30), 500)
    setTimeout(() => setValue1(40), 550)
    setTimeout(() => setValue1(50), 600)
    setTimeout(() => setValue1(60), 650)
    setTimeout(() => setValue1(70), 700)
    setTimeout(() => setValue1(80), 750)
    setTimeout(() => setValue1(90), 800)
    setTimeout(() => setValue1(98), 850)

    setTimeout(() => setValue2(10), 700)
    setTimeout(() => setValue2(20), 750)
    setTimeout(() => setValue2(30), 800)
    setTimeout(() => setValue2(40), 850)
    setTimeout(() => setValue2(50), 900)
    setTimeout(() => setValue2(60), 950)
    setTimeout(() => setValue2(70), 1000)
    setTimeout(() => setValue2(80), 1050)
    setTimeout(() => setValue2(90), 1100)
    setTimeout(() => setValue2(95), 1150)

    setTimeout(() => setValue3(10), 1000)
    setTimeout(() => setValue3(20), 1050)
    setTimeout(() => setValue3(30), 1100)
    setTimeout(() => setValue3(40), 1150)
    setTimeout(() => setValue3(50), 1200)
    setTimeout(() => setValue3(60), 1250)
    setTimeout(() => setValue3(70), 1300)
    setTimeout(() => setValue3(80), 1350)
    setTimeout(() => setValue3(90), 1400)
    setTimeout(() => setValue3(100), 1450)
  }

  const handleUpClick = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const theme1 = {
    rainbow: {
      palette: {
        brand: '#5c56b6'
      }
    }
  }

  const theme2 = {
    rainbow: {
      palette: {
        brand: '#FC0'
      }
    }
  }

  const theme3 = {
    rainbow: {
      palette: {
        brand: '#1DE9B6'
      }
    }
  }

  return (
    <body ref={topRef}>
      <div className="home-wrapper">
        <div className="top-section">
          <div className="title">You want to look good.</div>
          <div onClick={handleDownClick} className="double-arrow-div">
            <img
              className="double-arrow-img"
              src="https://i.imgur.com/t5OAMoG.png"
            ></img>
          </div>
        </div>
        <div ref={titleRef} className="bottom-section">
          <div className="progress-container">
            <Application className="application" theme={theme1}>
              <div>
                <ProgressCircular
                  variant="brand"
                  className="circular"
                  value={value1}
                />
                <h1 className="circular1">
                  OF CLIENTS ARE REPEAT
                  <br /> CUSTOMERS
                </h1>
              </div>
            </Application>
            <Application theme={theme2}>
              <div>
                <ProgressCircular className="circular" value={value2} />
                <h1 className="circular2">
                  SAY THEY WOULD RECOMMEND
                  <br /> US TO A FRIEND
                </h1>
              </div>
            </Application>
            <Application theme={theme3}>
              <div>
                <ProgressCircular className="circular" value={value3} />
                <h1 className="circular3">
                  OF CUSTOMERS LOOK 🔥
                  <br />
                  WALKING OUT
                </h1>
              </div>
            </Application>
          </div>
          <div className="testimonials">
            <div className="home-review">
              <i>
                "Thanks to barber booking buddy I was able to sign up for an
                appointment at the barbershop near me easily and quickly, and
                the reviews section can provide a lot of insight into selecting
                the right professional for the right service"
                <br />
                -Jake P.
              </i>
            </div>
            <div className="home-review">
              Best barbershop ever! The barbers are very professional and their
              website is a joy to use. I will be going here for life! <br />
              -Emily W.
            </div>
            <div className="home-review">
              I felt so fresh walking out! I am going to tell everyone I know to
              only book through BBB. I highly recommend Dom, he had made
              laughing the entire time. Will be going back very soon.
              <br />
              -Megan H.
            </div>
            <footer onClick={handleUpClick} className="back-to-top">
              BACK TO TOP
            </footer>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Home

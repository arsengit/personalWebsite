import * as React from 'react';
import MiddleSection from "./MiddleSection";
import Particles from 'react-particles-js';

function Home(props)
{
  let [dark, setDark] = React.useState(true);
  React.useEffect(() =>
  {
    window.addEventListener("change", onChange);
    return () =>
    {
      window.removeEventListener("change", onChange);
    }
  }, [])

  function onChange()
  {
    if (document.body.classList.contains('dark'))
    {
      setDark(true)
    }
    else
    {
      setDark(false)
    }
  }
  let params = {
    "particles": {
      "number": {
        "value": 50
      },
      "size": {
        "value": 3
      },
      "color": {
        "value": `${dark ? "#fff" : "#000"}`
      },
      "line_linked": {
        "color": `${dark ? "#fff" : "#000"}`
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    }
  }
  return (
    <div className="h-screen">
      <div className="absolute h-full w-full">
        <Particles
          params={{
            ...params
          } as any}
          className="h-full" />
      </div>
      <MiddleSection />
    </div>
  )
}

export default Home;
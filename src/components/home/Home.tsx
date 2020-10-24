import * as React from 'react';
import MiddleSection from "./MiddleSection";
import Particles from 'react-particles-js';
import useTheme from "../lib/useTheme/useTheme";

function Home(props)
{

  let isDark = useTheme();
  let params = {
    "particles": {
      "number": {
        "value": 50
      },
      "size": {
        "value": 3
      },
      "color": {
        "value": `${isDark ? "#fff" : "#000"}`
      },
      "line_linked": {
        "color": `${isDark ? "#fff" : "#000"}`
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": false,
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
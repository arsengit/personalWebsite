import * as React from 'react';
import MiddleSection from "./MiddleSection";
import Particles from 'react-particles-js';
import useTheme from "../IsDark";

function Home(props)
{
  // let [dark, setDark] = React.useState(false);
  let isDark = useTheme();

  // React.useEffect(() =>
  // {
  //   if (document.body.classList.contains("dark"))
  //   {
  //     setDark(true)
  //   }
  //   window.addEventListener("change", onChange);
  //   return () =>
  //   {
  //     window.removeEventListener("change", onChange);
  //   }
  // }, [])

  // function onChange()
  // {
  //   if (document.body.classList.contains('dark'))
  //   {
  //     setDark(true)
  //   }
  //   else
  //   {
  //     setDark(false)
  //   }
  // }
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
          "enable": true,
          "mode": "repulse"
        }
      }
    }
  }
  console.log(params, isDark)
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
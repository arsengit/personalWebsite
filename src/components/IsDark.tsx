import * as React from 'react';

function useTheme()
{
    let [dark, setDark] = React.useState(false);


    React.useEffect(() =>
    {
        if (document.body.classList.contains("dark"))
        {
            setDark(true)
        }
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
    return dark ? true : false;
};
export default useTheme;
import * as React from 'react';
import Image from "../image";

function MiddleSection()
{
    let timeoutId;

    React.useEffect(() =>
    {
        let text1 = "Hi, I'm Arsen Alkamyan";
        typeWriter(text1, "split-text1", true);
        return () =>
        {
            clearTimeout(timeoutId);
        };
    }, [])

    function typeWriter(text: string, id: string, first?: boolean)
    {
        for (let i = 0; i < text.length; i++)
        {
            timeoutId = setTimeout(() =>
            {
                if (document.getElementById(id))
                {
                    document.getElementById(id).textContent += text.charAt(i);
                }
                if (i === text.length - 1 && first)
                {
                    typeWriter("Sowtware Engineer", "split-text2")
                }
            }, 80 * i);

        }

    }

    return (
        <>
            <div className="h-full flex justify-center items-center flex-col">
                <div className="h-full absolute bg-gray-900 w-full opacity-25" />
                <div className="w-40 rounded-full border-2 border-gray-100">
                    <Image className="rounded-full" image="myImg" />
                </div>
                <div className="h-20 flex justify-center flex-col z-50">
                    <h1 id="split-text1" className="text-gray-200 text-4xl" />
                    <span id="split-text2" className="text-gray-400 text-2xl text-center" />
                </div>
            </div>
        </>
    )
}

export default MiddleSection
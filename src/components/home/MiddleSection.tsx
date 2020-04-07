import * as React from 'react';
import Image from "../image";

function MiddleSection()
{
    let ref1 = React.useRef<any>();
    let ref2 = React.useRef<any>();
    let timeoutId;

    React.useEffect(() =>
    {
        let text1 = "Hi, I'm Arsen Alkamyan";
        typeWriter(text1, ref1, true);
        return () =>
        {
            clearTimeout(timeoutId);
        };
    }, [])

    function typeWriter(text: string, ref: any, first?: boolean)
    {
        for (let i = 0; i < text.length; i++)
        {
            timeoutId = setTimeout(() =>
            {
                if (ref.current)
                {
                    ref.current.textContent += text.charAt(i);
                }
                if (i === text.length - 1 && first)
                {
                    typeWriter("I'm Software Engineer.", ref2)
                }
            }, 80 * i);

        }

    }

    return (
        <>
            <div className="h-full flex justify-center items-center flex-col">
                <div className="w-40 rounded-50 border-2 border-gray-100">
                    <Image className="rounded-50" image="myImg" />
                </div>
                <div className="h-20 flex justify-center flex-col">
                    <h2 ref={ref1} id="split-text1" className="h1" />
                    <span ref={ref2} id="split-text2" className="text-gray-900 text-2xl text-center" />
                </div>
            </div>
        </>
    )
}

export default MiddleSection
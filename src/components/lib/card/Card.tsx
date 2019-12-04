import * as React from 'react';
import Image from "../../image";

interface ICardProps
{
    image: string;
    href: string;
    title: string;
    details: string;
}

function Card(props: ICardProps)
{
    const { image, href, title, details } = props;
    return (
        <a href={href} className="w-1/4 block group shadow-button rounded relative overflow-hidden" target="_blank">
            <div className="bg-transparent group-hover:bg-card-layer transition-all transition-linear transition-300 absolute h-full w-full top-0 bottom-0 left-0 right-0 z-50" />
            <div className="rounded-5 overflow-hidden">
                <div>
                    <Image image={image} />
                </div>
                <div className="p-2 absolute bg-gray z-50 bottom-0 h-12 w-full flex justify-center flex-col border-t border-solid border-gray-300">
                    <h3 className="text-mode transition-colors">{title}</h3>
                    <h3 className="text-mode">{details}</h3>
                </div>
            </div>
        </a>
    )
}

export default Card;
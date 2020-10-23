import * as React from 'react';
import Card from "../lib/card/Card";
import portfolioData from "./portfolioData"

function PortfolioContainer()
{
    return (
        <div className="section container">
            <h1 className="h1-bold">Portfolio</h1>
            <div className="flex pb-4 mt-20 sm:justify-between flex-wrap sm:flex-row items-center flex-col justify-center p-4">
              {
                portfolioData?.map((card) =>
                <Card image={card.image} title={card.title} href={card.href} details={card.details}/>
                )
              }
            </div>
        </div>
    )
}
export default PortfolioContainer;
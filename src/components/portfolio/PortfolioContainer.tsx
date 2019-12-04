import * as React from 'react';
import Card from "../lib/card/Card";


function PortfolioContainer()
{
    return (
        <div className="section container">
            <h1 className="h1-bold">Portfolio</h1>
            <div className="flex pb-4 mt-20">
                <Card image="placeholderImage" title="Gatsby" href="https://www.gatsbyjs.org/showcase/" details="showcase page" />
            </div>
        </div>
    )
}
export default PortfolioContainer;
import React from 'react'

export default function Tile({tile, index, toggleTile}) {
    return( 
        <div 
            className={"tile " + (tile.open ? 'open' : '')}
            key={index}
            onClick={() => toggleTile(index)}
        
        >
            <div className="tileCompany">
                {tile.company}
            </div>
            <div className="tileTitle">
                {tile.title}
            </div>
            <div className="tileTimeline">
                {tile.timeline}
            </div>
            <div className="tileDescription">
                {tile.description}
            </div>
        </div>
    )
}
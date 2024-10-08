import React from 'react'
import { tools } from '../data/tools'
import { IconTools } from '../icons/icons'
import './css/Tools.css'

const Tools = () => {
    
    return (
        <div className='Tools'>
            <h1 className='title'>Skills <IconTools /> </h1>
            <div className="gallery">
                {tools.map(tool => (
                    <div className="card" key={tool.title}>
                        {/* <img src={tool.thumbnail} alt={tool.title} /> */}

                        <tool.thumbnail style={{ height: 200,  width:300}} />
                        <h3>{tool.title}</h3>
                        {/* <p>{`${new Date().getFullYear() - tool.years}`} {new Date().getFullYear() - tool.years > 1? 'Years' : 'Year'}</p> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tools

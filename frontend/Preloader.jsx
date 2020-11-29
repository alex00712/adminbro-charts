import React from 'react'

export const Preloader = () => {
    return (
        <div style = {{margin: 'auto auto'}}>
            <svg 
            version="1.0" width="64px" height="64px" viewBox="0 0 128 128" >
                <g>
                    <linearGradient id="linear-gradient">
                        <stop offset="0%" stop-color="#ffffff" fill-opacity="1"/>
                        <stop offset="100%" stop-color="blue" fill-opacity="0.56"/>
                    </linearGradient>
                    <path 
                    d="M64 .98A63.02 63.02 0 1 1 .98 64 63.02 63.02 0 0 1 64 .98zm0 15.76A47.26 47.26 0 1 1 16.74 64 47.26 47.26 0 0 1 64 16.74z" 
                    fill-rule="evenodd" fill="url(#linear-gradient)"/>
                    <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1800ms" repeatCount="indefinite"></animateTransform>
                </g>
            </svg>
        </div>
    )
}
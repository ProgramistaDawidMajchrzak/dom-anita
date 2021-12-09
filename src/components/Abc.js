import React, { useEffect } from 'react';
import loadingGif from '../images/loading.gif';


export default function Abc() {
    useEffect(() => {
        window.location.replace('https://panelmieszkanca.pl')
    }, [])
    return (
        <div className="new-site-loading">
            <img src={loadingGif} alt="img" />
        </div>
    )
}

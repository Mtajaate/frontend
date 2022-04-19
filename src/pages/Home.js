import React from "react";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
        <h1>AudioLabs</h1>
            <section>
                <p>Hier kan je de beste Demos luisteren!</p>
            </section>
            <section>
                <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
                <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen
                    account hebt.</p>
            </section>
        </>

    );
}

export default Home;


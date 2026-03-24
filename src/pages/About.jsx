import ProfileImage from '../assets/images/Olivier.jpg';

export default function About() {
    return (
        <>
            <div className="about-page container mt-4 pb-4">
                <div className="content-header">
                    <h2>About</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 about-content">
                        <p className="heading-primary">This website was created by me: Olivier. A student Software Developer from the Netherlands.
                        The website is a non functioning webshop for mechanical keyboard parts all code for this website is open source and can be viewed on my github profile. </p>
                        <p>The origin for making this website stems from a study project which i combined with my passion for custom mechanical keyboards. My own personal keyboard is a</p>
                        <ul>
                            <li>Neo 65</li>
                            <li>Switches: WS black lights</li>
                            <li>Keycaps: MW Fuyu</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src={ProfileImage} alt="Mechanical Keyboard" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </>
    )
}
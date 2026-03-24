function Footer() {
    return (
        <footer className="text-center">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-md-4 mb-2 mb-md-0">
                        <p className="mb-0 footer-text">© 2026 Olivier. MIT License.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="social">
                            <a href="https://www.linkedin.com/in/olivier-van-zijl-562067291/" target="_blank" rel="noreferrer" className="me-3 text-decoration-none" aria-label="LinkedIn"><i className="bi bi-linkedin"/></a>
                            <a href="https://github.com/OlivierVZ" target="_blank" rel="noreferrer" className="me-3 text-decoration-none text-secondary" aria-label="GitHub"><i className="bi bi-github"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
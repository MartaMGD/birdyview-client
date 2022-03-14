export default function Footer() {
    return (
        <>
            <div className="footerStyle">
                <div className="copyright">
                    <h4>Marta González Duque ® </h4>
                </div>

                <div className="separator">
                    |
                </div>

                <div className="socialMedia">
                    <div className="footerGithub">
                        <a className="footerLink"
                            href="https://github.com/martamgd">
                            <i className="fa-brands fa-github"></i> Github
                        </a>
                    </div>

                    <div className="footerLinkedIn">
                        <a className="footerLink"
                            href="https://es.linkedin.com/in/martagd96">
                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

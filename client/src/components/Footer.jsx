import { profileData } from '../data/content';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                {/* Contact Links */}
                <div className="footer-links">
                    <a
                        href={profileData.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={profileData.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        GitHub
                    </a>
                    <a
                        href={profileData.links.skillBoost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Google Cloud Skills
                    </a>
                    <a
                        href={`mailto:pratikshetti@outlook.com`}
                        className="footer-link"
                    >
                        Email
                    </a>
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    © {new Date().getFullYear()} Pratik Shetti. Cloud Security Engineer.
                </div>
            </div>
        </footer>
    );
}

export default Footer;

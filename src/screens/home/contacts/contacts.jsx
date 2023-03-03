import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faSkype, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import Reveal from 'components/reveal';
import Color from 'components/colors';

import './contacts.sass';

function Contacts() {
    return (
        <section id="contacts" className="contacts">
            <div className="container">
                <h2 className="contacts__title" data-title="Contacts">
                    Contacts
                </h2>

                <div className="contacts__row">
                    <h4 className="contacts__subtitle">
                        <Reveal color={Color.c1}>Find me on:</Reveal>
                    </h4>

                    <ul className="contacts__list">
                        <li className="contacts__item">
                            <a href="skype:hattam.soyunow?chat" className="contacts__link" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faSkype} />
                            </a>
                        </li>
                        <li className="contacts__item">
                            <a href="tg://resolve?domain=hatamsoyunov" className="contacts__link" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTelegramPlane} />
                            </a>
                        </li>
                        <li className="contacts__item">
                            <a
                                href="https://www.instagram.com/hatamsoyunov/"
                                className="contacts__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li className="contacts__item">
                            <a
                                href="https://www.youtube.com/@hatamsoyunov"
                                className="contacts__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                        <li className="contacts__item">
                            <a href="https://github.com/hatamsoyunov/" className="contacts__link" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contacts;

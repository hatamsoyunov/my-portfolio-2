import React, { useEffect, useState } from 'react';
import SkillsService from 'services/skills-service';

import './skills.sass';

import Skill from './skill';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

const skillsService = new SkillsService();

function SkillsList({ skills }) {
    const mainSkills = [];
    const additionalSkills = [];

    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];

        if (skill.isAdditional) {
            additionalSkills.push(skill);
        } else {
            mainSkills.push(skill);
        }
    }

    return (
        <>
            {mainSkills.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}

            <div className="skills__divider"></div>

            {additionalSkills.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}
        </>
    );
}

function Skills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        skillsService
            .getSkills()
            .then(body => {
                setSkills(body);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [setSkills, setLoading, setError]);

    return (
        <section id="skills" className="skills">
            <div className="container skills__container">
                <h2 className="skills__title wow" data-title="Skills">
                    Skills
                </h2>
                <div className="skills__row">
                    {loading && <Spinner />}
                    {!loading && error ? <ErrorIndicator error={error} /> : null}
                    {!loading && !error ? <SkillsList skills={skills} /> : null}
                </div>
            </div>
        </section>
    );
}

export default Skills;

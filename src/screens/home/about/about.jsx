import React from 'react';
import yearCalc from '../../../utils/yearCalc';

import './about.sass';

function About(props) {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title" data-title="About me">
          About me
        </h2>

        <div className="about__content">
          <p>
            I've been in IT for over <strong> {yearCalc(2015)} years</strong>, in frontend development with commercial
            projects for over <strong> {yearCalc(2017)} years</strong> years. I've been actively developing mobile apps
            (React Native) for the last <strong> {yearCalc(2021)} years</strong>. During all this time I managed to work
            independently as a freelancer and worked for several small and large companies. I have a lot of experience
            in working with clients, introduce the project from start to finish, a lot of experience in teamwork and
            managing a team of developers.
          </p>
          <p>
            In 2019 I graduated from the university with a degree in marketing. Also, completed additional courses in
            Internet marketing, marketing in web design and UI/UX design. Knowledge of UI/UX, in conjunction with
            marketing, helped me develop selling websites and help in recent years to add/suggest UI/UX improvements to
            projects in which I participate.
          </p>
          <p>
            In mid-2019, I became familiar with reactive JavaScript frameworks (Meteor.js + React.js). Since then then I
            started practicing and developing reactive web applications in React.js.
          </p>
          <p>
            In mid-2020 I completed a course on React Native and started practicing. For the last{' '}
            <strong> {yearCalc(2020)} years</strong> I've been actively developing mobile apps.
          </p>

          <h4>
            <span role="img" aria-label="">
              💪
            </span>{' '}
            My Skills:
          </h4>
          <ul>
            <li>
              The ability to search for the right information. Search mostly in English, know where to look depending on
              the question/problem;
            </li>
            <li>Good technical English;</li>
            <li>
              Extensive experience with BEM system (naming and file structure), helps with naming components, methods
              and variables;
            </li>
            <li>
              Extensive experience in developing complex and adaptive websites/web applications. Developing web
              applications on React.js (+ Hooks, Axios, MobX, Redux);
            </li>
            <li>Good experience in developing web applications on Next.js;</li>
            <li>Good experience in mobile development with React Native (+ Mobx);</li>
            <li>
              Advanced HTML (HTML5 API, good understanding of semantic tags), CSS (flexbox, grid, advanced css
              animations), JavaScript (JQ, ES6);
            </li>
            <li>
              Excellent knowledge of JavaScript and TypeScript. Almost all web and mobile applications in TypeScript;{' '}
            </li>
            <li>Modular development system. Experience in mvc and mvvm;</li>
            <li>Experience with task managers: Jira (+Confluence) and Trello;</li>

            <h4>+ Additional</h4>
            <li>
              JS animation, GSAP 2-3.x (Timeline, ScrambleTextPlugin, ScrollToPlugin, SplitText). MagicScroll with GSAP;
            </li>
            <li>
              Little experience with Meteor.js + React.js + storybook + MongoDB - New York real estate rental site;
            </li>
            <li>
              A lot of experience with Photoshop/Figma/Adobe XD graphic editors. As well as, Zeplin for easy layout;
            </li>
            <li>
              Good knowledge in vector graphics, SVG, SVG sprites with "use", working confidently in Adobe Illustrator;
            </li>
            <li>Extensive experience using HTML (PUG) and CSS preprocessors (SASS, SASS);</li>
            <li>
              If necessary I build standard websites using my starting template on Gulp -{' '}
              <a href="https://github.com/hatamsoyunov/start_dev" target="_blank" rel="noopener noreferrer">
                start_dev
              </a>
              .
            </li>
          </ul>

          <h4>
            Why should you work with me? <br /> I guarantee:{' '}
            <span role="img" aria-label="">
              😎
            </span>
          </h4>
          <ul>
            <li>fast and professional work;</li>
            <li>timely implementation of my tasks;</li>
            <li>do not go beyond the time frame of the task;</li>
            <li>
              perfectionism within reason (I do not try to achieve perfection, I will go too far if the project/client
              requires it);
            </li>
            <li>
              clean code, with comments in the right place - I myself wrote a code style for a company and required in
              the code review. It is important that the code{' '}
            </li>
            <li>
              my principle is "Quality always comes first", if the project manager doesn't think so, it will be hard for
              us to work together.
            </li>
            <li>I am ambitious and like new challenges and challanges :)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

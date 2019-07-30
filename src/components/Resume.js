import React from "react";
import styled from "styled-components";

// import "../styles/Resume.css";

//styles from goodle documents
const ResumeStyle = styled.section`
  ol {
    margin: 0;
    padding: 0;
  }
  table td,
  table th {
    padding: 0;
  }
  .c16 {
    border-right-style: solid;
    padding: 7.2pt 7.2pt 7.2pt 7.2pt;
    border-bottom-color: #ffffff;
    border-top-width: 0pt;
    border-right-width: 0pt;
    border-left-color: #ffffff;
    vertical-align: top;
    border-right-color: #ffffff;
    border-left-width: 0pt;
    border-top-style: solid;
    border-left-style: solid;
    border-bottom-width: 0pt;
    width: 358.5pt;
    border-top-color: #ffffff;
    border-bottom-style: solid;
  }
  .c25 {
    border-right-style: solid;
    padding: 7.2pt 7.2pt 7.2pt 7.2pt;
    border-bottom-color: #ffffff;
    border-top-width: 0pt;
    border-right-width: 0pt;
    border-left-color: #ffffff;
    vertical-align: top;
    border-right-color: #ffffff;
    border-left-width: 0pt;
    border-top-style: solid;
    border-left-style: solid;
    border-bottom-width: 0pt;
    width: 165pt;
    border-top-color: #ffffff;
    border-bottom-style: solid;
  }
  .c32 {
    border-right-style: solid;
    border-bottom-color: #ffffff;
    border-top-width: 0pt;
    border-right-width: 0pt;
    border-left-color: #ffffff;
    vertical-align: top;
    border-right-color: #ffffff;
    border-left-width: 0pt;
    border-top-style: solid;
    border-left-style: solid;
    border-bottom-width: 0pt;
    width: 358.5pt;
    border-top-color: #ffffff;
    border-bottom-style: solid;
  }
  .c12 {
    margin-left: 0pt;
    padding-top: 6pt;
    list-style-position: inside;
    text-indent: 45pt;
    padding-bottom: 0pt;
    line-height: 1.3;
    text-align: left;
    margin-right: 15pt;
  }
  .c22 {
    margin-left: 0pt;
    padding-top: 16pt;
    list-style-position: inside;
    text-indent: 45pt;
    padding-bottom: 0pt;
    line-height: 1.3;
    text-align: left;
    margin-right: 15pt;
  }
  .c11 {
    color: black;
    font-weight: 700;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 10pt;
    font-family: "Merriweather";
    font-style: normal;
  }
  .c10 {
    color: #000000;
    font-weight: 700;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 9pt;
    font-family: "Open Sans";
    font-style: normal;
  }
  .c1 {
    color: #2079c7;
    font-weight: 700;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 9pt;
    font-family: "Open Sans";
    font-style: normal;
  }
  .c4 {
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 12pt;
    font-family: "Merriweather";
    font-style: italic;
  }
  .c0 {
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 9pt;
    font-family: "Open Sans";
    font-style: normal;
  }
  .c8 {
    color: black;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 8pt;
    font-family: "Open Sans";
    font-style: normal;
  }
  .c13 {
    padding-top: 16pt;
    padding-bottom: 0pt;
    line-height: 1;
    page-break-after: avoid;
    text-align: left;
    margin-right: 15pt;
  }
  .c31 {
    color: black;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 10pt;
    font-family: "Merriweather";
    font-style: normal;
  }
  .c26 {
    color: #000000;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 32pt;
    font-family: "Merriweather";
    font-style: normal;
  }
  .c28 {
    padding-top: 5pt;
    padding-bottom: 5pt;
    line-height: 1;
    page-break-after: avoid;
    text-align: left;
    margin-right: 15pt;
  }
  .c37 {
    color: #b7b7b7;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 9pt;
    font-family: "Open Sans";
    font-style: normal;
  }
  .c9 {
    color: black;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 9pt;
    font-family: "Merriweather";
    font-style: normal;
  }
  .c15 {
    color: black;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 6pt;
    font-family: "Merriweather";
    font-style: normal;
  }
  .c27 {
    -webkit-text-decoration-skip: none;
    color: #1155cc;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    font-size: 10pt;
  }
  .c3 {
    padding-top: 30pt;
    padding-bottom: 0pt;
    line-height: 1;
    text-align: left;
    margin-right: 15pt;
  }
  .c7 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    line-height: 1.15;
    text-align: left;
    margin-right: 15pt;
  }
  .c24 {
    padding-top: 6pt;
    padding-bottom: 0pt;
    line-height: 1.3;
    text-align: left;
    margin-right: 15pt;
  }
  .c21 {
    padding-top: 0pt;
    padding-bottom: 6pt;
    line-height: 1;
    text-align: left;
    margin-right: 15pt;
  }
  .c30 {
    color: #000000;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 11pt;
    font-family: "Merriweather";
  }
  .c35 {
    padding-top: 6pt;
    padding-bottom: 0pt;
    line-height: 1;
    text-align: left;
    margin-right: 15pt;
  }
  .c36 {
    padding-top: 16pt;
    padding-bottom: 0pt;
    line-height: 1.3;
    text-align: left;
    margin-right: 15pt;
  }
  .c38 {
    text-decoration-skip-ink: none;
    -webkit-text-decoration-skip: none;
    color: #1155cc;
    text-decoration: underline;
  }
  .c14 {
    border-spacing: 0;
    border-collapse: collapse;
    margin-right: auto;
  }
  .c18 {
    background-color: #fff;

    padding: 8% 20%;
  }
  .c5 {
    background-color: #eeeeee;
    font-family: "Roboto";
    font-weight: 400;
  }
  .c17 {
    padding: 0;
    margin: 0;
  }
  .c33 {
    color: inherit;
    text-decoration: inherit;
  }
  .c19 {
    background-color: #ffffff;
  }
  .c20 {
    height: 9pt;
  }
  .c6 {
    font-weight: 400;
  }
  .c29 {
    font-style: italic;
  }
  .c34 {
    height: 588pt;
  }
  .c2 {
    height: 7pt;
  }
  .c23 {
    font-weight: 700;
  }
  .title {
    padding-top: 0pt;
    color: #000000;
    font-weight: 700;
    font-size: 36pt;
    padding-bottom: 6pt;
    font-family: "Merriweather";
    line-height: 1;
    text-align: left;
  }
  .subtitle {
    padding-top: 0pt;
    color: #000000;
    font-size: 9pt;
    padding-bottom: 0pt;
    font-family: "Open Sans";
    line-height: 1.15;
    text-align: left;
  }
  li {
    color: black;
    font-size: 9pt;
    font-family: "Merriweather";
  }
  p {
    margin: 0;
    color: black;
    font-size: 9pt;
    font-family: "Merriweather";
  }
  h1 {
    padding-top: 30pt;
    color: #2079c7;
    font-weight: 700;
    font-size: 9pt;
    padding-bottom: 0pt;
    font-family: "Open Sans";
    line-height: 1;
    text-align: left;
  }
  h2 {
    padding-top: 16pt;
    color: #000000;
    font-weight: 700;
    font-size: 11pt;
    padding-bottom: 0pt;
    font-family: "Merriweather";
    line-height: 1;
    page-break-after: avoid;
    text-align: left;
  }
  h3 {
    padding-top: 5pt;
    color: black;
    font-size: 8pt;
    padding-bottom: 5pt;
    font-family: "Open Sans";
    line-height: 1;
    page-break-after: avoid;
    text-align: left;
  }
  h4 {
    padding-top: 8pt;
    -webkit-text-decoration-skip: none;
    color: black;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    font-size: 11pt;
    padding-bottom: 0pt;
    font-family: "Trebuchet MS";
    line-height: 1.3;
    page-break-after: avoid;
    text-align: left;
  }
  h5 {
    padding-top: 8pt;
    color: black;
    font-size: 11pt;
    padding-bottom: 0pt;
    font-family: "Trebuchet MS";
    line-height: 1.3;
    page-break-after: avoid;
    text-align: left;
  }
  h6 {
    padding-top: 8pt;
    color: black;
    font-size: 11pt;
    padding-bottom: 0pt;
    font-family: "Trebuchet MS";
    line-height: 1.3;
    page-break-after: avoid;
    font-style: italic;
    text-align: left;
  }
`;

const Resume = props => {
  return (
    <ResumeStyle className="c18">
      <p className="c20 c35">
        <span className="c6 c15" />
      </p>
      {/* <a id="t.ddec28991ffe67f8715c0a95b900c3a83ba9b538" />
      <a id="t.0" /> */}
      <table className="c14">
        <tbody>
          <tr className="c2">
            <td className="c16" colspan="1" rowspan="1">
              <p className="c21 title" id="h.x8fm1uorkbaw">
                <span className="c23 c26">Piotr Adamowicz</span>
              </p>
              <p className="c7 subtitle" id="h.ymi089liagec">
                <span className="c0">Junior Front-End Developer</span>
              </p>
            </td>
            <td className="c25" colspan="1" rowspan="1">
              <p className="c7">
                <span className="c0">Zag&oacute;rna 33/20</span>
              </p>
              <p className="c7">
                <span className="c0">15-820 Bia&#322;ystok</span>
              </p>
              <p className="c7">
                <span className="c10">(+48) 506 586 928</span>
              </p>
              <p className="c7">
                <span className="c10">piotr.adamowicz2@gmail.com</span>
              </p>
              <p className="c7 c20">
                <span className="c10" />
              </p>
            </td>
          </tr>
          <tr className="c34">
            <td className="c32" colspan="1" rowspan="1">
              <h1 className="c3" id="h.y7d3xdxnr44m">
                <span className="c1">EXPERIENCE</span>
              </h1>
              <h2 className="c13" id="h.rfgvkg2ifhfd">
                <span>SP MSWIA, </span>
                <span className="c6">Bia&#322;ystok &ndash;</span>
                <span className="c6 c29">&nbsp;paramedic</span>
              </h2>
              <h3 className="c28" id="h.n64fgzu3lwuy">
                <span className="c8 c6">02.2019 &ndash; PRESENT</span>
              </h3>
              <p className="c24">
                <span className="c5">
                  My main line of work is: transport of patients, medical
                  samples, lab results and supplies. I work at Geriatrics ward.
                </span>
              </p>
              <h2 className="c13" id="h.98knc1qub5xz">
                <span>MEDASSIST SP Z O O, </span>
                <span className="c6">Bia&#322;ystok &ndash; </span>
                <span className="c6 c29">paramedic</span>
              </h2>
              <h3 className="c28" id="h.kuha3qjnwsv4">
                <span className="c8 c6">04.2016 &ndash; 01.2019</span>
              </h3>
              <p className="c24">
                <span className="c5">
                  My main line of work was: transport of patients, medical
                  samples, lab results and supplies. I&rsquo;ve worked at
                  Children&#39;s Hospital Emergency ward.
                </span>
              </p>
              <h1 className="c3" id="h.yk8luflkpwij">
                <span>EDUCATION</span>
              </h1>
              <h2 className="c13" id="h.6wymnhinx9q5">
                <span>VII &nbsp;high school, </span>
                <span className="c6">Bia&#322;ystok</span>
                <span className="c6 c29 c30">&nbsp;</span>
              </h2>
              <h3 className="c28" id="h.esmli83vx05r">
                <span className="c8 c6">2006 - 2009</span>
              </h3>
              <p className="c24">
                <span className="c9 c6">
                  I&rsquo;ve graduated in 2009 from mathematics and Informatics
                  profile.
                </span>
              </p>
              <h2 className="c13" id="h.mc160zjmms5f">
                <span>
                  Information Technology at Department of Faculty of Computer
                  Science,{" "}
                </span>
                <span className="c6">Bia&#322;ystok</span>
                <span className="c30 c6 c29">&nbsp;</span>
              </h2>
              <h3 className="c28" id="h.et271sasb0rn">
                <span className="c8 c6">2009</span>
              </h3>
              <p className="c24">
                <span className="c9 c6">
                  Basic knowledge of computer technologies. Curriculum included
                  basics of C/C++ programing language, basics of binary numbers
                  and higher mathematics. Unfinished first semester.
                </span>
              </p>
              <h2 className="c13" id="h.p5rlpn1h7jz">
                <span>
                  Management at Department of Management and Marketing,{" "}
                </span>
                <span className="c6">Bia&#322;ystok</span>
                <span className="c30 c6 c29">&nbsp;</span>
              </h2>
              <h3 className="c28" id="h.1kxr6m60fs7v">
                <span className="c8 c6">2010 - 2013</span>
              </h3>
              <p className="c24">
                <span className="c9 c6">
                  Curriculum included basics of &nbsp;Economy, Management,
                  Marketing . Unfinished first degree.
                </span>
              </p>
              <h2 className="c13" id="h.4i80qpeu1anf">
                <span>
                  &ldquo;Od podstaw do pierwszej pracy jako Front-End
                  Developer&rdquo;,{" "}
                </span>
                <span className="c6">Bart&#322;omiej Borowczyk</span>
              </h2>
              <h3 className="c28" id="h.5sq5nvhik20g">
                <span className="c6 c8">07.2018 - PRESENT</span>
              </h3>
              <p className="c24">
                <span className="c9 c6">
                  Series of courses on Udemy platform at the moment covered
                  basics of: HTML5, CSS3, JavaScript, React js, Node.js(during).
                </span>
              </p>
              <p className="c24 c20">
                <span className="c6 c31" />
              </p>
            </td>
            <td className="c25" colspan="1" rowspan="1">
              <h1 className="c3" id="h.ca0awj8022e2">
                <span className="c1">SKILLS</span>
              </h1>
              <ul className="c17 lst-kix_d52h1clnbs3c-0 start">
                <li className="c22">
                  <span className="c19">
                    Basic knowledge of:
                    <br />- Cascading Style Sheets,
                  </span>
                </li>
                <li className="c12">
                  <span className="c9 c6">
                    - Hypertext Markup &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;Language,
                  </span>
                </li>
              </ul>
              <ul className="c17 lst-kix_3expns8knkd9-0 start">
                <li className="c12">
                  <span className="c9 c6">- JavaScript,</span>
                </li>
              </ul>
              <ul className="c17 lst-kix_d52h1clnbs3c-0">
                <li className="c12">
                  <span className="c9 c6">- React library,</span>
                </li>
                <li className="c12">
                  <span className="c9 c6">- Git and GitHub,</span>
                </li>
                <li className="c12">
                  <span className="c9 c6">- Responsive Web Design,</span>
                </li>
                <li className="c12">
                  <span className="c9 c6">- jQuery library syntax,</span>
                </li>
                <li className="c12">
                  <span className="c6 c9">
                    - Bootstrap 4 library functionality,
                  </span>
                </li>
                <li className="c12">
                  <span className="c9 c6">- Soft skills(I have some).</span>
                </li>
              </ul>
              <h1 className="c3" id="h.cxxkes25b26">
                <span className="c1">LANGUAGES</span>
              </h1>
              <p className="c36">
                <span className="c9 c6">
                  Communicative english in speech and writing, level &nbsp;B2.{" "}
                </span>
              </p>
              <h1 className="c3" id="h.ivsd2n9f9mqb">
                <span className="c1">LINKS</span>
              </h1>
              <p className="c36">
                <span className="c23 c27">
                  <a
                    className="c33"
                    href="https://www.google.com/url?q=https://github.com/PiotrAdamowicz&amp;sa=D&amp;ust=1563901300289000"
                  >
                    github.com/PiotrAdamowicz
                  </a>
                </span>
              </p>
              <p className="c36">
                <span className="c23">
                  <br />
                </span>
                <span className="c23 c38">
                  <a
                    className="c33"
                    href="https://www.google.com/url?q=https://www.facebook.com/piotr.adamowicz.927&amp;sa=D&amp;ust=1563901300289000"
                  >
                    facebook.com/piotr.adamowicz.927
                  </a>
                </span>
              </p>
              <h1 className="c3" id="h.jhv78pp9wtzd">
                <span className="c1">INTERESTS</span>
              </h1>
              <p className="c24">
                <span className="c9 c6">
                  In-line skating, music, reading (s-f urban fantasy), origami,
                  one-pot cooking .
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="c24 c20">
        <span className="c15 c6" />
      </p>
    </ResumeStyle>
  );
};

export default Resume;

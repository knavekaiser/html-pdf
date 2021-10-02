import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Img from "next/image";
import Head from "next/head";
import s from "styles/Cv.module.scss";

const CV = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });
  return (
    <div className={s.container}>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
        />
      </Head>
      <div className={s.cv} ref={componentRef}>
        <div className={s.page}>
          <div className={s.profile}>
            <h1 className={s.name} contentEditable={true}>
              SUMMAIYA AKTER UMEY
            </h1>
            <div className={s.img}>
              <Img src="/umey_passport.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={s.contact}>
              <h3 className={s.label}>Contact</h3>
              <div contentEditable={true}>
                <p>1/A, Block B, Bashundhora R/A, Dhaka</p>
                <p>01515222119</p>
                <p>summaiya.umey@northsouth.edu</p>
              </div>
            </div>
            <div className={s.skills}>
              <h3 className={s.label}>Skills & Abilities</h3>
              <ul contentEditable={true}>
                <li>
                  Adequate knowledge on MS Word. MS PowerPoint and MS Excel
                </li>
                <li>
                  Demonstrated experience in leadership through active role in
                  University clubs and PSWAB
                </li>
                <li>
                  Proficient in written and conversational English and Bangla
                </li>
                <li>
                  Quick learning ability allowing to work under pressure and
                  against deadlines
                </li>
                <li>Well organized and coordinating proficiency</li>
                <li>
                  Team working skills through experience on many academic
                  projects, presentations and also athletic teams.
                </li>
                <li>
                  Active listening skills to follow instructions precisely
                </li>
              </ul>
            </div>
          </div>
          <div className={s.detail}>
            <div className={s.objective} contentEditable={true}>
              <h3 className={s.label}>Objective</h3>
              <p>
                Looking to obtain an internship position in a fast paced
                environment to utilize exceptional multitasking skill in
                efficiently running various activity of the company and
                acquiring field experience on the long-run.
              </p>
            </div>
            <div className={s.experience} contentEditable={true}>
              <h3 className={s.label}>Experience</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      Internship in bangladesh medical
                      <br /> college (1 month)
                    </td>
                    <td>2020</td>
                  </tr>
                  <tr>
                    <td>
                      Internship at Tamanna Pharmacy
                      <br /> (1 month)
                    </td>
                    <td>2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={s.education} contentEditable={true}>
              <h3 className={s.label}>Education</h3>
              <table>
                <thead>
                  <tr>
                    <th>Degree</th>
                    <th>Institution</th>
                    <th>Result</th>
                    <th>Passing Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BPharm Professional</td>
                    <td>North South University</td>
                    <td>CGPA: 2.63</td>
                    <td>Since 2017 till Present</td>
                  </tr>
                  <tr>
                    <td>HSC</td>
                    <td>
                      Bangladesh mohila samity girls high school and college.
                      chittagong
                    </td>
                    <td>GPA: 4.58</td>
                    <td>2015</td>
                  </tr>
                  <tr>
                    <td>SSC</td>
                    <td>
                      Bangladesh mohila samity girls high school and college.
                      chittagong
                    </td>
                    <td>GPA: 5.00</td>
                    <td>2013</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={s.experience} contentEditable={true}>
              <h3 className={s.label}>Achievement</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      Participated in Stall Exhibitions in Pharma Fest-2019
                      organized by North South University Pharmaceutical Club
                      (Champion)
                    </td>
                    <td>April 2019</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={s.page}>
          <div className={s.profile}>
            <div className={s.language} contentEditable={true}>
              <h3 className={s.label}>Language</h3>
              <div>
                <p>
                  English<span>•</span>
                  <span className={s.flag}>fluent</span>
                </p>
                <p>
                  Bengali<span>•</span>
                  <span className={s.flag}>native</span>
                </p>
              </div>
            </div>
          </div>
          <div className={s.detail}>
            <div className={s.experience}>
              <h3 className={s.label}>Extracurricular Activities</h3>
              <table contentEditable={true}>
                <tbody>
                  <tr>
                    <td>
                      Organized world health day in north south university
                      public and sciences club
                    </td>
                    <td>April 2019</td>
                  </tr>
                  <tr>
                    <td>
                      Worked as Sub executive in decoration and logistics in
                      North South public health and sciences club.
                    </td>
                    <td>Year 2019-till now</td>
                  </tr>
                  <tr>
                    <td>
                      Worked as senior member in 1 North South public health and
                      Sciences club And 2.North south university pharmaceutical
                      club 3. North south university ethics and diversity club
                    </td>
                    <td>2018-2019</td>
                  </tr>
                  <tr>
                    <td>
                      Organized and actively participated in World diabetes day
                      2019 organized by North South University Public health and
                      sciences Club and quantum foundation
                    </td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>
                      Organized world breast cancer day seminar with Apollo
                      hospital
                    </td>
                    <td>2019</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={s.ref} contentEditable={true}>
              <h3 className={s.label}>Reference</h3>
              <div>
                <p className={s.name}>
                  Dr. G. M. Sayedur Rahman
                  <span>Associate Professor & Chair</span>
                </p>
                <p>Ph.D., University of Houston College of Pharmacy, USA</p>
                <p>
                  <span>Phone:</span> +880-2-55668200
                </p>
                <p>
                  <span>Email:</span> sayedur.rahman@northsouth.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={s.printBtn} onClick={handlePrint}>
        Print this out!
      </button>
    </div>
  );
};

export default CV;

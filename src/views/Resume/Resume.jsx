// foundation
import React from 'react';

// components
import Header from '../Header';
import Divider from '../Divider';
import Skills from '../Skills';
import Section from '../Section';
import Honors from '../Honors';
import Edu from '../Edu';

// bootstrap
import Container from 'react-bootstrap/Container';

// styles
import styles from '../../index.scss';

// data
import { skillsData } from '../../data/skills.js';
import { data } from '../../data/expData.js';
import { honorData } from '../../data/honors.js';
import { eduData } from '../../data/edu.js';

class Resume extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: data,
      skills: skillsData,
      honorData: honorData,
      eduData: eduData
    }
  }

  // isEnglish = false;

  render(){
    return(
      <Container fluid className={styles.container}>
        <Header />
        <Divider title="Skills" />
        { this.state.skills.map(
            (item, idx) => {
              return(
                <Skills 
                  key={idx}
                  descript={item.descript}
                  frontEnd={item.frontEnd}
                  backEnd={item.backEnd}
                />
              )
            }
          )
        }
        <Divider title="Experience" />
        { this.state.data.map(
            (item, idx) => {
              return(
                <Section
                  key={idx}
                  jobExpTitle={item.jobExpTitle}
                  time={item.time}
                  companyTitle={item.companyTitle}
                  projects={item.projects} />
              )
            }
          )
        }
        <Divider title="Honors" />
        { this.state.honorData.map(
            (item, idx) => {
              return(
                <Honors
                  key={idx}
                  honorTitle={item.honorTitle}
                  time={item.time}
                  honorDescript={item.honorDescript}
                  roles={item.roles}
                  sampleImages={item.sampleImages} />
              )
            }
          )
        }
        <Divider title="Education" />
        { this.state.eduData.map(
            (item, idx) => {
              return(
                <Edu
                key={idx}
                major={item.major}
                school={item.school}
                time={item.time} />
              )
            }
          )
        }
      </Container>
    )
  }
}

export default Resume;

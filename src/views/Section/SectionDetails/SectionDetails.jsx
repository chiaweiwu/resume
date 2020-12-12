// foundation
import React from 'react';

// components
import ProjectDetails from '../ProjectDetails';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styles
import styles from './index.scss';

const SectionDetails = (props) => (
  <div>
  { props.projects &&

    props.projects.map(item => {
      return(
        <div key={item.projectTitle} style={{marginBottom: '1.25rem'}}>
          <Row>
            <Col xs={12}>
              <a className={styles.project_title} href={item.projectLink} target="_blank">
                {item.projectTitle}
              </a>
              <span style={{fontSize: '12pt', marginLeft: '.25rem'}}>
                {item.project_descript}
              </span>
            </Col>
          </Row>
          <ProjectDetails 
            projDescript={item.descript}
            techUsed={item.techUsed}
            sampleImages={item.sampleImages} />
        </div>
      )
    }
    )
  }
  </div>
);

export default SectionDetails;
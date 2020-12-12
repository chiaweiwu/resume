// foundation
import React from 'react';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// component
import SectionDetails from './SectionDetails';

// styles
import '../../index.scss';
import styles from './index.scss';

const Section = (props) => (
  <div className={styles.exp_section}>
    <Row>
      <Col xs={12} md={9}>
        <h5 className={styles.companyTitle}>{props.companyTitle}</h5>
      </Col>
      <Col className={styles.time} xs={12} md={3}>
        <span>{props.time}</span>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <span>{props.jobExpTitle}</span>
      </Col>
    </Row>
    { props.projects &&
      <SectionDetails 
        projects={props.projects}
      />
    }
  </div>
);

export default Section;
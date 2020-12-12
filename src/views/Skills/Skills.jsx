// foundation
import React from 'react';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../../index.scss';


const Skills = (props) => (
  <Row>
    <Col xs={12} sm={4} md={6}>
      <p style={{marginTop: '1rem'}}>{props.descript}</p>
    </Col>
    <Col xs={12} sm={4} md={3}>
      <span className={styles.mini_title}>Front End</span>
      <p className={styles.mini_skills}>
        {props.frontEnd}
      </p>
    </Col>
    <Col xs={12} sm={4} md={3}>
      <span className={styles.mini_title}>Back End</span>
      <p className={styles.mini_skills}>
        {props.backEnd}
      </p>
    </Col>
  </Row>
);

export default Skills;
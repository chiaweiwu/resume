// foundation
import React from 'react';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styles
import '../../index.scss';
import styles from './index.scss';

const Edu = (props) => (
  <div className={styles.exp_section}>
    <Row>
      <Col xs={12} md={9}>
        <h5 className={styles.school}>{props.school}</h5>
      </Col>
      <Col className={styles.time} xs={12} md={3}>
        <span>{props.time}</span>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <span>{props.major}</span>
      </Col>
    </Row>
  </div>
);

export default Edu;
// foundation
import React from 'react';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styles
import styles from '../../index.scss';

const Divider = (props) => (
  <Row>
    <Col>
      <h6 className={styles.title}>{ props.title }</h6>
    </Col>
  </Row>
);

export default Divider;
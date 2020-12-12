// foundation
import React from 'react';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styles
import styles from './index.scss';

const Header = () => (
    <Row>
      <Col className={styles.info} xs={12} md={8}>
        <h1>Chia-Wei Wu</h1>
        <span>Front-end Engineer</span>
      </Col>
      <Col className={styles.contact} xs={12} md={4}>
        <a href="https://github.com/chiaweiwu" target="_blank">https://github.com/chiaweiwu</a> <br/>
        <a href="mailto:im.cwwu@gmail.com">im.cwwu@gmail.com</a><br/>
        Taipei, Taiwan<br/>
      </Col>
    </Row>
)

export default Header
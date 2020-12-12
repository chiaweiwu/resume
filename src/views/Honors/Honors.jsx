// foundation
import React from 'react';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styles
import styles from './index.scss';

import sampImg from '../../assets/kore/0.jpg';
import sampImg1 from '../../assets/kore/1.jpg';
import sampImg2 from '../../assets/kore/2.jpg';

const Honors = (props) => (
  <div className={styles.exp_section}>
    <Row>
      <Col xs={12} md={9}>
        <h5 className={styles.honor_title}>{props.honorTitle}</h5>
      </Col>
      <Col className={styles.time} xs={12} md={3}>
        <span>{props.time}</span>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        {props.honorDescript.map(
          (item, idx) => {
            return(
              <div key={idx}>
                <span className={styles.highlight}>{item.short}</span>
                <ul>
                    {item.list.map((item, idx) => {
                      return(
                    <li key={idx}>{item}</li>
                      )
                    })}
                </ul>
              </div>
            )
          }
          )}
        <span></span>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <span className={styles.roles}>Roles</span>
        <ul className={styles.roles_list}>
          {props.roles &&
            props.roles.map((item, idx) => {
              return (
                <li className={styles.roles_item} key={idx}>
                  {item}
                </li>
              )
            }
            )
          }
        </ul>
      </Col>
    </Row>
    { props.sampleImages &&
      <Row>
        <Col xs={12}>
          <ul className={styles.sample_images_list}>
            <li className={styles.sample_images_item} key="0">
              <img src={sampImg} />
            </li>
            <li className={styles.sample_images_item} key="1">
              <img src={sampImg1} />
            </li>
            <li className={styles.sample_images_item} key="2">
              <img src={sampImg2} />
            </li>
          </ul>
        </Col>
      </Row>
    }
  </div>
);

export default Honors;
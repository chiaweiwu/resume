// foundation
import React from 'react';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components
import Highlighter from "react-highlight-words";

// styles
import styles from './index.scss';

import sampImg from '../../../assets/cbw/0.jpg';
import sampImg1 from '../../../assets/cbw/1.jpg';
import sampImg2 from '../../../assets/cbw/2.jpg';

const ProjectDetails = (props) => (
  <div>
    <Row>
      <Col xs={12}>
        <ul>
          {props.projDescript &&
            props.projDescript.map((item, idx) => {
                if(item.includes('NativeScript')){
                  return (
                   <li className={styles.project_bullet} key={idx}>
                     <Highlighter
                        highlightClassName={styles.project_bullet_highlight}
                        searchWords={["NativeScript"]}
                        autoEscape={true}
                        textToHighlight={item}
                      />
                    </li>
                  )
                } else {
                  return(
                    <li className={styles.project_bullet} key={idx}>
                      {item}
                    </li>
                  )
                }
            }
            )
          }
        </ul>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <span className={styles.tech_used}>Tech Used</span>
        <ul className={styles.tech_used_list}>
          {props.techUsed &&
            props.techUsed.map((item, idx) => {
              return (
                <li className={styles.tech_used_item} key={idx}>
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
            {/* {props.sampleImages &&
              props.sampleImages.map((item ,idx) => {
                return (
                  // <li className={styles.sample_images} key={idx}>
                  //   <img src={item} />
                  // </li>
                )
              }
              )
            } */}

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

export default ProjectDetails;
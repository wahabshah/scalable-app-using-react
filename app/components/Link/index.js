/**
*
* Link
*
*/

import React, { PropTypes } from 'react';


import styles from './styles.css';

function Link({ link }) {
  // const x =  {link.voteCount}-- {link.url} -- {link.description};
  return (
    <div className={styles.link}>
      <div className={styles.votingContainer}>
        <div className={styles.votingCount}>
         {link.voteCount}
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div>
          <a className={styles.linkAnchor} href={link.url}>{link.url}</a>
        </div>
        <div className={styles.description}>
          {link.description}
        </div>
      </div>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    topicName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired,
  }),
};
export default Link;

/**
*
* LinkList
*
*/

import React, { PropTypes } from 'react';


import styles from './styles.css';
import Link from '../Link';

function LinkList({ links, topicName }) {
  const LinkNodes = links.map(link => <Link key={link.id} link={link} />);
  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      <ul>
   {LinkNodes}
      </ul>
    </div>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      topicName: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      voteCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  topicName: PropTypes.string.isRequired,
};
export default LinkList;

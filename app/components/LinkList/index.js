/**
*
* LinkList
*
*/

import React,{PropTypes} from 'react';


import styles from './styles.css';

function LinkList({links}) {
   const LinkNodes = links.map(link=>{
    return <li key={link.id}>{link.url} -- {link.description}</li>
   })
  return (
    <div className={styles.linkList}>
  <ul>
   {LinkNodes}
  </ul>
    </div>
  );
}

LinkList.propTypes= {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description:PropTypes.string.isRequired,
      url:PropTypes.string.isRequired,
      topicName: PropTypes.string.isRequired,
      id:PropTypes.string.isRequired,
    })
  ).isRequired
}
export default LinkList;

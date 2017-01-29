/**
*
* Navigation
*
*/

import React from 'react';


import styles from './styles.css';

function Navigation({topics,selectTopic}) {
  const TopicNodes = topics.map(topic=>{
    return <li key={topic.name}><a onClick={()=>{selectTopic(topic)}}>{topic.name}</a></li>
  })
  return (
    <div className={styles.navigation}>
    <ul>
    {TopicNodes}
    </ul>
    </div>
  );
}

Navigation.propTypes={
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
         name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired
}
export default Navigation;

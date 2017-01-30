/*
 *
 * LinkListContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';
import { requestLinks } from './actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    topicName: PropTypes.string.isRequired,
    requestLinks: PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.requestLinks(this.props.topicName);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.topicName !== this.props.topicName) {
      this.props.requestLinks(newProps.topicName);
    }
  }
  render() {
    return (
      <div>
        <LinkList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import TimeAgo from 'javascript-time-ago';
import localeEN from 'javascript-time-ago/locale/en';

// Setup english
TimeAgo.locale(localeEN);

/**
 * Fuzzy Date Component
 */
export default class Ago extends React.Component {

  constructor(props) {
    super(props);
    this.convertTime = new TimeAgo(props.locale);
  }

  componentDidMount() {
    if (moment(this.props.date).isSame(moment(), 'day')) {
      this.intervalId = setInterval(() => {
        this.forceUpdate();
      }, this.props.timeout);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const time = moment(this.props.date).add(this.props.offset, 'ms');
    if (!time.isValid()) {
      return null;
    }

    // since Twitter style TimeAgo does not show 'just now'
    // when adding a comment, doining the calculations below
    // to find out if a comment was just posted. in that case
    // removing the Twitter style
    var fuzzy = null;
    let timeDiff = moment().diff(time.toDate(), 'minutes');
    if (timeDiff < 1) {
      fuzzy = 'Just now';
    } else if (this.props.twitter) {
      fuzzy = this.convertTime.format(time.toDate(), 'twitter');
    } else {
      fuzzy = this.convertTime.format(time.toDate());
    }

    return (
      <this.props.tag
        className={classNames('moment-ago', this.props.className)}
        title={time.format('dddd, MMMM Do YYYY, h:mm:ss a Z')}
      >
        {fuzzy}
      </this.props.tag>
    );
  }
}

/**
 * Defaults
 * @type    {Object}
 */
Ago.defaultProps = {
  className: '',
  date: new Date(),
  tag: 'span',
  timeout: 10000,
  offset: 0,
  twitter: false,
  locale: 'en'
};

/**
 * Props
 * @type    {Object}
 */
Ago.propTypes = {
  className: PropTypes.string,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  tag: PropTypes.string,
  timeout: PropTypes.number,
  offset: PropTypes.number,
  twitter: PropTypes.bool,
  locale: PropTypes.string
};

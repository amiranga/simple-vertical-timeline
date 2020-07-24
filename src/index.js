import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class TimelineComponent extends React.Component {
  constructor(props) {
    super(props);
    this._drawTimeLineEnrty = this._drawTimeLineEnrty.bind(this);
    this.state = {};
  }
  _drawTimeLineEnrty(entry, i) {
    return (
      <li key={i} className={styles.event}>
        <div className={styles.eventinfo}>
          {entry.image &&
            <div className={styles.eventimage}>
              <img src={entry.image} />
            </div>
          }
          <p className={styles.eventtitle}>{entry.title}</p>
          <p className={styles.eventdescription}>{entry.description}</p>
          <div className={styles.date}>{entry.from} to {entry.to}</div>
        </div>
      </li>
    );
  }
  render() {
    return (
      <div className={styles.timeline}>
        <ul className={styles.events}>
          {this.props.values.map((element, i) => this._drawTimeLineEnrty(element, i))}
        </ul>
      </div>
    );
  }
}

TimelineComponent.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired,
  sort: PropTypes.oneOf(['ASC', 'DSC']),
};

export default TimelineComponent;
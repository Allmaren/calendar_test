import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
  FaLanguage,
} from 'react-icons/fa';
import { formatEventStart } from '../utiles/formatEventStart';
import { formatEventDuration } from '../utiles/formatEventDuration';
import css from './Event.module.css';

export const Event = ({
  name,
  location,
  speaker,
  type,
  start,
  end,
  language,
}) => {
  const formattedStart = formatEventStart(start);
  const duration1 = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} />
        Location: {location}
      </p>
      <p className={css.info}>
        <FaLanguage className={css.icon} />
        Language: {language}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} />
        Speaker: {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />
        {formattedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />
        {duration1}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

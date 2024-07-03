import css from "./EventsBoard.module.css";
import { Event } from "../Event/Event";

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(
        ({ name, location, language, speaker, time, duration, type }) => (
          <Event
            key={name}
            name={name}
            location={location}
            language={language}
            speaker={speaker}
            start={time.start}
            end={time.end}
            duration={duration}
            type={type}
          />
        )
      )}
    </div>
  );
};

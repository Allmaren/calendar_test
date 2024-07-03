import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventsBoard/EventBoard';
import upcomingEvents from './data/data';

export const App = () => {
  return (
    <div>
      <PageTitle text="Calendar" />
      <EventBoard events={upcomingEvents} />
    </div>
  );
};

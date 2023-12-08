import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  },
    []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '5em' }}>
        <List animated>
          {activities
            .sort((a, b) => a.date > b.date ? 1 : -1)
            .map((activity) => (
              <List.Item key={activity.id}>{activity.date}: {activity.title}</List.Item>
            ))}
        </List>
      </Container>
    </Fragment>
  )
}

export default App

import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <List animated>
                    {activities
                        .sort((a, b) => a.date > b.date ? 1 : -1)
                        .map((activity) => (
                            <List.Item key={activity.id}>{activity.date}: {activity.title}</List.Item>
                        ))}
                </List>
            </Grid.Column>
        </Grid>
    );
}
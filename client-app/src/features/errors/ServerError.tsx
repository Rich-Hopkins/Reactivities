import { Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ServerError() {
  const { commonStore } = useStore();

  return (
    <Segment>
      <Header as='h1' content='Server Error' />
      <Header as='h5' color='red' content={commonStore.error?.message} />
      {commonStore.error?.details && (
        <Segment>
          <Header sub as='h4' color='teal' content='Stack trace' />
          <code >{commonStore.error?.details}</code>
        </Segment>
      )}
    </Segment>
  )
});
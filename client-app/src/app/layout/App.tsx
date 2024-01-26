import { Fragment, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useStore } from "../stores/store";
import LoadingComponent from "./loadingComponent";
import HomePage from "../../features/home/HomePage";
import NavBar from "./NavBar";
import ModalContainer from "../common/modals/modalContainer";

function App() {
  const location = useLocation();
  const { userStore, commonStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) return (<LoadingComponent content='Loading app...'></LoadingComponent>)

  return (
    <Fragment>
      <ModalContainer />
      <ToastContainer position="bottom-right" theme="colored" />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container style={{ marginTop: "5em" }}>
            <Outlet />
          </Container>
        </>
      )}
    </Fragment>
  );
}

export default observer(App);

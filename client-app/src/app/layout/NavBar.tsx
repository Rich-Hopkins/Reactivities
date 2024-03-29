import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {
  const { userStore } = useStore();

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item as={NavLink} to="/errors" name="Test Errors" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Image
            src={userStore.user?.image || "/assets/user.png"}
            avatar
            spaced="right"
          />
          {userStore.isLoggedIn?(
          <Dropdown pointing="top left" text={userStore.user?.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`/profiles/${userStore.user?.username}`}
                text="My Profile"
                icon="user"
              />
              <Dropdown.Item onClick={userStore.logout} text="Logout" icon="power" />
            </Dropdown.Menu>
          </Dropdown>) : (<></>)}
        </Menu.Item>
      </Container>
    </Menu>
  );
});

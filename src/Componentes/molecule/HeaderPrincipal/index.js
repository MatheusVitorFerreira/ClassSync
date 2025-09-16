import LinkButton from "../../layout/linkButton";
import { 
  TopBarWrapper, 
  TopBar, 
  TopBarTitle, 
  UserArea
} from "./styles";

function HeaderPrincipal({ title }) {
  return (
    <TopBarWrapper>
      <TopBar>
        <TopBarTitle>{title}</TopBarTitle>
        <UserArea>
          <label>
            Olá, <strong>Admin</strong>
          </label>
            <LinkButton to="/logout" text="Sair" />
        </UserArea>
      </TopBar>
    </TopBarWrapper>
  );
}

export default HeaderPrincipal;

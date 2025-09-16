import HeaderPrincipal from "../../molecule/HeaderPrincipal";
import { ContainerSection, ContainerWrapper } from "../container/styles";

import SideBar from "../sideBar";

function MainLayout({ children, title, user }) {
  return (
    <ContainerWrapper>
      <SideBar />
      <ContainerSection>
        <HeaderPrincipal title={title} user={user} />
        {children}
      </ContainerSection>
    </ContainerWrapper>
  );
}

export default MainLayout;

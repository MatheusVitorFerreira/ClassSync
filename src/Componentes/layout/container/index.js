import { ContainerWrapper } from './styles'

function Container({ children, className }) {
  return (
    <ContainerWrapper className={className}>
      {children}
    </ContainerWrapper>
  );
}

export default Container;

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onToggleModal: () => void;
}

export function Header({ onToggleModal }: HeaderProps) {
  return (
    <Container>
      <Content className="container-width">
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onToggleModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

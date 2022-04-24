import { Container } from './styles';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function Checkbox({ checked, label, onChange }: CheckboxProps) {
  return (
    <Container>
      <input
        className="styled-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        readOnly
      />
      <label onClick={onChange}>{label}</label>
    </Container>
  );
}

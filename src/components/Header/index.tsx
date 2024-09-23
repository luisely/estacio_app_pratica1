import { Text } from "../Text";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Text opacity={0.7}>Bem-vindo(a) ao </Text>
      <Text size={24} weight="700">SUPPLIERS<Text size={24}>APP</Text></Text>
    </Container>
  )
}

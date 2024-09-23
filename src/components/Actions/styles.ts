import { Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const FilterContainer = styled.View`
  flex: 1
`
export const Filter = styled.View`
  flex: 1
  align-items: center;
  justify-content: center;
  width: 130px;
`

export const Action = styled.TouchableOpacity`
  margin-left: 24px;
  align-items: center;
`

export const Icon = styled.View`
  background: #fff;
  width: 44px;
  height: 44px;
  border-radius: 22px
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.2});
  elevation: 2; 
`
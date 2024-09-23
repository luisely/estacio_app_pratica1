import styled from "styled-components/native";

export const Header = styled.ImageBackground`
  height: 200px;
  align-items: flex-end;
`

export const CloseButton = styled.TouchableOpacity`
  border-radius: 16px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  margin: 24px
`

export const ModalBody = styled.View`
  background: #fafafa;
  flex: 1
  padding: 32px 24px 0;
`

export const SupplierName = styled.View`
`

export const DetailsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`

export const Field = styled.View`
  flex-direction: row;
  border: 1px solid rgba(204, 204, 204, 0.3)
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 8px;
`


export const Footer = styled.View`  
  min-height: 110px
  background: #FAfaFA;
  padding: 16px 24px;
`

export const FooterContainer = styled.SafeAreaView`
  justify-content: space-between;
  flex-direction: row;
`
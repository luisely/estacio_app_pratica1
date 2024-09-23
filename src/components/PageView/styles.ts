import styled from "styled-components/native"

export const SupplierView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 70px;
`

export const Image = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 10px;
  
`

export const SupplierDetails = styled.View`
  margin-left: 16px;
  flex: 1
`


export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204, 204, 204, 0.3)
  margin: 4px 0;
`

export const Footer = styled.View`
  min-height: 110px
  background: #FAFAFA;
  padding: 16px 24px;
`

export const FooterContainer = styled.SafeAreaView``
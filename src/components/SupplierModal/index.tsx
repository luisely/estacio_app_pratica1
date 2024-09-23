import { Alert, Modal } from "react-native";
import { Text } from "../Text";

import { Header, CloseButton, ModalBody, SupplierName, DetailsContainer, Field, Footer, FooterContainer} from "./styles";
import { Button } from "../Button";
import { EditSupplierModal } from "../EditSupplierModal";
import { useState } from "react";
import { Supplier } from "../../types";
import { useStore } from "../../hooks/useStore";
import { StatusBar } from "expo-status-bar";

interface SupplierModalProps {
  visible: boolean;
  onClose: () => void;
  supplier: Supplier | undefined;
}

export function SupplierModal({ visible, onClose, supplier }: SupplierModalProps) {
  const [isEditSupplierModalVisible, setIsEditSupplierModalVisible] = useState(false)

  const { deleteSupplier } = useStore()

  async function handleCloseModal() {
    setIsEditSupplierModalVisible(false)
    onClose()
  }

  async function handleDeleteSupplier() {
    await deleteSupplier(supplier?.id!)
    onClose()
  }

  function handleDelete(){
    Alert.alert('Confirma?', 'Deseja realmente deletar?',[
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sim, Deletar!',
        onPress:() => handleDeleteSupplier(),
        style: 'default',
      },
    ])
  }

  return (
    <Modal
      animationType="slide"
      visible={visible}
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Header
        source={{
          uri: supplier?.logoUrl
        }}
      >
        <CloseButton onPress={onClose}>
          <Text color="#fff">X</Text>
        </CloseButton>
      </Header>

      <ModalBody>
        {supplier ? (
          <>
          <SupplierName>
            <Text weight="600" size={24}>{supplier.nome }</Text>
            <Text color="#666" style={{marginTop: 8}}>{supplier.categoria_produto}</Text>
          </SupplierName>
    
          <DetailsContainer>
              <Text size={20} weight="600" color="#666">
                Detalhes
              </Text>
              <Field style={{marginTop: 16}}>
                <Text style={{marginLeft: 6}}>{supplier.cidade}</Text>
              </Field>
              <Field>
                <Text style={{marginLeft: 6}}>{supplier.endereco}</Text>
              </Field>
          </DetailsContainer>
         </>
         ) : <Text weight="600" size={20} color="#666">Atualizando...</Text>}
       
      </ModalBody>

      <Footer>
        <FooterContainer>
          <Button onPress={() => setIsEditSupplierModalVisible(true)}>Editar</Button>
          <Button onPress={() => handleDelete()}>Deletar</Button>
        </FooterContainer>
      </Footer>

      <EditSupplierModal 
        visible={isEditSupplierModalVisible} 
        onClose={handleCloseModal}
        supplier={supplier}
      />
      <StatusBar style='light' animated />
    </Modal>
  )
}
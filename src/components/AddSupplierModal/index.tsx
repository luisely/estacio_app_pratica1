import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, Modal, Platform, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";
import { Button } from "../Button";
import { Text } from "../Text";
import { Form, Header, ModalBody, Overlay, TextInput } from "./styles";
import { useStore } from "../../hooks/useStore";

interface SupplierModalProps {
  visible: boolean;
  onClose: () => void;
}

export function AddSupplierModal({ visible, onClose }: SupplierModalProps) {
  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [endereco, setEndereco] = useState('')
  const [categoria, setCategoria] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const { addSupplier } = useStore()

  async function handleOnSave(){
    if(isFormValid) {
      try {
        const id = String(uuid.v4());
  
        const newData = {
          id,
          nome,
          cidade,
          endereco,
          categoria_produto: categoria,
          logoUrl
        }
  
        await addSupplier(newData)
        cleanFields()
        alert('Cadastro Realizado com sucesso!')
      } catch(error){
        console.log(error)
        alert('Erro ao cadastrar!')
      }
    } else {
      Alert.alert('Atenção!', 'Todos os campos devem ser preenchidos!')
    }
  }

  type ListErros = {
    nome: string
    cidade: string
    endereco: string
    categoria: string
    logoUrl: string
  }

  function cleanFields() {
    setNome('')
    setCidade('')
    setEndereco('')
    setCategoria('')
    setLogoUrl('')
  }

  function validateForm() {
    let errors = {} as ListErros;

    if(!nome) {
      errors.nome = 'Nome é requerido'
    }

    if(!cidade) {
      errors.cidade = 'Cidade é requerido'
    }

    if(!endereco) {
      errors.endereco = 'Endereço é requerido'
    }

    if(!categoria) {
      errors.categoria = 'Categoria é requerido'
    }

    if(!logoUrl) {
      errors.logoUrl = 'Logo Imagem é requerido'
    }

    setErrors(errors)
    setIsFormValid(Object.keys(errors).length === 0)
  }

  useEffect(() => {
    validateForm();
  }, [nome, cidade, endereco, categoria, logoUrl]);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="700">Cadastro Fornecedor</Text>
            <TouchableOpacity onPress={onClose}>
              <Text weight="700" color="#d30000">fechar</Text>
            </TouchableOpacity>
          </Header>

          <Form>
            <TextInput
              placeholder="Nome"
              placeholderTextColor="#666"
              onChangeText={setNome}
              value={nome}
            >
            </TextInput>

            <TextInput
              placeholder="Cidade"
              placeholderTextColor="#666"
              onChangeText={setCidade}
              value={cidade}
              >
            </TextInput>

            <TextInput
              placeholder="Endereço"
              placeholderTextColor="#666"
              onChangeText={setEndereco}
              value={endereco}
            >
            </TextInput>

            <TextInput
              placeholder="Categoria"
              placeholderTextColor="#666"
              onChangeText={setCategoria}
              value={categoria}
            >
            </TextInput>

            <TextInput 
              placeholder="Logo Url"
              placeholderTextColor="#666"
              onChangeText={setLogoUrl}
              value={logoUrl}
            >
            </TextInput>

            <Button 
              onPress={handleOnSave}
              disabled={!isFormValid}
            >
              Salvar
            </Button>
          </Form>
          
        </ModalBody>
      </Overlay>
    </Modal>
  )
}
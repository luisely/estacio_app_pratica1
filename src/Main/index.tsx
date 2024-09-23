import { useEffect, useState } from 'react';
import { Actions } from '../components/Actions';
import { Header } from '../components/Header';
import { PageView } from '../components/PageView';
import { useStore } from '../hooks/useStore';
import { Container, ActionsContainer, ViewContainer, Footer, FooterContainer, CenteredContainer } from './styles';
import { StatusBar } from 'expo-status-bar';
import { Category, Supplier } from '../types';
import { Button } from '../components/Button';
import { AddSupplierModal } from '../components/AddSupplierModal';
import { ActivityIndicator } from 'react-native';
import { suppliers } from '../mocks/suppliers';
import { Text } from '../components/Text';

export function Main() {
  const [data, setData] = useState<Supplier[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingSuppliers, setIsLoadingSuppliers] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  const [isAddSupplierModalVisible, setIsAddSupplierModalVisible] = useState(false)
  
  const { getData, filterByCategory, getAllCategories } = useStore()

  const handleFetchData = async() => {
    Promise.all([
      getData(),
      getAllCategories()
    ]).then(([suppliersResponse, categoriesResponse]) => {
      setCategories(categoriesResponse)
      setData(suppliersResponse)
      setIsLoading(false)
    })
  }

  async function handleCloseAddSupplierModal() {
    setIsAddSupplierModalVisible(false)
    handleFetchData()
  }

  async function handleSelectCategory(categoryName: string) {
    const isCategorySelected = Boolean(categoryName)

    setIsLoadingSuppliers(true)

    if(!isCategorySelected) {
      handleFetchData()
      setIsLoadingSuppliers(false)
    } else {
      const suppliersFiltered = await filterByCategory(categoryName)

      setData(suppliersFiltered)
      setIsLoadingSuppliers(false)
    }
  }

  function onRefresh(){
    setIsLoading(true)
    handleFetchData()
    setIsLoading(false)
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <>
      <Container >
        <Header />

        {isLoading ? (
          <CenteredContainer>
            <ActivityIndicator color='#D73035' size='large'/>
          </CenteredContainer>
        ): (
          <>
          <ActionsContainer>
            <Actions onSelectCategory={handleSelectCategory} categories={categories}/>
          </ActionsContainer>

          {isLoadingSuppliers ? (
            <CenteredContainer>
              <ActivityIndicator color='#D73035' size='large'/>
            </CenteredContainer>
          ) : (
            <> 
            {suppliers.length > 0 ? (
              <ViewContainer>
                <PageView 
                  handleFetchData={handleFetchData} 
                  onRefresh={onRefresh} 
                  isLoading={isLoading} 
                  suppliers={data}
                />
              </ViewContainer>
            ) : (
              <CenteredContainer>
                <Text 
                  color='#666' 
                  style={{marginTop: 24}}
                > Nenhum fornecedor foi encontrado
                </Text>
              </CenteredContainer>
            )}
            </>
          )}


          </>
        )}


      </Container>

      <Footer>
        <FooterContainer>
          <Button onPress={() => setIsAddSupplierModalVisible(true)}>Cadastrar</Button>
        </FooterContainer>
      </Footer>

      <AddSupplierModal
        onClose={() => handleCloseAddSupplierModal()} 
        visible={isAddSupplierModalVisible}
      />

      <StatusBar style='dark' animated />
    </>
  );
}
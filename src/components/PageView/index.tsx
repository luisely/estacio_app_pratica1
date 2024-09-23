import { FlatList } from "react-native";
import { Text } from "../Text";
import { Image, Separator, SupplierDetails, SupplierView } from "./styles";
import { Supplier } from "../../types";
import { useState } from "react";
import { SupplierModal } from "../SupplierModal";

interface PageViewProps {
  suppliers: Supplier[]
  onRefresh: () => void
  isLoading: boolean
  handleFetchData: () => void
}

export function PageView({ onRefresh, suppliers, isLoading, handleFetchData} : PageViewProps) {
  const [isSupplierModalVisible, setIsSupplierModalVisible] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | undefined>(undefined)

  function handleOpenModalSupplier(supplier: Supplier) {
    setSelectedSupplier(supplier)
    setIsSupplierModalVisible(true)
  }

  function handleCloseSupplierDetailsModal(){
    setIsSupplierModalVisible(false)
    setSelectedSupplier(undefined)
    handleFetchData()
  }

  return (
    <>
      <SupplierModal
        supplier={selectedSupplier}
        onClose={handleCloseSupplierDetailsModal}
        visible={isSupplierModalVisible}
      />

      <FlatList
        getItemLayout={(data, index) => ({
          index,
          length: 70 + 5,
          offset: (70 + 5) * index,
        })}
        key={suppliers.length}
        data={suppliers}
        style={{ marginTop: 16}}
        refreshing={isLoading}
        onRefresh={() => onRefresh()}
        contentContainerStyle={{paddingHorizontal: 24}}
        keyExtractor={supplier => supplier.id}
        ItemSeparatorComponent={Separator}
        extraData={suppliers}
        renderItem={({item: supplier}) => (
          <SupplierView onPress={() => handleOpenModalSupplier(supplier)}>
          <Image
            source={{
              uri: supplier.logoUrl
            }}
          />
    
          <SupplierDetails>
            <Text numberOfLines={1} weight="600">{supplier.nome}</Text>
            <Text numberOfLines={1} size={14} color="#666">{supplier.categoria_produto}</Text>
            <Text numberOfLines={1} size={14} color="#666" style={{marginTop: 8}}>{supplier.cidade}</Text>
    
          </SupplierDetails>
        </SupplierView>
        )}
      />

    </>
    
  )
}

import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { Supplier } from "../types"
import { suppliers } from "../mocks/suppliers"
import uuid from 'react-native-uuid'

export function useStore() {
  
  const { getItem, setItem } = useAsyncStorage('@supplierapp:suppliers')

  async function saveData(data: Supplier[]) {
    try {
      await setItem(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  async function getData(){
    const response = await getItem()
    const data: Supplier[] = response ? JSON.parse(response) : []
  
    if(data.length > 0) {
      return data.sort((a, b) => a.nome.localeCompare(b.nome))
    } else {
      await saveData(suppliers)
      const data: Supplier[] = response ? JSON.parse(response) : []
      return data.sort((a, b) => a.nome.localeCompare(b.nome))
    }
  }

  async function addSupplier(newSupplier:Supplier) {
    const oldData = await getData()

    const data = [...oldData, newSupplier]

    await saveData(data)
  }

  async function editSupplier(supplierId: string, editSupplier: Supplier) {
    const oldData = await getData()

    const dataUpdated = oldData.map(item => 
      item.id === supplierId ? editSupplier : item
    );

    await saveData(dataUpdated)
  }

  async function deleteSupplier(supplierId: string) {
    const oldData = await getData()

    const dataUpdated = oldData.filter(item => 
      item.id !== supplierId 
    );

    await saveData(dataUpdated)
  }

  async function filterByCategory(categoryName: string) {
    const suppliers = await getData()

    const filteredData = suppliers.filter(supplier => supplier.categoria_produto === categoryName)

    return filteredData
  }

  async function getAllCategories() {
    const suppliers = await getData()

    const categories = Array.from(new Set(suppliers.map(supplier => supplier.categoria_produto)))
      .map(category => ({
        id: String(uuid.v4()),
        name: category
      })).sort((a, b) => a.name.localeCompare(b.name));

    return categories
  }

  return {
    getData,
    addSupplier,
    editSupplier,
    deleteSupplier,
    filterByCategory,
    getAllCategories
  }


}
import { useState } from "react";
import { Text } from "../Text";
import { Action } from "./styles";
import { FlatList } from 'react-native'
import { Category } from "../../types";

interface ActionsProps {
  categories: Category[]
  onSelectCategory: (categoryName: string) => Promise<void>
}

export function Actions({ onSelectCategory, categories } : ActionsProps) {
  const [selectedCategory, setSelectedCategory] = useState('')

  function handleSelectCategory(categoryName: string){
    const category = selectedCategory === categoryName ? '' : categoryName
    onSelectCategory(category)
    setSelectedCategory(category)
  }

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={category => category.id}
      contentContainerStyle={{paddingRight: 24}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item: action}) => {
        const isSelected = selectedCategory === action.name
        return (
          <Action onPress={() => handleSelectCategory(action.name)}>
            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>{action.name}</Text>
          </Action>
        )
      }}
    />
  )
}

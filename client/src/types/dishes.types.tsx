import {MutableRefObject, ReactElement} from "react";

export type Dish = {
  id: number | string,
  name: string,
  area: string,
  category: string,
  drinkAlternate?: boolean,
  tags?: string | string[],
  youTubeLink?: string,
  preparationTime: string,
  recipe: Recipe,
  image: string
  dateModified?: Date
}

export type Recipe = {
  instructions: string,
  ingredients: DishIngredient[]
}

export type DishIngredient = {
  name: string,
  measure: string
}

export type DishesListItemPropsType = {
  dish: Dish
}

export type DishesSectionStateType = {
  filters: DishesSectionFiltersType,
  content: Dish[],
  filteredContent: Dish[],
  contentOnPage: Dish[],
  activePage: number,
  contentPerPage: number
}

export type DishesListPropsType = {
  children: ReactElement<Dish> | ReactElement<Dish>[] | undefined
}

export type DishesSectionFiltersType = {
  showDishes: DishesShowDishesSelectorEnum,
  orderBy: DishesOrderBySelectorEnum,
  searchQuery: string,
}

export type PopularDishesSectionStateType = {
  dishes: Dish[]
}

export type PopularDishesSectionPropsType = {
  setHomePageLoaded: () => void
}

export enum DishesShowDishesSelectorEnum {
  All,
  AvailableForMe,
}

export enum DishesOrderBySelectorEnum {
  DateAdded,
  Name,
  PreparationTime
}
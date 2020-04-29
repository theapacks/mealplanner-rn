import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}
const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVOURITE:
            const currentIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            if(currentIndex >= 0) {
                const updateFavouriteMeals = [...state.favouriteMeals];
                updateFavouriteMeals.splice(currentIndex, 1);
                return { ...state, favouriteMeals: updateFavouriteMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) }
            }
        default:
            return state;        
    }
    return state;
}

export default mealsReducer;
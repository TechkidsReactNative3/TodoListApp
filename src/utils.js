import {
  categoryBirthday, categoryEvent, categoryPersonal, 
  categoryShopping, categoryTodo
} from './styles';

export const chooseColorByCategory = (category) => {
  switch (category) {
    case 'To do': return categoryTodo;
    case 'Shopping': return categoryShopping;
    case 'Birthday': return categoryBirthday;
    case 'Event': return categoryEvent;
    case 'Personal': return categoryPersonal;
  }
}
import { combineReducers} from "redux";
import reducer from './listReducer';


const rootReducer = combineReducers({
    main: reducer
  })
  
  export default rootReducer;





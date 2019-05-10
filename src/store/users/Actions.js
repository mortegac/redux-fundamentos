import * as types from './Constants';
import axios from 'axios';
import * as common from '../errors/Actions';

const apiUrl = 'http://jsonplaceholder.typicode.com/users';



export const usersClean = payload => ({
	type: types.USERS_CLEAN,
	payload
});
export const usersAdd = payload => ({
	type: types.USERS_ADD,
	payload
});
export const usersFilter = payload => ({
	type: types.USER_FILTER,
	payload
});


// THUNK 
export const fetchData = () => {
	return async (dispatch) => {
		dispatch(usersClean()) 
		try{

			

			
			const response = await axios.get(`${apiUrl}`);
							
				dispatch(usersAdd(response.data));
				dispatch(usersFilter(response.data));
			// throw "this is not an error"
  
		} catch(e){
			dispatch(common.errorsAdd({error:e, module:'users'}));
		}
  
	};
  };
  
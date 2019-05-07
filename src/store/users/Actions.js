import * as types from './Constants';
// import * as common from '../rootActions';
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
// export const errorsAdd = payload => ({
// 	type: common.ERRORS_ADD,
// 	payload
// });


// THUNK 
export const fetchData = () => {
	return async (dispatch) => {
		dispatch(usersClean());
		try{
		  const result = await fetch(apiUrl);
		  const json = await(result.json);
		  console.log('<json>', json)

		  dispatch(usersAdd(json));
  
		} catch(e){
			dispatch(common.errorsAdd(e));
		}
  
	};
  };
  
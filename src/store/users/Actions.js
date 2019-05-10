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

// export const errorsAdd = payload => ({
// 	type: common.ERRORS_ADD,
// 	payload
// });

// static fetchApi = async (url, params) =>{
    
//     request = new Request(`${url}`, params);    
//     return await fetch(request)
//     .then(data => {
//       if (data.status===401){
//         //console.log(`%c ::: ERROR TOKEN ::: ${data.status}`, 'background: blue; color: #fff');
//         store.dispatch(isValidtoken({isValidToken: true}))
//       }else{

//       }
//       return  data;
//     })
//     .catch(err => { return err })
//   }

// THUNK 
export const fetchData = () => {
	return async (dispatch) => {
		dispatch(usersClean())
		// dispatch(common.errorsClean({}))// 
		try{

			

			// throw "this is not an error"
			const response = await axios.get(`${apiUrl}`);
							
				dispatch(usersAdd(response.data));
				dispatch(usersFilter(response.data));
			// throw "this is not an error"
  
		} catch(e){
			// const error =e.toString();
			dispatch(common.errorsAdd({error:e, module:'users'}));
		}
  
	};
  };
  
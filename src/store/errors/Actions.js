import * as types from './Constants';

const apiUrl = 'http://jsonplaceholder.typicode.com/users';



export const errorsClean = payload => ({
	type: types.ERRORS_CLEAN,
	payload
});
export const errorsAdd = payload => ({
	type: types.ERRORS_ADD,
	payload
});


// THUNK 
export const fetchData = () => {
  return async (dispatch) => {
	  dispatch(errorsClean());
	  try{
		const result = await fetch(apiUrl);
		const json = await(result.json);
		dispatch(errorsAdd(json));

	  } catch(e){
		console.error(e);
	  }

  };
};




// export const fetchData = (data) => {
//   return {
//     type: FETCH_GITHUB_DATA,
//     data
//   }
// };

// export const fetchGithubData = () => {
//   return (dispatch) => {
//     return axios.get(apiUrl)
//       .then(response => {
//         dispatch(fetchData(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };



// export {
// 	errorsClean,
// 	errorsAdd
// };
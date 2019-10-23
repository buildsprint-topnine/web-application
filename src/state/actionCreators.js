import axiosWithAuth from "../utils/axiosWithAuth";
import * as types from "./actionTypes";

export function fetchItems() {
  return function(dispatch) {
    dispatch({
      type: types.FETCHING_ITEM_START
    });
    axiosWithAuth()
      .get(`https://bw-my-top-nine.herokuapp.com/home`)
      .then(res => {
        dispatch({
          type: types.FETCH_ITEM_SUCCESS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_ITEM_FAILURE,
          payload: error
        });
      });
  };
}

export function addItem(char) {
  return function(dispatch) {
    axiosWithAuth()
      .post("https://bw-my-top-nine.herokuapp.com/home/add-top-nine", char)
      .then(res =>
        dispatch({
          type: types.ADD_ITEM_SUCCESS,
          payload: res.data
        })
      )
      .catch(error =>
        dispatch({
          type: types.ADD_ITEM_FAILURE,
          payload: error
        })
      );
  };
}

export function friendList() {
  return function(dispatch) {
    dispatch({
      type: types.FETCHING_FRIEND_START
    });
    axiosWithAuth()
      .get(`https://bw-my-top-nine.herokuapp.com/users`)
      .then(res => {
        console.log(res);
        dispatch({
          type: types.FETCH_FRIEND_SUCCESS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_FRIEND_FAILURE,
          payload: error
        });
      });
  };
}

export function deleteItem(id) {
  return function(dispatch) {
    axiosWithAuth()
      .delete(`https://bw-my-top-nine.herokuapp.com/home/${id}/delete-top-nine`)
      .then(res => {
        axiosWithAuth()
          .get(`https://bw-my-top-nine.herokuapp.com/home`)
          .then(res => {
            dispatch({
              type: types.FETCH_ITEM_SUCCESS,
              payload: res.data
            });
          })
          .catch(error => {
            dispatch({
              type: types.FETCH_ITEM_FAILURE,
              payload: error
            });
          });
      })

      .catch(error =>
        dispatch({
          type: types.DELETE_ITEM_FAILURE,
          payload: error
        })
      );
  };
}

// export function updateMovie(id, data) {
//   return function(dispatch) {
//     axiosWithAuth()
//       .put(
//         `https://bw-my-top-nine.herokuapp.com/home/${id}/edit-top-nine`,
//         data
//       )
//       .then(res => {
//         debugger;
//         dispatch({
//           type: types.UPDATE_ITEM_SUCCESS,
//           payload: res.data
//         });
//       })

//       .catch(err => {
//         dispatch({
//           type: types.UPDATE_ITEM_FAILURE,
//           payload: err
//         });
//       });
//   };
// }

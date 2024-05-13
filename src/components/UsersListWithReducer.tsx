import { useReducer } from "react";
import { users, type User } from "./data";

const initialState = users;

enum Action {
  CREATE_USER = "create-user",
  DELETE_USER = "delete-user",
  MODIFY_USER = "modify-user",
}

// type ActionType = {
//   type: Action;
//   payload?: User | { id: number }; //
// };

type ActionType =
  | {
      type: Action.CREATE_USER;
      payload: User;
    }
  | {
      type: Action.DELETE_USER;
      payload: {
        id: number;
      };
    }
  | {
      type: Action.MODIFY_USER;
      payload: User;
    };

const reducer = (state: User[], action: ActionType) => {
  switch (action.type) {
    case Action.CREATE_USER:
      return [...state, action.payload];
    case Action.DELETE_USER: // { id: number }
      return state.filter((user) => user.id !== action.payload?.id);
    default:
      // TODO:
      return state;
  }
  return state;
};

export const UsersListWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddUser = () => {
    dispatch({
      type: Action.CREATE_USER,
      payload: {
        id: 4, // crypto.randomUUId, uuid
        age: 35,
        nickname: "Jaś fasola",
      },
    });
  };

  return (
    <div>
      {state.map((user) => (
        <div key={user.id}>{user.nickname}</div>
      ))}
      <button onClick={handleAddUser}>Add user</button>
    </div>
  );
};

import { useSortData } from "../hooks/sortData";
import { users, type User } from "./data";

type Props = {
  data: User[];
};

// type DataKey = Omit<keyof User, 'id'>;

// const key: DataKey = 'age' | 'id' | 'nickname';

// type Props<T> = {
//   data: T;
// };

// export const UsersList = <T,>({ data }: Props<T>) => {};
export const UsersList = ({ data }: Props) => {
  const sortedData = useSortData(data, "age");

  return (
    <div>
      {sortedData.map((user) => (
        <div key={user.id}>{user.nickname}</div>
      ))}
    </div>
  );
};

{
  /* <UsersList<User> data={users} />;

<Grid<User>>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
</Grid> */
}

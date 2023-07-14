import axios from "axios";
import { useEffect, useState } from "react";
import { ApiProps } from "../ApiProps";
import ListItems from "../components/ListItem";

const Users = () => {
  const [data, setData] = useState<ApiProps[]>([]);

  useEffect(() => {
    appData();
  }, []);

  const appData = async () => {
    try {
      const collection = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(collection.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-4">
      {data.map((user) => (
        <div key={user.id}>
          <ul className="border rounded-lg shadow-md p-4 mb-6">
            <ListItems
              title={user.name}
              subtitle={user.email}
              link={`/${user.id}`}
              btnName={"Details"}
            />
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Users;

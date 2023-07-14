import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiProps } from "../ApiProps";

const UserInfo = () => {
  const param = useParams();
  const [value, setValue] = useState<ApiProps | null>(null);

  useEffect(() => {
    appData();
  }, [param]);

  useEffect(() => {
    appData();
  }, [param]);

  const appData = async () => {
    try {
      const response = await axios.get<ApiProps>(
        `https://jsonplaceholder.typicode.com/users/${param.id}`
      );
      setValue(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(value);

  return (
    <div className="p-4">
      {value ? (
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <strong>ID:</strong> {value.id}
          </li>
          <li>
            <strong>Name:</strong> {value.name}
          </li>
          <li>
            <strong>Username:</strong> {value.username}
          </li>
          <li>
            <strong>Street:</strong> {value.address?.street}
          </li>
          <li>
            <strong>Suite:</strong> {value.address?.suite}
          </li>
          <li>
            <strong>City:</strong> {value.address?.city}
          </li>
          <li>
            <strong>Zipcode:</strong> {value.address?.zipcode}
          </li>
          <li>
            <strong>Latitude:</strong> {value.address?.geo?.lat}
          </li>
          {/* <li>
            <strong>Longitude:</strong> {value.address?.geo?.lng}
          </li> */}
          <li>
            <strong>Phone:</strong> {value.phone}
          </li>
          <li>
            <strong>Website:</strong> {value.website}
          </li>
          <li>
            <strong>Company Name:</strong> {value.company?.name}
          </li>
          <li>
            <strong>Company BS:</strong> {value.company?.bs}
          </li>
          <li>
            <strong>Company Catch Phrase:</strong> {value.company?.catchPhrase}
          </li>
          <li className="col-span-2">
            <Link
              to={`/${value.id}/posts`}
              className="px-4 py-2 text-lg text-white bg-blue-500 rounded shadow cursor-pointer mt-4"
            >
              Details
            </Link>
          </li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfo;

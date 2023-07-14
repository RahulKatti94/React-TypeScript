import { Link } from "react-router-dom";

interface ListItemProps {
  title: string;
  subtitle: string;
  link?: string;
  btnName?: string;
}

const ListItem = ({ title, subtitle, link, btnName }: ListItemProps) => {
  return (
    <div className="p-4">
      <p className="text-xl font-bold mb-2">{title}</p>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      {/* Render other properties as needed */}
      {link && btnName && (
        <Link
          to={link}
          className="px-4 py-2 text-lg text-white bg-blue-500 rounded shadow cursor-pointer hover:bg-blue-600"
        >
          {btnName}
        </Link>
      )}
    </div>
  );
};

export default ListItem;

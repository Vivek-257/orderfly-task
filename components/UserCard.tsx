
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-2xl shadow-lg bg-white transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">👤 {user.name}</h2>
      <p className="text-gray-600 text-sm mb-2">ID: <span className="font-medium">{user.id}</span></p>
      <p className="text-gray-700 text-base"><strong>Email:</strong> {user.email}</p>

      {/* Address Section */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800">🏠 Address</h3>
        <p className="text-gray-600 text-sm">{user.address.street}, {user.address.suite}</p>
        <p className="text-gray-600 text-sm">{user.address.city}, {user.address.zipcode}</p>
      </div>

      {/* Company Section */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800">🏢 Company</h3>
        <p className="text-gray-700 text-sm font-semibold">{user.company.name}</p>
      </div>

      {/* View Posts Link */}
      <Link href={`/user/${user.id}`}>
        <p className="text-blue-600 hover:text-blue-800 text-base mt-4 cursor-pointer font-medium transition-colors">
          🔗 View Posts
        </p>
      </Link>
    </div>
  );
};

export default UserCard;

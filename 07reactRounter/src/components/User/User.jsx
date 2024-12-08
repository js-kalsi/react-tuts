import { useParams } from "react-router";
const User = () => {
  const { userId } = useParams();
  return (
    <h1 className="text-center bg-gray-600 text-white text-3xl p-4">
      User: {userId}
    </h1>
  );
};

export default User;

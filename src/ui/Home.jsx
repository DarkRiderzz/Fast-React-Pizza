import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 text-center px-4 sm:my-16">
      <h1 className="mb-8 text-xl  font-semibold text-center md:text-3xl">
        The best delicious pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue odering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;

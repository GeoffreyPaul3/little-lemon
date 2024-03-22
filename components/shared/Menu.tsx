import { CardMenu } from "./Card";

const Menu = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        <CardMenu />
      </div>
    </div>
  );
};

export default Menu;

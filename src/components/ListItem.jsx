import IconListItem from "./svg/IconListItem";

const ListItem = ({ text }) => {
  return (
    <li className="flex gap-5 items-start">
      <span>
        <IconListItem />
      </span>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;

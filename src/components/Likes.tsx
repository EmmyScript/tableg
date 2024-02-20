import { FaRegHeart } from "react-icons/fa";
const Likes = (props: any) => {
  let classes = "[fa fa-heart]";

  if (!props.likes) classes += "-o";
  return (
    <>
      <span
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ><FaRegHeart /></span>
    </>
  );
};
export default Likes;

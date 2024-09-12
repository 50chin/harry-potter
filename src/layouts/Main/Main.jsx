import { Cards } from "../Cards/Cards";
import s from "./Main.module.scss";

export const Main = ({ newData, likedPerson }) => {
  return <Cards newData={newData} likedPerson={likedPerson} />;
};

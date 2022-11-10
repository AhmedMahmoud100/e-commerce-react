import "./MainPage.css";
import FirestSection from "../../Components/FirstSection/FirstSection";
import FlashDeals from "../../Components/FlashDeals/FlashDeals";
import TopCategories from "../../Components/TopCategories/TopCategories";
import Arrival from "../../Components/MainPage/Arrival";
import Arrivaldata from "../../data/Arrival.json";
import Discountdata from "../../data/Discounts.json";
import { MobilePhones } from "../../Components/MainPage/MobilePhones";

export function Home() {
  return (
    <>
      <FirestSection />
      <TopCategories />
      <FlashDeals />
      <Arrival data={Arrivaldata} name="New Arrival" />
      <Arrival data={Discountdata} name="Discounts" />
      <MobilePhones />
    </>
  );
}

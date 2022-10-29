import './MainPage.css'
import LandingSection from "../../Components/MainPage/LandingSection";
import FlashDeals from "../../Components/MainPage/FlashDeals";
import TopCategories from "../../Components/MainPage/TopCategories";
import Arrival from "../../Components/MainPage/Arrival";
import Arrivaldata from "../../data/Arrival.json";
import Discountdata from "../../data/Discounts.json";
import { MobilePhones } from "../../Components/MainPage/MobilePhones";

export function Home() {
  return (
    <>
      <LandingSection />
      <TopCategories />
      <FlashDeals />
      <Arrival data={Arrivaldata} name="New Arrival" />
      <Arrival data={Discountdata} name="Discounts" />
      <MobilePhones />
    </>
  )
}

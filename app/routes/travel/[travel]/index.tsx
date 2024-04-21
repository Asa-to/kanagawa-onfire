import { createRoute } from "honox/factory";
import BackButton from "../../../islands/BackButton/BackButton";
import { Header } from "../../../components/Header";
import { stub_travel } from "../../../islands/Travel/stub";
import TravelDetail from "../../../islands/TravelDetail/TravelDetail";

export default createRoute((c) =>
  c.render(
    <div class="mx-4">
      <Header>{stub_travel[0].title}</Header>
      <BackButton />
      <TravelDetail />
    </div>
  )
);

import Navbar from "./components/Navbar/Navbar";
import EventOverview from "./components/EventCard/EventOverview";
import EventDetails from "./components/EventDetails/EventDetails";
import PriceDisplay from "./components/PriceDisplay/PriceDisplay";
import PrizeCategories from "./components/PriceDisplay/PrizeCategories";
import Team from "./components/Team/Team";
import StudentTeam from "./components/Team/StudentTeam";

import FAQ from "./components/FAQ/FAQ";
import ContactPerson from "./components/ContactPerson/ContactPerson";
function App() {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "80px" }}>
        <ContactPerson />
        <EventOverview />
        <EventDetails />
        <PriceDisplay />
        // <PrizeCategories />
        <Team />
        <StudentTeam/>
        <FAQ />
      </div>

    </div>
  );
}
export default App;

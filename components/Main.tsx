import About from "./about/about";
import SectionFeatures from "./sectionFeatures/sectionFeatures";
import ToursPage from "./tours/tours";
import SectionStories from "./sectionStories/sectionStories";
import SectionBook from "./sectionBook/sectionBook";

const Main = () => {
  return (
    <main>
      <About />
      <SectionFeatures />
      <ToursPage />
      <SectionStories />
      <SectionBook />
    </main>
  );
};

export default Main;

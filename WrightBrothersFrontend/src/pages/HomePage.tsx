import Banner from "../components/Banner";
import PlaneList from "../components/PlaneList";
import PageContent from "../components/PageContent";

function HomePage() {
  const planes = [
    { id: 1, name: "Wright Flyer I" },
    { id: 2, name: "Wright Flyer II" },
    { id: 3, name: "Wright Model A" },
  ];

  return (
    <div>
      <Banner />
      <PageContent>
        <PlaneList planes={planes} />
      </PageContent>
    </div>
  );
}

export default HomePage;
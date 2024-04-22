// pages/HomePage.tsx
import React, { useEffect } from "react";
import Banner from "../components/Banner";
import PlaneList from "../components/PlaneList";
import PlaneService from "../services/PlaneService";
import PageContent from "../components/PageContent";

function HomePage() {
  const [planes, setPlanes] = React.useState([]);

  useEffect(() => {
    async function getPlanes() {
      try {
        const response = await PlaneService.getPlanes();
        setPlanes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPlanes();
  }, []);

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

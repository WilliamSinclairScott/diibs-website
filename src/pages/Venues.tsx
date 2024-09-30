import { useState } from "react";
import { Flex, Radio } from "@radix-ui/themes";
import VenuesCarousel from "../components/VenueCarousel";

const VenuesPage = () => {
  const filterOptions = ["All", "Restaurants", "Bars", "Cafes"];
  const [filter, setFilter] = useState<string>("All");

  return (
    <Flex direction={"column"} align={"center"}>
      <h1>Our Venues</h1>
      <Flex>
        <h2>Filter:</h2>
        <Flex>
          <Radio
            name="filter"
            value="All"
            checked={filter === "All"}
            onChange={() => setFilter("All")}
          />
          <label>All</label>
        </Flex>
        <Flex>
          <Radio
            name="filter"
            value="Restaurants"
            checked={filter === "Restaurants"}
            onChange={() => setFilter("Restaurants")}
          />
          <label>Restaurants</label>
        </Flex>
        <Flex>
          <Radio
            name="filter"
            value="Bars"
            checked={filter === "Bars"}
            onChange={() => setFilter("Bars")}
          />
          <label>Bars</label>
        </Flex>
        <Flex>
          <Radio
            name="filter"
            value="Cafes"
            checked={filter === "Cafes"}
            onChange={() => setFilter("Cafes")}
          />
          <label>Cafes</label>
        </Flex>
        <VenuesCarousel />
      </Flex>
    </Flex>
  );
};

export default VenuesPage;

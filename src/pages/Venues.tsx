import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { VenueData, Venue } from "../services/venueService";
import { SewingPinIcon } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import {
  Flex,
  Checkbox,
  Text,
  Card,
  Avatar,
  IconButton,
  Badge,
  Heading,
  Link,
  Button,
  Container,
  Grid,
} from "@radix-ui/themes";

const StyledContainer = styled(Container, {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
});

const FilterSection = styled(Flex, {
  marginBottom: "20px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "stretch",
  },
});

const VenueGrid = styled(Grid, {
  gap: "20px",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
});

const VenueCard = styled(Card, {
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

const VenuesPage = () => {
  const { venues, tags } = useLoaderData() as VenueData;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_filterOptions] = useState<string[]>(() => Array.from(new Set([...tags, "NYC", "Hamptons"])));
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const filteredVenues = venues.filter(
    (venue) =>
      selectedFilters.length === 0 ||
      selectedFilters.includes(venue.location) ||
      venue.tags.some((tag) => selectedFilters.includes(tag))
  );

  const handleFilterChange = (option: string) => {
    setSelectedFilters((prev) =>
      prev.includes(option)
        ? prev.filter((filter) => filter !== option)
        : [...prev, option]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <StyledContainer>
      <Heading size="8" mb="4" align="center">
        Our Venues
      </Heading>
      <FilterSection direction="column">
        <Text size="5" mb="2">
          Filter:
        </Text>
        <Flex wrap="wrap" gap="2" mb="2">
          {_filterOptions.map((option) => (
            <Flex key={option} align="center">
              <Checkbox
                checked={selectedFilters.includes(option)}
                onCheckedChange={() => handleFilterChange(option)}
                id={option}
              />
              <Text as="label" ml="1" htmlFor={option}>
                {option}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Button onClick={clearFilters} disabled={selectedFilters.length === 0}>
          Clear Filters
        </Button>
      </FilterSection>
      <VenueGrid>
        {filteredVenues.map((venue: Venue, index: number) => (
          <VenueCard key={index}>
            <Flex direction="column" gap="2" height={"100%"}>
              <Avatar
                size="6"
                src={venue.image}
                alt={venue.name}
                fallback={venue.name.charAt(0)}
              />
              <Heading size="3">{venue.name}</Heading>
              <Text size="2" color="gray">
                {venue.description}
              </Text>
              <Flex align="center" gap="2">
                <Link
                  href={venue.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton variant="ghost" aria-label="Location">
                    <SewingPinIcon />
                  </IconButton>
                </Link>
                <Text size="2">{venue.location}</Text>
              </Flex>
              <Flex wrap="wrap" gap="1">
                {venue.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Flex>
          </VenueCard>
        ))}
      </VenueGrid>
    </StyledContainer>
  );
};

export default VenuesPage;

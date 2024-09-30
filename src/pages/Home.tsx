import { Container, Flex, Box } from "@radix-ui/themes";
import React from "react";

const Home: React.FC = () => {
  return (
    <Flex direction={{ initial: 'column', md: 'row' }} align="center">
      <Box width={{ initial: '100%', md: '50%' }} p="4">
        <Container size="3">
          <Flex direction="column" align="center" justify="center" style={{ height: '100%' }}>
            <h1>App Launching Soon!</h1>
            <h4>The new way to secure a reservation at sought after venues.</h4>
            <ul>
              <li>Find the venue you'd like to dine.</li>
              <li>Place a bid up to the amount you are planning on spending for the dinner.</li>
              <li>Win the auction.</li>
            </ul>
            <p>Now go enjoy your dining experience - the total amount you won the auction for is applied to your bill as a minimum spend. Simple as that!</p>
            <h2>Bid. Win. Dine.</h2>
          </Flex>
        </Container>
      </Box>
      <Box width={{ initial: '100%', md: '50%' }}>
        <img 
          src="https://images.squarespace-cdn.com/content/v1/661043c4a62d407aa7d2daf8/1723469800596-ILMAKRVVVYIV16Z5F1BK/unsplash-image-N_Y88TWmGwA.jpg?format=1500w"
          alt="food"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Flex>
  );
}

export default Home;
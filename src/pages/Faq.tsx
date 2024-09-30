import React, { useState } from 'react';
import { styled } from '../stitches.config';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const FAQContainer = styled('div', {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
});

const TabContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
});

const Tab = styled('button', {
  padding: '1rem 2rem',
  fontSize: 'var(--font-size-body)',
  fontWeight: 'var(--font-weight-medium)',
  background: 'none',
  border: 'none',
  borderBottom: '2px solid transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&.active': {
    borderBottom: '2px solid var(--color-orange)',
    color: 'var(--color-orange)',
  },
});

const FAQSection = styled('div', {
  '& h2': {
    fontSize: 'var(--font-size-h2)',
    marginBottom: '1rem',
  },
});

const StyledAccordion = styled(Accordion.Root, {
  borderRadius: '6px',
  width: '100%',
  backgroundColor: 'white',
  boxShadow: '0 2px 10px var(--color-light-gray)',
});

const StyledItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px var(--color-orange)',
  },
});

const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 'var(--font-size-body)',
  lineHeight: 1,
  color: 'var(--color-black)',
  boxShadow: '0 1px 0 var(--color-light-gray)',
  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: 'var(--color-off-white)' },
  '&:hover': { backgroundColor: 'var(--color-light-gray)' },
});

const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: 'var(--font-size-body)',
  color: 'var(--color-gray-blue)',
  backgroundColor: 'var(--color-off-white)',

  // '&[data-state="open"]': {
  //   animation: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  // },
  // '&[data-state="closed"]': {
  //   animation: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  // },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
});

const StyledChevron = styled(ChevronDownIcon, {
  color: 'var(--color-orange)',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const Faq: React.FC = () => {
  const [activeTab, setActiveTab] = useState('client');

  const clientFAQs = [
    {
      question: "How does diibs work?",
      answer: "Users can enter auctions and bid the amount they feel comfortable spending at the restaurant. The final auction price is not just to land the reservation, but a commitment to spending that amount at the venue in exchange for the reservation."
    },
    {
      question: "Is this a members only platform?",
      answer: "No. This is open to all customers as a way to access reservations you typically cannot get."
    },
    {
      question: "Are there hidden fees?",
      answer: "No hidden fees. You will only be charged a 5% auction fee at checkout."
    },
    {
      question: "How far out do auctions open?",
      answer: "Up to 72 hours before the reservation begins."
    },
    {
      question: "When do the auctions end?",
      answer: "6-12 hours before the reservation begins depending on the restaurant you wish to dine at."
    },
    {
      question: "What happens if I cannot make the reservation?",
      answer: "You can use our transfer reservation feature to give the reservation to someone else. They will then take on the responsibility of the minimum spend guarantee you won in the auction. You can also contact the venue to work out a cancellation or booking for another day with the same amount you agreed to."
    },
    {
      question: "Do I pay any money at the venue?",
      answer: "You will be charged the amount you win the auction for and that will act as a credit for your meal. However, if you exceed the amount then you will be charged the remainder and will be responsible for paying that at the venue."
    },
    {
      question: "I've never done an auction before - am I losing money if I don't have the winning bid?",
      answer: "No. You are only charged when you win the auction."
    },
    {
      question: "What about tax and gratuity?",
      answer: "You will be paying this at the venue, and not in advance."
    }
  ];

  const restaurantFAQs = [
    {
      question: "How can my restaurant join diibs?",
      answer: "To join diibs, please contact our partnership team through the 'Become a diibs Partner' section on our website."
    },
    {
      question: "What are the benefits of partnering with diibs?",
      answer: "Partnering with diibs can help increase your restaurant's visibility, fill tables during off-peak hours, and attract high-value customers."
    },
    // Add more restaurant FAQs here if needed
  ];

  const currentFAQs = activeTab === 'client' ? clientFAQs : restaurantFAQs;

  return (
    <FAQContainer>
      <TabContainer>
        <Tab 
          className={activeTab === 'client' ? 'active' : ''} 
          onClick={() => setActiveTab('client')}
        >
          For Clients
        </Tab>
        <Tab 
          className={activeTab === 'restaurant' ? 'active' : ''} 
          onClick={() => setActiveTab('restaurant')}
        >
          For Restaurants
        </Tab>
      </TabContainer>

      <FAQSection>
        <h2>{activeTab === 'client' ? 'Client FAQs' : 'Restaurant Partner FAQs'}</h2>
        <StyledAccordion 
          type="single" 
          collapsible
        >
          {currentFAQs.map((faq, index) => (
            <StyledItem key={index} value={`item-${index}`}>
              <StyledHeader>
                <StyledTrigger>
                  {faq.question}
                  <StyledChevron aria-hidden />
                </StyledTrigger>
              </StyledHeader>
              <StyledContent>
                <StyledContentText>{faq.answer}</StyledContentText>
              </StyledContent>
            </StyledItem>
          ))}
        </StyledAccordion>
      </FAQSection>
    </FAQContainer>
  );
};

export default Faq;
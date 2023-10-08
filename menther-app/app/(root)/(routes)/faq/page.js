import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <div className="p-20 ml-auto pt-12">
      <Heading as="h1" size="xl" display="grid" justifyContent="center" pb="10">Frequently Asked Questions</Heading>
      <Accordion allowToggle>
        {/* FAQ 1 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is the purpose of the MentHER platform?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our virtual mentorship platform can help connect girls, trans, and
            non-binary youth with STEM mentors who can provide them with the
            guidance and support they need to succeed. This can help create a
            more diverse and inclusive STEM workforce and ensure that all
            female-identifying people can reach their full potential.
          </AccordionPanel>
        </AccordionItem>

        {/* FAQ 2 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What resources does MentHER provide for mentors and mentees?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            On the MentHER Platform, all mentors and mentees have access to a
            variety of resources, including: Meeting agendas Discussion
            questions Interesting videos and articles Mentoring handbooks
          </AccordionPanel>
        </AccordionItem>

        {/* FAQ 3 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How much does the MentHER mentorship software cost?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Nothing at all! Our free and open-source mentorship software
            platform is available to all.
          </AccordionPanel>
        </AccordionItem>
        {/* FAQ 4 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do you handle a mentee-mentor mismatch?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Mentors and mentees may not always click, but that's okay! Our
            platform makes it easy to rematch both parties with someone new. To
            do this, simply:
            <ol>
              <li>
                Go to the mentor and mentee profiles that you would like to
                rematch.
              </li>
              <li>Click on the "End Pairing" button.</li>
              <li>Confirm that you would like to end the pairing.</li>
            </ol>
          </AccordionPanel>
        </AccordionItem>
        {/* FAQ 5 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I sign up as a Mentor or Mentee?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            To sign up as a Mentor or Mentee, click on the respective "Log in"
            button on the homepage. You can create an account and choose your
            role during the registration process.
          </AccordionPanel>
        </AccordionItem>

        {/* FAQ 6 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I change my role later?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, you can change your role at any time by accessing your account
            settings after logging in. Simply update your role and save your
            changes.
          </AccordionPanel>
        </AccordionItem>

        {/* Add more FAQs here */}
      </Accordion>
    </div>
  );
};

export default FAQ;

"use client";

import {
  Box,
  Button,
  ButtonGroup, Divider, FormLabel, Heading, StepSeparator, Text,
} from "@chakra-ui/react";
import { Formik, useField } from "formik";
import {
  FormControl,
  InputControl, PercentComplete, ResetButton, SelectControl, SubmitButton, TextareaControl,
} from "formik-chakra-ui";
import { Stack, Step, StepIcon, StepIndicator, StepStatus, Stepper, useSteps } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";
import * as React from "react";
import { useState } from "react";
import * as Yup from "yup";
import TagAutoComplete from "./customTagDropdown";

const Form = ({ firstName, lastName, email, imageURL }) => {

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    pronouns: "",
    bio: "",
    interests: [],
    linkedin: "",
    github: "",
    website: "",
    others: "",
    role: [],
    employer: "",
    groups: [],
    companyInterests: [],
    mentorshipLevel: ""
  };

  const interestFields = [
    "Full-Stack",
    "Front-End",
    "Back-End",
    "Gaming",
    "AR/VR",
    "Data",
    "AI/ML"
  ]

  const mentorshipRole = [ "Mentee", "Mentor"]

  const groups = ["MLH", "Grace Hopper Celebration", "Rewriting the Code"]
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Mentee / Mentor Info' },
    { title: 'Third', description: 'Additional Info' },
  ]
  
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  const activeStepText = steps[activeStep].description

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required(),
  });

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = (values) => {
    sleep(300).then(() => {
      window.alert(JSON.stringify(values, null, 2));
    });
  };

  const [role, setRole] = useState([]);

  return (
    <div className="p-10 m-auto space-y-2">
    <Stack className="mb-10">
      <Stepper size='sm' index={activeStep} gap='0'>
        {steps.map((step, index) => (
          <Step key={index} gap='0'>
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator _horizontal={{ ml: '0' }} />
          </Step>
        ))}
      </Stepper>
      <Text>
        Step {activeStep + 1}: <b>{activeStepText}</b>
      </Text>
    </Stack>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <>
        {activeStep == 0 ? <>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pb-8">
            <InputControl name="firstName" label="First Name" />
            <InputControl name="lastName" label="Last Name" />
            <InputControl name="email" inputProps={{ type: "email" }} label="Email Address" />
            <SelectControl
              name="pronouns"
              label="Pronouns"
              selectProps={{ placeholder: "Select pronouns" }}
            >
              <option value="option1">she/her</option>
              <option value="option2">he/him</option>
              <option value="option3">they/them</option>
              <option value="option3">other</option>
            </SelectControl>
          </div>
          <TextareaControl name="bio" label="About yourself" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pb-8">

          <FormControl id="role" name="role" label="Mentorship Role">
            <AutoComplete openOnFocus multiple onChange={(value) => values.role = value}>
              <AutoCompleteInput variant="outline">
                {({ tags }) =>
                  tags.map((tag, id) => (
                    <AutoCompleteTag
                      key={id}
                      label={tag.label}
                      onRemove={tag.onRemove}
                    />
                  ))
                }
              </AutoCompleteInput>
              <AutoCompleteList>
                {mentorshipRole.map((field, id) => (
                  <AutoCompleteItem
                    key={`option-${id}`}
                    value={field}
                    textTransform="capitalize"
                    _selected={{ bg: "whiteAlpha.50" }}
                    _focus={{ bg: "whiteAlpha.100" }}
                  >
                    {field}
                  </AutoCompleteItem>
                ))}
              </AutoCompleteList>
            </AutoComplete>
          </FormControl>

          <FormControl id="interests" name="interests" label="Field of interests">
            <AutoComplete openOnFocus multiple onChange={(value) => values.interests = value}>
              <AutoCompleteInput variant="outline">
                {({ tags }) =>
                  tags.map((tag, id) => (
                    <AutoCompleteTag
                      key={id}
                      label={tag.label}
                      onRemove={tag.onRemove}
                    />
                  ))
                }
              </AutoCompleteInput>
              <AutoCompleteList>
                {interestFields.map((field, id) => (
                  <AutoCompleteItem
                    key={`option-${id}`}
                    value={field}
                    textTransform="capitalize"
                    _selected={{ bg: "whiteAlpha.50" }}
                    _focus={{ bg: "whiteAlpha.100" }}
                  >
                    {field}
                  </AutoCompleteItem>
                ))}
              </AutoCompleteList>
            </AutoComplete>
          </FormControl>

          </div>
          <Heading as="h4" size="md">Social Media Links</Heading>
          <Divider />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <InputControl name="linkedin" label="LinkedIn" />
            <InputControl name="github" label="GitHub" />
            <InputControl name="website" label="Personal Website/Portfolio" />
            <InputControl name="others" label="Others" />
          </div>
          <ButtonGroup>
            <Button colorScheme="yellow" onClick={() => setActiveStep(activeStep+1)}>Next</Button>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
        </> : <>
        { activeStep == 1 ? <>
          <Heading as="h4" size="md">Work Experience</Heading>
          <InputControl name="employer" label="Employer" />

          <FormControl id="groups" name="groups" label="Affliated Groups">
            <AutoComplete openOnFocus multiple onChange={(value) => values.groups = value}>
              <AutoCompleteInput variant="outline">
                {({ tags }) =>
                  tags.map((tag, id) => (
                    <AutoCompleteTag
                      key={id}
                      label={tag.label}
                      onRemove={tag.onRemove}
                    />
                  ))
                }
              </AutoCompleteInput>
              <AutoCompleteList>
                {groups.map((field, id) => (
                  <AutoCompleteItem
                    key={`option-${id}`}
                    value={field}
                    textTransform="capitalize"
                    _selected={{ bg: "whiteAlpha.50" }}
                    _focus={{ bg: "whiteAlpha.100" }}
                  >
                    {field}
                  </AutoCompleteItem>
                ))}
              </AutoCompleteList>
            </AutoComplete>
          </FormControl>

          <SelectControl
            name="mentorshipLevel"
            label="Profession Level"
            selectProps={{ placeholder: "Profession Level" }}
          >
            <option value="option1">Student</option>
            <option value="option2">Entry-Level</option>
            <option value="option3">Mid-Level</option>
            <option value="option3">Senior</option>
          </SelectControl>

          <ButtonGroup>
            <Button colorScheme="yellow" variant="outline" onClick={() => setActiveStep(activeStep-1)}>Back</Button>
            <Button colorScheme="yellow" onClick={() => setActiveStep(activeStep+1)}>Next</Button>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
        
        </> : <>
        
        <ButtonGroup>
            <Button colorScheme="yellow" variant="outline" onClick={() => setActiveStep(activeStep-1)}>Back</Button>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
        </> }</>}
        </>
      )}
    </Formik>
    </div>
  );
};

export default Form;

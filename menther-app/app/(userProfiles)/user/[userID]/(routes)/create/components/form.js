"use client";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup, Divider, Heading, StepSeparator, Text,
} from "@chakra-ui/react";
import { Field, FieldArray, Formik } from "formik";
import {
  FormControl,
  InputControl, SelectControl, SubmitButton, TextareaControl,
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
import * as Yup from "yup";
import { db } from "@/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { BsTrashFill, BsFillPlusCircleFill } from "react-icons/bs"
import { redirect } from "next/navigation";

const Form = ({ userId, firstName, lastName, email, imageURL }) => {

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    imageURL: imageURL,
    pronouns: "",
    bio: "",
    interests: [],
    linkedin: "",
    github: "",
    website: "",
    others: "",
    role: [],
    workExperiences: [{
      employer: "",
      jobTitle: "",
      description: "",
      startDate: "",
      endDate: "",
    }],
    groups: [],
    companyInterests: [],
    mentorshipLevel: "",
    interestedCompanies: []
  };

  const emptyExperience = {
    employer: "",
    jobTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  }

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

  const companies = ["Google", "Meta", "Microsoft", "Apple", "Tesla", "Slack", "LinkedIn", "Uber", "Duolingo"]

  const groups = ["MLH", "Grace Hopper Celebration", "Rewriting the Code"]
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Mentee / Mentor Info' },
    { title: 'Third', description: 'Confirmation' },
  ]
  
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const activeStepText = steps[activeStep].description

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required(),
  });

  const onSubmit = async (values) => {
    window.alert(JSON.stringify(values, null, 2))
    window.alert("trying to submit...")
    try {
      await setDoc(doc(db, "userProfile", userId), values);
      window.alert("submitted")
      redirect(`/user/${userId}`);
    } catch (error) {
      console.log(error)
      window.alert("Error occurred!", error)
    }
    
  };

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
        <Box
          as="form"
          onSubmit={handleSubmit}
        >
        {activeStep == 0 ? <>
          <div className="grid grid-cols-3 gap-x-8 gap-y-4 pb-8 justify-items-center items-end">
            <InputControl name="firstName" label="First Name" />
            <InputControl name="lastName" label="Last Name" />
            <Avatar size='2xl' name={firstName} src={imageURL} />
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pb-8">
            <InputControl name="email" inputProps={{ type: "email" }} label="Email Address" />
            <SelectControl
              name="pronouns"
              label="Pronouns"
              selectProps={{ placeholder: "Select pronouns" }}
            >
              <option value="she/her">she/her</option>
              <option value="he/him">he/him</option>
              <option value="they/them">they/them</option>
              <option value="other">other</option>
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
          <div className="grid justify-end items-end space-x-4">
              <Button colorScheme="yellow" onClick={() => setActiveStep(activeStep+1)}>Next</Button>
          </div>
        </> : <>
        { activeStep == 1 ? <>
          { values.role.includes("Mentor") && <>

          <Heading as="h4" size="md">Work Experience</Heading>
          <FieldArray name="workExperiences">
            {({ insert, remove, push }) => (
              <div>
                {values.workExperiences.map((workExperience, index) => (
                  <>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 pb-2">
                    <InputControl name={`workExperiences.${index}.employer`} label="Employer" />
                    <InputControl name={`workExperiences.${index}.jobTitle`} label="Job Title" />
                    <FormControl name={`workExperiences.${index}.startDate`} label="Start Date">
                      <Field type="date" name={`workExperiences.${index}.startDate`} />
                    </FormControl>
                    <FormControl name={`workExperiences.${index}.endDate`} label="End Date">
                      <Field type="date" name={`workExperiences.${index}.endDate`}/>
                    </FormControl>
                    <TextareaControl name={`workExperiences.${index}.description`} label="Job Description" />
                    <div className="grid align-bottom justify-end items-end">
                      <Button colorScheme="red" rightIcon={<BsTrashFill />} onClick={() => remove(index)}>Delete</Button>
                    </div>
                  </div>
                  </>
                ))}
                <div className="grid align-bottom justify-end items-end">
                  <Button colorScheme="teal" rightIcon={<BsFillPlusCircleFill />} onClick={() => push(emptyExperience)}>Add Experience</Button>
                </div>
              </div>
            )}
          </FieldArray>

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
          </>}
          { values.role.includes("Mentee") && <>
            <FormControl id="interestedCompanies" name="interestedCompanies" label="Companies of Interest">
              <AutoComplete openOnFocus multiple onChange={(value) => values.interestedCompanies = value}>
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
                  {companies.map((field, id) => (
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
          </>}

          <SelectControl
            name="mentorshipLevel"
            label="Profession Level"
            selectProps={{ placeholder: "Profession Level" }}
          >
            <option value="Student">Student</option>
            <option value="Entry-Level">Entry-Level</option>
            <option value="Mid-Level">Mid-Level</option>
            <option value="Senior">Senior</option>
          </SelectControl>

          
          <div className="grid justify-end items-end space-x-4">
            <ButtonGroup>
              <Button colorScheme="yellow" variant="outline" onClick={() => setActiveStep(activeStep-1)}>Back</Button>
              <Button colorScheme="yellow" onClick={() => setActiveStep(activeStep+1)}>Next</Button>
            </ButtonGroup>
          </div>
        
        </> : <>

          <Box as="pre" marginY={10}>
            {JSON.stringify(values, null, 2)}
          </Box>
        
          <div className="grid justify-end items-end space-x-4">
            <ButtonGroup>
              <Button colorScheme="yellow" variant="outline" onClick={() => setActiveStep(activeStep-1)}>Back</Button>
              <SubmitButton>Submit</SubmitButton>
            </ButtonGroup>
          </div>
        </> }</>}
        </Box>
      )}
    </Formik>
    </div>
  );
};

export default Form;

"use client";

import {
  Box,
  Button,
  ButtonGroup,
  FormErrorMessage,
  FormLabel,
  Input,
  Tag,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  FormControl, InputControl, PercentComplete, ResetButton, SelectControl, SubmitButton, TextareaControl,
} from "formik-chakra-ui";
import * as React from "react";
import * as Yup from "yup";
import TagAutoComplete from "./customTagDropdown";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
  sleep(300).then(() => {
    window.alert(JSON.stringify(values, null, 2));
  });
};

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  bio: Yup.string().required(),
});

const Form = ({ firstName, lastName, email, imageURL }) => {

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    pronouns: "",
    bio: "",
    interests: [],
    linkedin: "",
    "github": "",
    "website": "",
    "others": "",
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <div className="p-10 m-auto space-y-2">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
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
          <TagAutoComplete id="interests" label="Field of interests" fields={interestFields} />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <InputControl name="linkedin" label="LinkedIn" />
            <InputControl name="github" label="GitHub" />
            <InputControl name="website" label="Personal Website/Portfolio" />
            <InputControl name="others" label="Others" />
          </div>
          <PercentComplete colorScheme='yellow' />
          <ButtonGroup>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
        </div>
      )}
    </Formik>
  );
};

export default Form;

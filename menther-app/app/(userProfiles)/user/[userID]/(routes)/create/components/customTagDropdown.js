import { Flex, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import * as React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";
import { LoadBundleTask } from "firebase/firestore";
import { useField, useFormikContext } from "formik";



const TagAutoComplete = React.forwardRef((props, ref) => {

  const { name, label, children, fields, ...rest } = props;
  const [field, {error, touched}] = useField(name);
  const { isSubmitting } = useFormikContext();

  let isChecked;
  if (field.value instanceof Array) {
    isChecked = field.value.includes(props.value) ?? false;
  }
  

  return (
    <FormControl name={name} label={label}>
      <FormLabel>{label}</FormLabel>
        <AutoComplete openOnFocus multiple ref={ref} onChange={(value) => {
          field.value = value;
          console.log(field.value)
        }}>
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
            {fields.map((field, id) => (
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
  )
});
 
export default TagAutoComplete;
import { Flex, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import * as React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";

const TagAutoComplete = ({id, label, fields}) => {
  return (
    <FormControl id={id}>
        <FormLabel>{label}</FormLabel>
        <AutoComplete openOnFocus multiple onChange={vals => console.log(vals)}>
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
}
 
export default TagAutoComplete;
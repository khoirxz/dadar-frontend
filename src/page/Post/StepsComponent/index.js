import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { RiAddFill, RiCloseCircleFill } from "react-icons/ri";

const StepsComponent = ({ data, setData, id }) => {
  useEffect(() => {
    if (id) {
      setFields(data?.steps);
    }
  }, [data, id]);
  const [fields, setFields] = useState([{ value: null }]);

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].value = event.target.value;
    // setFields(values);
    setData({ ...data, steps: values });
  };

  const handleAdd = () => {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    setData({ ...data, steps: values });
  };

  const handleRemove = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
    setData({ ...data, steps: values });
  };

  return (
    <FormControl my={5}>
      <FormLabel htmlFor="steps" fontSize="sm" fontWeight="md">
        Tulis langkah-langkah :
      </FormLabel>

      {fields?.map((field, idx) => (
        <InputGroup my={4} key={`${field}-${idx}`}>
          <Input
            name="steps"
            id="steps"
            focusBorderColor="green.100"
            placeholder="Tumis bumbu halus"
            shadow="sm"
            w="full"
            rounded="md"
            onChange={(e) => handleChange(idx, e)}
            isRequired
            autoComplete="off"
            value={field.value || ""}
          />
          <InputRightElement
            children={
              fields.length !== 1 ? (
                <RiCloseCircleFill onClick={() => handleRemove(idx)} />
              ) : (
                <RiCloseCircleFill color="#868a87" />
              )
            }
          />
        </InputGroup>
      ))}

      <IconButton
        width="full"
        my={2}
        aria-label="Add"
        icon={<RiAddFill />}
        bgColor="#e66a6a"
        color="white"
        _active={{
          backgroundColor: "#ff6161",
        }}
        _hover={{
          backgroundColor: "#f28080",
        }}
        onClick={() => handleAdd()}
      />
    </FormControl>
  );
};

export default StepsComponent;

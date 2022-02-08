import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Field, Form, withFormik } from "formik";

const formikWrapper = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  handleSubmit: (values) => console.log("SUBMITTED VALUES:", values),
});

const LoginForm = formikWrapper(() => (
  <Form>
    <FormControl>
      <FormLabel htmlFor="email">Email address</FormLabel>
      <Field as={Input} id="email" type="email" name="email" />
    </FormControl>
    <FormControl mt={6}>
      <HStack alignItems="flex-start" justifyContent="space-between">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Link color="blue.500" fontWeight="bold">
          Forgot Password?
        </Link>
      </HStack>
      <Field as={Input} id="password" type="password" name="password" />
    </FormControl>
    <Button
      size="lg"
      w="100%"
      bgColor="blue.500"
      color="white"
      fontWeight="semibold"
      mt={6}
      type="submit"
    >
      Sign in
    </Button>
  </Form>
));

export default LoginForm;

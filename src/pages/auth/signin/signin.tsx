import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import logo from "assets/images/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { FcKey } from "react-icons/fc";

const SignIn = (): JSX.Element => (
  <Box
    bgColor="gray.700"
    w="100vw"
    h="100vh"
    display="flex"
    flexDir="column"
    alignItems="center"
    px={4}
  >
    <Box mt="74px">
      <Image src={logo.src} />
    </Box>
    <Box color="white" textAlign="center" mt="55px">
      <Heading as="h2">Sign in to your account</Heading>
      <Text mt={4}>
        Don’t have an account?{" "}
        <Link color="red.500" fontWeight="bold" textDecoration="underline">
          Contact Us
        </Link>
      </Text>
    </Box>
    <Box w="448px" bgColor="white" borderRadius={8} py={8} px={10} mt={8}>
      <form>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl mt={6}>
          <HStack alignItems="flex-start" justifyContent="space-between">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Link color="blue.500" fontWeight="bold">
              Forgot Password?
            </Link>
          </HStack>
          <Input id="password" type="password" />
        </FormControl>
        <Button
          size="lg"
          w="100%"
          bgColor="blue.500"
          color="white"
          fontWeight="semibold"
          mt={6}
        >
          Sign in
        </Button>
      </form>
      <Box position="relative" textAlign="center" my={8}>
        <Divider position="absolute" top="50%" />
        <Text
          display="inline-block"
          px={2}
          position="relative"
          zIndex={99}
          bgColor="white"
        >
          or continue with
        </Text>
      </Box>
      <HStack justifyContent="stretch">
        <Button
          variant="outline"
          w="100%"
          color="gray.900"
          leftIcon={<FcGoogle />}
        >
          Google
        </Button>
        <Button
          variant="outline"
          w="100%"
          color="gray.900"
          leftIcon={<FcKey />}
        >
          SSO
        </Button>
      </HStack>
    </Box>
  </Box>
);

export default SignIn;

import {
  Box,
  Text,
  Flex,
  Input,
  Divider,
  Button,
  Heading,
  Center,
  UnorderedList,
  Grid,
  Avatar,
  Img,
} from "@chakra-ui/react";

// Footer added

export const Footer = () => {
  return (
    <Box mt={5}>
      <Box bg={"blackAlpha.50"} padding={5}>
        <Flex justify={"space-between"}>
          <Box textAlign={"left"} marginLeft={0}>
            <Text fontSize={"xl"}>Sign Up for Email</Text>
            <Text
              mt={3}
              fontSize={"md"}
              fontWeight={200}
              fontFamily={"inherit"}
              lineHeight={"20px"}
            >
              Receive early access to new arrivals, sales, exclusive content,
              events and much more!
            </Text>
          </Box>
          <Box>
            <Text textAlign={"left"} fontWeight={400} fontSize={"lg"} mb={3}>
              Email Address*
            </Text>
            <Flex gap={5}>
              <Input
                placeholder="Enter your email address"
                variant={"filled"}
                bg={"white"}
                width={400}
                borderRadius={0}
                borderWidth={1}
                borderStyle={"solid"}
                borderColor={"blackAlpha.800"}
              />

              <Button
                bg={"blackAlpha.800"}
                _hover={{ color: "black", bg: "none" }}
                color="white"
                borderRadius={0}
                borderWidth={1}
                borderStyle={"solid"}
                borderColor={"blackAlpha.800"}
              >
                SUBMIT
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Divider borderWidth={"5"} borderColor={"blackAlpha.500"} mt={7} />
        <Box mt={5}>
          <Grid
            gap={10}
            templateColumns={{ md: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
          >
            <UnorderedList className="list-items" textAlign={"left"}>
              <Text mb={2} fontSize={"md"} fontWeight={400}>
                Help
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Track Your Order
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Return & Exchange
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Shipping
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Customer Services
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Current Promotion
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Product Recalls
              </Text>
            </UnorderedList>
            <UnorderedList className="list-items" textAlign={"left"}>
              <Text mb={2} fontSize={"md"} fontWeight={400}>
                About Us
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Our Story
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Events
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                A Greater Good
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Stories
              </Text>
            </UnorderedList>
            <UnorderedList className="list-items" textAlign={"left"}>
              <Text mb={2} fontSize={"md"} fontWeight={400}>
                Services
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                AnthroPerks
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Gift Cards
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Klarna
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Guides & Services
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Stores & Pickup
              </Text>
            </UnorderedList>
            <UnorderedList className="list-items" textAlign={"left"}>
              <Text mb={2} fontSize={"md"} fontWeight={400}>
                Connect
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Contact Us
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Stay Connected
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Careers
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Styling Services
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Request A catatlog
              </Text>
              <Text fontWeight={300} fontSize={"sm"}>
                Store Locator
              </Text>
            </UnorderedList>
          </Grid>
        </Box>
        <Divider borderWidth={"5"} borderColor={"blackAlpha.500"} mt={7} />
        <Box>
          <Flex gap={5} justify={"center"} margin={5}>
            <Avatar
              _hover={{ cursor: "pointer", boxShadow: "base" }}
              size={"sm"}
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            />
            <Avatar
              size={"sm"}
              _hover={{ cursor: "pointer", boxShadow: "base" }}
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            />
            <Avatar
              size={"sm"}
              _hover={{ cursor: "pointer", boxShadow: "base" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIKllja9ypDAIYMRNv6twRAvvNNJXIjInI2owtCQ&s"
            />
            <Avatar
              size={"sm"}
              _hover={{ cursor: "pointer", boxShadow: "base" }}
              src="https://w0.peakpx.com/wallpaper/813/107/HD-wallpaper-tiktok-logo.jpg"
            />
            <Avatar
              size={"sm"}
              _hover={{ cursor: "pointer", boxShadow: "base" }}
              src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
            />
            <Avatar
              size={"sm"}
              _hover={{ cursor: "pointer", boxShadow: "base" }}
              src="https://pngimg.com/d/pinterest_PNG66.png"
            />
          </Flex>
          <Img src="https://images.ctfassets.net/5de70he6op10/6nrsoJocqQ4U6eqiU4Co20/8e677777fc39ddfb8d739978b79515d3/020123_AnthroPerksLaunch_SiteFooter_LS.jpg" />
        </Box>
        <Divider borderWidth={"5"} borderColor={"blackAlpha.500"} mt={7} />
      </Box>
    </Box>
  );
};

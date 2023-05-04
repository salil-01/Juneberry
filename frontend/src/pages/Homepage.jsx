import { Box, Divider, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Homepage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box padding={7}>
      <Grid gridTemplateColumns={"repeat(4, 1fr)"} gap={2}>
        <Img
          width={"100%"}
          src="https://images.ctfassets.net/5de70he6op10/6cJlIZxdaH7ca8byJOWbO8/2d0d3645b510486977ee3e5a96fe2a88/495283951-ls_m0_banner_c.jpg?w=630&q=80&fm=webp"
        />
        <Img
          width={"100%"}
          src="https://images.ctfassets.net/5de70he6op10/2UC2jkd3poP95pUuyOl1cx/aa23b4b9afcd023c55cb384fbe2abcff/495283960-ls_m0_banner_h.jpg?w=630&q=80&fm=webp"
        />
        <Img
          width={"100%"}
          src="https://images.ctfassets.net/5de70he6op10/2U3XO63HzwxpzqC2f7W20B/187c1de646474bd5ea7b3081cb192132/495283954-ls_m0_banner_e.jpg?w=630&q=80&fm=webp"
        />
        <Img
          width={"100%"}
          src="https://images.ctfassets.net/5de70he6op10/5cOu4Ui5611HHArvXrQNdV/6de14ad2beb96aa703169fca97ff9e61/495283950-ls_m0_banner_b.jpg?w=630&q=80&fm=webp"
        />
      </Grid>
      <Flex gridTemplateColumns={"repeat(2, 1fr)"} gap={4} mt={10}>
        <Img
          width={"66.33%"}
          src="https://images.ctfassets.net/5de70he6op10/4wVzbSpI6ID8KcGVGU4YEg/0983e72b6e8fa8aec4bd1b76b018c683/495283964-ls_m1a.jpg?w=1760&q=80&fm=webp"
        />
        <Img
          width={"33%"}
          src="https://images.ctfassets.net/5de70he6op10/535xsTiyC4DHGuvowscdeA/b0f5c8f7d2b6ec317ad2739a489f8601/495283970-ls_m1b.jpg?w=856&q=80&fm=webp"
        />
      </Flex>
      <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={4} mt={5}>
        <Img src="https://images.ctfassets.net/5de70he6op10/4YhzXIXeypS6qhwJwE1UmJ/aa8c79f62ee1de6392c60aee753a3fc9/495283974-ls_m2a.jpg?w=856&q=80&fm=webp" />
        <Img src="https://images.ctfassets.net/5de70he6op10/7iqzbl2SU2BRRAKUn7bP3U/dacb672e6989fd6ef8c80ec49b4d9e8b/495283977-ls_m2b.jpg?w=856&q=80&fm=webp" />
        <Img src="https://images.ctfassets.net/5de70he6op10/5zq7dWhFEtMLPLDB57Ux9d/69811448499d79bc2d1a5b84f684a8f5/495283980-ls_m2c.jpg?w=856&q=80&fm=webp" />
      </Grid>
      <Grid gap={4} mt={5}>
        <Img src="https://images.ctfassets.net/5de70he6op10/5YVazy6p6NRSq5r0UJZyik/40ab870dc9b33c82e81a0dee81fee6e1/495283984-ls_m3.jpg?w=2641&q=80&fm=webp" />
      </Grid>
      <Grid gap={4} mt={5}>
        <Img src="https://images.ctfassets.net/5de70he6op10/7cPyxsIrQV6WIHCZ4qGrnR/093e4bc8c4ce99b42bc3f5674fca49ec/495283988-ls_m4.jpg?w=2641&q=80&fm=webp" />
      </Grid>
      <Box mt={5} textAlign={"left"}>
        <Text fontSize={"xl"}>Top-Rated Picks</Text>
      </Box>
      <Divider borderWidth={"5"} borderColor={"blackAlpha.500"} mt={3} />
      {/* <Grid gap={4} mt={5}>
        
      </Grid> */}
      <Carousel
        transitionDuration={1}
        keyBoardControl={true}
        infinite={true}
        swipeable={true}
        responsive={responsive}
        // autoPlay={true}
      >
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.ctfassets.net/5de70he6op10/3aS4xJSPsRLSRYqOWOCy9M/1e43125c0d59f05646fb3b13ec391bf7/495283921-ls_customerfave_a.jpg?w=630&q=80&fm=webp"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Bettin ShirtDress
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            I’m obsessed with this dress and have it in 3 colors.
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.ctfassets.net/5de70he6op10/186VttmY6C7Y7xyqF5B83p/9abc3222cd23ed4ff9a386059b3950e7/495283935-ls_customerfave_b.jpg?w=630&q=80&fm=webp"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Pier Slingbacks
          </Text>

          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            Love love love! Extremely comfortable.
          </Text>
          <br />
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>

        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.ctfassets.net/5de70he6op10/5RJhCFhVmyapEkc1cimjSg/a049b4fb804471adad142669c2f3d149/495284019-ss_customerfave_c.jpg?w=1125&q=80&fm=webp"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Naomi Flare Pants
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            These pants have great structure and stretch making them super
            comfortable and flattering.
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.ctfassets.net/5de70he6op10/2EBL8ztboPJO842bDhSREt/380e2fcbf684fddc6855902ffb087511/495284023-ss_customerfave_d.jpg?w=1125&q=80&fm=webp"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Aperture Mirror
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            It is just the right color of gold...It’s elegant and made very
            well.
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.urbndata.com/is/image/Anthropologie/4130318350035_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Somerset Maxi Dress
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            Extremely versatile, for every style. The perfect outfit
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.urbndata.com/is/image/Anthropologie/4130646420031_104_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Somerset Mini Dress
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            The perfect outfit, for everything
          </Text>
          <br />
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.urbndata.com/is/image/Anthropologie/4130578570023_041_b?$an-category$&qlt=80&fit=constrain"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Somerset Mini Dress
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            The perfect outfit, for everything you like
            <br />
            <br />
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
      </Carousel>

      <Box mt={5}>
        <Heading fontWeight={300} fontFamily={"monospace"}>
          More To Explore
        </Heading>
        <Divider borderWidth={"10"} borderColor={"blackAlpha.800"} mt={3} />
      </Box>

      <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={4} mt={5}>
        <Box>
          <Img src="https://images.ctfassets.net/5de70he6op10/795jY9vsHgllpp6tBIpNlt/54269e8671d86ca24da2b49a10257fba/495284000-mte_1.jpg?w=856&q=80&fm=webp" />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            Summer Denim
          </Text>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            Dive deep into a sea of cool blue.
          </Text>
        </Box>
        <Box>
          <Img src="https://images.ctfassets.net/5de70he6op10/5I2jvcqlqyMhysLWGwcdzS/b92825853281f2fe530f106c720de29d/495284004-mte_2.jpg?w=856&q=80&fm=webp" />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            Gone Viral
          </Text>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            See the products everyone is talking about.
          </Text>
        </Box>
        <Box>
          <Img src="https://images.ctfassets.net/5de70he6op10/52jeOJDFZ1YX46tsXmaCAi/6f28bdddc510789e7bdf3406f54ad4cf/495284007-mte_3.jpg?w=856&q=80&fm=webp" />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The ASAP Mother's Day Gift!
          </Text>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            Treat her to what she really wants.
          </Text>
        </Box>
      </Grid>

      <Divider borderWidth={"5"} borderColor={"blackAlpha.500"} mt={7} />
      <Box textAlign={"left"} mt={5}>
        <Text fontSize={"xl"}>About Us</Text>
        <Text
          mt={4}
          fontSize={"md"}
          fontWeight={200}
          fontFamily={"inherit"}
          lineHeight={"20px"}
        >
          Our mission at Anthropologie has always been to surprise and delight
          you with unexpected, distinctive finds for your closet and home. We
          source and craft all of our products with care, ensuring that any
          treasure you find at Anthropologie is unique, just like you. Explore
          our dresses shop to find styles and fits perfect for any occasion,
          from cocktail party dresses to wedding guest dresses to casual daytime
          silhouettes. Shop Anthropologie Weddings and take a look at our
          selection of wedding dresses and bridesmaids dresses. Browse party
          skirts, wide-leg pants and jeans, and blouses that will turn heads.
          Complete your look with uncommon accessories—think only-here slides
          and head-turning totes. Discover our expansive home collections, from
          furniture to curtains, decorative pillows to duvets, wall art to
          Moroccan-inspired rugs. Looking for a housewarming gift? Try a coffee
          table book, original glassware or a set of coasters.
        </Text>
      </Box>
    </Box>
  );
};

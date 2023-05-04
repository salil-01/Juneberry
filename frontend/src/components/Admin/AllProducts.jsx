import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Th,
  Tr,
  IconButton,
  Flex,
  Input,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSort } from "react-icons/bi";
import { useState } from "react";
import { ProductRow } from "./ProductRow";
const productData = [
  {
    _id: "64522cd8278fb6ceb2f28137",
    name: "Pilcro The Romy Relaxed Buttondown",
    img: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_019_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    price: 7399.47,
    mrp: 8057.2,
    brand: "Pilcro",
    rating: 4.2,
  },
  {
    _id: "64522cd8278fb6ceb2f28137",
    name: "Pilcro The Romy Relaxed Buttondown",
    img: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_019_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    price: 7399.47,
    mrp: 8057.2,
    brand: "Pilcro",
    rating: 4.2,
  },
  {
    _id: "64522cd8278fb6ceb2f28137",
    name: "Pilcro The Romy Relaxed Buttondown",
    img: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_019_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    price: 7399.47,
    mrp: 8057.2,
    brand: "Pilcro",
    rating: 4.2,
  },
  {
    _id: "64522cd8278fb6ceb2f28137",
    name: "Pilcro The Romy Relaxed Buttondown",
    img: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_019_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    price: 7399.47,
    mrp: 8057.2,
    brand: "Pilcro",
    rating: 4.2,
  },
  {
    _id: "64522cd8278fb6ceb2f28137",
    name: "Pilcro The Romy Relaxed Buttondown",
    img: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_019_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    price: 7399.47,
    mrp: 8057.2,
    brand: "Pilcro",
    rating: 4.2,
  },
];
const SearchField = ({ field, onSearch }) => {
  const [search, setSearch] = useState(false);
  const [text, setText] = useState("");
  const closeSearch = () => {
    setSearch((state) => !state);
  };
  return (
    <Flex align="center" justify="space-between">
      {search ? (
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="xs"
          placeholder={`Search ${field}`}
        />
      ) : (
        <Text>{field}</Text>
      )}
      <IconButton
        onClick={() => (search ? onSearch(text) : setSearch((state) => !state))}
        bg="transparent"
        aria-label="search"
        size="xs"
        icon={<BiSearchAlt2 />}
      />
      <CloseButton
        size="sm"
        display={search ? "flex" : "none"}
        onClick={() => closeSearch()}
      />
    </Flex>
  );
};
const SortFields = ({ text }) => {
  return (
    <Flex align="center" justify="space-between">
      <Text>{text}</Text>
      <IconButton
        bg="transparent"
        aria-label="search productName"
        size="xs"
        icon={<BiSort />}
      />
    </Flex>
  );
};
export const AllProducts = () => {
  const onSearch = () => {};
  return (
    <Table size="sm" border={"1px solid red"}>
      <Thead>
        <Tr border={"1px solid red"}>
          <Th>
            <SearchField field={"Name"} onSearch={onSearch} />
          </Th>
          <Th>
            <SearchField field={"ID"} onSearch={onSearch} />
          </Th>
          <Th>
            <SortFields text="MRP ($)" />
          </Th>
          <Th>
            <SortFields text="Price ($)" />
          </Th>
          <Th>
            <SortFields text="Brand" />
          </Th>
          <Th>
            <SortFields text="Rating" />
          </Th>
          <Th>
            <Text>EDIT</Text>
          </Th>
          <Th>
            <Text>DELETE</Text>
          </Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {productData?.map((element) => (
          <ProductRow key={element._id} {...element} />
        ))}
      </Tbody>
      <Tfoot></Tfoot>
    </Table>
  );
};

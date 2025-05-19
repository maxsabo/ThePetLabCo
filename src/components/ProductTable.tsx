import React from "react";
import { Table, Box } from "@chakra-ui/react";
import { Product } from "../types";

interface ProductTableProps {
  products: Product[];
}

function ProductTable({ products }: ProductTableProps) {
  return (
    <Box p={4}>
      <Table.Root variant="outline" size="md" bg="white" borderColor="gray.200">
        <Table.Header bg="gray.50">
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Title</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
            <Table.ColumnHeader>Tags</Table.ColumnHeader>
            <Table.ColumnHeader>Subscription</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.id}</Table.Cell>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>${product.price}</Table.Cell>
              <Table.Cell>{product.tags.join(", ")}</Table.Cell>
              <Table.Cell>{product.subscription ? "Yes" : "No"}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

export default ProductTable;

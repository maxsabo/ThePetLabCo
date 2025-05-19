import React, { useEffect, useState } from "react";
import { Box, HStack, Heading, VStack, Center } from "@chakra-ui/react";
import ProductTable from "./components/ProductTable";
import FilterSidebar from "./components/FilterSidebar";
import Pagination from "./components/Pagination";
import { Product } from "./types";
import { getProducts } from "./services/api";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<{
    tags?: string;
    price?: number;
    subscription?: boolean;
  }>({});
  const itemsPerPage = 12;

  useEffect(() => {
    setIsLoading(true);
    getProducts({ ...filters, page, limit: itemsPerPage })
      .then(({ data, total }) => {
        setProducts(data);
        setTotalItems(total);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, [filters, page]);

  const handleFilterChange = (newFilters: {
    tags?: string;
    price?: number;
    subscription?: boolean;
  }) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Center bg="blue.100" p={4} borderBottom="1px" borderColor="blue.200" shadow="md">
        <Heading size="2xl" textTransform="uppercase" color="gray.600">
          Pet Lab Co Product Catalog
        </Heading>
      </Center>
      <VStack align="stretch" gap={4} p={7}>
        <HStack gap={8} align="start">
          <Box w="250px">
            <Heading size="md" mb={2} color="gray.700">
              Filters
            </Heading>
            <FilterSidebar onFilterChange={handleFilterChange} />
          </Box>
          <Box flex="1">
            {isLoading ? (
              <Center minH="200px">
                <Box color="gray.500">Loading...</Box>
              </Center>
            ) : products.length > 0 ? (
              <>
                <ProductTable products={products} />
                <Pagination
                  currentPage={page}
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <Center minH="200px">
                <Box color="gray.500">No products found for this filter</Box>
              </Center>
            )}
          </Box>
        </HStack>
      </VStack>
    </>
  );
}

export default App;
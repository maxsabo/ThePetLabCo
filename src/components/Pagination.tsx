import React from "react";
import { Button, HStack } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <HStack gap={2} justify="center" mt={4}>
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        size="sm"
        bg="blue.500"
        color="white"
        _hover={{ bg: "blue.600" }}
        _disabled={{ bg: "gray.300", cursor: "not-allowed" }}
      >
        Previous
      </Button>
      {getPageNumbers().map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          size="sm"
          bg={currentPage === page ? "blue.500" : "gray.100"}
          color={currentPage === page ? "white" : "gray.700"}
          _hover={{ bg: currentPage === page ? "blue.600" : "gray.200" }}
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        size="sm"
        bg="blue.500"
        color="white"
        _hover={{ bg: "blue.600" }}
        _disabled={{ bg: "gray.300", cursor: "not-allowed" }}
      >
        Next
      </Button>
    </HStack>
  );
}

export default Pagination;
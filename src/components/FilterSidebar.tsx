import React, { ChangeEvent, useState } from "react";
import {
  VStack,
  Input,
  Button,
  Fieldset,
  NativeSelect,
} from "@chakra-ui/react";

interface FilterSidebarProps {
  onFilterChange: (filters: {
    tags?: string;
    price?: number;
    subscription?: boolean;
  }) => void;
}

function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [tags, setTags] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [subscription, setSubscription] = useState<string>("");

  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTags(value);
    onFilterChange({
      tags: value || undefined,
      price: price ? parseFloat(price) : undefined,
      subscription: subscription === "" ? undefined : subscription === "Yes",
    });
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(value);
    const parsedPrice = parseFloat(value);
    onFilterChange({
      tags,
      price: isNaN(parsedPrice) ? undefined : parsedPrice,
      subscription: subscription === "" ? undefined : subscription === "Yes",
    });
  };

  const handleSubscriptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSubscription(value);
    onFilterChange({
      tags,
      price: price ? parseFloat(price) : undefined,
      subscription: value === "" ? undefined : value === "Yes",
    });
  };

  const handleReset = () => {
    setTags("");
    setPrice("");
    setSubscription("");
    onFilterChange({});
  };

  return (
    <VStack align="stretch" gap={4}>
      <Fieldset.Root>
        <Fieldset.Legend>Tags</Fieldset.Legend>
        <Fieldset.Content>
          <Input
            placeholder="e.g., Dog, Cat"
            value={tags}
            onChange={handleTagChange}
          />
        </Fieldset.Content>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Legend>Price</Fieldset.Legend>
        <Fieldset.Content>
          <Input
            type="number"
            placeholder="e.g., 30"
            value={price}
            onChange={handlePriceChange}
          />
        </Fieldset.Content>
      </Fieldset.Root>
      <Fieldset.Root>
        <Fieldset.Legend>Subscription</Fieldset.Legend>
        <Fieldset.Content>
          <NativeSelect.Root>
            <NativeSelect.Field
              value={subscription}
              onChange={handleSubscriptionChange}
            >
              <option value="">Select option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Fieldset.Content>
      </Fieldset.Root>
      <Button
        colorScheme="blue"
        variant="solid"
        bg="blue.500"
        color="white"
        onClick={handleReset}
      >
        Reset Filters
      </Button>
    </VStack>
  );
}

export default FilterSidebar;

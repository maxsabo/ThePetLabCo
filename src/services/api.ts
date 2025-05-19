import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3010",
});

export const getProducts = async (params: {
  page?: number;
  limit?: number;
  tags?: string;
  price?: number;
  subscription?: boolean;
}) => {
  const modifiedParams = {
    _page: params.page,
    _limit: params.limit,
    ...(params.tags && { tags_like: params.tags }),
    ...(typeof params.price === "number" && {
      price_gte: params.price - 1,
      price_lte: params.price + 1,
    }),
    ...(typeof params.subscription === "boolean" && {
      subscription: params.subscription,
    }),
  };
  const response = await api.get("/products", { params: modifiedParams });
  return {
    data: response.data,
    total:
      parseInt(response.headers["x-total-count"], 10) || response.data.length,
  };
};

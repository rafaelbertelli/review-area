export const mockGetProductsResult = {
  data: {
    products: {
      results: [
        {
          id: 1,
          title: "Product 1",
          price: 1,
          description: "",
          thumbnail: "",
          permalink: "",
        },
        {
          id: 2,
          title: "Product 2",
          price: 2,
          description: "This is the famous product 2",
          thumbnail: "https://www.thumbnail.com/150x150",
          permalink: "https://www.permalink.com",
        },
      ],
    },
  },
};

export const mockSearchProductsResult = {
  data: {
    products: {
      results: [
        {
          id: 2,
          title: "Product 2",
          price: 2,
          description: "This is the famous product 2",
          thumbnail: "https://www.thumbnail.com/150x150",
          permalink: "https://www.permalink.com",
        },
      ],
    },
  },
};

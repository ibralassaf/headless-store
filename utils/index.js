export async function storeFront(query, variables = {}) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return await response.json();
}

export function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

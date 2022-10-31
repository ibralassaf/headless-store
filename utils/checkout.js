export async function storeFrontCheckout(query, variables = {}) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL_TEST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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

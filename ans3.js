const exRate = 80;

const itemsInUSD = {
  Samsung_Galaxy: 140, 
  Iphone_13: 400,
  Redmi_5: 60,
  Vivo_v5 : 150,
  Tecno_x : 300,
};

function convertToINR(priceInUSD) {
  return priceInUSD * exRate;
}

const itemsInINR = Object.fromEntries(
  Object.entries(itemsInUSD).map(([item, price]) => [item, convertToINR(price)])
);

console.log("Items in INR:", itemsInINR);

const URL = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${
  import.meta.env.VITE_API_KEY
}`;

export const getRates = async () => {
  try {
    const response = await fetch(`${URL}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Something went wrong");
  }
};

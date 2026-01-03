export const getDummyAIResponse = (message) => {
  const msg = message.toLowerCase();

  if (msg.includes("rice"))
    return "🌾 Rice Seeds are best sown during Kharif season (Oct-Jan). Seed rate is 1.5-2 Kg/Ha with an average yield of 240 Q/Ha.";

  if (msg.includes("wheat")) {
    return "🌾 Wheat Seeds are Rabi crops. Ideal sowing time is Nov-Dec. Seed rate: 100 Kg/Ha.";
  }

  return "🤖 I'm still learning! Please ask about Rice, Wheat, or other Dinkar Seeds products.";
};

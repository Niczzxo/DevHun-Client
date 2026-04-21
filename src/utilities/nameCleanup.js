export const cleanupName = (name) => {
  if (!name) return name;

  const mapping = {
    "Md. Rakibul Islam": "Niczzxo",
    "WebAgency Pro": "Niczzxo",
  };

  return mapping[name] || name;
};

/**
 * Utility to clean up specific names for branding purposes.
 * Replaces old placeholder names with new project-aligned names.
 */
export const cleanupName = (name) => {
  if (!name) return name;
  
  const mapping = {
    "Md. Rakibul Islam": "Niczzxo",
    "WebAgency Pro": "Niczzxo",
  };

  return mapping[name] || name;
};

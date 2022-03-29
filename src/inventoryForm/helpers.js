const defaultPast = new Date("2022-03-28").getTime();
const nAlias = ["o", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export const getCodeId = (neverUsedPast = defaultPast) => {
  /* Only letters, no I and Q symbols */
  const base24 = Math.round((Date.now() - neverUsedPast) / 3000) // new code - every 3 sec
    .toString(24); // String with 24 radix: 0-9 and A-N symbols

  return base24
    .replace(/\d/gi, (match) => {
      // replace numbers with the rest of letters
      return nAlias[match];
    })
    .replace(/i/gi, "p") // replace I with P
    .toUpperCase();
};

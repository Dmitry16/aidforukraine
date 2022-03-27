const defaultPast = 1648252800000; // new Date("2022-03-26").getTime()
export const getCodeId = (neverUsedPast = defaultPast) => (Date.now() - neverUsedPast)
    .toString(36)
    .toUpperCase();
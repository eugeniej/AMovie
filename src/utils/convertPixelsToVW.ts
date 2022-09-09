const pixelsToVW = (size: number, width = 1440) => `${(size / width) * 100}vw`;

export default pixelsToVW;

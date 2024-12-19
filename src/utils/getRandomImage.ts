export const getRandomImage = () => {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

export const generateNewUrl = (username: string, shortUrl: string) => {
  return `https://${username}.co/${shortUrl}`;
}
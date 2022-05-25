export const generateRandomString = (length = 6) => Math.random().toString(36).substring(13 - length);

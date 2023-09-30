const urlRegex = /^(https?:\/\/)[A-Za-z0-9-_.]+[A-Za-z]+$/;

function isValidURL(input) {
  return urlRegex.test(input);
}

const testURLs = [
  "http://www.google.com",
  "https://sub.youtube.co.uk",
  "ftp://invalid-url.com",
  "https://123",
  "http://twitter",
];

testURLs.forEach(url => {
  if (isValidURL(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
});

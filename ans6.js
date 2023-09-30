const pattern = /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;

function isValidLinkedInURL(input) {
  return pattern.test(input);
}

const testURLs = [
    "https://www.linkedin.com/in/adarsh-tiwari-515501231",
    "https://www.linkedin.com/in/saumya",
  "https://www.linkedin.com/in/vishal",
  "https://www.linkedin.com/anupriya", 
  "https://www.linkedin.com/in/yashgautam", 
  "https://www.linkedin.com/in/ayushSingh", 
];
testURLs.forEach(url => {
  if (isValidLinkedInURL(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
});

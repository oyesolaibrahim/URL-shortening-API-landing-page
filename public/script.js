const hamburger = document.querySelector(".fa");
const div = document.querySelector(".div");

const menuOpen = () => {
  const hamburger = document.querySelector(".fa");
  const div = document.querySelector(".div");

  if (div.classList.contains("sm:hidden")) {
    div.classList.remove("sm:hidden");
    hamburger.style.opacity = "0.5";
  } else {
    div.classList.add("sm:hidden");
    hamburger.style.opacity = "1";
  }
};

document.getElementById('shortenButton').addEventListener('click', function() {
  var input = document.getElementById('urlInput').value;
  var output = document.getElementById('shortenedUrl');
  
  if (input) {
      var shortenedUrl = shortenUrl(input);
      output.textContent = 'Shortened URL: ' + shortenedUrl;
      output.style.color = 'white'; 
  } else {
      output.textContent = 'Please enter a URL to shorten';
      output.style.color = 'red';  
  }
});
function shortenUrl(url) {
  return url.length > 15 ? url.slice(0, 15) + '...' : url;
}


function isTokenValid(token) {
  debugger;
    if(token === undefined || token === null || token === "undefined"){
        return false;
    }
  // Decode the token to extract the expiration time
  const tokenParts = token.split(".");
  const base64Url = tokenParts[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const decodedToken = JSON.parse(atob(base64));

  // Get the expiration time from the decoded token
  const expirationTime = new Date(decodedToken.exp * 1000); // Convert to milliseconds

  // Get the current time
  const currentTime = new Date();

  // Compare the current time with the expiration time
  return currentTime < expirationTime;
}

module.exports = { isTokenValid };

document.getElementById("loginButton").addEventListener("click", login);

// Current page Parameters
function getCurrentPageParrameters_id_v() {
  // Extract the query parameters from the URL
  const searchParams = new URLSearchParams(new URL(homeURL).search);
  let idValue = searchParams.get("id");
  let vValue = searchParams.get("v");
  const value = {id: idValue,v: vValue,};
  return value;
}

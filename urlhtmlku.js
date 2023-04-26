var uri = window.location.toString();
if (uri.indexOf("&.html","&.html") > 0) {
  var clean_uri = uri.substring(0, uri.indexOf("&.html"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf(".html",".html") > 0) {
  var clean_uri = uri.substring(0, uri.indexOf(".html"));
    window.history.replaceState({}, document.title, clean_uri);
}
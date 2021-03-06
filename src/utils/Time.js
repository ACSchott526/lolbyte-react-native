export function formatTimestamp(timestamp) {
  var dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  var date = new Date(0);
  date.setUTCMilliseconds(timestamp);
  return date.toLocaleDateString('en-us', dateOptions);
}

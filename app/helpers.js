export const slugify = (string) =>
  string
    .replace(/[\s,üäö]/g, function (match) {
      switch (match) {
        case ",":
          return "-";
        case "ü":
          return "ue";
        case "ä":
          return "ae";
        case "ö":
          return "oe";
        default:
          return "-";
      }
    })
    .slice(0, -1);

export const getPreference = () => {
  try {
    return localStorage.getItem('youtube-cookies') === 'accept'
  } catch (err) {
   return false
  }
}

export const setLocalPreference = () => {
  try {
    localStorage.setItem('youtube-cookies', 'accept')
  } catch (err) {

  }
}
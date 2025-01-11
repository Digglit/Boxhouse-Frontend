const dateFormatter = (dateString, formatMode) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  switch (formatMode) {
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "mm/dd/yyyy":
      return `${month}/${day}/${year}`;
    // Return month (with the name of the month) day, year
    case "mm dd, yyyy":
      return `${date.toLocaleString("default", {
        month: "long",
      })} ${day}, ${year}`;
    default:
      return `${month}/${day}/${year}`;
  }
};

export default dateFormatter;

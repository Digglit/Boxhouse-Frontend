// formatMode will come through as something like dd/mm/yyyy or mm/dd/yyyy
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
    default:
      return `${day}/${month}/${year}`;
  }
};

export default dateFormatter;

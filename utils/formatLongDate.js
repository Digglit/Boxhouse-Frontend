const formatLongDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default formatLongDate;

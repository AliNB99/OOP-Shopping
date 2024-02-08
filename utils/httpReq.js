const getData = async () => {
  const response = await fetch("data.json");
  const json = await response.json();
  return json;
};

export { getData };

const useFilter = (userInput, Collection) => {
  const searchedResult = userInput && userInput.toLowerCase();
  let filtereddata;
  if (Collection) {
    filtereddata = Collection.filter((data) =>
      data.Title.toLowerCase().includes(searchedResult)
    );
  }
  return filtereddata;
};

export default useFilter;

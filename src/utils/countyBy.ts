function countBy(arr: (string | number)[]): CountList {
  const counterObj = arr.reduce((acc: CountList, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  return counterObj;
}

export default countBy;

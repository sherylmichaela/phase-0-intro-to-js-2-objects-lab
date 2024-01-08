const employee = { name: "Sheryl", streetAddress: "5 Northumberland Road" };

let updateEmployeeWithKeyAndValue = (obj, key, value) => {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
};

const employeeSamName = updateEmployeeWithKeyAndValue(employee, "name", "Sam");

let destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

const employeeSamAddress = destructivelyUpdateEmployeeWithKeyAndValue(
  employeeSamName,
  "streetAddress",
  "11 Broadway"
);

let deleteFromEmployeeByKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj.name;
  return newObj;
};

const newEmployee = deleteFromEmployeeByKey(employee);

let destructivelyDeleteFromEmployeeByKey = (obj, key) => {
  delete obj.name;
  return obj;
};

const deleteNewEmployee = destructivelyDeleteFromEmployeeByKey(employee);

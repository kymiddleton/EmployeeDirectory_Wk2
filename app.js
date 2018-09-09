const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const printEmployee = function (i) {
  render("name: " + employeeList[i].name + " / office: " + employeeList[i].officeNum + " / phone: " + employeeList[i].phoneNum);
  return true;
}

const printList = function () {
  for (i = 0; i < employeeList.length; i++) {
    printEmployee(i);
  }
  return true;
}

const findEmployee = function (startIndex, employeeName) {
  for (i = startIndex; i < employeeList.length; i++) {
    if (employeeList[i].name.includes(employeeName)) {
      return i;
    }
  }
  return -1;
}

const verify = function () {
  const employeeName = prompt('enter employee name');
  const index = findEmployee(0, employeeName);
  if (index > -1) {
    render("true");
  } else { render("false"); }
  return true;
}

const lookup = function () {
  let index = 0;
  const employeeName = prompt('enter employee name');
  index = findEmployee(0, employeeName);
  if (index > -1) {
    printEmployee(index);
  } else { render("Not Found"); }
  return true;
}

const contains = function () {
  let index = 0;
  const toFind = prompt('enter partial employee name');
  while (index > -1) {
    index = findEmployee(index, toFind);
    printEmployee(index);
    index++;
  }
  return true;
}

const update = function () {
  const employeeName = prompt('enter employee name');
  const field = prompt('enter field to update (name, office, phone)');
  const newValue = prompt('enter new value for ' + field);
  index = findEmployee(0, employeeName);
  if (field === "name") {
    employeeList[index].name = newValue;
  } else if (field === "office") {
    employeeList[index].officeNum = newValue;
  } else if (field === "phone") {
    employeeList[index].phoneNum = newValue;
  } else {
    render("invalid command");
  }
  printEmployee(index);
  return true;
}

const addEmployee = function () {
  const name = prompt('enter employee name');
  const officeNum = prompt('enter office number');
  const phoneNum = prompt('enter telephone number');
  employeeList.push({ name, officeNum, phoneNum });
  printList();
  return true;
}

const deleteEmployee = function () {
  const employeeName = prompt('enter employee name');
  index = findEmployee(0, employeeName);
  employeeList.splice(index, 1);
  printList();
  return true;
}

const phoneLookup = function () {
  const employeeName = prompt('which employee');
  const index = findEmployee(0, employeeName);
  render(employeeList[index].phoneNum);
  return true;
}

const command = prompt("enter command");
if (command === "print") {
  printList();
} else if (command === "verify") {
  verify();
} else if (command === "lookup") {
  lookup();
} else if (command === "contains") {
  contains();
} else if (command === "update") {
  update();
} else if (command === "add") {
  addEmployee();
} else if (command === "delete") {
  deleteEmployee();
} else if (command === "phone") {
  phoneLookup();
} else (render("invalid command"));


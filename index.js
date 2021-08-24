const employee = {};
employee.name = ["Zack"];
employee.address = ['113 E 36th'];

console.log(employee);

function updateEmployeeWithKeyAndValue (object, key, value) { 
    const newEmployee = {...object};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value) { 
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey (object, key) { 
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object,key) {
    delete object[key];
    return object;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee,['address']));












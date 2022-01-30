const employee = {
    "name": "Jim",
    "streetAddress": "",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, "name": `Sam`}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [streetAddress]: `11 Broadway`}
}


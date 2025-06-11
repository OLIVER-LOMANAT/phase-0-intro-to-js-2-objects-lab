// Write your solution in this file!
const employee = {
    name: "Dida",
    streetAddress: 30501,
}

function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newObj = {...obj}
    newObj[key] = value
    return newObj
}
const employee2 = updateEmployeeWithKeyAndValue(employee,"lab",2)
console.log(employee2)

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value
   
    return obj
}
const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Dida")
console.log(employee3)


function deleteFromEmployeeByKey(obj,key) {
    const newObj = {...obj}

    delete newObj[key]
    return newObj
}
console.log(deleteFromEmployeeByKey(employee,"name"))

function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete obj[key]
    return obj
}
console.log(destructivelyDeleteFromEmployeeByKey(employee,"name"))
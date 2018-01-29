const csvFilePath = 'customer-data.csv'
const csv = require('csvtojson')
const fs = require('fs')

let arr = []

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
	arr.push(jsonObj)
})
.on('done',(error)=>{
	arr = JSON.stringify(arr)
	fs.writeFile("customer-data-module.json", arr, "utf-8", function(error) {
        if (error) {
            return console.log(error)
        }
    })
    console.log(arr)
})
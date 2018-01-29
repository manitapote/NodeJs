const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '/customer-data.csv'), {encoding: 'utf-8'}, function(error, data) {
	if (error) return console.error(error)

    var tt = data.split('\n')
    var attributes = tt[0].split(',')
    var obj = {}
    var combine =  [];
    var entity = []
    var object = {}
    
    for (var j = 1; j < tt.length - 1; j++) { 
        entity = tt[j].split(',')
    	for (var i = 0; i < attributes.length ; i++) {
    		obj[attributes[i]] = entity[i]
        }
            
        combine.push(obj)
    }
    console.log(JSON.stringify(combine));
})

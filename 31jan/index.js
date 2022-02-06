var obj = {
    "first_name" : "kritika",
    "last_name" : "pathak",
    "email" : "kritikapathak744@gmail.com",
     "roll_no." : "22",
     "students" : [ 
	{
	  "name" : "taran",
	  "marks" : 20
	},
	{
	  "name" : "siddiqua",
	  "marks" : 8
	},
	{
	  "name" : "neha",
	  "marks" : 11
	},
	{
	  "name" : "mehak",
	  "marks" : 32
	},
	{
	  "name" : "avantika",
	  "marks" :15
	},
	{
	  "name" : "shradha",
	  "marks" : 17
	},
	
        ]
}

var ip = prompt("Enter marks to check  list of student who scored equal to or above the given score.")
var ip = parseInt(ip)
var len = obj.students.length

for(var i = 0 ; i<len ; i++){
     var a = obj.students[i]
     var name = a.name
     var marks = a.marks
     if(ip<=marks){
         console.log("Name  : ",name,"\n")
         console.log("Marks : ",marks,"\n")
     }
}
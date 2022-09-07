var data;

function display(){
    var req = new XMLHttpRequest();
    req.open("GET","Students.json",true);
    req.send();
    req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
           var temp = JSON.parse(req.responseText)
            console.log(temp);
            data=temp;
            console.log(data);
            rendertable();
    }
 }
    
}


function update(){
    var sid = document.getElementById("studentId").value
    console.log(sid);
    var ftype = document.getElementById("fieldType").value
    //console.log(ftype);
    if(ftype === "dob" || ftype === "doj"){
        ftype = ftype.toUpperCase();
    }
    console.log(ftype);
    var fval = document.getElementById("fieldValue").value
    console.log(fval);

    data[sid-1].ftype=fval;
    console.log(data[sid-1].ftype);
    console.log(data[sid-1]);
    console.log("ftype:"+data[sid-1].ftype);

    rendertable();
}

function rendertable(){
            var htmlstring="<tr><th>Id</th><th>Name</th><th>DOB</th><th>Mobile Number</th><th>Email</th><th>Address</th> <th>DOJ</th> <th>Department</th> <th>Mark</th></tr>";
            for(var i=0 ; i<data.length ; i++){
                htmlstring+="<tr>";
                htmlstring += "<td>"+data[i].id+"</td>"
                                                +"<td>"+data[i].name+"</td>"
                                                +"<td>"+data[i].DOB+"</td>"
                                                +"<td>"+data[i].mobileNumber+"</td>"
                                                +"<td>"+data[i].email+"</td>"
                                                +"<td>"+data[i].address+"</td>"
                                                +"<td>"+data[i].DOJ+"</td>"
                                                +"<td>"+data[i].department+"</td>"
                                                +"<td>"+data[i].mark+"</td>";
                htmlstring+="</tr>";
            }
            document.getElementById("table").innerHTML=htmlstring;
}

// function renderHMTL(){
//     //console.log("js_loaded");
//                 var htmlstring="";
//             for(var i=0 ; i<ourData.length ; i++){
//                 htmlstring+="<tr>";
//                 htmlstring += "<td>"+ourData[i].id+"</td>"
//                                                 +"<td>"+ourData[i].name+"</td>"
//                                                 +"<td>"+ourData[i].DOB+"</td>"
//                                                 +"<td>"+ourData[i].mobileNumber+"</td>"
//                                                 +"<td>"+ourData[i].email+"</td>"
//                                                 +"<td>"+ourData[i].address+"</td>"
//                                                 +"<td>"+ourData[i].DOJ+"</td>"
//                                                 +"<td>"+ourData[i].department+"</td>"
//                                                 +"<td>"+ourData[i].mark+"</td>";
//                 htmlstring+="</tr>";
//             }
//             console.log(document.getElementById("table").innerHTML);
//             document.getElementById("table").innerHTML+=htmlstring;
    
// }


//  var btn = document.getElementById("btn")
//  var sid = document.getElementById("studentId")
// var ftype = document.getElementById("fieldType")
// var fVal = document.getElementById("fieldValue") 
// var tablerow = document.getElementById("tablerow")

// var ourRequest = new XMLHttpRequest();
// ourRequest.open("GET","Students.json",true)
//  ourRequest.onload() = function(){
//  var ourData = JSON.parse(ourRequest.responseText)
//  console.log(ourData)
//  display(ourData)
//  ourRequest.send()

// function display(data){
    
// }   



// // btn.addEventListener("click",function(){
// //         fVal.innerText = ourData[sid-1].ftype()
// //     }
// // });
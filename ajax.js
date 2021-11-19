// var xhr= new XMLHttpRequest();
// xhr.open("get","grocery.json");
// document.getElementById("btn").addEventListener("click",function(){
// xhr.send();
// })
// xhr.onreadystatechange= function (){
//     if (xhr.readyState==4 && xhr.status==200){

//         var aj = JSON.parse(xhr.responseText);
//        var its=aj.content;
//       var output="";
//       for(i=0;i<its.length;i++){
//           var result=its[i];
          
//           output= output+"<tr><td>"+result.sl+"</td><td>"+result.name+"</td><td>"+result.quant+"</td><td>"+result.unit+"</td><td>"+result.dep+"</td><td>"+result.notes+"</td></tr>";
      
//       }
      
//       document.getElementById("grocery").innerHTML=output;
//     }
// }
function ajax(){

  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){

      if(this.readyState==4&&this.status==200){
          var response=JSON.parse(this.responseText);
          console.log(response);
          var gro=response.grocery;
          console.log(gro);
          var out="";
           out+="<table>"+"<tr>"+
           "<th>"+"SLNO"+"</th>"+
           "<th>"+"NAME"+"</th>"+
           "<th>"+"QUANTITY"+"</th>"+
           "<th>"+"UNIT"+"</th>"+
           "<th>"+"DEPARTMENT"+"</th>"+
           "<th>"+"NOTES"+"</th>"+"</tr>"+"</table>";
          
          
          
           var output="";
          for(var i=0;i<gro.length;i++){
           output+="<table>"+"<tr>"+"<td>"+gro[i].SLNO+"</td>"+
           "<td>"+gro[i].NAME+"</td>"+
           "<td>"+gro[i].QUANTITY+"</td>"+
           "<td>"+gro[i].UNIT+"</td>"+
           "<td>"+gro[i].DEPARTMENT+"</td>"+
           "<td>"+gro[i].NOTES+"</td>"+
           "</tr>"+"</table";
      

           }
       document.getElementById("list").innerHTML=output;
      }
  }
  xhttp.open("GET","grocery.json",true);
  xhttp.send();
}


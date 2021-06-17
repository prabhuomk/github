var a=document.getElementById('myform')
a.addEventListener('submit',function(e){
    e.preventDefault()
    var search=document.getElementById('search').value

var originalname=search.split(" ").join("")

    fetch("https://api.github.com/users/"+originalname+"/repos?per_page=100&type=owner",
    {
        headers:{
             "Accept": "application/vnd.github.v3+json",
        }
    })
    .then((res)=>{
        return res.json()})
    .then((a)=>{
        console.log(a)
        var table=document.createElement('table');
table.setAttribute('class','table');

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr=document.createElement('tr');
tr.style.backgroundColor="grey"
var th1=document.createElement('td');
th1.innerHTML="S.no";
var th2=document.createElement('td');
th2.innerHTML="ID";
var th3=document.createElement('td');
th3.innerHTML="Repository Name";
var th4=document.createElement('td');
th4.innerHTML="Repository url";
tr.append(th1,th2,th3,th4);
thead.append(tr);

var tbody=document.createElement('tbody');
tbody.style.backgroundColor="pink"
tbody.setAttribute('class','tbody-dark');
table.append( thead,tbody);
document.body.append(table);


        for(var i in a)
        {
            var d=a[i].id;
            var e=a[i].name;
            var f=a[i].url;
            
            ta(i,d,e,f)
        }
        function ta(q,x,y,z){
            
            var tr1=document.createElement('tr');
            var td1=document.createElement('td');
            td1.innerHTML=i;
            var td2=document.createElement('td');
            td2.innerHTML=x;
            var td3=document.createElement('td');
            td3.innerHTML=y;
            var td4=document.createElement('td');
            td4.innerHTML=z;
            
            tr1.append(td1,td2,td3,td4);
            
             
             tbody.append(tr1);
            return;
        }
           

    })
    .catch((err)=>{

    console.log(err);
    });
})

var m=document.getElementById('myform1')
m.addEventListener('submit',function(k){
    k.preventDefault()
    var search=document.getElementById('search1').value



    fetch("https://api.github.com/repos/"+search+"/commits",
    {
        headers:{
             "Accept": "application/vnd.github.v3+json",
        }
    })
    .then((res)=>{
        return res.json()})
    .then((a)=>{
        var c=a[0].commit.tree.url
        ma(c);
       
    })
    .catch((err)=>{

    console.log(err);
    });


function ma(x){
    var table=document.createElement('table');
table.setAttribute('class','table1');

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');
thead.innerHTML=x;
table.append( thead);
document.body.append(table);


}
})




let input = document.getElementById("input_text");
let list =document.getElementById("list");
let sentence= document.getElementById("count");
let count=0;

function add()
{
    if(input.value=== "")
    {
        alert("Enter task");
    }
    else
    {
        let lin = document.createElement("li");
        lin.innerHTML= input.value;
        list.appendChild(lin);
        let span= document.createElement("span");
        span.innerHTML= "&times";
        lin.appendChild(span);
        count=count+1;
        sentence.innerHTML="You have "+count+" Tasks";


    }
    input.value="";
    saveData();
}

list.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName=="SPAN")
    {
        e.target.parentElement.remove();
        count=count-1;
        sentence.innerHTML="You have "+count+" Tasks";
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data",list.innerHTML);
}
function showData()
{
    list.innerHtml= localStorage.getItem("data");
}
showData();
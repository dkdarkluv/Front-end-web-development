
let input_box = document.getElementById("input");
function display(n)
{
    console.log("button");
    input_box.value += n;
}
function calculate()
{
    console.log("=");
    try
    {
        input_box.value = eval(input_box.value);
    }
    catch(err)
    {
        input_box.value="ERROR";
    }
}
function clr()
{
    console.log("clear button");
    input_box.value = "";
}
function del()
{
    input_box.value=input_box.value.slice(0,-1);
}
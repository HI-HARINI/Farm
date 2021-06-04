function calculate(){
    var side=document.getElementById("side").value
    var area=side*side;
    var perimeter=4*side
    document.getElementById("lbArea").innerHTML=area;
    document.getElementById("lbPerimeter").innerHTML=perimeter;
}
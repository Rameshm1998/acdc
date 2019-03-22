function addpic()
{
	var add=document.getElementById("pic").files[0].name;
	document.getElementById("demo").innerHTML='<img src="'+add+'"alt="not found" width=300'
}
function changeImage() {
	 var image=document.getElementById('myImage');
	 if(image.src.match("dislike")) {
	 	image.src="like.JPG";
	 } else {
	 	image.src="dislike.JPG";	
	 }
}
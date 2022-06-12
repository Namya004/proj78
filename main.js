var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://previews.123rf.com/images/jemastock/jemastock1812/jemastock181211312/126749826-cute-girl-kid-cartoon-vector-illustration-graphic-design.jpg", "https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg", "https://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg"];
var names = ["Family Book","Namya Singh", "Navin Kumar", "Sulakshna Kumari"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

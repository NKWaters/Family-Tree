var images = [
   "ME.jfif",
   "Daddy.jfif",
   "Mother.jpg",
   "Grandmother.jfif",
   "Grandmother 2.jfif",
   "GrandFather.jfif"
];

var names = [
    "Arjun Menon",
    "Rohit Menon - My Father",
    "Amita Menon - My Mother",
    "Padmini Menon - My Paternal Grandmother",
    "Pankaja Mishra - My Maternal Grandmother",
    "PK Mishra - My Maternal Grandfather"
];

var i = 0;
function UpdateImage() 
{
    i++;
    var number_of_family_members_in_array = 5
    if (i  >  number_of_family_members_in_array)
    {
        i = 0;
    }
    var updateimage = images[i];
    var updatename = names[i];
    document.getElementById("FamilyMemberImages").src=updateimage;
    document.getElementById("NAMES").innerHTML=updatename;
}
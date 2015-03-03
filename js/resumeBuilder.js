
var bio=
{
	"name":"Huan Chen",
	"email":"huanch10@outlook.com"
};




var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);

var formattedEmail=HTMLcontactGeneric.replace("%data%",bio.email);
formattedEmail=formattedEmail.replace("%contact%","Email");
$("#topContacts").append(formattedEmail);
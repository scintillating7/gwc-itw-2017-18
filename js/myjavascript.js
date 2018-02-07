function searchForAuthorByID(){
	$api = new GoodReads('0waG22HpyhDCTJEp45psIw', 'C:/');
	$data = $api.getLatestReads(4148474);
}

function searchForAuthorName() {
var authorName = document.getElementById("authorNameInput").value;
var fullName = authorName.split(" ");
var firstName = fullName[0];
var lastName = fullName[1];

console.log(authorName);

var goodreadsResponseURL = "https://www.goodreads.com/api/author_url/" + firstName + "+" + lastName + "?key=0waG22HpyhDCTJEp45psIw";
// window.open(myURL)

console.log(goodreadsResponseURL);

var goodreadsXML = $.get("http://query.yahooapis.com/v1/public/yql",
{
    q: "select * from xml where url=\""+goodreadsResponseURL+"\"",
    format: "xml"
},

function(xml){
    console.log(xml);
    var authorLink = xml.documentElement.children["0"].childNodes["0"].childNodes[3].childNodes[3].textContent;
  window.open(authorLink);
});

}
var url;

var Search = function(typeOfSearch) {
  console.log('ran Search');
  var input;
  if (typeOfSearch=== "author") {
     input = document.getElementById("inputForAuthor").value;
  }
  else if (typeOfSearch==="title") {
    input = document.getElementById("inputForTitle").value;
  }
  var res = input.replace(/ /g, "+");
  console.log(res);
  var key = "93TBglofTXpPi5kdS4RgQ";
  if (typeOfSearch=== "author") {
    url = "https://www.goodreads.com/api/author_url/"+ res+ "?key=" + key;
    
  }
  else if (typeOfSearch=== "title") {
    url = "https://www.goodreads.com/book/title.xml?title="+ res+ "&key=" + key;
  }
  console.log(url);
  var goodreadsXML = $.get("https://query.yahooapis.com/v1/public/yql",
  {
      q: "select * from xml where url=\""+ url +"\"",
      format: "xml"
  },
  
  function(xml){
      console.log(xml);
      //TODO: REWORK THIS
      if (typeOfSearch=== "author") {
        var authorLink = xml.documentElement.children["0"].childNodes["0"].childNodes[3].childNodes[3].textContent;
      window.open(authorLink);
       $("#rating").html("Rating");
      }
      else if (typeOfSearch=== "title") {
        var titleLink = xml.documentElement.children["0"].children["0"].children[1].children[24].textContent;
        window.open(titleLink);
        var rating= xml.documentElement.children["0"].children["0"].children[1].childNodes[37].textContent;
           $("#rating").html("Rating: "+ rating);
        var percent= rating/5;
        var newLength= percent*400;
        console.log(newLength);
        $(".blue").css("clip"," rect(auto,"+newLength+"px, auto, auto)");
        
          /*https://www.w3schools.com/cssref/pr_pos_clip.asp*/
      }
    
    //TODO: make work with jquery xml selector
    /*xmlDoc = $.parseXML( xml ),
    $xml = $( xmlDoc ),
    $link = $xml.find( "link" );
    console.log($link);*/
  });

};

// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //using get element by ID to select an ID'd element from the html file and storing the data in a variable
		searchInput = document.forms[0].search, // used to get values from a form and assigning the data to a variable
		currentSearch = ''  //current search is empty
	;
	
	// Validates search query
	var validqte == function(query){ //creating a function (unnamed) with a parameter of query and assigning it with return to validate (mispelled)
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){  //while loop
			query = query.substring(1, query.length); //execute this code while above line is true
		};
		while(query.charAt(query.length-1) === ""){ //while loop
			query = query.substring(0, query.length-1); // execute this code while above line is true
		;  //missing closing } bracket
		
		// Check search length, must have 3 characters
		if(query.length < 3){    //if loop
			alert("Your search query is too small, try again.);
									//execute this code if above line is true, missing " closing
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //used to give focus to the searchInput element
			return; // returning data out of function so it can be used outside of function
		}; //closing tag
		
		search(query); //calling a function, (which was unnamed) with an argument of query
	}; // end of function
	
	// Finds search matches
	var search = function(query)  //assigning the data from the function (unnamed) with an argument of query and storing it to a variable named search
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); //creating a variable with stored data of joined elements of query array into a string
		
		// array to store matched results from database.js
		var results = []; // creating variable, results, to store an array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ //for loop
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');  //searching for | inside the current db and storing it in a variable
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); // storing a lowercase variable to a variable ?
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //for loop
				var qitem = queryArray[ii].tolowercase();  //execute this code, until ii<jj is false
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //searching dbitem for qitem and storing it to variable, compare
				if(compare !== -1){  // if loop,
					results.push(db[i]); //execute this code if above line if loop is true
				};   //end if loop
			;
		;
		
		results.sort();  //sorting elements of array "results" and returns the array
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ //if loop
			noMatch(); //if above line is true call this function
		}else{   // otherwise if the if loop if false
			showMatches(results); // run this function with an argument of results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){   //creating a variable storing funtion data
		var html = ''+  //creating a variable storing a blank space
			'<p>No Results found.</p>'+  //using html <p> instead of "" for string
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //miscoded string?
		;
		resultsDIV.innerHTML = html; //changes the content of html
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){  //calling unnamed function with argument of results and storing it to variable showMatches
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',//assigning html "<p>Results<p>" to a variable, html
			title, //assigning title to html
			url // assigning url to html
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ // for loop
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');   //searching the results for | indicating the ned of a title and assigning it to titleEnd
			title = results[i].subString(0, titleEnd); // retreiveing the title, between 0 and the titleEnd
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); // assinging data to url
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';  //adding a linked url to the html
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.  //making a change to the html
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ //changing the html form
		var query = searchInput.value; //
		validqte(query); //mispelled validate function with argument of query

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();  //end self-executing function
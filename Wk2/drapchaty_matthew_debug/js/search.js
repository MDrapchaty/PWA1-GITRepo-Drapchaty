// Create privatized scope using a self-executing function
(function() {
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //using get element by ID to select an ID'd element from the html file and storing the data in a variable
		searchInput = document.forms[0].search, // gets value from a form and assigning the data to a variable
		currentSearch = ''  //current search variable ' '
	;

	// Validates search query
	var validate = function(query){ //creating a function named validate with an parameter of query

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){  //while loop, validation that query has characters
			query = query.substring(1, query.length); //execute this code while above line is true, reassign value of query
		};
		while(query.charAt(query.length-1) === ""){ //while loop, if number of characters entered is "", true
			query = query.substring(0, query.length - 1); // execute this code while above line is true, re-assign value for query
		};  //missing closing } bracket
		
		// Check search length, must have 3 characters
		if(query.length < 3){    //if loop for query shorter than 3 characters
			alert("Your search query is too small, try again.");
									//execute this code if above line is true, missing " closing, alerts user the search query is too small
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //used to give focus to the searchInput element
			return; // returning data out of function so it can be used outside of function
		}; //closing tag
		search(query); //calling a function, with an argument of query
	}; // end of validate function
	
	// Finds search matches
	var search = function(query){  //creating a function named search with parameter of query

		// split the user's search query string into an array
		var queryArray = query.join(" "); //assigns joined query data to queryArray

		// array to store matched results from database.js
		var results = []; // creating an array/variable named results to store matched results in database from search

		// loop through each index of db array
		for (var i = 0, j = db.length; i < j; i++) { //for loop, to go through every item in database

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');  //searching for | inside the database and assigning it to dbTitleEnd
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); // storing a lowercase title to a variable, dbitem

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) { //for loop
				var qitem = queryArray[ii].tolowercase();  //stored lowercase search query to variable, qitem

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //comparing lower case variable of database and search query and storing it to variable, compare
				if (compare !== -1) {  // if loop, if search query matches a database item
					results.push(db[i]); //add the database item to the array with stored match results
				};   //end if loop
			};
		};


		results.sort();  //sorts array in alphabetical order
		
		// Check that matches were found, and run output functions
		if(results.length == 0){ //if loop to see if there is no results
			noMatch(); //run noMatch function
		}else{   // else there is a result
			showMatches(results); // run showMatches function with argument of results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){   //creating a function named noMatch
		var html = ''+  //creating a string variable named html
			'<p>No Results found.</p>'+  //saying no results found
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' // another string
		;
		resultsDIV.innerHTML = html; //tells the html to update with the message
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){  //creating function named showMatches with parameter of results
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',//assigning "<p>Results<p>" to a variable, html
			title, //assigning title to html
			url // assigning url to html
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ // for loop to go through every search() result
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');   //creating a variable name titleEnd with the number of characters in the result
			title = results[i].subString(0, titleEnd); // creating variable title that is the full "title"/result as a string
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); // creating variable, url, that is full string url of the result
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';  //setting html variable to be a link with url and title
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.  //display the html variable, final linked title and url
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value; //
		validate(query);
		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	};
		})();  //end self-executing function
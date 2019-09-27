var movieDB = [
    {
        title: "Black Panther",
        rating: "9.6",
        hasWatched: false,
    },
    {
        title: "A Dog's Journey",
        rating: "5",
        hasWatched: false,
    },
    {
        title: "The Red Sea Diving Resort",
        rating: "3",
        hasWatched: true,
    },
    {
        title: "A Quiet Place",
        rating: "9.5",
        hasWatched: true,
    }
]
// movieDB.forEach(function(movies) {
//     var result = "You have ";
//     if (movies.hasWatched) {
//         result += "watched ";
//     } else {
//         result += "not watched ";
//     }
//     result += "\"" + movies.title + "\" - ";
//     result += movies.rating + " stars";
//         console.log(movieString);
//     })
    // refactorred code
    //create a function to store the movie string
    function movieString(movies) {
        var result = "You have ";
        if (movies.hasWatched) {
            result += "watched ";
        } else {
            result += "not watched ";
        }
        result += "\"" + movies.title + "\" - ";
        result += movies.rating + " stars";
        return result;
    }
    //
    movieDB.forEach(function(movies) {
        console.log(movieString(movies));        
    });    



//Spread and Destructuring Exercise - Jack Massey//

//1a
const mcuShows = ["Loki", "Moon Knight"]
//1b
const starWarsShows = ["The Mandalorian", "The Book of Boba Fett"]
//1c
const disneyPlusShows = [...mcuShows, ...starWarsShows, `The Beatles: Get Back`]
//1d
console.log(disneyPlusShows); // [ 'Loki', 'Moon Knight', 'The Mandalorian', 'The Book of Boba Fett', 'The Beatles: Get Back' ]

//2a
const netflixMovies = {action: "Extraction", crime: `The Irishman`}
//2b
const amazonPrimeMovies = {action: `The Tomorrow War`, drama: `One Night in Miami`}
//2c
const streamingMovies = {...amazonPrimeMovies, ...netflixMovies, musical: `Hamilton`}
//2d
console.log(streamingMovies); // { action: 'Extraction', drama: 'One Night in Miami', crime: 'The Irishman', musical: 'Hamilton' }
 
//3a
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"]
//3b
const [mickey, spidey] = disneyJunior
//3c
console.log(mickey, spidey); // Mickey Mouse Clubhouse Spidey and His Amazing Friends

//4a
const avengers = {warMachine: `James Rhodes`, theHulk: `Bruce Banner`}
//4b
const {warMachine, theHulk} = avengers
//4c
console.log(warMachine, theHulk); // James Rhodes Bruce Banner
//4d
const moreAvengers = {blackWidow: `Natasha Romanoff`, hawkeye: `Clint Barton`, ironMan: `Tony Stark`}
//4e
const {blackWidow:nat, ...others} = moreAvengers
//4f
console.log(nat, others); // Natasha Romanoff { hawkeye: 'Clint Barton', ironMan: 'Tony Stark' }


//Bonus//

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

//5a
const all = [...bonus.first, ...bonus.second, ...bonus.third]
console.log(all); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//5b
const [one, two, three] = bonus.first
const [four, five, six] = bonus.second
const [seven, eight, nine] = bonus.third
//Alternatively: Can be done in 1 line if you use the "all" array instead of the "bonus" object
//const [one, two, three, four, five, six, seven, eight, nine] = all
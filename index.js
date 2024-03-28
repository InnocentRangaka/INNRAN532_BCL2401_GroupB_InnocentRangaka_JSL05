// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Let's Stay Together", artist: "Al Green", genre: "R&B" },
    { title: "My Girl", artist: "The Temptations", genre: "R&B" },
    { title: "Le Freak", artist: "Chic", genre: "Disco" },
    { title: "Good Times", artist: "Chic", genre: "Disco" },
    { title: "I Feel Love", artist: "Donna Summer", genre: "Disco"},
    { title: "What a Wonderful World", artist: "Louis Armstrong", genre: "Jazz" },
    { title: "Take Five", artist: "The Dave Brubeck Quartet", genre: "Jazz" },
    { title: "Sing, Sing, Sing", artist: "Benny Goodman", genre: "Jazz" },
    
    { title: "Respect", artist: "Aretha Franklin", genre: "R&B" },
  { title: "Dancing Queen", artist: "ABBA", genre: "Disco" },
  { title: "More Than a Feeling", artist: "Boston", genre: "Disco" },
  { title: "Fly Me to the Moon", artist: "Frank Sinatra", genre: "Jazz" },
  { title: "September", artist: "Earth, Wind & Fire", genre: "R&B" },
  { title: "It Had to Be You", artist: "Harry Connick Jr.", genre: "Jazz" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",

    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Disco",
    "Groot": "Jazz"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian

    // 1. Get references to essential elements
     // Get the container for playlists
     // Get an array of guardian names from the guardians object
    const playlistsContainer = document.getElementById("playlists"),
        allGuardians = Object.keys(guardians);

    // Iterate through each guardian
    allGuardians.map(guardianName => {
        // Create multiple elements efficiently
        const [PlayListTitle, playlistDiv, songDiv] = ['h2', 'div', 'div'].map(element => document.createElement(element));

        // Set the playlist title
        // Set the text content for the title
        PlayListTitle.textContent = `${guardianName}'s Playlist`;

        // Filter songs based on the guardian's preference
        // Filter songs matching the guardian's genre
        const songList = songs.filter((song) => song.genre === guardians[guardianName]);

        // Iterate through each filtered song
        songList.map(song => {
            // Create elements for song and title
            const [songElement, spanElement] = ['div', 'span'].map(element => document.createElement(element)),
                songName = song['title'],  // Extract song title
                artist = song['artist']; // Extract artist name
            
            // Set song title and artist details
            spanElement.textContent = songName; // Set song title in the span
            spanElement.classList.add("song-title"); // Add class for styling

            songElement.textContent = ` by ${artist}`; // Set artist details in the song element
            songElement.prepend(spanElement); // Prepend the span (title) to the song element
            songElement.classList.add("song"); // Add class for styling

            // Append song element to song list
            songDiv.appendChild(songElement); // Add the song element to the song list
        });

        playlistDiv.appendChild(PlayListTitle); // Add title to the playlist container
        playlistDiv.appendChild(songDiv); // Add song list to the playlist container
        playlistDiv.classList.add("playlist"); // Add class for styling

        // Append the playlist to the main container
        // Add the complete playlist to the playlists container
        playlistsContainer.appendChild(playlistDiv);
    });      
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



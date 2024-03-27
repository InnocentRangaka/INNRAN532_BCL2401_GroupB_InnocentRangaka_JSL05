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
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",

    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian

    const playlistsContainer = document.getElementById("playlists"),
        allGuardians = Object.keys(guardians);

    allGuardians.map(guardianName => {
        const [PlayListTitle, playlistDiv, songDiv] = ['h2', 'div', 'div'].map(element => document.createElement(element));

        PlayListTitle.textContent = `${guardianName}'s Playlist`;

        const songList = songs.filter((song) => song.genre === guardians[guardianName]);

        songList.map(song => {
            const [songElement, spanElement] = ['div', 'span'].map(element => document.createElement(element)),
                songName = song['title'],
                artist = song['artist'];
            
            spanElement.textContent = songName;
            spanElement.classList.add("song-title");

            songElement.textContent = ` by ${artist}`;
            songElement.prepend(spanElement);
            songElement.classList.add("song");

            songDiv.appendChild(songElement);
        });

        playlistDiv.appendChild(PlayListTitle);
        playlistDiv.appendChild(songDiv);
        playlistDiv.classList.add("playlist");

        playlistsContainer.appendChild(playlistDiv);
    });      
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



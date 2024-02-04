require('dotenv').config();

document.addEventListener('DOMContentLoaded', function () {
    const spotifyAccessToken = process.env.SPOTIFY_ACCESS_TOKEN;
    const songElement = document.getElementById('current-song');

    function updateCurrentSong() {
        fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${spotifyToken}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.is_playing) {
                const songName = data.item.name;
                const artistName = data.item.artists[0].name;
                songElement.textContent = `Currently listening to: ${songName} by ${artistName}`;
            } else {
                songElement.textContent = 'Not currently listening to any song.';
            }
        })
        .catch(error => {
            console.error('Error fetching Spotify data:', error);
            songElement.textContent = 'Error fetching Spotify data.';
        });
    }

    updateCurrentSong();
});

<template>
    <div>
      <!-- <button @click="downloadPlaylist">Download Playlist</button> -->
      <div class="container-fluid">
        <div class="row">
          <div id="ms-container">
            <label for="ms-download">
              <div class="ms-content">
                <div class="ms-content-inside">
                  <input type="checkbox" id="ms-download" />
                  <div class="ms-line-down-container">
                    <div class="ms-line-down"></div>
                  </div>
                  <div class="ms-line-point"></div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      async downloadPlaylist() {
        const playlistId = prompt('Enter Spotify Playlist ID:');
  
        try {
          const response = await axios.post('/api/getPlaylistInfo', { playlistId });
          console.log(response.data);
        } catch (error) {
          console.error('Error downloading playlist:', error);
        }
      },
    },
  };
  </script>

export default {
    getTrack(id) {
        const http = require('http');
        const audioBuffer = require('audio-buffer');
        const url = `http://localhost:8080/api/track/${id}`;

        http.get(url, function (res) {
            res.on('data', function (chunk) {
                audioBuffer.
                console.log(chunk);
            });
            res.on('end', function () {
                // all data has been downloaded
            });
        });
    }
}
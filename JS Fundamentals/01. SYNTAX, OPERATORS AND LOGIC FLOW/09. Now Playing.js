function nowPlaying(arr) {
    let track = arr[0];
    let artist = arr[1];
    let time = arr[2];

    console.log(`Now Playing: ${artist} - ${track} [${time}]`)
}

nowPlaying(['Number One', 'Nelly', '4:09']);
const songDecoder = (song) => {
    console.log(song.replace(/(WUB)+/g, ' ').trim()); //Uses REGEX to identify the WUB instances and then splits it by a single space
}

songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');
// => WE ARE THE CHAMPIONS MY FRIEND
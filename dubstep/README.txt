DESCRIPTION:
A DJ decides to take a couple old songs and make dubstep remixes from them. 

Let's assume that a song consists of some number of words (that don't contain WUB).
To make the dubstep remix of this song, the DJ inserts a certain number of words "WUB"
before the first word of the song (the number may be zero), after the last word (the number
may be zero), and between words (at least one between any pair of neighboring words). Then
the DJ glues together all the words, including "WUB", in one string and plays the song at
the club.

For example, a song with words "I AM X" can transform into a dubstep remix as 
"WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUVX".

Someone heard the DJ's new dubstep track, but since they aren't into modern music, they decided
to find out what was the initial song the DJ remixed. Help this person restore the original song.

INPUT:
The input consists of a single non-empty string, consisting only of uppercase English letters, 
the string's length doesn't exceed 200 characters.

OUTPUT:
Return the words of the initial song that the DJ used to make a dubstep remix. Separate the 
words with a space. 
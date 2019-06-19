
var prevSongId;
var prevSongIdbutton;
var song;
var x;

function PlayOrStop(songIdbutton,songId)
   {	

  if(prevSongIdbutton !== null && prevSongIdbutton !== undefined )
  {  
    x=document.getElementById(prevSongId);	
  	document.getElementById(prevSongIdbutton).className = "buttonplay";	
  	x.pause();
  }

  if(songIdbutton !== prevSongIdbutton)
  {
  	   song=document.getElementById(songId);
       document.getElementById(songIdbutton).className = "buttonpause";
       song.play();
       prevSongIdbutton = songIdbutton;
       prevSongId = songId;
    }
  	else
  	{
  		prevSongIdbutton = null;
  		
  	}
}


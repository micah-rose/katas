var myMaze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
];

const mazeRunner = (maze) => { //uses recursion to work through the maze
   this.maze = maze;

   this.navigate = function(column, row) {
     if(this.maze[column][row] == 2){ //identifies that we have reached the end of the maze if our value is 2
       console.log("We solved the maze at (" + column + ", " + row + ")");
     } else if(this.maze[column][row] == 1) {
       console.log("We are on a valid path");
       this.maze[column][row] = 9; //this assigns a new value to the column/row pair to indicate we already visited this location

       if(column < this.maze.length - 1) { //makes sure we stay within the right side boundaries of the array
          this.navigate(column + 1, row);
       }
       if(row < this.maze[column].length -1) {
          this.navigate(column, row + 1);
       }
       if(column > 0) { //makes sure we stay within the left side boundaries of the array
          this.navigate(column - 1, row);
       }
       if(row > 0) {
          this.navigate(column, row -1);
       }
     }
   }
}

/* 
  var ms = new MazeRunner(myMaze);
  ms.navigate(3,0);
*/
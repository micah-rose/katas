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

const mazeRunner = (maze) => {
   this.maze = maze;

   this.navigate = function(column, row) {
     if(this.maze[column][row] == 2){ //identifies that we have reached the end of the maze if our value is 2
       console.log("We solved the maze at (" + column + ", " + row + ")");
     } else if(this.maze[column][row] == 1) {
       //logic to make our way through the maze if we are on 1 values
     }
   }
}
import { Plateau } from './models/Plateau';
import { Rover } from './models/Rover';
import { Position } from './models/Position';

function main() {
  const plateau: Plateau = { maxX: 5, maxY: 5 };

  console.log('--- Rover 1 ---');
  const rover1 = new Rover({ x: 1, y: 2, direction: 'N' }, plateau);
  rover1.executeInstructions('LMLMLMLMM');
  console.log(rover1.position); 

  console.log('--- Rover 2 ---');
  const rover2 = new Rover({ x: 3, y: 3, direction: 'E' }, plateau);
  rover2.executeInstructions('MMRMMRMRRM');
  console.log(rover2.position); 
}

main();

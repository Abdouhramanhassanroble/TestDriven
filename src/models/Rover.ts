import { Plateau } from './Plateau';
import { Position, Direction } from './Position';

export class Rover {
  position: Position;
  plateau: Plateau;

  constructor(initialPosition: Position, plateau: Plateau) {
    this.position = initialPosition;
    this.plateau = plateau;
  }

  executeInstructions(instructions: string): void {
    for (const instruction of instructions) {
      if (!['L', 'R', 'M'].includes(instruction)) {
        console.log(`Instruction invalide ignorée: ${instruction}`);
        continue;
      }
  
      console.log(`Avant instruction: ${instruction}, Position: ${JSON.stringify(this.position)}`);
  
      if (instruction === 'L') this.turnLeft();
      else if (instruction === 'R') this.turnRight();
      else if (instruction === 'M') this.move();
  
      console.log(`Après instruction: ${instruction}, Position: ${JSON.stringify(this.position)}`);
    }
  }
  

  private turnLeft(): void {
    const directions: Direction[] = ['N', 'W', 'S', 'E'];
    const index = directions.indexOf(this.position.direction);
    this.position.direction = directions[(index + 1) % 4];
    console.log(`Turned left. New direction: ${this.position.direction}`);
  }
  
  private turnRight(): void {
    const directions: Direction[] = ['N', 'E', 'S', 'W'];
    const index = directions.indexOf(this.position.direction);
    this.position.direction = directions[(index + 1) % 4];
    console.log(`Turned right. New direction: ${this.position.direction}`);
  }  

  private move(): void {
    const { x, y, direction } = this.position;
  
    if (direction === 'N' && y + 1 <= this.plateau.maxY) {
      this.position.y += 1;
    } else if (direction === 'E' && x + 1 <= this.plateau.maxX) {
      this.position.x += 1;
    } else if (direction === 'S' && y - 1 >= 0) {
      this.position.y -= 1;
    } else if (direction === 'W' && x - 1 >= 0) {
      this.position.x -= 1;
    }
  }  
  
}

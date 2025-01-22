import { Plateau } from '../models/Plateau';
import { Rover } from '../models/Rover';

test('Rover atteint la limite nord', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 0, y: 4, direction: 'N' }, plateau);
  rover.executeInstructions('MM');
  expect(rover.position).toEqual({ x: 0, y: 5, direction: 'N' });
});


test('Rover atteint la limite est', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 4, y: 0, direction: 'E' }, plateau);
  rover.executeInstructions('MM');
  expect(rover.position).toEqual({ x: 5, y: 0, direction: 'E' });
});


test('Rover atteint la limite sud', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 0, y: 1, direction: 'S' }, plateau);
  rover.executeInstructions('MM');
  expect(rover.position).toEqual({ x: 0, y: 0, direction: 'S' });
});


test('Rover atteint la limite ouest', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 1, y: 0, direction: 'W' }, plateau);
  rover.executeInstructions('MM');
  expect(rover.position).toEqual({ x: 0, y: 0, direction: 'W' });
});


test('Instructions vides n’affectent pas le rover', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 2, y: 2, direction: 'N' }, plateau);
  rover.executeInstructions('');
  expect(rover.position).toEqual({ x: 2, y: 2, direction: 'N' });
});


test('Rover tourne sur place sans bouger', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 2, y: 2, direction: 'N' }, plateau);
  rover.executeInstructions('RRRR');
  expect(rover.position).toEqual({ x: 2, y: 2, direction: 'N' });
});


test('Rover tourne sur place vers la gauche', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 2, y: 2, direction: 'N' }, plateau);
  rover.executeInstructions('L');
  expect(rover.position).toEqual({ x: 2, y: 2, direction: 'W' });
});


test('Rover suit des instructions complexes', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 1, y: 2, direction: 'N' }, plateau);
  rover.executeInstructions('LMLMLMLMM');
  expect(rover.position).toEqual({ x: 1, y: 3, direction: 'N' });
});


test('Rover se déplace en carré et revient à son point de départ', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 2, y: 2, direction: 'N' }, plateau);
  rover.executeInstructions('MRMRMRMR');
  expect(rover.position).toEqual({ x: 2, y: 2, direction: 'N' });
});


test('Rover reste immobile sur un plateau de 1x1', () => {
  const plateau: Plateau = { maxX: 1, maxY: 1 };
  const rover = new Rover({ x: 0, y: 0, direction: 'N' }, plateau);
  rover.executeInstructions('MMRRMM');
  expect(rover.position).toEqual({ x: 0, y: 0, direction: 'S' });
});


test('Rover suit des instructions uniquement vers le sud', () => {
  const plateau: Plateau = { maxX: 5, maxY: 5 };
  const rover = new Rover({ x: 2, y: 5, direction: 'S' }, plateau);
  rover.executeInstructions('MMMMM');
  expect(rover.position).toEqual({ x: 2, y: 0, direction: 'S' });
});

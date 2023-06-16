// Kata 11 - Bouncy Castles

const PI = 3.14159;

const sphereVolume = function(radius) {
  // V = 4/3πr³
  return (4 / 3) * PI * radius * radius * radius;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  // V = 1/3hπr²
  return PI * radius * radius * (height / 3);
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  // V = Bh
  return width * depth * height;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let total = 0;

  for (const solid of solids) {
    if (solid.type === 'sphere') {
      total += sphereVolume(solid.radius);
    }

    if (solid.type === 'cone') {
      total += coneVolume(solid.radius, solid.height);
    }

    if (solid.type === 'prism') {
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
};

const largeSphere = {
  type: 'sphere',
  radius: 40,
};

const smallSphere = {
  type: 'sphere',
  radius: 10,
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

// Expected output
// true
// true
// true
// true
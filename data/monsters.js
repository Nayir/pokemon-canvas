import { attacks } from "./attacks";
export const monsters = {
  Emby: {
    position: {
      x: 480,
      y: 625,
    },
    image: {
      src: "./img/embySprite.png",
    },
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    name: "Emby",
    attacks: [attacks.Tackle, attacks.Fireball],
  },
  Draggle: {
    position: {
      x: 1500,
      y: 200,
    },
    image: {
      src: "./img/draggleSprite.png",
    },
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    isEnemy: true,
    name: "Draggle",
    attacks: [attacks.Tackle, attacks.Fireball],
  },
};

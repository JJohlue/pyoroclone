game.resources = [

  /* Graphics. */
  {name: "sewer_tileset", type:"image", src: "data/img/map/sewer_tileset.png"},
  // metatiles
  {name: "metatiles24x24",  type:"image", src: "data/img/map/metatiles24x24.png"},
  // the main player spritesheet
  {name: "mover_right", type:"image", src: "data/img/sprite/mover_right.png"},
  // the collector spritesheet
  {name: "collector", type:"image", src: "data/img/sprite/collector.png"},
  // the faller spritesheets
  {name: "faller", type:"image", src: "data/img/sprite/faller.png"},
  {name: "faller_fixone", type:"image", src: "data/img/sprite/faller_fixone.png"},
  {name: "faller_fixall", type:"image", src: "data/img/sprite/faller_fixall.png"},
  // the floor_crack spritesheet
  {name: "floor_crack", type:"image", src: "data/img/sprite/floor_crack.png"},
  // main player walking animation
  {name: "main_char_walk", type:"image", src: "data/img/sprite/main_char_walk.png"},
  // font file for the HUD
  {name: "font", type:"image", src: "data/img/font/16x16_font.png"},
  // a button of some sort
  {name: "button", type:"image", src: "data/img/title/button.png"},
  // background picture for the title screen
  {name: "background", type:"image", src: "data/img/title/bg.png"},

	
  /* Atlases
   * @example
   * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
   */

  /* Maps. */
  {name: "area01", type: "tmx", src: "data/map/area01.json"},

  /* Background music.
   * @example
   * {name: "example_bgm", type: "audio", src: "data/bgm/"},
   */

  /* Sound effects.
   * @example
   * {name: "example_sfx", type: "audio", src: "data/sfx/"}
   */
];

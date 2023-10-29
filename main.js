let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web, soy maestra de tecnolochicas y soy técnico en programación')
  .pauseFor(200)
  .deleteChars(10)
  .start();

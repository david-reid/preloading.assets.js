
window.gui = new Gui();

window.onload = function() {
    window.gui.load([
            { id: "player-img", var: playerImg = document.createElement("img"), file: "assets/Player.png" },
            { id: "asteroid-img", var: asteroidImg = document.createElement("img"), file: "assets/Asteroid.png" },
            { id: "alien-img", var: alienImg = document.createElement("img"), file: "assets/Alien.png" },
            { id: "laser-audio", var: laserAudio = document.createElement("audio"), file: "assets/Laser.mp3" },
            { id: "boom-audio", var: boomAudio = document.createElement("audio"), file: "assets/Boom.mp3" },
            { id: "alien-audio", var: alienAudio = document.createElement("audio"), file: "assets/Alien.mp3" },
    ]);
}

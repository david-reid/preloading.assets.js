
class Gui {
    
    constructor() {
        this.assets = null;
        this.assetsToLoad = 0;
    }

    toggleScreen(id, toggle) {
        let element = document.getElementById(id); 
        let display = (toggle) ? "block" : "none";
        element.style.display = display;
    }

    closeAllScreens() {
        let elements = document.querySelectorAll(".screen");
        [...elements].forEach( e => {
            e.style.display = "none";
        });
    }

    showScreen(id) {
        this.closeAllScreens();
        this.toggleScreen(id,true);
    }

    getAsset(id) {
        return this.assets.filter(a => a.id === id)[0].var;
    }
    getAssets() {
        return this.assets;
    }

    // We need to do more here.

    load(assets) {
        this.assets = assets;
        if ( !this.assets || this.assets.length == 0 ) {
            this.showScreen("start");
            return;
        }
        if ( this.assets ) {
            this.assetsToLoad = this.assets.length;

            for ( let i = 0; i < this.assets.length; i++ ) {
                if ( this.assets[i].var != undefined ) {
                    if ( this.assets[i].var.nodeName == "IMG" ) {
                        this.beginLoadingImage(
                            this.assets[i].var,
                            this.assets[i].file);
                    }
                    if ( this.assets[i].var.nodeName == "AUDIO" ) {
                        this.beginLoadingAudio(
                            this.assets[i].var,
                            this.assets[i].file);
                    }
                }
            }
        }
    }

    launchIfReady() {
        this.assetsToLoad--;
        if ( this.assetsToLoad == 0 ) {
            this.showScreen("start");
        }
    }

    beginLoadingImage(imgVar, fileName) {
        imgVar.onload = () => this.launchIfReady();
        imgVar.src = fileName;
    }

    beginLoadingAudio(audioVar, fileName) {
        audioVar.src = fileName;
        audioVar.addEventListener('canplay', () => this.launchIfReady());
    }
}


var PreloadState = {
    
    preload: function() {
        

        
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5);
        
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);
        
        this.load.onLoadComplete.add(loadComplete, this);
        
        function loadComplete() {
            this.add.tween(this.preloadBar).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        }
        
        
        
    this.load.image('arrow', 'assets/images/arrow.png');
    this.load.image('auto', 'assets/images/auto.png');
    this.load.image('banan', 'assets/images/banan.png');
    this.load.image('cymbalki', 'assets/images/cymbalki.png');
    this.load.image('drzevo', 'assets/images/drzevo.png');
    this.load.image('elf', 'assets/images/elf.png');
    this.load.image('foka', 'assets/images/foka.png');
    this.load.image('grzyb', 'assets/images/grzyb.png');
    this.load.image('huzdawka', 'assets/images/huzdawka.png');
    this.load.image('igla', 'assets/images/igla.png');
    this.load.image('jez', 'assets/images/jez.png');
    this.load.image('kwiat', 'assets/images/kwiat.png');
    this.load.image('lew', 'assets/images/lew.png');
    this.load.image('motyl', 'assets/images/motyl.png');
    this.load.image('niedzviedz', 'assets/images/niedzviedz.png');
    this.load.image('okulary', 'assets/images/okulary.png');
    this.load.image('ptak', 'assets/images/ptak.png');
    this.load.image('ryba', 'assets/images/ryba.png');
    this.load.image('sowa', 'assets/images/sowa.png');
    this.load.image('truskawka', 'assets/images/truskawka.png');
    this.load.image('ul', 'assets/images/ul.png');
    this.load.image('wiatrak', 'assets/images/wiatrak.png');
    this.load.image('yeti', 'assets/images/yeti.png');
    this.load.image('zajonc', 'assets/images/zajonc.png');
    this.load.image('zolw', 'assets/images/zolw.png');
    this.load.image('zriebe', 'assets/images/zriebe.png');





    this.load.audio('auto', ['assets/sound/auto.ogg', 'assets/sound/auto.mp3']);
    this.load.audio('banan', ['assets/sound/banan.ogg', 'assets/sound/banan.mp3']);
    this.load.audio('cymbalki', ['assets/sound/cymbalki.ogg', 'assets/sound/cymbalki.mp3']);
    this.load.audio('drzevo', ['assets/sound/drzevo.ogg', 'assets/sound/drzevo.mp3']);
    this.load.audio('elf', ['assets/sound/elf.ogg', 'assets/sound/elf.mp3']);
    this.load.audio('foka', ['assets/sound/foka.ogg', 'assets/sound/foka.mp3']);
    this.load.audio('grzyb', ['assets/sound/grzyb.ogg', 'assets/sound/grzyb.mp3']);
    this.load.audio('huzdawka', ['assets/sound/huzdawka.ogg', 'assets/sound/huzdawka.mp3']);
    this.load.audio('igla', ['assets/sound/igla.ogg', 'assets/sound/igla.mp3']);
    this.load.audio('jez', ['assets/sound/jez.ogg', 'assets/sound/jez.mp3']);
    this.load.audio('kwiat', ['assets/sound/kwiat.ogg', 'assets/sound/kwiat.mp3']);
    this.load.audio('lew', ['assets/sound/lew.ogg', 'assets/sound/lew.mp3']);
    this.load.audio('motyl', ['assets/sound/motyl.ogg', 'assets/sound/motyl.mp3']);
    this.load.audio('niedzviedz', ['assets/sound/niedzviedz.ogg', 'assets/sound/niedzviedz.mp3']);
    this.load.audio('okulary', ['assets/sound/okulary.ogg', 'assets/sound/okulary.mp3']);
    this.load.audio('ptak', ['assets/sound/ptak.ogg', 'assets/sound/ptak.mp3']);
    this.load.audio('ryba', ['assets/sound/ryba.ogg', 'assets/sound/ryba.mp3']);
    this.load.audio('sowa', ['assets/sound/sowa.ogg', 'assets/sound/sowa.mp3']);
    this.load.audio('truskawka', ['assets/sound/truskawka.ogg', 'assets/sound/truskawka.mp3']);
    this.load.audio('ul', ['assets/sound/ul.ogg', 'assets/sound/ul.mp3']);
    this.load.audio('wiatrak', ['assets/sound/wiatrak.ogg', 'assets/sound/wiatrak.mp3']);
    this.load.audio('yeti', ['assets/sound/yeti.ogg', 'assets/sound/yeti.mp3']);
    this.load.audio('zajonc', ['assets/sound/zajonc.ogg', 'assets/sound/zajonc.mp3']);
    this.load.audio('zolw', ['assets/sound/zolw.ogg', 'assets/sound/zolw.mp3']);
    this.load.audio('zriebe', ['assets/sound/zrebie.ogg', 'assets/sound/zrebie.mp3']);
        
        
                
    },
    
    
    create: function() {
        
        game.input.onTap.add(onTap, this);
                
        function fadePicture() {
        this.state.start('HomeState');
        }

        function onTap(pointer, doubleTap) {
        
        this.add.tween(this.logo).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(Phaser.Timer.SECOND * 1, fadePicture, this);
        }
        
        //console.log('current state: ' + this.state.current);
        
        
          this.game.device.whenReady(function(){
        document.addEventListener("backbutton", onBackKeyDown, true);             
        console.log('backbutton listener active: ' + this.state.current.name);                       
     }, this);         
        

        function onBackKeyDown() {
            navigator.app.exitApp();
        }  

        

   
        
        
        

    },
    
    

    
    

    
};
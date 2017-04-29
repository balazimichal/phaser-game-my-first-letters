var BootState = {
    
    init: function() {
        

    // Scale stuff
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
        
    this.game.device.whenReady(function(){
                     
        console.log('Are we in Cordova? : ' + this.game.device.cordova);                       
     }, this); 
        
        

        
    },   
    
    
                              
    
    preload: function() {
        this.load.image('preloadBar','assets/images/preload_bar.png');
        this.load.image('logo','assets/images/splash.png');
    },
    
    create: function() {
        this.game.stage.backgroundColor = '#000';
        this.state.start('PreloadState');
    }

};
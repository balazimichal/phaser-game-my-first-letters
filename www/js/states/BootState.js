var BootState = {
    
    init: function() {
        

    // Scale stuff
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
        
    this.game.device.whenReady(function(){
                     
        console.log('Are we in Cordova? : ' + this.game.device.cordova); 
        
              //are we on a hybrid app?
      if(this.game.device.cordova || this.game.device.crosswalk) {
        //is AdMob available
        if(typeof AdMob !== 'undefined' && AdMob) {
          //init AdMob
          this.setupAdmob();
        }
      }
        
        
        
     }, this);
        
        
        
        
        
 
        
        

        
    },   
    
    
                              
    
    preload: function() {
        this.load.image('preloadBar','assets/images/preload_bar.png');
        this.load.image('logo','assets/images/splash.png');
    },
    
    create: function() {
        this.game.stage.backgroundColor = '#000';
        this.state.start('PreloadState');
    },
    
    
    setupAdmob: function() {
    
    //1. enter ad settings
    var admobSettings = {};
    
    if(this.game.device.android) {
      admobSettings = {
        banner: '4800627181287602/6303168953',
        interstitial: '4800627181287602/6303168953'
      };
    }
    else if(this.game.device.iOS) {
      admobSettings = {
        banner: '4800627181287602/6303168953',
        interstitial: '4800627181287602/6303168953'
      };
    }
    
    //2. prepare banner ad
    AdMob.createBanner({
      adId: admobSettings.banner,
      autoShow: false, //true the ad will start right away
      isTesting: true,
      overlap: false //over the webview
    });
    
    AdMob.prepareInterstitial({
      adId: admobSettings.interstitial,
      autoShow: false,
      isTesting: true
    });
    
    game.admobLoaded = true;
  }

};
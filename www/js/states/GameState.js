var GameState = {
    

    


    
    
    
    
    create: function() {
        

        

        

        var backgroundData = [
        {key: 'auto', sound: 'auto'},
        {key: 'banan', sound: 'banan'},
        {key: 'cymbalki', sound: 'cymbalki'},
        {key: 'drzevo', sound: 'drzevo'},
        {key: 'elf', sound: 'elf'},
        {key: 'foka', sound: 'foka'},
        {key: 'grzyb', sound: 'grzyb'},
        {key: 'huzdawka', sound: 'huzdawka'},
        {key: 'igla', sound: 'igla'},
        {key: 'jez', sound: 'jez'},
        {key: 'kwiat', sound: 'kwiat'},
        {key: 'lew', sound: 'lew'},
        {key: 'motyl', sound: 'motyl'},
        {key: 'niedzviedz', sound: 'niedzviedz'},
        {key: 'okulary', sound: 'okulary'}, 
        {key: 'ptak', sound: 'ptak'},
        {key: 'ryba', sound: 'ryba'},
        {key: 'sowa', sound: 'sowa'},
        {key: 'truskawka', sound: 'truskawka'},
        {key: 'ul', sound: 'ul'},
        {key: 'wiatrak', sound: 'wiatrak'},
        {key: 'yeti', sound: 'yeti'},
        {key: 'zajonc', sound: 'zajonc'}, 
        {key: 'zolw', sound: 'zolw'},
        {key: 'zriebe', sound: 'zriebe'} 
        ];
        
        this.backgrounds = this.game.add.group();
        
        var self = this;
        var bg;
        
        backgroundData.forEach(function(element) {
          bg = self.backgrounds.create(-1280,0, element.key);
            
            bg.customParams = {sound: self.game.add.audio(element.sound)};
          
            bg.inputEnabled = true;
            bg.events.onInputDown.add(self.backgroundSound, self);
        
        });
        
        this.currentBackground = this.backgrounds.children[0];
        this.currentBackground.position.set(0,0);
        this.time.events.add(Phaser.Timer.SECOND * 1, initialSound, this);
        function initialSound() {
            this.backgrounds.children[0].customParams.sound.play();
        }

        
        
    
       
        
        
        
        // Add arrows
        
        
        
        this.rightArrow = this.game.add.sprite(game.world.width -250, game.world.height -150, 'arrow');
        this.rightArrow.customParams = {direction: 1};
        this.rightArrow.inputEnabled = true;
        this.rightArrow.events.onInputDown.add(this.switchBackground, this);
        
        
        this.leftArrow = this.game.add.sprite(250, game.world.height -150, 'arrow');
        this.leftArrow.scale.x = -1;
        this.leftArrow.customParams = {direction: -1};
        this.leftArrow.inputEnabled = true;
        this.leftArrow.events.onInputDown.add(this.switchBackground, this);
        
        
        
        
        
        var admobid = {};
        if( /(android)/i.test(navigator.userAgent) ) { 
            admobid = { // for Android
                banner: 'ca-app-pub-4800627181287602/6303168953',
                //interstitial: ''
            };
        } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            admobid = { // for iOS
                banner: 'ca-app-pub-4800627181287602/6303168953',
                //interstitial: ''
            };
        } else {
            admobid = { // for Windows Phone
                banner: 'ca-app-pub-4800627181287602/6303168953',
                //interstitial: ''
            };
        }

        function initApp() {
            if (AdMob) {
                AdMob.createBanner({
                    adId : admobid.banner,
                    position : AdMob.AD_POSITION.BOTTOM_CENTER,
                    autoShow : true
                });
            }
        }

        document.addEventListener('deviceready', initApp, false);



      
        

        
    },
    
    
    
    
    
    
    
    update: function() {
        
           
        
    },
    
    
    
    
    
    
    
    
    switchBackground : function(sprite,event) {
        
        
        
        
        
        
        
        
    if(this.isMoving) {
        return false;
    }    
        
    this.isMoving = true;
        
        var newBackground, endX;
        
        if(sprite.customParams.direction > 0){
            newBackground = this.backgrounds.next();
            newBackground.x = + newBackground.width;
            endX = -this.currentBackground.width;
            
            
        } else {
            newBackground = this.backgrounds.previous();
            newBackground.x = - newBackground.width;
            endX = + this.currentBackground.width;
            
        }
        
        //this.currentBackground.x = endX;
        //newBackground.x = 0;
        //this.currentBackground = newBackground;
        var newBackgroundMovement = game.add.tween(newBackground);
        newBackgroundMovement.to({x: 0}, 1000);
        newBackgroundMovement.onComplete.add(function(sprite,event){
            this.isMoving = false; 
            //this.sound.backgroundSound;
            sprite.customParams.sound.play();
            
            initialPlay = true;
            console.log(initialPlay);
            sprite.customParams.sound.onStop.add(function(sprite,event){initialPlay = false;
            console.log(initialPlay);} , this);
        },this);
        newBackgroundMovement.start();
        
        var currentBackgroundMovement = this.game.add.tween(this.currentBackground);
        currentBackgroundMovement.to({x: endX}, 1000);
        currentBackgroundMovement.start();
        
        this.currentBackground = newBackground;
        initialPlay = true;
        console.log('initial-play: ' + initialPlay);
        
    },
    
    
    

    
    
    
    
    
    backgroundSound : function(sprite, event) {
        
        if(this.isPlaying || initialPlay == true) {
            return false;
        }    

        this.isPlaying = true;

        sprite.customParams.sound.play();
        sprite.customParams.sound.onStop.add(function(sprite,event){ this.isPlaying = false},this);

    }
    
 
    
    
    
    
    
    
};
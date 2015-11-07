'use strict';

/**
 * @ngdoc function
 * @name alFjrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alFjrApp
 */
angular.module('alFjrApp')
  .controller('MainCtrl', function ($timeout,$scope) {  
    var vm = this;
    vm.homeTop = false;
    vm.HomeScroll = false;

    $timeout(function(){ vm.homeTop = true; }, 1000 );

    var wHeight = $(window).outerHeight();
    $('.HomeTop').css({'height': wHeight});
    $('.HomeMid').css({'margin-top': wHeight}); 


    var gridBoxTop = parseInt($('.gBox').css('top'));
    var gridBoxTopTemp = gridBoxTop;
    var imgOpacity = $('.HomeTopImg > img').css('opacity');
    var imgOpacityTemp = imgOpacity;
    var scroll, imgX, imgY ,imgMX, imgMY;
    var scrollPX;
    var extraAnimations = false; 

    $(window).scroll(function (event) {   
        scrollPX = $(window).scrollTop();

        if(wHeight >= scrollPX){ 
            scroll =  scrollPX / wHeight * 100;
            imgX = (scroll / 3) + 100;
            imgMX = -( scroll / 3 ) / 2 ;
            imgY = scroll / 10 + 100;
            imgMY = -( scroll / 10 ) / 2 ; 
            gridBoxTop = gridBoxTopTemp - scroll;
 
            $('.HomeTopImg > img').css({
                'max-width':imgX + '%',
                'min-width':imgX + '%',
                'max-height':imgY + '%',
                'min-height':imgY + '%',
                'margin-left':imgMX + '%',
                'margin-top':imgMY + '%'
            });
            $('.gBox').css({'top':gridBoxTop});

            if(extraAnimations){
                $('.HomeTopImg > img').css({'opacity':imgOpacity});
                imgOpacity = imgOpacityTemp - ( scroll / 300 );
                if(scroll > 40){ vm.HomeScroll = true; }else{  vm.HomeScroll = false; } 
                $scope.$apply();
            } 
        }
        if(!vm.HMB1 && $('.HMB1').offset().top-scrollPX <= wHeight - 150){ vm.HMB1 = true; $scope.$apply(); } 
        if(!vm.HMB2 && $('.HMB2').offset().top-scrollPX <= wHeight - 150){ vm.HMB2 = true; $scope.$apply(); }   
    });


    vm.getBG = function(){
        var Tbg = '';
        if(vm.EOgrid == 1){ Tbg = 'TRed' }else
        if(vm.EOgrid == 2){ Tbg = 'TYellow' }else
        if(vm.EOgrid == 3){ Tbg = 'Transparent' }else
        if(vm.EOgrid == 4){ Tbg = 'TWhite' }else
        if(vm.EOgrid == 5){ Tbg = 'TBlack' }   
        return Tbg;
    }
    vm.getGridColor = function(){ 
        var Tcolor ='';
        if(vm.EOgridColor == 1){ Tcolor = 'TRedColor' }else
        if(vm.EOgridColor == 2){ Tcolor = 'TYellowColor' }else
        if(vm.EOgridColor == 3){ Tcolor = 'TransparentColor' }else
        if(vm.EOgridColor == 4){ Tcolor = 'TWhiteColor' }else
        if(vm.EOgridColor == 5){ Tcolor = 'TBlackColor' }  
        return Tcolor;
    }
    vm.EOHomeMid = function(){ 
        var Tcolor ='',Tbg =''; 
        if(vm.EOHMC == 2){ Tcolor = 'TGray2ColorHM' }else
        if(vm.EOHMC == 3){ Tcolor = 'TGrayColorHM' }else
        if(vm.EOHMC == 4){ Tcolor = 'TWhiteColorHM' }else
        if(vm.EOHMC == 5){ Tcolor = 'TBlackColorHM' }    

        if(vm.EOHM == 1){ Tbg = 'TRed' }else
        if(vm.EOHM == 2){ Tbg = 'TYellow' }else
        if(vm.EOHM == 3){ Tbg = 'TGray' }else
        if(vm.EOHM == 4){ Tbg = 'TWhite' }else
        if(vm.EOHM == 5){ Tbg = 'TBlack' }    
        return Tbg + ' '+ Tcolor;
    }

    vm.EOGridClick = function($color){ 
        vm.EOgrid = $color; 
    }
    vm.EOGridColorClick = function($color){ 
        vm.EOgridColor = $color; 
    }
    vm.EOHomeMidClick = function($color){ 
        vm.EOHM = $color;  
    }
    vm.EOHomeMidColorClick = function($color){ 
        vm.EOHMC = $color;  
    }
    vm.scrollToTop = function(){ 
        $('body').animate({ scrollTop: 0 }, 'slow');
        console.log('Shit happends everyday');
    }

  })
  .controller('TabCtrl', function () { 
    var vm = this;
 	var $navRoller = $('.navRoller');
    vm.tab = 1; 
    navRoller($navRoller,vm.tab);
    vm.selectTab = function (setTab){
        vm.tab = setTab; 
        navRoller($navRoller,setTab);
    };
    vm.isSelected = function(checkTab) {
        return vm.tab === checkTab;
    };

    function navRoller($ele,$tab){  
        var parent = $ele.parent();
        var currEle = parent.find('li:nth-child('+$tab+')');
        var lineWidth = currEle.outerWidth(); 
        var left = 0,$i;
        for($i = 1; $i < $tab; $i++){
            left = left + parent.find('li:nth-child('+$i+')').outerWidth(); 
        }
        $ele.css({'width':lineWidth , 'margin-left':left});  
    }  

    vm.EOHeader = function($color){
        console.log('heall');
        if($color == 1){ vm.EOheaderRed=vm.EOheaderYellow=vm.EOheaderTrans=vm.EOheaderWhite=vm.EOheaderBlack=false;   vm.EOheaderRed=true;}else
        if($color == 2){ vm.EOheaderRed=vm.EOheaderYellow=vm.EOheaderTrans=vm.EOheaderWhite=vm.EOheaderBlack=false;   vm.EOheaderYellow=true;}else
        if($color == 3){ vm.EOheaderRed=vm.EOheaderYellow=vm.EOheaderTrans=vm.EOheaderWhite=vm.EOheaderBlack=false;   vm.EOheaderTrans=true;}else
        if($color == 4){ vm.EOheaderRed=vm.EOheaderYellow=vm.EOheaderTrans=vm.EOheaderWhite=vm.EOheaderBlack=false;   vm.EOheaderWhite=true;}else
        if($color == 5){ vm.EOheaderRed=vm.EOheaderYellow=vm.EOheaderTrans=vm.EOheaderWhite=vm.EOheaderBlack=false;   vm.EOheaderBlack=true;} 
    }
  });

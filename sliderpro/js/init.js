

jQuery( '#my-slider' ).sliderPro({

    width: 1100,
    height: 800,
    fullScreen: true,
    autoplay: false,
    arrows: true,
    buttons: false,
    smallSize: 500,
		mediumSize: 1000,
		largeSize: 3000,
		thumbnailArrows: false,
    autoHeight: true,
    thumbnailWidth: 157,
    aspectRatio: 4,
    breakpoints: {
		800: {
			thumbnailWidth: 50,
		}
	}

});

var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {
			onLoaded: this.worldLoaded
		});

		var apple_price_video = new AR.VideoDrawable("assets/apple_price.mp4", 0.40, {
            offsetY: -0.6,
        });

        var apple = new AR.Trackable2DObject(this.tracker, "apple", {
            drawables: {
                cam: [apple_price_video]
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                apple_price_video.play(-1);
            }
        });

        var yelp_price_video = new AR.VideoDrawable("assets/yelp_price.mp4", 0.40, {
            offsetY: -0.6,
        });

        var yelp = new AR.Trackable2DObject(this.tracker, "yelp", {
            drawables: {
                cam: [yelp_price_video]
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                yelp_price_video.play(-1);
            }
        });

        var walmart_price_video = new AR.VideoDrawable("assets/walmart_price.mp4", 0.40, {
            offsetY: -0.6,
        });

        var walmart = new AR.Trackable2DObject(this.tracker, "walmart", {
            drawables: {
                cam: [walmart_price_video]
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                walmart_price_video.play(-1);
            }
        });

        var google_price_video = new AR.VideoDrawable("assets/google_price.mp4", 0.40, {
            offsetY: -0.6,
        });

        var google = new AR.Trackable2DObject(this.tracker, "google", {
            drawables: {
                cam: [google_price_video]
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                google_price_video.play(-1);
            }
        });

        var ae_price_video = new AR.VideoDrawable("assets/ae_price.mp4", 0.40, {
            offsetY: -0.6,
        });

        var ae = new AR.Trackable2DObject(this.tracker, "ae", {
            drawables: {
                cam: [ae_price_video]
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                ae_price_video.play(-1);
            }
        });
	}
};

World.init();

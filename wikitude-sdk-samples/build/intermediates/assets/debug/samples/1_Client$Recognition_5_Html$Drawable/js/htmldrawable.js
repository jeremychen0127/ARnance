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
<<<<<<< HEAD
            scale: 1.2
        });

        var apple_head = new AR.HtmlDrawable({
            uri: "assets/apple_head.html"
        }, 0.25, {
            viewportWidth: 720,
            viewportHeight: 50,
            scale: 10,
            offsetX: 0.12,
            offsetY: 0.55,
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
=======
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
        });

        var apple = new AR.Trackable2DObject(this.tracker, "apple", {
            drawables: {
<<<<<<< HEAD
                cam: [apple_price_video, apple_head]
=======
                cam: [apple_price_video]
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                apple_price_video.play(-1);
            }
        });

        var yelp_price_video = new AR.VideoDrawable("assets/yelp_price.mp4", 0.40, {
            offsetY: -0.6,
<<<<<<< HEAD
            scale: 1.2
        });

        var yelp_head = new AR.HtmlDrawable({
            uri: "assets/yelp_head.html"
        }, 0.25, {
            viewportWidth: 720,
            viewportHeight: 50,
            scale: 10,
            offsetX: 0.12,
            offsetY: 0.55,
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
=======
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
        });

        var yelp = new AR.Trackable2DObject(this.tracker, "yelp", {
            drawables: {
<<<<<<< HEAD
                cam: [yelp_price_video, yelp_head]
=======
                cam: [yelp_price_video]
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                yelp_price_video.play(-1);
            }
        });

        var walmart_price_video = new AR.VideoDrawable("assets/walmart_price.mp4", 0.40, {
            offsetY: -0.6,
<<<<<<< HEAD
            scale: 1.2
        });

        var walmart_head = new AR.HtmlDrawable({
            uri: "assets/walmart_head.html"
        }, 0.25, {
            viewportWidth: 720,
            viewportHeight: 50,
            scale: 10,
            offsetX: 0.12,
            offsetY: 0.55,
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
=======
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
        });

        var walmart = new AR.Trackable2DObject(this.tracker, "walmart", {
            drawables: {
<<<<<<< HEAD
                cam: [walmart_price_video, walmart_head]
=======
                cam: [walmart_price_video]
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                walmart_price_video.play(-1);
            }
        });

        var google_price_video = new AR.VideoDrawable("assets/google_price.mp4", 0.40, {
            offsetY: -0.6,
<<<<<<< HEAD
            scale: 1.2
        });

        var google_head = new AR.HtmlDrawable({
            uri: "assets/google_head.html"
        }, 0.25, {
            viewportWidth: 720,
            viewportHeight: 50,
            scale: 10,
            offsetX: 0.12,
            offsetY: 0.55,
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
=======
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
        });

        var google = new AR.Trackable2DObject(this.tracker, "google", {
            drawables: {
<<<<<<< HEAD
                cam: [google_price_video, google_head]
=======
                cam: [google_price_video]
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                google_price_video.play(-1);
            }
        });

        var ae_price_video = new AR.VideoDrawable("assets/ae_price.mp4", 0.40, {
            offsetY: -0.6,
<<<<<<< HEAD
            scale: 1.2
        });

        var ae_head = new AR.HtmlDrawable({
            uri: "assets/ae_head.html"
        }, 0.25, {
            viewportWidth: 720,
            viewportHeight: 50,
            scale: 10,
            offsetX: 0.12,
            offsetY: 0.55,
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
=======
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
        });

        var ae = new AR.Trackable2DObject(this.tracker, "ae", {
            drawables: {
<<<<<<< HEAD
                cam: [ae_price_video, ae_head]
=======
                cam: [ae_price_video]
>>>>>>> c7f981ea95eba06586a499a96c2aac1f061ac1fc
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                ae_price_video.play(-1);
            }
        });
	}
};

World.init();

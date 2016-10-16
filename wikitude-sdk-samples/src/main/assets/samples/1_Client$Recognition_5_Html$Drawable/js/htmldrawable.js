var World = {
	loaded: false,

	init: function initFn(highlight) {
		this.createOverlays(highlight);
	},

	onVoiceButtonClicked: function onVoiceButtonClickedFn() {
	    var architectSdkUrl = "architectsdk://voice";
	    document.location = architectSdkUrl;
	},

	createOverlays: function createOverlaysFn(highlight) {

        if (!highlight) {
            this.tracker = new AR.ClientTracker("assets/tracker.wtc", {
                onLoaded: this.worldLoaded
            });
        }

		var apple_price_video = new AR.VideoDrawable("assets/apple_price.mp4", 0.40, {
            offsetY: -0.6,
            scale: 1.2
        });

        var apple_highlight_video = new AR.VideoDrawable("assets/apple_highlight.mp4", 0.40, {
            offsetX: -1,
            offsetY: 0.05,
            scale: 2
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
        });

        var yelp_price_video = new AR.VideoDrawable("assets/yelp_price.mp4", 0.40, {
            offsetY: -0.6,
            scale: 1.2
        });

        var yelp_highlight_video = new AR.VideoDrawable("assets/yelp_highlight.mp4", 0.40, {
            offsetX: -1,
            offsetY: 0.05,
            scale: 2
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
        });

        var walmart_price_video = new AR.VideoDrawable("assets/walmart_price.mp4", 0.40, {
            offsetY: -0.6,
            scale: 1.2
        });

        var walmart_highlight_video = new AR.VideoDrawable("assets/walmart_highlight.mp4", 0.40, {
            offsetX: -1,
            offsetY: 0.05,
            scale: 2
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
        });

        var google_price_video = new AR.VideoDrawable("assets/google_price.mp4", 0.40, {
            offsetY: -0.6,
            scale: 1.2
        });

        var google_highlight_video = new AR.VideoDrawable("assets/google_highlight.mp4", 0.40, {
            offsetX: -1,
            offsetY: 0.05,
            scale: 2
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
        });

        var ae_price_video = new AR.VideoDrawable("assets/ae_price.mp4", 0.40, {
            offsetY: -0.6,
            scale: 1.2
        });

        var ae_highlight_video = new AR.VideoDrawable("assets/ae_highlight.mp4", 0.40, {
            offsetX: -1,
            offsetY: 0.05,
            scale: 2
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
        });

        var apple_drawables = [];
        var yelp_drawables = [];
        var walmart_drawables = [];
        var google_drawables = [];
        var ae_drawables = [];

        if (highlight) {
            apple_drawables = [apple_price_video, apple_head, apple_highlight_video];
            yelp_drawables = [yelp_price_video, yelp_head, yelp_highlight_video];
            walmart_drawables = [walmart_price_video, walmart_head, walmart_highlight_video];
            google_drawables = [google_price_video, google_head, google_highlight_video];
            ae_drawables = [ae_price_video, ae_head, ae_highlight_video];
        } else {
            apple_drawables = [apple_price_video, apple_head];
            yelp_drawables = [yelp_price_video, yelp_head];
            walmart_drawables = [walmart_price_video, walmart_head];
            google_drawables = [google_price_video, google_head];
            ae_drawables = [ae_price_video, ae_head];
        }

        var apple = new AR.Trackable2DObject(this.tracker, "apple", {
            drawables: {
                cam: apple_drawables
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                apple_price_video.play(-1);
                if (highlight) {
                    apple_highlight_video.play(-1);
                }
            }
        });

        var yelp = new AR.Trackable2DObject(this.tracker, "yelp", {
            drawables: {
                cam: yelp_drawables
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                yelp_price_video.play(-1);
                if (highlight) {
                    yelp_highlight_video.play(-1);
                }
            }
        });

        var walmart = new AR.Trackable2DObject(this.tracker, "walmart", {
            drawables: {
                cam: walmart_drawables
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                walmart_price_video.play(-1);
                if (highlight) {
                    walmart_highlight_video.play(-1);
                }
            }
        });

        var google = new AR.Trackable2DObject(this.tracker, "google", {
            drawables: {
                cam: google_drawables
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                google_price_video.play(-1);
                if (highlight) {
                    google_highlight_video.play(-1);
                }
            }
        });

        var ae = new AR.Trackable2DObject(this.tracker, "ae", {
            drawables: {
                cam: ae_drawables
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                ae_price_video.play(-1);
                if (highlight) {
                    ae_highlight_video.play(-1);
                }
            }
        });
	}
};

World.init(false);

function updateOverlay(matches) {
    World.init(matches);
};

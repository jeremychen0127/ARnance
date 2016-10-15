var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		/*
			First an AR.ClientTracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function worldLoaded() is called.

			Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			Use a specific target name to respond only to a certain target or use a wildcard to respond to any or a certain group of targets.

			Adding multiple targets to a target collection is straightforward. Simply follow our Target Management Tool documentation. Each target in the target collection is identified by its target name. By using this target name, it is possible to create an AR.Trackable2DObject for every target in the target collection.
		*/
		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {
			onLoaded: this.worldLoaded
		});

		/*
			The button is created similar to the overlay feature. An AR.ImageResource defines the look of the button and is reused for both buttons.
		*/
		//this.imgButton = new AR.ImageResource("assets/wwwButton.jpg");

		/*
			The next step is to create the augmentation. In this example an image resource is created and passed to the AR.ImageDrawable. A drawable is a visual component that can be connected to an IR target (AR.Trackable2DObject) or a geolocated object (AR.GeoObject). The AR.ImageDrawable is initialized by the image and its size. Optional parameters allow for position it relative to the recognized target.
		*/
		var apple_price_graph = new AR.ImageResource("assets/apple_price.png");
		var apple_price = new AR.ImageDrawable(apple_price_graph, 0.6, {
			offsetX: 1,
			offsetY: 0
		});

        var apple = new AR.Trackable2DObject(this.tracker, "apple", {
            drawables: {
                cam: [apple_price]
            }
        });


        var yelp_price_graph = new AR.ImageResource("assets/yelp_price.png");
        var yelp_price = new AR.ImageDrawable(yelp_price_graph, 0.6, {
            offsetX: 1,
            offsetY: 0
        });


		var yelp = new AR.Trackable2DObject(this.tracker, "yelp", {
			drawables: {
				cam: [yelp_price]
			}
		});

		var walmart_price_graph = new AR.ImageResource("assets/walmart_price.png");
        var walmart_price = new AR.ImageDrawable(walmart_price_graph, 0.6, {
            offsetX: 1,
            offsetY: 0
        });

		var walmart = new AR.Trackable2DObject(this.tracker, "walmart", {
            drawables: {
                cam: [walmart_price]
            }
        });

        var google_price_graph = new AR.ImageResource("assets/google_price.png");
        var google_price = new AR.ImageDrawable(google_price_graph, 0.6, {
            offsetX: 1,
            offsetY: 0
        });

        var google = new AR.Trackable2DObject(this.tracker, "google", {
            drawables: {
                cam: [google_price]
            }
        });

        var ae_price_graph = new AR.ImageResource("assets/ae_price.png");
        var ae_price = new AR.ImageDrawable(ae_price_graph, 0.6, {
            offsetX: 1,
            offsetY: 0
        });

        var ae = new AR.Trackable2DObject(this.tracker, "ae", {
            drawables: {
                cam: [ae_price]
            }
        });
	}
};

World.init();

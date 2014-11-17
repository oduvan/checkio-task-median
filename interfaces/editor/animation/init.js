//Dont change it
requirejs(['editor', 'slider', 'jquery'],
    function (editor, slider, $) {
    	editor.configure({
		    "animation_panel_width": 400,
		    "console_height": 280,
		    "tryit_results_height": 250,
		    "tryit_results_width": 400
    	});

    	function MedianCanvas(dom, numbers, options) {
    		// ...
    	}

    	slider.explanaion(function(dom, data){
    		var canvas = new MedianCanvas(dom, gatherData);
            canvas.createCanvas();
            canvas.animateCanvas();
    	});

    	slider.tryit(function(dom, api){
    		var canvas = new MedianCanvas(dom);
            canvas.createCanvas();
            canvas.tryItCanvas(api);
    	});
    }
);

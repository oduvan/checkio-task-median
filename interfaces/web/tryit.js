//Dont change it
requirejs(['editor', 'median'],
    function (editor, MedianCanvas) {
    	editor.tryitConfigure({
		    "tryit_results_height": 250,
		    "tryit_results_width": 400
    	});
    	
    	slider.tryit(function(dom, api){
    		var canvas = new MedianCanvas(dom);
            canvas.createCanvas();
            canvas.tryItCanvas(api);
    	});
    }
);

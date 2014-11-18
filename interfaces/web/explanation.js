//Dont change it
requirejs(['editor', 'median'],
    function (editor, MedianCanvas) {
    	editor.explanationConfigure({
		    "animation_panel_width": 400
    	});

    	slider.explanaion(function(dom, data){
    		var canvas = new MedianCanvas(dom, gatherData);
            canvas.createCanvas();
            canvas.animateCanvas();
    	});
    }
);

(function() {
	// document.getElementById("poseMouse").innerHTML = "Run";
    var mousePos;

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 25); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event;
		
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }
    function getMousePosition() {
        var pos = mousePos;
		Window_width = window.innerWidth;
		Window_height = window.innerHeight;
		Body_top = document.body.getBoundingClientRect().top;
		Body_bottom = document.body.getBoundingClientRect().bottom;
		Screen_width = window.screen.width;
		Screen_height = window.screen.height;
		percent_x = ((pos.x/Window_width)*20-10)
		percent_y = ((pos.y/(Window_height-Body_top))*20-10)
		
		
		// document.getElementById("widthScreen").innerHTML = Screen_width + " / " + Screen_height;
		// document.getElementById("widthBody").innerHTML = Window_width + " / " + Window_height;
        if (!pos) {
            // We haven't seen any movement yet
			// document.getElementById("poseMouse").innerHTML = "Nop";
        }
        else {
            // Use pos.x and pos.y
			// document.getElementById("poseMouse").innerHTML = pos.x + " / " + pos.y;
			// document.getElementById("percentMouse").innerHTML = ((pos.x/Window_width)*100).toFixed(0) + " / " + ((pos.y/Window_height)*100).toFixed(0);
			// document.getElementById("pagelevel").innerHTML = Body_bottom.toFixed(0) + " / " + Body_top.toFixed(0);
			// document.getElementById("orientationCube").innerHTML = percent_x.toFixed(0) + " / " + percent_y.toFixed(0);
			
			if (Window_width > Window_height) {
				document.getElementById("cube_face").style.transform = "rotateY(" + percent_x.toFixed(0) + "deg) rotateX(" + -percent_y.toFixed(0) + "deg) translateZ(100px)"; 
			}else{
				document.getElementById("cube_face").style.transform = "rotateY(0deg) rotateX(0deg) translateZ(100px)"; 
			}
		}
    }
})();
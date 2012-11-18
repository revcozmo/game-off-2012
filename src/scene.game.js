/*
 * The MIT License
 * 
 * Copyright (c) 2012 Petar Petrov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
Crafty.scene("main", function() {
    
    //Crafty.background("url('art/bg1.png')");
    
//        var player = Crafty.e("2D, Canvas, Color")
//          .color("red")
//          .attr({x: 150, w:50, h:50});
//    // Can use the arrow keys as well,
//      // but we don't want to accidentally change slides
//      player.addComponent("Fourway").fourway(5)
//        
    //score display
	var score = Crafty.e("2D, DOM, Text")
		.text("Score: 0")
		.attr({x: Crafty.viewport.width - 300, y: Crafty.viewport.height - 50, w: 100, h:50})
		.css({color: "#fff"});        
    
    //player entity
    var tilemap = new Tilemap();
    var player = new Player();
     
});    

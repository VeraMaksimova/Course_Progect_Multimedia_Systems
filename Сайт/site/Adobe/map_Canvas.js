(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.diagram = function() {
	this.initialize(img.diagram);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8419,8263);


(lib.Zvukosnimatel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Zvukosnimatelwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.698)").s().p("AhOFGQgUgBgJgEIgZgLIgJgJIgJgKQgJgMgDgJIgEgNIgEgLQgBgFACgDIgCgGIAehyIB+mGIACgCIACgGQADgHAIgHIAKgKQAJgIAGgDIAKgEIAZgFQAKgCAGACIAeACIAEACIACAAQAEABAHADIAIAFQAGADALAKIAJAKQANAQAAAfIAAAEIABAIIgBAGIgCAIIAAAAIiMHLIgGAOIAAADQABAEgFAIQgEAKgGAGIgOAQIgMAKQgEADgIAEQgKAEgOAAIgGAAIgSAAg");
	this.shape.setTransform(1.5,0.0333);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-32.6,34.3,65.30000000000001);


(lib.Struni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Struniwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("Eg6LgDyMBj6ABdEg6GgCOMBm3ABAEg6SgAxMBqtAAjEg6MAAyMBtigAGEg6SACKMBxMgAdEg6MADzMB0fgBS");
	this.shape.setTransform(1.5,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372.5,-25.3,748.1,50.6);


(lib.Steplok = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Streplockwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.698)").s().p("A9xG8QgHgDgDgNIgCgIQgHgZgCgNQgBgXAHgPQACgFAJgMIAHgIQAFgDAFABQAEAAAGAEIAGAEIAOASQAGgEAFABQAGABAEAFQAEAHgGARQgFAQAAAOIAAAMQgCAIgEACIgNAEQgKACgGAIIgEAGQgDADgGAAQgGAAgDgBgAdllAIgYgaQgFgEgHgDQgCgBgEgBIgEACIgBAFQgBALgCADIgBACQgCAJgIACQgKACgEgJQgEgEABgIIABgJIABgHIABgYQAAgZAEgNIABAAIgBgBIgBgCIgBgDIAAAAIAAgFIACgHIAAAAIABgCIACgDIAFgDIAOgBIAFADIADAEIABABIACABIABABIAAAAIACAGIABADIgBADIAAAAIgBAEIABAAQAEgBAHAAIAagMQAIgEAGAAQAJgBAFAEQAEAFAAAIQAAAFgDASIgJA0IgCAKIAAACQABAJgHAEQgDACgEAAQgDAAgEgCg");
	this.shape.setTransform(1.5368,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.2,-44.5,385.5,89.1);


(lib.Sedla = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("SedlaDlaStrunwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AiOjXIB9AHIAQhNIAQgIIBAAFIgBBSIBKACIAAAUIhMACIgCBSIhXgBIAAhBIADgGIiHgJgAiYgOIChgCIAAhBIAQgKIBHABIAABOIA4AEIABATIg+ADIACBQIhgAHIAIhNIiXgEgAiSC1ICpgIIAFg+IBMgMIAGBWIAkABIADAPIgvAHIAHBSIhWAEIgChNIiqgFg");
	this.shape.setTransform(1.5,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,255,0.698)").s().p("AAUDZIiogFIADgfICogIIAEg+IBNgMIAFBWIAkABIAEAPIgwAHIAHBSIhVAEgAAFAYIiWgEIgHgiIChgCIAAhBIAQgKIBHABIAABOIA3AEIACATIg/ADIADBQIhfAHgAgNhlIAAhBIADgGIiHgJIADgiIB9AHIAQhNIAQgIIBAAFIgBBSIBKACIAAAUIhMACIgCBSg");
	this.shape_1.setTransform(1.5,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-30.4,32.6,60.9);


(lib.SahitnayNacladka = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("ZahitnayPodkladkawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AtDNnIgM7kIAvgkIBHgRID2gYIC8AGIC7AeIDTA0IDTBHIDBB1IB2B1IAvBqImVAXIAAHJIBqAdIheBBIgvB1IARB2IBBB1IBYBeIB7BMICkA7IBwAdIAvA6IgMBNIhYBAIjfA7IkOgYIjThGIiehMIiegpIjHgGIi2A1g");
	this.shape.setTransform(1.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,255,0.698)").s().p("AD/OzIjThGIiehNIidgoIjIgHIi2A1Ii2BBIgM7kIAvgkIBHgRID2gXIC8AFIC7AeIDTA0IDSBHIDCB1IB2B1IAvBqImVAYIAAHIIBqAdIhfBBIguB1IARB2IBAB1IBZBdIB7BNICkA6IBvAeIAvA6IgMBNIhYBAIjeA6g");
	this.shape_1.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,-98,171.5,196.1);


(lib.RegulatorTona = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("RegulatorTonawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.698)").s().p("AgsBdIgdgJQgIgDgGgGQgQgMgIgOQgFgLgCgQIAAgbQABgMACgGQAEgJAIgFIABgBQAEgHAGgGIADgDIABgCQACgFAHgEIANgGQALgEAWgMQASgHAfAAQAZAAANADQAVAFAMALQAGAGAGAIQAMAQAFANQAHAXgJAZQgHATgRAXQgHAKgGADQgEAEgMADIgbAHIgsAHQgNADgJAAIgMgCg");
	this.shape.setTransform(1.5279,0.0143);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-9.4,23.9,18.9);


(lib.RegulatorGromcosti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("RegulatorGromcostiwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.698)").s().p("AgJBcQgjgCgYgKQgGgCgDgEIgDgEIgFgEIgIgKIgDgEIAAAAQgIgJgDgHIAAAAIgFgIQgDgIAAgRIABgPIAFgNQADgIADgCIABgBQADgHAGgHQAIgIASgNQALgJAJgDIAOgDIBBgGIANABIALADQAQAGAGAFQAJAGAPAUQAGAJABAFQACACACAOIACARIABAQQgCASgMAMQgBADgDADIgJAKQgEAFgDACIgOAHIgJABIgBAAIgGADIgJACIgUAKQgKAFgPAAIgHgBg");
	this.shape.setTransform(1.5333,0.0083);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-9.2,23.1,18.5);


(lib.Regulator_tona2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("RegulatorTonawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.698)").s().p("AggBWQgRgCgJgKQgFgDgHgKIgIgQQgDgCgBgEQgCgDAAgIQgBgQAEgKIAAgIQABgJAEgFIAEgFIAEgIIAEgGIAAAAIAGgHIACgBIAQgQIAOgJIABAAQADgEAFgCIAGgCIALgDIABgCIAEgBIAFgBIADAAQAPAAAFADIASALQAOAJAHAIQAJALADASIABAUQAAAWgEALQgGAVgeAXQgLAKgKADQgHAEgTABQgXgBgHgBg");
	this.shape.setTransform(1.515,0.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-8.2,17.1,17.5);


(lib.Regulator_emcosti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("RegulatorGromcostiwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.698)").s().p("AgkBSIgHgCIgDgBQgFgDgFgFIgMgLQgHgGgCgGIgBgEIgCgCIgDgKQgBgKAAgKQAAgLABgEIAEgLQABgEACgDIABgCIAFgNIAGgMIAIgIQAGgHAGgEIAMgFIAGgFIANgEIAHgBIAHgBIAZAAQAKAAAFACIABABIADAAQAEACAJAGIAKAJIALATQACAFABALIACASQACAPgDANQgDAQgIAJQgGAHgJAFIAAAAIgGAGIgSAKIgPAIQgNAFgbAAQgJAAgFgCg");
	this.shape.setTransform(1.5031,0.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7.9,17,16.8);


(lib.RazemDlaKabela = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Raxemdlakabelawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AhKgUIAJAxIANAUIAVAUIA0APIA2gyIgOhXIhFgeg");
	this.shape.setTransform(1.525,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,255,0.698)").s().p("AgfBFIgVgUIgNgUIgJgwIBCg/IBFAdIAOBXIg2Axg");
	this.shape_1.setTransform(1.525,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-8.8,17.1,18.700000000000003);


(lib.Metka = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Metkiwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.698)").s().p("AmmCAQgJgBgGgIIgCgEIgEgIIAAgFQAAgIABgDIACgDIABgDQABgEADgDIAHgCQAJgCAHADIALADIAFADQAFADACAFQACACAAAIIgBAJQAAAEgEADQgEAKgLABgAuPAdQgJgEgCgIIgBgJIAAgNIABgGIACgDQAAgDADgCQADgDAHgCIALAAIAGABIASAJIAEAEQADAFAAAHIgBAIIgCAEIgEAGIgLAHIgEADQgDABgFAAIgEABQgGAAgGgDgAyYAdIgLgGQgJgGgDgJIgBgGIABgJIAAgEQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAEgIAGgCIAQgBQAKAAADACQADAAAEAHQAEAEAAACIABAEIABAIIAAAKQgCAFgGAFQgEAEgDABQgDABgIAAgA2MAdIgHgBIgJgFIgEgEQgEgEgCgEIAAgNIAAgEIADgHIAFgFIAMgGIAIgBIAKABIAFACIAFACQADADACADIAAADIACACQABADAAAEIgBAJIgFAKIgDAFIgHAEQgDADgHAAIgEAAgA5wAaIgEgCQgLgGgEgGQgBgFAAgHIAAgKQADgFAFgEIAGgEIAEgBIAHgCIALAAIAFACIAKAHIAEAFIADAGIAAAMIgFAKIgEAEIgIAGIgFAAgAZlAaIgFgBIgIgDQgIgFgBgEQgCgDAAgIQAAgMAFgGIAEgEQAIgGAFgCQAGgBAEACIACACIADAAQAGAAAIAHIADAEIACAFQABAHgDAIIgCAIIgEAGQgCAEgFABIgFABgAQ1AZQgFgBgEgFQgEgEgCgGIgCgFIgBgHQAAgKADgDIAFgGIAGgFIADgCIAHgBIAHgBQAFABAJAGIAHAFQAEAGAAAMIgBAJQgBAEgFAGQgFAGgDABIgGABgACNAZQgEAAgFgFIgHgKIgBgEIgBgFIABgOQACgDADgEIADgCIAFgCIALgEIABAAIAIABIANAFIAHAFQADAEAAALIAAAHQgBAGgEADQgBAJgJACIgTABgAJJAYQgHgBgFgHIgFgGIgDgIIgBgHQAAgFACgDIADgDIABgDQAEgIAKgCIAHAAIAHAAIAJAEIAEACIAEACQAFAHAAADIABAOIgBAHQgBAEgHAFIgIAFQgCABgLAAgAmwhMIgDgCIgEgFIgEgGIgBgLQAAgIACgEIADgCIACgEQAFgIAJgBQAJgBAIADQAHACADAEQAEAEACAFQAFAKgFANIgDAFIgDAEQgCADgGACQgGACgFAAQgJAAgIgFg");
	this.shape.setTransform(1.525,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.4,-12.8,333.9,25.6);


(lib.Lad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Ladwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AhsDVIDsgHIgEmTIj7gPg");
	this.shape.setTransform(1.5,-137.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,255,0.698)").s().p("Ah/jVID7AQIADGTIjrAHg");
	this.shape_1.setTransform(1.5,-137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-159.8,27.5,159.8);


(lib.Kolki = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Kolkiwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.698)").s().p("AHLE0QgKgCgFgFQgDgCgFgJIgFgKQgCgHAAgOQAAgMACgGIAGgOQABgIABgDQADgEAGgEQALgFAPgCIAcgBQAKAAADABQAHACAFAFQAOAMAAAKIAAAMIAEAHQABAEAAAJQABAKgCAHIgFAPQgEAIgCABQgFAFgMABIgeAAQgVAAgHgBgADjDyQgLgGgDgGQgEgHABgLIACggQACgWARgRQAIgIAHgCQAKgCAFAHIAeAGIASAGQAIADAFAGQAGAJgBAXIgBANQgBAFgGANQgGALgEAFIgKAHQgFAFgEADQgGADgLAAQgZgBgVgLgAEHDgIAJACIACAAIAAgBIACgDgAAbC6QgMgDgEgEIgFgJQgGgGgCgEQgCgFAAgHIAAgMIAAgIQgBgFABgEIAEgKIAAgLQACgIALgIIALgHQAGgCAGgBQATgBAOAFQAKAEAPAMQANALAFAJQADAIgBARQgDAXgJAKIgLAKIgGAFIgGAFQgFADgIAAIgCAAQgPAAgWgHgAA2ClIAFAAIABAAIAAgCIgGACgAIlCiQgHAAgDgFQgDgFAAgJQAAgIADgFIABgEIgBgDQgDgFgJgEIgOgHQgKgHgDgLQgDgKABgMQAAgLADgIQAIgRAbgHQANgDAKgBQAIAAAEACIAHADIAOADQAMACASAOQAKAHADAEQAFAFAGALQAHANgBAHIgFAOIgHAMQgEAEgJAFQgWAKgXgCQgFAAgCABIgDAEIgEAJQgEAIgEADQgEADgEAAIgDAAgAjBByQgHgEgFgIIgEgHIgGgHIgKgMQgBgCAAgNIAAgOQABgHAIgJIAMgPIAHgIQACgBAJAAQAGAAALgBIAQgCQAIABADACIAPALQAOAJAFAaQAFAVgGALIgGAIQgCAHgCADQgFAGgMAAIgfACIgIAEIgHABQgFAAgFgCgAigAsIAAABIAFAAIgEgCIgDAAgAFABcQgEgHAEgJIACgEQAAgDgDgDIgPgLQgJgGgDgGIgEgKIgEgGIgCgMQgBgNAFgKQAFgNAKgHQAFgEAMgEQAIgDAJgBQAegHAUAKQAIAEAHAGQANAJAFAGQATATAAAeQgBAOgFAGIgIAHIgKAHQgDACgOAAQgZABgMgCIgEAAIgCAEQgDALgDAEQgFAJgIAAIgCAAQgHAAgFgIgAmZAwQgOgGgGgQQgFgLAAgRIABgKIgBgCQAAgGABgGQADgKAEgHQAEgGAGgDQADgEAJgDQAMgEAVABQALABAGAEIAEADIAEABQAEACADAFIAEAJIAFAHQAEAFACAJIABANIACAMQABAIgJALQgHAIgKAHQgGAFgFACIgOAAIgTABQgMAAgHgDgABzAkQgHgCgCgGQgCgFABgGQACgLADgEIACgCIgCgBQgcgLgIgNQgIgNABgWQAAgNAEgIQAFgHAPgGQAVgJAPgCQATgDARAGQAKADAKAJQALAJAIALIAHAKQAEAGABAFQADAJgDAPIgFAOQgFAKgEADQgIAHgTABQgRAAgSgEIgFAOQgDAJgEAEQgEADgEAAIgDAAgApIgLIgDAAIgOAAIgPAAQgJAAgEgDQgDgBgEgKIgIgKQgFgHgBgFQgCgEAAgPQAAgOABgEIADgJIAEgHQAIgPAKgDIAFgBIADgBQAIgDAZAAQAMAAAEABIAJAHQAFADAEAFQADADAHALQAFAKADAHQADAJgBALQAAAKgDAEQgCADgFAFIgNAMQgLAJgFACIgIAAIgGAAgAhZgUIgIgDQgJgEgCgFQgEgGAEgJIAHgOQgJgEgMgIIgKgIIgFgHIgIgJQgDgGAAgKQAAgJADgIQADgHADgFIAGgJQAFgGAGgEQAKgFAHgBIAQgBQAaAAANAEQARAGARASQAPARACAOIAAATQAAAJgBAFQgDAGgIAHQgJAIgEACQgJAEgQgCIgLgBIgEAAQgCABgCADIgFAJIgBAHQgBAEgCADQgEAFgGAAIgCAAgAlHhgIAMgaIgcgWIgIgLIgBgBIAAAAIAAgBIgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBgBIgDgGIAAgCIAAgBIgBgBIABgTIABgEIABgCIABgBIAAgBIAagaIApgKIAWABIASAFIAUAMIAPAQIAIAQIAEAQIgBAPIgIAMIgPAKIgSAJIgfAEIgIAIIgJAXgAoeijIAPgdIgGgEIgBgBIgZgPIgFgEIgEgEIgFgLQgDgGAAgNIABgPIAEgRQACgGACgCIAHgFIACAAIABgBIAHgEQAQgHAPAAIAWgBIAMABIAIABQAKACAFAEIACACIADADIAKAHQAKAJADAEIADAFIAAABIAFAJIAFAIIACAHIABARQAAAHgCAFIgGAHIgSAQIgHAEQgFADgDAAIgLACIgIgBIgRgBIgHAOIgEAMIgFAIgAoeijIAAAAIAAAAIAAAAg");
	this.shape.setTransform(1.5017,-0.0083);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.7,-30.9,130.5,61.8);


(lib.HandsOn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("HandsOnwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.698)").s().p("AgeBXQgHgCgMgGQgNgIgFgFQgMgMgDgUQgEgRAEgRQACgJAIgQQATglAYgQQAFgEAHgDQAKgDARADQAXAEANAJIAGACQAKAFAIALQAEAFAHAOIADAJIAAAOQAEAOgFAQQgFASgPARQgMAOgRALQgGAEgKADQgFACgRABIgLAAQgKAAgFgBg");
	this.shape.setTransform(1.4971,0.4974);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-8.3,17.1,17.6);


(lib.Grif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Grifwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("Egh3ADZIAGmrIApgjMBCuAA7IASF1MhDMAA7g");
	this.shape.setTransform(1.5,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,255,0.698)").s().p("Egh3ADZIAGmrIApgjMBCuAA7IASF1MhDMAA7g");
	this.shape_1.setTransform(1.5,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.2,-25.5,435.5,51.1);


(lib.GolovaGrifa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("GolovaGrifawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.698)").s().p("AICFhQgHgCgEgDQgHgBgGgDIgLgGIgegWIgCgBIgvgjIgJgIIgBgCIgHgCIgTgIIgNgHQgFABgGgBQgFAAgDgCQgCgCgBgCIgXAAIgzAMIggAMIAAABQgrAeg7AJIgXADIgnAGQgIABgdAAIhCAAIgbgBQgKAAgGgEIgHAAQgiAAghgJIgYgHIhMgiQgIgCgDgFIgDgGIgBAAQgHACgKgDIgXgLQgMgGgagHQgagHgLgGQgVgJgFgBQgOAAgGgBIgQgHQgJgEgUgDIh6gVQgJgCgFgDIidgKIgEl5IgDgFQgBgGACgEQADgFAGgFQAIgHAIgKIAJgMIAKgMIAIgOQAEgJAEgEQACgEANgJIAIgHIAGgKQADgGAFgDQALgJASABQAJABAEAEIADADIAcABITUFwQAEgEAGABQAEAAAHAEQAHACANABIAPAFIAIABIAHACIAPAGIAHAEQAGAEACADQACAEAAAFIAOAFIAXAdIAMAfIAFA8IAAABQADAGgCAMIgIAoQgKAggpAkQgkAhgcANQgUAJgZADQgNACgNAAQgxAAgagLg");
	this.shape.setTransform(1.4869,0.0197);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.8,-36.3,156.7,72.69999999999999);


(lib.Dzek = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Dzekwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AJHg8IBOADIgPDuIhGAAIACgMIgugCIgFgPIiKgJIgMgMIgMAJIgOgMIAWgTIAJAMIAYgKIB5AKIAIgMIAmACgAqIAbIgMjjIBGgKIAMCgIAAA+IgOATIAKCDIgPAWIAKAOIgPANIgRgPIAIgPIgNgQIgCh+g");
	this.shape.setTransform(1.525,0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,255,0.698)").s().p("AprDEIAIgPIgNgQIgCh+IgWgMIgMjjIBGgKIAMCgIAAA+IgOATIAKCDIgPAWIAKAOIgPANgAJAC1IACgMIgugCIgFgPIiKgJIgMgMIgMAJIgOgMIAWgTIAJAMIAYgKIB5AKIAIgMIAmACIAKirIBOADIgPDug");
	this.shape_1.setTransform(1.525,0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-21.5,134.1,44.1);


(lib.DlaKabelf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Raxemdlakabelawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AGkAAQAACuh7B7Qh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtg");
	this.shape.setTransform(-237,-11.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,255,0.698)").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");
	this.shape_1.setTransform(-237,-11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280,-54.9,280,86);


(lib.DK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("DKwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AACyhIl9iwIi8g0IjhgvIj9AAIiIAcIiRA5Ih/BBIhsBeIhUB6IhLCWIgvCNIgvEjIgcGJIATIkIASD9IBLECIBCBxIBeB1IBsBnIEGCWIFEAmIFkhMICgg4ICkhBICphLIB5hCICRg4ICggrIB6gOICMAYICNAlIB/A9ICWA9ICtAqICkAFICugXIB1g5IBUhnIAFhUIgchLIhUgqIiEgvIikhLIh+hnIgvhsIgThHIAOhGIAhhCIAzg4IArgOIikgJIghghIAAmhIAhgqIIygEIg9hZIAKg5IA9hUIAzh1IAviWIAAhxIgciWIhLhiIhZhLIiNgvIhsgKIh+AAIhsAYIiIAlIjTBQIiWA0Ii8AcIiMgYIiIgqIjNhbIjZhq");
	this.shape.setTransform(1.5,0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,255,0.698)").s().p("AyvWPIkHiWIhshnIheh1IhBhxIhLkCIgTj9IgTokIAdmJIAukjIAviNIBLiWIBVh6IBsheIB+hBICSg5ICHgcID9AAIDhAvIC8A0IF9CwIDMBbICIAqICNAYIC8gcICVg0IDUhQICIglIBsgYIB+AAIBsAKICNAvIBYBLIBMBiIAcCWIAABxIgvCWIg0B1Ig9BUIgJA5IA9BZIozAEIggAqIAAGhIAgAhIClAJIgrAOIg0A4IggBCIgPBGIATBHIAvBsIB/BnICkBLICDAvIBVAqIAcBLIgFBUIhUBnIh1A5IiuAXIikgFIiugqIiWg9Ih+g9IiNglIiNgYIh6AOIifArIiRA4Ih5BCIipBLIikBBIigA4IlkBMg");
	this.shape_1.setTransform(1.5,0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.8,-146.5,370.6,294.1);


(lib.Comboysilitel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("ComboUsilitelwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AoTlZIgkgMIgYgcIAAlMIAMgVICdhqIPrA9IAbAVIAJAhIgJFPIgkAuIAVASIAMAYIgMPJIgDATIinCXIgVAMIvVh/IgTgYIgSnDIAMlVIAMi+g");
	this.shape.setTransform(1.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,255,0.698)").s().p("ApDLOIgSgZIgSnCIALlVIAMi+IA9g5IgkgMIgYgcIAAlMIAMgVICdhqIPrA9IAbAVIAJAhIgJFPIgkAuIAVASIALAYIgLPJIgDATIinCXIgVAMg");
	this.shape_1.setTransform(1.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-84.9,125.30000000000001,170.9);


(lib.Bridz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Bridzwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.686)").ss(1,1,1).p("AFSjVIAAAFIgVA4Ih7GiIgNAPABgFQIgFAAInJALIgbghIAChtAl/jgIAChoIASgSIL1ADIgJKgIjtAGAmDgaIADifAmGClIACiV");
	this.shape.setTransform(2.275,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,255,0.698)").s().p("AmBE6IAChtIgDAAQgIAAgEgHQgDgEAAgMQAAgFACgEQAEgHAJgCIAEABIACiVIgFABQgIABgFgIQgDgEAAgHIABgLIABgHQADgIAJAAQAFgBADACIADifQgEACgFAAQgJgBgEgIQgBgDAAgKQAAgLABgCQAFgKAKABQAFAAADADIAChnIASgSIL1ADIgJKfIjtAFIgLAFIgMABIgPAAIgIgBIgGgEIgFAAInJAMgABYExIAVACIACAEIAGgCQATAAAHgDIAJgGIALgDIAKgHQAEgDALgGIABAAIANgPIB7miIAVg4IAAgFQACgCAAgDIABgCIAAgCIgBgHIAAgBQADgGgEgHIAAAAIAAgDQAAgFgDgDIABgHQgBgFgDgDIAAgBQgBgEgCgCIAAgDQgBgFgDgEQgBgEgCgEQgCgDgFgCIgBAAQgDgDgFgCQgEgEgFgBIgEgGQgFgFgGAAQgCgDgFgCQgDgDgIABIgKgBIgZAAQgJAAgEABIgHADQgMAHgDADIgEAEIgEADIgCACIgCABQgEACgEAFIgFAHIgKAUIgEAJIgBAFIgCAFIgBAFIgDAGQgEADgCADIgBAIIAAADQgHARgHAZIgKAfIgIAjIgDAGIAAABIgEAEIgGAYQgEACgBAGIAAACIgCABIgBACIAAAAIAAABIgBAAQADAFAAAGQAAAIgHAKIgFAHQgBAEAAAHQgBAHgEAKIgIAQIgLAdIgCAJIAAAKIgDAKIgFAJIgFASQgCAGgCAFIAAAAIgIAaIgOA3IgEAUQgDADgBAIIAAAKIgDACQABADABAHIADALQAEANAGAHIAJAJIADAFIAFADQADADACADIAFAAQAYAHAMACg");
	this.shape_1.setTransform(1.4917,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.7,-35.1,81.4,71.30000000000001);


(lib._3_pocitTona = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_3perecltonawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.698)").s().p("AgpA/QgNgDgIgLIAAAAIgDgDQgEgDgGgJIgFgIIgBgLIABgaIADgFIABgEIAEgFQAKgOAXgHIAGgCIAKgCQADgBAGgGQADgCAEAAIAHgCQAKgEAUAEIAQADIAHADQAJACAJAIIAFAFQACACABAEQAFANgHAHQgCACgCABQAFAIAAAHIAAADQABAMgJALIgJAGIgFADQgGAFgHABIgLAAIgJgBIgBAAIgDgBIgEAGQgEADgJAFIgNAGIgHABg");
	this.shape.setTransform(1.5042,0.0183);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.3,16.299999999999997,12.7);


// stage content:
(lib.map_Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Lad
	this.instance = new lib.Lad();
	this.instance.setTransform(901,523.65);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Lad(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Струна
	this.instance_1 = new lib.Struni();
	this.instance_1.setTransform(830,386.65);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Struni(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// metka
	this.instance_2 = new lib.Metka();
	this.instance_2.setTransform(818.25,387.15);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Metka(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой_3
	this.instance_3 = new lib.Kolki();
	this.instance_3.setTransform(1158.75,376.7);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Kolki(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Sedla
	this.instance_4 = new lib.Sedla();
	this.instance_4.setTransform(466.85,387.95);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Sedla(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Защитная_накладка
	this.instance_5 = new lib.SahitnayNacladka();
	this.instance_5.setTransform(611.25,407.55);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.SahitnayNacladka(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Регулятор_тона
	this.instance_6 = new lib.RegulatorTona();
	this.instance_6.setTransform(417.75,472);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.RegulatorTona(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Grif
	this.instance_7 = new lib.Grif();
	this.instance_7.setTransform(854.4,386.7);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.Grif(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Звукосниматель
	this.instance_8 = new lib.Zvukosnimatel();
	this.instance_8.setTransform(509.75,386.8);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.Zvukosnimatel(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Регулятор_громкости
	this.instance_9 = new lib.RegulatorGromcosti();
	this.instance_9.setTransform(473.05,470.65);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.RegulatorGromcosti(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// _xПозиционныйПереключательТона
	this.instance_10 = new lib._3_pocitTona();
	this.instance_10.setTransform(508.05,471.4);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib._3_pocitTona(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Степлок
	this.instance_11 = new lib.Steplok();
	this.instance_11.setTransform(525,350.3);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib.Steplok(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Голова_грифа
	this.instance_12 = new lib.GolovaGrifa();
	this.instance_12.setTransform(1148.65,390.2);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 2, false, new lib.GolovaGrifa(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Bridz
	this.instance_13 = new lib.Bridz();
	this.instance_13.setTransform(491.4,387.3);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib.Bridz(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// RazemDlaKabela
	this.instance_14 = new lib.RazemDlaKabela();
	this.instance_14.setTransform(93.45,421.65);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 2, false, new lib.RazemDlaKabela(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Regulator_emcosti
	this.instance_15 = new lib.Regulator_emcosti();
	this.instance_15.setTransform(110.55,424.15);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2, false, new lib.Regulator_emcosti(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Регулятор_тона_2
	this.instance_16 = new lib.Regulator_tona2();
	this.instance_16.setTransform(129.9,425.65);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.Regulator_tona2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Ручка_включений
	this.instance_17 = new lib.HandsOn();
	this.instance_17.setTransform(150.4,426.95);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.HandsOn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// DK
	this.instance_18 = new lib.DK();
	this.instance_18.setTransform(525,387.25);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 2, false, new lib.DK(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// RazemDlaKabelz
	this.instance_19 = new lib.DlaKabelf();
	this.instance_19.setTransform(440.2,475.1,0.3954,0.3176,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 2, false, new lib.DlaKabelf(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Dzek
	this.instance_20 = new lib.Dzek();
	this.instance_20.setTransform(135.3,269.65);
	new cjs.ButtonHelper(this.instance_20, 0, 1, 2, false, new lib.Dzek(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// Comboysilitel
	this.instance_21 = new lib.Comboysilitel();
	this.instance_21.setTransform(134.95,475.95);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 2, false, new lib.Comboysilitel(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// Слой_1
	this.instance_22 = new lib.diagram();
	this.instance_22.setTransform(60,-267,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(700,93,706.8,961.9000000000001);
// library properties:
lib.properties = {
	id: '696C91AB06E0B648898FC67C3F7271EE',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/diagram.png", id:"diagram"},
		{src:"sounds/_3perecltonawav.mp3", id:"_3perecltonawav"},
		{src:"sounds/Bridzwav.mp3", id:"Bridzwav"},
		{src:"sounds/ComboUsilitelwav.mp3", id:"ComboUsilitelwav"},
		{src:"sounds/DKwav.mp3", id:"DKwav"},
		{src:"sounds/Dzekwav.mp3", id:"Dzekwav"},
		{src:"sounds/GolovaGrifawav.mp3", id:"GolovaGrifawav"},
		{src:"sounds/Grifwav.mp3", id:"Grifwav"},
		{src:"sounds/HandsOnwav.mp3", id:"HandsOnwav"},
		{src:"sounds/Kolkiwav.mp3", id:"Kolkiwav"},
		{src:"sounds/Ladwav.mp3", id:"Ladwav"},
		{src:"sounds/Metkiwav.mp3", id:"Metkiwav"},
		{src:"sounds/Raxemdlakabelawav.mp3", id:"Raxemdlakabelawav"},
		{src:"sounds/RegulatorGromcostiwav.mp3", id:"RegulatorGromcostiwav"},
		{src:"sounds/RegulatorTonawav.mp3", id:"RegulatorTonawav"},
		{src:"sounds/SedlaDlaStrunwav.mp3", id:"SedlaDlaStrunwav"},
		{src:"sounds/Streplockwav.mp3", id:"Streplockwav"},
		{src:"sounds/Struniwav.mp3", id:"Struniwav"},
		{src:"sounds/ZahitnayPodkladkawav.mp3", id:"ZahitnayPodkladkawav"},
		{src:"sounds/Zvukosnimatelwav.mp3", id:"Zvukosnimatelwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['696C91AB06E0B648898FC67C3F7271EE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
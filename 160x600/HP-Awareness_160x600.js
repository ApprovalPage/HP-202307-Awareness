(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HP_Awareness_160x600_atlas_1", frames: [[0,0,960,1200],[0,1202,600,182]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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



(lib._160x60001 = function() {
	this.initialize(ss["HP_Awareness_160x600_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600rainbow = function() {
	this.initialize(ss["HP_Awareness_160x600_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Rainbowmult = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfAyIAAhjIY/AAIAABjg");
	mask.setTransform(-0.025,-5);

	// Layer_2
	this.instance = new lib._300x600rainbow();
	this.instance.setTransform(-80,-5,0.2666,0.3241);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rainbowmult, new cjs.Rectangle(-80,-5,160,5), null);


(lib.Rainbow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600rainbow();
	this.instance.setTransform(-80,-91,0.2666,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rainbow, new cjs.Rectangle(-80,-91,160,91), null);


(lib.PIC1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._160x60001();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(0,0,480,600), null);


(lib.HealthPointLogorevai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HealthPointLogo-rev.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuDsQgKgGAUgwQATgvAYggQA5hOARg9QAJgggPgpQgIgXgZgtQgeg2BDgEQAZgCAaAGQAZAFACAHIACADQAYA5gFBDQgFBAgdA6QgQAfgdAlQgRAWgiApQgdAkgTARQgZAXgQAAIgFgBg");
	this.shape.setTransform(47.9903,36.3577);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBTQgbgdgZgnQgdgugCgeQgDgrAvAGQAVACBCAZQAVAHASgMQATgLAMADQAFACAFAEQAbARgJAoQgJAhgcAkQgaAigZAMQgNAGgLAAQgSAAgQgRg");
	this.shape_1.setTransform(32.4896,28.7262);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhADzQgmgcgWheQgShLAEhJQAGhXAkg5QAfgxBjgUQAygKAxgBQAJAAgDAIQgTA4goArIguAqQgcAYgLAWQgdAxAIBWQALBugFAeQgEAXgKAHQgFADgFAAQgJAAgLgJg");
	this.shape_2.setTransform(13.9834,25.2205);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYCCIAAirQAAgKgDgEQgDgDgJAAIgJAAQgKAAAAgHQAAgHALAAIAXAAIAAhKQAAgHACgCQABgDAGgDIANgHIAEgBQAEgBABADQACADAAAIIAABUIAjAAQAKAAAAAHQAAAEgCACQgDABgHAAIgNAAQgNAAgEAEQgDAFAAAPIAACNQAAAcADAJQAEAIALAAQAGAAADgBIAJgHQAFgDACAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAEgGAFQgNANgXAAQgpAAAAgog");
	this.shape_3.setTransform(302.875,34.0714);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhB7QgHAAAAgGQAAgEACgCQACgCAHAAIAGgBQAIgBACgFQACgGAAgTIAAh1QAAgkgJgNQgIgNgZAAQghAAgRAVQgQAVAAAsIAABcQAAAUACAGQACAFAIABIALACQAFAAAAAHQAAAGgHAAIhNAAQgHAAAAgGQAAgHAFAAIALgCQAIgBACgFQACgGAAgTIAAiIQAAgRgCgEQgCgEgHgBIgGgBQgIAAAAgGQAAgFAIgEIAjgSQAGgDAEAAQAIAAAAALIgBATQAfgdAqAAQAlAAAQARQAQAQAAAmIAAB+QAAAUACAGQACAFAIABIAKACQAGAAAAAHQAAAGgHAAg");
	this.shape_4.setTransform(282.475,38.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglCwQgHAAAAgHQAAgGAFgBIALgBQAIgBACgGQACgGAAgSIAAiLQAAgOgDgFQgDgEgJAAIgBAAQgKAAAAgGQAAgFAHgDIAkgTIAIgDQAIAAAAAJIAAC8QAAAUACAFQACAGAIABIALABQAFABAAAGQAAAHgHAAgAgRiHQgGgHAAgKQAAgJAGgHQAHgHAKAAQAJAAAHAHQAHAHAAAKQAAAJgHAHQgHAHgJAAQgKAAgHgHg");
	this.shape_5.setTransform(262.575,33.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhUBbQghgjAAg4QAAg4AhgiQAhgiA0AAQA0AAAgAiQAhAjAAA3QAAA5ggAiQggAig2AAQg0AAgggigAg5hOQgXAeAAAwQAAAyAWAdQAWAeAlAAQAkAAAWgeQAVgeAAgyQAAgxgVgdQgVgdglAAQgkAAgWAeg");
	this.shape_6.setTransform(244.475,38.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah1DHQgNAAAAgIQAAgHAMgBIAGgBQALAAACgHQADgHAAgaIAAkSQAAgRgLgCIgEAAQgJgBAAgIQAAgMArgNQApgNApAAQA7AAAiAeQAhAeAAA2QAAAzgeAhQgfAfgxAAQgVAAgSgGQgRgGAAgIQAAgDADgBQACgDADAAIAFABIALADQAJACAOAAQAjAAAVgXQAUgaAAgrQAAgtgWgbQgWgagoAAQglAAgMAMQgMANAAAnIAAECQAAAaACAHQAEAHAKAAIAPABQANABAAAHQAAAIgNAAg");
	this.shape_7.setTransform(219.6,30.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhDHQgIAAAAgGQAAgEACgCQACgBAHgBIAGgBQAIAAACgGQACgGAAgTIAAiBQAAgagKgMQgKgLgXAAQgiAAgPAVQgQAUAAAwIAABZQAAATADAGQACAFAIABIAGABQAHABACABQABACAAAEQAAAGgHAAIhMAAQgIAAAAgGQAAgGAGgBIAKgCQAIgBACgFQACgGAAgTIAAkjQAAgOgCgFQgDgEgHgBIgGAAQgHAAAAgGQAAgFAGgCIApgVQACgCADAAQAHAAAAAKIAACtQAegeAsAAQAjAAARAQQARARAAAiIAACDQAAATACAGQACAFAHABIALACQAGABAAAGQAAAGgHAAg");
	this.shape_8.setTransform(190.375,30.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYCCIAAirQAAgKgDgEQgDgDgKAAIgIAAQgKAAAAgHQAAgHALAAIAXAAIAAhKIABgJQACgDAFgDIAOgHIAEgBQAHgBAAAOIAABUIAjAAQAKAAAAAHQAAAEgCACQgDABgHAAIgNAAQgNAAgEAEQgDAFAAAPIAACNQAAAcADAJQAEAIALAAQAFAAADgBIAKgHQAEgDADAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAEgGAFQgOANgWAAQgpAAAAgog");
	this.shape_9.setTransform(169.975,34.0741);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglDHQgHAAAAgHQAAgEABgBQACgCAHgBIAGAAQAIgBACgGQACgFAAgTIAAkqQAAgKgDgEQgEgDgJAAQgKAAAAgGQAAgGAGgBIAogWIAFgBQAIgBAAAKIAAFVQAAATADAGQACAGAIABIAKABQAFABAAAGQAAAHgHAAg");
	this.shape_10.setTransform(156.675,30.7705);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhNBrQgXgSAAgeQAAgbAUgWQATgVAkgMQAVgJASAAQALAAgBAIQABAGgLACQgkAHgWATQgUAUgBAcQABAWAOAOQANAPAVAAQAWAAAOgPQAPgPACgZQADgaAAglQAAg/gJgQQgIgRggAAQgbAAgcAUQgHAGgDAAQgKAAABgJQAAgFAFgEQANgNAWgHQAVgIAWAAQAmAAASASQASARAAAmIAAB/QAAASACAGQABAGAHABIACAAIADAAIAGACQAGABgBAGQAAAGgGAAIgpAAQgNAAAAgLIAAgLQgOAPgOAGQgOAGgUAAQgiAAgVgTg");
	this.shape_11.setTransform(138.4,38.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhFBaQgggjAAg2QAAg1AgglQAhgkAwABQAgAAAZATQAaAVAAAYQAAAKgFAGQgFAGgOAJIheA3QgGAFgFgBQgIABAAgIQAAgDACgCIAHgGIA/glQARgKAGgIQAHgHAAgKQAAgSgQgQQgPgOgUAAQgfAAgVAeQgUAeAAAwQAAAxAWAeQAWAdAkAAQAnABAegkQAGgFACgBQAIAAAAAJQAAAIgOANQgfAcguABQgwAAgggkg");
	this.shape_12.setTransform(115.125,38.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABBDEQgNgBAAgHQAAgHAMgCIAGAAQALgBACgHQADgGAAgbIAAh0IgBgXQgBgIgEgCQgEgEgFAAQgFgBgQAAIhrAAQgTAAgEAGQgEAGAAAZIAAB1QAAAbACAGQADAHAKABIAHAAQAMACAAAHQAAAHgNABIhRAAQgOgBAAgHQAAgHAMgCIAHAAQALgBACgHQADgGAAgbIAAkSQAAgcgDgHQgCgGgLgBIgHgBQgMAAAAgIQAAgIANAAIBRAAQANAAAAAIQAAAEgCACQgDABgHABIgGABQgLABgCAGQgCAHAAAbIAABmICpAAIAAhlQABgbgDgIQgCgGgLgBIgGgBQgMAAAAgIQAAgIAMAAIBSAAQANAAAAAIQAAAIgLAAIgHABQgLABgCAGQgDAHAAAbIAAESQAAAbADAHQACAHALABIAHAAQALACAAAHQAAAHgMABg");
	this.shape_13.setTransform(86.475,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308.8,60);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282777").s().p("AggAhIAAhBIBBAAIAABBg");
	this.shape.setTransform(142.075,174.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282777").s().p("AgpA3IAAhJIgVAAIAAgzIAVAAIAAguIA+AAIAAAuIArAAIAAAzIgrAAIAAA9QAAASASAAQAMAAAMgGIAAAyQgTALgZAAQg8gBAAg8g");
	this.shape_1.setTransform(129.9,166.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#282777").s().p("AgfB6IAAi0IA+AAIAAC0gAgghKIAAgvIBBAAIAAAvg");
	this.shape_2.setTransform(117.85,165.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282777").s().p("AhPBEIAYgnQAfAVAeAAQARAAAAgKIAAAAQAAgFgIgEQgFgDgQgFQgggIgOgKQgTgNAAgZIAAAAQABgdAUgQQAUgPAfAAQArAAAgAUIgWApQgdgRgZAAQgNgBAAAKIAAABQAAAEAIAEIAUAIQAgAJAOAKQASANAAAYIAAABQABAdgVAQQgTAQgiAAQgwAAglgbg");
	this.shape_3.setTransform(94.75,169.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#282777").s().p("AhKBjQgZgaAAgrIAAAAQAAgqAZgbQAWgZAiAAQAfAAAXAaIAAhVIA/AAIAADzIg/AAIAAgYQgXAcgfAAQgiAAgWgZgAgaAAQgLALABASIAAABQgBASALALQALAMAPAAQAPAAAMgMQAKgLAAgSIAAgBQAAgSgKgLQgMgLgPAAQgPAAgLALg");
	this.shape_4.setTransform(74.75,166.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282777").s().p("Ag/BEQgcgZAAgrIAAAAQAAgnAagbQAagcAnAAQAsAAAZAdQAWAcABAqIgBAMIh5AAQAIAfAfAAQAVgBATgSIAkAdQgeAlgyAAQgpAAgbgbgAAggOQgCgQgIgIQgJgJgNAAQgZAAgGAhIA/AAIAAAAg");
	this.shape_5.setTransform(53.55,169.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#282777").s().p("Ag/BEQgcgZABgrIAAAAQgBgnAagbQAagcAnAAQAtAAAYAdQAXAcgBAqIAAAMIh4AAQAHAfAfAAQAVgBATgSIAjAdQgdAlgxAAQgqAAgbgbgAAggOQgCgQgJgIQgIgJgNAAQgZAAgGAhIA/AAIAAAAg");
	this.shape_6.setTransform(33.25,169.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282777").s().p("AAaBdIAAhhQAAgfgZAAQgLAAgIAIQgHAIAAAPIAABhIhAAAIAAi1IBAAAIAAAaQAXgeAeAAQAdAAARASQAQASAAAfIAAB2g");
	this.shape_7.setTransform(12.6,168.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#282777").s().p("AhHBDQgcgbAAgnIAAgBQAAgmAcgcQAegcApAAQArAAAdAcQAcAbAAAnIAAAAQAAAngcAcQgeAcgqAAQgqAAgdgcgAgbgcQgKAMAAAQIAAAAQAAARALAMQALAMAPAAQARAAALgMQAKgMAAgQIAAgBQABgQgMgMQgLgNgQAAQgQAAgLANg");
	this.shape_8.setTransform(62.95,132.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#282777").s().p("AAaB6IAAhiQAAgegaAAQgKAAgIAHQgHAIAAAPIAABiIhAAAIAAjzIBAAAIAABYQAWgdAfAAQAdAAAQASQARASAAAeIAAB2g");
	this.shape_9.setTransform(41.45,129.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#282777").s().p("AAdBcIgdheIgdBeIg3AAIg3i2IA+AAIAXBaIAdhbIAzAAIAcBcIAZhbIA9AAIg4C2g");
	this.shape_10.setTransform(16.35,132.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2663C").s().p("AhHBMQgegdAAguIAAgBQAAgsAdgeQAdgfArAAQAxAAAcAhQAZAeAAAvIAAAOIiHAAQAJAiAiAAQAXAAAWgVIAnAgQggAqg4AAQguAAgfgegAAjgQQgBgRgKgKQgJgKgPAAQgcAAgGAlIBFAAIAAAAg");
	this.shape_11.setTransform(130.75,94.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2663C").s().p("AAeBnIAAhsQgBgigcAAQgMAAgJAIQgIAJAAARIAABsIhHAAIAAjJIBHAAIAAAdQAaghAhAAQAgAAATAUQASAUAAAiIAACDg");
	this.shape_12.setTransform(107.65,94.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2663C").s().p("AhPBLQgggfAAgrIAAgBQABgrAfgfQAggfAwAAQAvAAAhAfQAeAeAAAsIAAAAQABAsggAeQghAggvAAQgvAAgggfgAgeggQgMANAAATIAAAAQABATALANQANANASAAQASAAAMgNQAMgNAAgSIAAgBQAAgSgNgNQgMgOgSAAQgTAAgLANg");
	this.shape_13.setTransform(83.55,94.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2663C").s().p("AhmByIAWgyQASALANAAQAKAAAGgIIhPjGIBKAAIAnB6IAnh6IBJAAIhKDEQgOAlgQAPQgRAOgdAAQgjAAgegRg");
	this.shape_14.setTransform(59.625,97.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2663C").s().p("AAdBnIAAhsQAAgigcAAQgNAAgHAIQgJAJAAARIAABsIhHAAIAAjJIBHAAIAAAdQAZghAjAAQAfAAATAUQASAUAAAiIAACDg");
	this.shape_15.setTransform(36.15,94.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2663C").s().p("AhOBZQgUgRABgeIAAAAQAAgfAVgQQAVgQAkAAQAcAAAUAIIAAgDQAAgigoAAQgZAAgfAMIgOgyQAngQAqAAQA1AAAYAZQAVAVABArIAABzIhGAAIAAgVQgYAagjAAQgeAAgSgQgAgeAmIAAAAQAAAKAHAGQAHAGALAAQAPAAAKgJQAKgJAAgPIAAgJQgNgFgPAAQgfAAgBAZg");
	this.shape_16.setTransform(12.7,94.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#282777").s().p("Ag7BcIAAi0IA/AAIAAAkQAQgpAoACIAABDIgEAAQg0AAAAA8IAAA4g");
	this.shape_17.setTransform(128.15,55.8724);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#282777").s().p("AhHBDQgcgbAAgoIAAAAQAAgnAcgbQAdgcAqAAQArAAAdAcQAcAbAAAnIAAAAQAAAogcAbQgeAcgqAAQgqAAgdgcgAgbgdQgKANAAAQIAAAAQgBARAMAMQALAMAPAAQARAAALgMQAKgLAAgSIAAAAQAAgQgLgMQgLgMgQAAQgQAAgLALg");
	this.shape_18.setTransform(109.4,56.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#282777").s().p("AgpB7IAAiBIgVAAIAAgyIAVAAIAAgEQAAggAQgPQAPgPAfAAQAZAAARAEIAAAtQgMgEgMAAQgSAAAAASIAAAEIAqAAIAAAxIgpAAIAACBg");
	this.shape_19.setTransform(91.925,52.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#282777").s().p("Ag/BFQgbgbgBgqIAAAAQABgnAZgbQAagcAnAAQAtAAAYAeQAWAbAAAqIAAAMIh4AAQAHAeAfABQAVgBATgSIAkAdQgeAlgxAAQgqAAgbgagAAggOQgCgPgIgJQgJgJgNAAQgZAAgFAhIA+AAIAAAAg");
	this.shape_20.setTransform(65.5,56.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#282777").s().p("Ag7BcIAAi0IA+AAIAAAkQARgpAoACIAABDIgEAAQg1AAAAA8IAAA4g");
	this.shape_21.setTransform(48.8,55.8724);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#282777").s().p("AhHBQQgQgPgBgbIAAgBQAAgcAUgOQATgNAgAAQAZAAASAGIAAgDQAAgdgjAAQgXgBgcALIgMgtQAigOAmAAQAvAAAWAWQAUATAAAmIAABoIg/AAIAAgTQgVAXggAAQgbAAgRgOgAgbAiIAAABQABAIAGAGQAGAFAKAAQANAAAIgIQAKgIgBgNIAAgJQgLgEgOgBQgbAAgBAXg");
	this.shape_22.setTransform(30.65,56.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#282777").s().p("Ag8BDQgbgbAAgoIAAAAQAAgnAbgbQAcgcApAAQA0AAAaAoIgrAhQgPgUgTAAQgPAAgKAMQgKAMAAARIAAAAQAAASAKALQAKAMAPAAQATAAAQgTIArAfQgcAqg1AAQgnAAgcgcg");
	this.shape_23.setTransform(11.675,56.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#282777").s().p("AAbB6IAAhiQAAgegaAAQgMAAgGAHQgIAIAAAPIAABiIhAAAIAAjzIBAAAIAABYQAXgdAeAAQAdAAAQASQARASAAAeIAAB2g");
	this.shape_24.setTransform(102.9,16.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#282777").s().p("AgpA3IAAhJIgWAAIAAgzIAWAAIAAguIA/AAIAAAuIApAAIAAAzIgpAAIAAA9QAAASARAAQAMAAAMgGIAAAyQgTALgaAAQg7gBAAg8g");
	this.shape_25.setTransform(84.85,17.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#282777").s().p("AgeB6IAAjzIA+AAIAADzg");
	this.shape_26.setTransform(72.8,16.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#282777").s().p("AhHBPQgRgPAAgaIAAAAQABgdATgNQASgOAhgBQAZAAASAHIAAgCQAAgfgjAAQgXABgbAJIgOgsQAjgOAmAAQAvAAAWAWQAUATgBAnIAABnIg+AAIAAgTQgWAXgfAAQgaAAgSgPgAgbAhIAAABQABAKAGAFQAGAFAKAAQANAAAIgIQAKgIgBgOIAAgIQgLgFgOABQgcgBAAAWg");
	this.shape_27.setTransform(57.4,19.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#282777").s().p("Ag/BEQgbgZAAgqIAAgBQAAgnAZgcQAagbAnAAQAtAAAYAeQAXAbAAApIgBAOIh5AAQAIAdAfAAQAVAAATgSIAjAdQgdAlgyAAQgpAAgbgbgAAggOQgCgPgJgJQgIgJgNAAQgZAAgGAhIA/AAIAAAAg");
	this.shape_28.setTransform(37.55,19.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#282777").s().p("AAqB1IAAhZIhTAAIAABZIhBAAIAAjpIBBAAIAABXIBTAAIAAhXIBBAAIAADpg");
	this.shape_29.setTransform(14.675,16.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,159.1,186.8), null);


(lib.HEAD1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2663C").s().p("Ag3A4IAAhuIBvAAIAABug");
	this.shape.setTransform(89.725,42.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2663C").s().p("Ag1DQIAAmfIBrAAIAAGfg");
	this.shape_1.setTransform(73.025,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2663C").s().p("Ag1DQIAAmfIBrAAIAAGfg");
	this.shape_2.setTransform(55.875,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2663C").s().p("ABoDJIgdhIIiZAAIgdBIIhzAAICqmRIBpAAICqGRgAArArIgrhwIgtBwIBYAAg");
	this.shape_3.setTransform(24.7,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(0,0,276,61), null);


(lib.HEAD1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282777").s().p("AgeAfIAAg9IA+AAIAAA9g");
	this.shape.setTransform(142.35,160.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282777").s().p("AgnA1IAAhGIgVAAIAAgwIAVAAIAAgsIA7AAIAAAsIApAAIAAAwIgpAAIAAA6QAAARARAAQALAAAMgFIAAAvQgSAKgYAAQg5AAAAg5g");
	this.shape_1.setTransform(130.775,152.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#282777").s().p("AhDBMQgQgPgBgZIAAgBQABgaASgNQASgOAfAAQAYAAARAHIAAgDQAAgcghAAQgXAAgaAJIgMgqQAhgOAkAAQAtAAAVAVQASASAAAlIAABjIg7AAIAAgTQgVAXgdAAQgaAAgQgOgAgZAgIAAABQAAAIAGAGQAGAFAJAAQANAAAIgIQAJgIAAgNIAAgIQgLgEgOAAQgaAAAAAVg");
	this.shape_2.setTransform(114.15,155.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282777").s().p("AAZB1IAAheQAAgcgZAAQgKAAgHAGQgHAIAAAOIAABeIg9AAIAAjpIA9AAIAABUQAVgbAeAAQAbAAAQARQAQARAAAcIAAByg");
	this.shape_3.setTransform(94.875,151.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#282777").s().p("AgnA1IAAhGIgVAAIAAgwIAVAAIAAgsIA7AAIAAAsIApAAIAAAwIgpAAIAAA6QAAARARAAQALAAAMgFIAAAvQgSAKgYAAQg5AAAAg5g");
	this.shape_4.setTransform(77.625,152.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282777").s().p("AgnA1IAAhGIgVAAIAAgwIAVAAIAAgsIA7AAIAAAsIApAAIAAAwIgpAAIAAA6QAAARARAAQALAAAMgFIAAAvQgSAKgYAAQg5AAAAg5g");
	this.shape_5.setTransform(55.025,152.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#282777").s().p("AhLBAIAXgkQAeAUAcAAQAPAAAAgKIAAAAQAAgFgHgEIgUgGQgegIgNgKQgSgNAAgXIAAgBQAAgbAUgQQASgOAeAAQAoAAAgAUIgVAmQgdgQgWAAQgNAAAAAIIAAABQAAAFAHADIAUAIQAeAIANAKQASAMAAAYIAAAAQAAAcgTAPQgTAPghAAQgtAAgjgag");
	this.shape_6.setTransform(39.875,154.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282777").s().p("AhFBHQgQgRAAgeIAAhvIA9AAIAABcQAAAdAYAAQALAAAHgHQAHgIAAgOIAAhcIA9AAIAACsIg9AAIAAgZQgVAcgeAAQgbAAgQgRg");
	this.shape_7.setTransform(21.725,155.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#282777").s().p("AgrCNIAAgpIAIABQASAAAAgVIAAihIA8AAIAACkQAAA8g9AAQgMAAgNgCgAgShhIAAgtIA+AAIAAAtg");
	this.shape_8.setTransform(5.55,154.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#282777").s().p("AhLBAIAXgkQAeAUAcAAQAPAAAAgKIAAAAQAAgFgHgEIgUgGQgegIgNgKQgSgNAAgXIAAgBQAAgbAUgQQASgOAeAAQAoAAAgAUIgVAmQgdgQgWAAQgNAAAAAIIAAABQAAAFAHADIAUAIQAeAIANAKQASAMAAAYIAAAAQAAAcgTAPQgTAPghAAQgtAAgjgag");
	this.shape_9.setTransform(99.775,120.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#282777").s().p("AAZBYIAAhcQAAgegZAAQgKAAgHAIQgHAHAAAPIAABcIg9AAIAAirIA9AAIAAAYQAWgdAdAAQAbAAAQARQAQARAAAeIAABwg");
	this.shape_10.setTransform(81.775,120.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#282777").s().p("AhDBMQgRgPAAgZIAAgBQAAgaATgNQASgOAgAAQAWAAASAHIAAgDQAAgcgiAAQgVAAgbAJIgMgqQAhgOAkAAQAtAAAVAVQATASAAAlIAABjIg9AAIAAgTQgUAXgdAAQgaAAgQgOgAgZAgIAAABQAAAIAGAGQAGAFAJAAQANAAAIgIQAJgIgBgNIAAgIQgKgEgNAAQgbAAAAAVg");
	this.shape_11.setTransform(61.65,121.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#282777").s().p("Ag8BCQgagaAAgoIAAAAQAAglAYgaQAZgbAlAAQArAAAXAdQAVAaAAAoIAAAMIhzAAQAHAcAeAAQAUABASgTIAiAdQgcAigvAAQgoABgagZgAAfgNQgCgPgIgIQgIgJgNAAQgYAAgFAgIA8AAIAAAAg");
	this.shape_12.setTransform(42.725,120.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#282777").s().p("ABPBYIAAhcQAAgegYAAQgLABgHAGQgGAJgBAOIAABcIg7AAIAAhcQAAgegZAAQgLABgGAGQgHAJAAAOIAABcIg8AAIAAirIA8AAIAAAXQAVgcAeAAQAjAAAPAdQAYgdAhAAQAcAAAQARQAPARABAeIAABwg");
	this.shape_13.setTransform(17.6,120.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#282777").s().p("AgdB1IAAjpIA7AAIAADpg");
	this.shape_14.setTransform(91.925,83.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#282777").s().p("AgdB1IAAjpIA7AAIAADpg");
	this.shape_15.setTransform(82.325,83.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#282777").s().p("AhDBMQgRgPAAgZIAAgBQAAgaATgNQASgOAgAAQAXAAARAHIAAgDQAAgcghAAQgXAAgaAJIgMgqQAhgOAkAAQAtAAAVAVQATASgBAlIAABjIg8AAIAAgTQgUAXgdAAQgaAAgQgOgAgZAgIAAABQAAAIAGAGQAFAFAKAAQANAAAIgIQAJgIgBgNIAAgIQgKgEgNAAQgbAAAAAVg");
	this.shape_16.setTransform(67.6,87.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#282777").s().p("Ag5BYIAAisIA8AAIAAAjQAQgnAnABIAABAIgGAAQgxAAAAA5IAAA2g");
	this.shape_17.setTransform(43.275,86.7972);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#282777").s().p("AhEBAQgbgaAAglIAAgBQAAglAbgZQAdgbAoAAQApAAAbAaQAaAaAAAlIAAAAQAAAlgbAbQgbAbgpAAQgoAAgcgbgAgZgbQgKALAAAQIAAAAQAAAQAKAMQALALAPAAQAPAAALgLQAKgLAAgQIAAgBQgBgPgJgLQgLgMgQgBQgQAAgJAMg");
	this.shape_18.setTransform(25.4,86.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#282777").s().p("AgnB2IAAh7IgUAAIAAgwIAUAAIAAgEQAAgeAPgPQAPgPAeAAQAYAAAPAFIAAArQgLgEgMAAQgRAAAAAQIAAAFIAoAAIAAAvIgnAAIAAB7g");
	this.shape_19.setTransform(8.675,83.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#282777").s().p("Ag8BBQgagZAAgnIAAgBQAAglAYgaQAZgbAlABQArgBAXAdQAVAZAAAoIAAANIhzAAQAHAcAeABQAUgBASgRIAiAbQgcAkgvAAQgoAAgagagAAfgOQgCgOgIgIQgIgIgNAAQgYAAgFAeIA8AAIAAAAg");
	this.shape_20.setTransform(62.675,52.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#282777").s().p("Ag5BYIAAisIA8AAIAAAjQAQgnAnABIAABAIgGAAQgxAAAAA5IAAA2g");
	this.shape_21.setTransform(46.775,52.7972);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#282777").s().p("AhDBMQgRgPAAgZIAAgBQABgaASgNQASgOAgAAQAXAAARAHIAAgDQAAgcghAAQgXAAgaAJIgMgqQAggOAlAAQAtAAAVAVQASASAAAlIAABjIg8AAIAAgTQgUAXgdAAQgaAAgQgOgAgZAgIAAABQAAAIAGAGQAFAFAKAAQANAAAIgIQAJgIAAgNIAAgIQgLgEgNAAQgbAAAAAVg");
	this.shape_22.setTransform(29.45,53.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#282777").s().p("Ag5BAQgagaAAgmIAAAAQAAglAagaQAbgaAnAAQAxAAAZAmIgpAfQgOgTgTAAQgNAAgKAMQgKALAAAQIAAAAQAAARAKALQAKALAOAAQASAAAPgSIApAeQgbAngyAAQgmAAgagag");
	this.shape_23.setTransform(11.325,52.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#282777").s().p("AAZB1IAAheQAAgcgZAAQgKAAgHAGQgHAIAAAOIAABeIg9AAIAAjpIA9AAIAABUQAVgbAeAAQAbAAAQARQAQARAAAcIAAByg");
	this.shape_24.setTransform(98.425,15.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#282777").s().p("AgnA1IAAhGIgVAAIAAgwIAVAAIAAgsIA7AAIAAAsIApAAIAAAwIgpAAIAAA6QAAARARAAQALAAAMgFIAAAvQgSAKgYAAQg5AAAAg5g");
	this.shape_25.setTransform(81.175,16.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#282777").s().p("AgdB1IAAjpIA7AAIAADpg");
	this.shape_26.setTransform(69.675,15.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#282777").s().p("AhDBMQgQgPAAgZIAAgBQAAgaASgNQASgOAfAAQAYAAARAHIAAgDQAAgcgiAAQgWAAgZAJIgNgqQAggOAlAAQAtAAAVAVQASASAAAlIAABjIg7AAIAAgTQgVAXgeAAQgZAAgQgOgAgZAgIAAABQAAAIAGAGQAGAFAJAAQANAAAIgIQAJgIAAgNIAAgIQgMgEgNAAQgaAAAAAVg");
	this.shape_27.setTransform(54.95,19.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#282777").s().p("Ag8BBQgagZAAgoIAAAAQAAglAYgaQAZgbAlAAQArABAXAcQAVAaAAAoIAAAMIhzAAQAHAdAegBQAUAAASgSIAiAcQgcAkgvgBQgoAAgagZgAAfgOQgCgOgIgIQgIgIgNgBQgYAAgFAfIA8AAIAAAAg");
	this.shape_28.setTransform(36.025,18.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#282777").s().p("AAoBwIAAhVIhPAAIAABVIg+AAIAAjfIA+AAIAABUIBPAAIAAhUIA+AAIAADfg");
	this.shape_29.setTransform(14.2,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(0,0,158.1,172), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAlIAAhJIAsAAIAAANIgcAAIAAAQIAbAAIAAAMIgbAAIAAASIAdAAIAAAOg");
	this.shape.setTransform(32.3,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAlIgEgRQgCgHgDgCQgBgDgGAAIgEAAIAAAdIgRAAIAAhIQAJgBANAAQAPAAAIAFQAHAGAAAKQAAAHgFAFQgDADgFACQAGADAEALIAGAVgAgKgXIAAAUIAGAAQAFAAAEgDQADgDAAgFQAAgKgLAAIgHABg");
	this.shape_1.setTransform(26.25,4.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAlIAAhJIAsAAIAAANIgcAAIAAAQIAaAAIAAAMIgaAAIAAASIAeAAIAAAOg");
	this.shape_2.setTransform(19.95,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAlIAAgfIgbAAIAAAfIgQAAIAAhJIAQAAIAAAdIAbAAIAAgdIAQAAIAABJg");
	this.shape_3.setTransform(13.1,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAlIAAhJIAtAAIAAANIgcAAIAAAQIAaAAIAAAMIgaAAIAAASIAdAAIAAAOg");
	this.shape_4.setTransform(4.35,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAlIAAg7IgTAAIAAgOIA3AAIAAAOIgUAAIAAA7g");
	this.shape_5.setTransform(-1.75,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAlIgGgTIgUAAIgGATIgRAAIAXhJIAVAAIAXBJgAAIAFIgFgOIgDgPIgDAPIgFAOIAQAAg");
	this.shape_6.setTransform(-8.375,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAlIgPgcQgHgNgGgNIAAABIAAAeIAAAXIgOAAIAAhJIATAAIAOAbQAHAMAGANQgCgOAAgRIAAgVIAPAAIAABJg");
	this.shape_7.setTransform(-15.7,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAcQgJgLAAgQQgBgQAKgLQAKgLAQAAQAQAAAJALQAJAKAAAQQAAARgKALQgJAKgQAAQgQAAgJgKgAgMgRQgFAHAAAKQAAALAFAHQAFAHAHAAQAJAAAEgHQAFgHAAgLQAAgJgFgHQgEgIgJAAQgIAAgEAHg");
	this.shape_8.setTransform(-23.4,4.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAkIAAhHQAKgCANAAQATAAAKAIQANAJAAATQAAATgNAKQgLAKgWAAQgLAAgIgCgAgPgXIAAAvIAGAAQAKABAHgHQAHgHAAgMQAAgLgGgGQgHgGgKAAIgHABg");
	this.shape_9.setTransform(-30.975,4.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#282777").s().p("AgQAUQgIgHABgMQAAgKAFgIQAIgJAMAAQALAAAGAIQAGAHgBALIAAAFIghAAQABAFAEADQAEACAFAAQAHAAAIgCIACALQgJADgKAAQgMAAgHgHgAAKgFQgBgEgCgCQgCgEgEAAQgEAAgDADQgCADgBAEIATAAIAAAAg");
	this.shape_10.setTransform(38.7,-5.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#282777").s().p("AgMAUQgIgHAAgMQAAgLAIgIQAIgIANAAQAGAAAGACIgDAMQgDgBgGAAQgGAAgDAEQgDAEAAAFQAAAHADAEQAEADAGAAQAFAAAEgBIACALQgGADgJAAQgLAAgHgHg");
	this.shape_11.setTransform(33.625,-5.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#282777").s().p("AAJAaIAAgbQgBgLgHAAQgGAAgBAGIgBAEIAAAcIgQAAIAAgiIgBgQIAPAAIAAAHIABAAQAFgIAJAAQAJAAAFAFQAEAGAAALIAAAdg");
	this.shape_12.setTransform(28.1,-6.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#282777").s().p("AgQAUQgIgHAAgMQAAgKAHgIQAHgJALAAQAMAAAGAIQAGAHAAALIgBAFIggAAQAAAFAEADQAEACAFAAQAHAAAHgCIACALQgIADgKAAQgMAAgHgHgAAKgFQAAgEgCgCQgCgEgFAAQgEAAgDADQgCADAAAEIASAAIAAAAg");
	this.shape_13.setTransform(22.35,-5.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#282777").s().p("AgOAaIAAghIgBgRIANAAIABAJQABgFAFgDQAEgCAEAAIADAAIAAAPIgEAAQgKAAgCAIIAAACIAAAag");
	this.shape_14.setTransform(17.8,-6.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#282777").s().p("AgQAUQgIgHAAgMQAAgKAHgIQAHgJAMAAQALAAAGAIQAGAHAAALIgBAFIggAAQAAAFAEADQAEACAFAAQAHAAAHgCIACALQgIADgKAAQgMAAgHgHgAAKgFQAAgEgCgCQgCgEgFAAQgEAAgDADQgCADAAAEIASAAIAAAAg");
	this.shape_15.setTransform(12.9,-5.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#282777").s().p("AgKAmIAAgnIgHAAIAAgMIAHAAIAAgCQgBgLAHgGQAEgFAJAAIAJABIAAAMIgGAAQgIAAAAAJIAAACIALAAIAAAMIgKAAIAAAng");
	this.shape_16.setTransform(8.5,-7.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#282777").s().p("AgLAmIAAgnIgGAAIAAgMIAGAAIAAgCQABgLAGgGQAFgFAJAAIAIABIgBAMIgFAAQgHAAAAAJIAAACIAKAAIAAAMIgKAAIAAAng");
	this.shape_17.setTransform(4.95,-7.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#282777").s().p("AgHAlIAAgzIAPAAIAAAzgAgFgWQgDgCAAgEQAAgDADgDQACgCADAAQADAAADACQADADgBADQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_18.setTransform(1.6,-7.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#282777").s().p("AgTAfQgGgIgBgLQAAgMAIgIQAGgHAKAAQAIAAAEAGIAAgcIAQAAIAAA6IAAAQIgOAAIgBgIQgFAJgJAAQgKAAgGgHgAgHABQgCAEAAAGQAAAHACADQADAEAEAAQAEAAADgCQACgCABgDIAAgEIAAgHIAAgDQAAgDgDgBQgDgDgEAAQgEAAgDAEg");
	this.shape_19.setTransform(-3.1,-7.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#282777").s().p("AgSAWQgEgEgBgHQAAgKAJgEQAHgFANABIAAgBQAAgHgIAAQgHAAgHAEIgDgKQAJgFAKAAQAXAAgBAWIAAARIABANIgOAAIgBgFQgFAGgJAAQgIAAgEgFgAgGAKQgBAGAHAAQABAAADgCIADgEIAAgDIAAgGQgNAAAAAJg");
	this.shape_20.setTransform(-11.05,-5.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#282777").s().p("AgRAUQgHgHAAgMQAAgKAHgIQAHgJALAAQAMAAAGAIQAGAHAAALIgBAFIggAAQAAAFAEADQAEACAFAAQAIAAAGgCIACALQgHADgLAAQgMAAgIgHgAAJgFQAAgEgBgCQgDgEgFAAQgDAAgDADQgCADAAAEIARAAIAAAAg");
	this.shape_21.setTransform(-18.5,-5.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#282777").s().p("AAHAlIgMgVIgEAFIAAAQIgQAAIAAhJIAQAAIAAAsIAEgHIAJgOIAUAAIgTAUIAVAeg");
	this.shape_22.setTransform(-23.7,-7.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#282777").s().p("AgSAWQgFgEABgHQAAgKAIgEQAIgFAMABIAAgBQABgHgJAAQgHAAgHAEIgDgKQAIgFALAAQAXAAAAAWIAAARIAAANIgOAAIgBgFQgGAGgIAAQgHAAgFgFgAgGAKQAAAGAFAAQACAAADgCIADgEIAAgDIAAgGQgNAAAAAJg");
	this.shape_23.setTransform(-29.8,-5.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#282777").s().p("AAYAjIgBgbIgCgcIgHAaIgJAcIgMAAIgHgbIgGgbIgBAAIgBAcIgCAbIgOAAIAEhGIAWAAIAGAYIAGAZIAAAAIAHgZIAHgYIAVAAIAEBGg");
	this.shape_24.setTransform(-36.85,-6.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// rectangle
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC20E").s().p("ApZCNQhkABAAhlIAAhRQAAhlBkABISzAAQBkgBAABlIAABRQAABlhkgBg");
	this.shape_25.setTransform(-0.25,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-79.6,-15,159.3,28.3), null);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.HealthPointLogorevai("synched",0);
	this.instance.setTransform(-0.05,0,1,1,0,0,0,154.3,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgVQAAgSALgOQAMgOATAAQAVAAAKANQAIAMAAARIgBAKIg6AAQAAAKAIAHQAHAFALAAQAOAAALgDIADAPQgOAFgRAAQgVAAgMgMgAgNgXQgEAGgBAJIAlAAQABgIgEgHQgFgHgKgBQgJAAgFAIg");
	this.shape.setTransform(150.7,37.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAuIAAg8IAAgcIATAAIABARIABAAQADgKAGgFQAGgFAIABIAFAAIAAAVIgGgBQgIABgGAEQgFAEAAAJIgBAGIAAAug");
	this.shape_1.setTransform(143.125,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAmQgHgHAAgLQAAgRAOgIQANgIAYAAIAAgBQAAgPgRgBQgNAAgLAHIgEgPQANgIASABQAlAAAAAlIAAAfQAAAOABAIIgUAAIgBgKIgBAAQgJAMgQgBQgNABgIgJgAgPASQAAANANgBQAFAAAFgDQAFgEABgFIABgFIAAgMIgCAAQgcAAAAARg");
	this.shape_2.setTransform(134.625,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAvQgRgRAAgcQAAgdATgSQASgSAcAAQATAAALAGIgFASQgLgFgNAAQgTAAgLAMQgMAMAAAUQgBAVAMAMQAMAMASAAQAPAAAKgFIAEASQgLAGgVAAQgcAAgRgRg");
	this.shape_3.setTransform(124.9,35.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAzQgHgIAAgRIAAgpIgNAAIAAgRIANAAIAAgUIAVgFIAAAZIAVAAIAAARIgVAAIAAAmQAAARALAAIAJgBIAAARQgFACgLAAQgMAAgGgHg");
	this.shape_4.setTransform(112.425,36.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAmQgHgHAAgLQAAgRAOgIQANgIAYAAIAAgBQAAgPgRgBQgNAAgLAHIgEgPQANgIASABQAlAAAAAlIAAAfQAAAOABAIIgUAAIgBgKIgBAAQgJAMgQgBQgNABgIgJgAgPASQAAANANgBQAFAAAFgDQAFgEABgFIABgFIAAgMIgCAAQgcAAAAARg");
	this.shape_5.setTransform(104.475,37.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgVQAAgSALgOQAMgOAUAAQATAAAKANQAJAMAAARIgBAKIg7AAQABAKAIAHQAHAFALAAQAOAAAKgDIAEAPQgOAFgRAAQgUAAgNgMgAgNgXQgFAGgBAJIAnAAQAAgIgEgHQgFgHgKgBQgJAAgFAIg");
	this.shape_6.setTransform(95.4,37.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAuIAAg8IAAgcIATAAIABARIABAAQADgKAGgFQAGgFAIABIAFAAIAAAVIgGgBQgIABgGAEQgFAEAAAJIgBAGIAAAug");
	this.shape_7.setTransform(87.825,37.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAuQgSgQAAgdQAAgcATgRQATgSAeAAQAVAAAMAGIgFASQgMgFgQgBQgTAAgNAMQgMAMAAAUQAAAVAMAMQALALATABQAMgBAFgCIAAgfIgWAAIAAgRIAsAAIAAA+QgTAHgVAAQgeAAgRgRg");
	this.shape_8.setTransform(77.925,35.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAoIAFgQQAKAGANAAQANAAAAgKQAAgEgDgDQgDgCgIgDQgZgIABgRQAAgNAJgHQAJgIAOAAQAOAAAKAEIgEAQQgJgEgKgBQgMAAAAAKQAAAEAEACQADADAIADQAXAIABATQAAAMgKAHQgJAJgRgBQgPAAgMgGg");
	this.shape_9.setTransform(64.475,37.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgVQAAgSALgOQAMgOAUAAQAUAAAJANQAJAMAAARIgBAKIg6AAQAAAKAIAHQAIAFAKAAQAOAAAKgDIAEAPQgOAFgRAAQgVAAgMgMgAgNgXQgFAGAAAJIAmAAQAAgIgEgHQgFgHgKgBQgIAAgGAIg");
	this.shape_10.setTransform(56,37.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAtIghhYIAZAAIAOAsIAFAWIABAAIAGgWIAOgsIAYAAIgiBYg");
	this.shape_11.setTransform(46.675,37.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAuIAAg8IAAgcIATAAIABARIABAAQADgKAGgFQAGgFAIABIAFAAIAAAVIgGgBQgIABgGAEQgFAEAAAJIgBAGIAAAug");
	this.shape_12.setTransform(39.175,37.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgVQAAgSALgOQAMgOAUAAQATAAALANQAIAMAAARIgBAKIg7AAQABAKAIAHQAHAFALAAQAOAAALgDIADAPQgNAFgSAAQgVAAgMgMgAgNgXQgEAGgCAJIAmAAQABgIgEgHQgFgHgKgBQgIAAgGAIg");
	this.shape_13.setTransform(30.85,37.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAoIAFgQQAKAGANAAQANAAAAgKQAAgEgDgDQgDgCgIgDQgZgIABgRQAAgNAJgHQAJgIAOAAQAOAAAKAEIgEAQQgJgEgKgBQgMAAAAAKQAAAEAEACQADADAIADQAXAIABATQAAAMgKAHQgJAJgRgBQgPAAgMgGg");
	this.shape_14.setTransform(22.325,37.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgVQAAgSALgOQAMgOAUAAQATAAALANQAIAMAAARIgBAKIg7AAQABAKAIAHQAHAFALAAQAOAAALgDIADAPQgNAFgSAAQgUAAgNgMgAgNgXQgFAGgBAJIAnAAQAAgIgEgHQgFgHgKgBQgIAAgGAIg");
	this.shape_15.setTransform(13.85,37.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0A9IAAh4QAQgDAUAAQAgAAARAPQAUAPAAAeQAAAegUASQgSARgkAAQgSAAgNgCgAgdgrIAABYIAMAAQAVAAANgMQAMgMAAgWQAAgVgLgLQgMgLgUAAIgPABg");
	this.shape_16.setTransform(3.225,35.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgVQAAgSALgOQAMgOATAAQAVAAAKANQAIAMAAARIgBAKIg6AAQAAAKAIAHQAHAFALAAQAOAAALgDIADAPQgOAFgRAAQgVAAgMgMgAgNgXQgEAGgBAJIAlAAQABgIgEgHQgFgHgKgBQgJAAgFAIg");
	this.shape_17.setTransform(-11.75,37.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASAuIAAgyQAAgWgRAAQgMAAgFANIAAAHIAAA0IgXAAIAAg+IgBgaIAUAAIABAMIABAAQADgFAHgFQAIgEAJAAQANgBAIAJQALAKAAAUIAAA0g");
	this.shape_18.setTransform(-21.725,37.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfAiQgNgNAAgUQAAgVANgNQAMgMAUAAQAUAAAMAMQAMAMAAAVQAAAWgOANQgNALgSAAQgTAAgMgMgAgQgTQgFAHAAAMQAAANAGAIQAGAJAJAAQAKAAAGgJQAGgIAAgNQAAgLgFgIQgGgKgLAAQgKAAgGAKg");
	this.shape_19.setTransform(-32.075,37.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAuQAGgCAGgFQAIgEAFgKIACgEIgCgEIghhRIAZAAIARAwIADAQIABAAIAFgQIANgwIAYAAIgVA9QgRAsgOAMQgLAKgNACg");
	this.shape_20.setTransform(-41.8,39.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAuIAAg8IAAgcIATAAIABARIABAAQADgKAGgFQAGgFAIABIAFAAIAAAVIgGgBQgIABgGAEQgFAEAAAJIgBAGIAAAug");
	this.shape_21.setTransform(-49.225,37.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgVQAAgSALgOQAMgOATAAQAVAAAKANQAIAMAAARIgBAKIg6AAQAAAKAIAHQAIAFAKAAQAOAAALgDIADAPQgOAFgRAAQgUAAgNgMgAgNgXQgEAGgBAJIAlAAQABgIgEgHQgFgHgKgBQgJAAgFAIg");
	this.shape_22.setTransform(-57.55,37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAtIghhYIAZAAIAOAsIAFAWIABAAIAGgWIAOgsIAYAAIgiBYg");
	this.shape_23.setTransform(-66.875,37.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgkA+IAAh7IBGAAIAAATIgwAAIAAAgIAuAAIAAARIguAAIAAAkIAzAAIAAATg");
	this.shape_24.setTransform(-75.925,35.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-154.3,-30,321.3,78.3), null);


// stage content:
(lib.HPAwareness_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [290];
	// timeline functions:
	this.frame_290 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==3){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(290).call(this.frame_290).wait(1));

	// HEAD1a
	this.instance = new lib.HEAD1a();
	this.instance.setTransform(296,45.2,1,1,0,0,0,0,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:6},10,cjs.Ease.quadOut).wait(163).to({x:-254},10,cjs.Ease.quadInOut).to({_off:true},1).wait(107));

	// HEAD1b
	this.instance_1 = new lib.HEAD1b();
	this.instance_1.setTransform(443,230.05,1,1,0,0,0,150,53.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).to({x:156},10,cjs.Ease.quadOut).wait(92).to({x:-104},10,cjs.Ease.quadInOut).to({_off:true},1).wait(107));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.setTransform(446,61.5,1,1,0,0,0,150,53.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({x:154},10,cjs.Ease.quadInOut).wait(102));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(80,576.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(288).to({_off:false},0).wait(3));

	// LOGO
	this.instance_4 = new lib.LOGO();
	this.instance_4.setTransform(77.15,568.05,0.46,0.46,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(267).to({y:530.55},10,cjs.Ease.quadInOut).wait(14));

	// BKGD rainbow
	this.instance_5 = new lib.Rainbow();
	this.instance_5.setTransform(80,573,1,0.5934,0,0,0,0,-45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(267).to({regY:-45.5},0).to({scaleY:1,y:554.5},10,cjs.Ease.quadInOut).wait(14));

	// BKGD rainbow mult
	this.instance_6 = new lib.Rainbowmult();
	this.instance_6.setTransform(80,543.5,1,1,0,0,0,0,-2.5);
	this.instance_6.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(267).to({y:506.5},10,cjs.Ease.quadInOut).wait(14));

	// PIC1
	this.instance_7 = new lib.PIC1();
	this.instance_7.setTransform(0,-147.5,1,1,0,0,0,0,-147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({x:-160},10,cjs.Ease.quadInOut).wait(89).to({x:-320},10,cjs.Ease.quadInOut).wait(3));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgODgwbIcHAAMAAABg3I8HAAg");
	this.shape.setTransform(80,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EgODAwcMAAAhg3IcHAAMAAABg3g");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(291));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-240,300,809,300.1);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/HP_Awareness_160x600_atlas_1.jpg?1690845075949", id:"HP_Awareness_160x600_atlas_1"}
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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
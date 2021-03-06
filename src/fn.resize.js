(function(PaperDuck) {

	PaperDuck.fn.resize = function(sizeX, sizeY, smoothing) {
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		if (isNaN(sizeX) && isNaN(sizeY)) {
			return this;
		}
		if (!isNaN(sizeX)) {
			sizeX = Math.abs(sizeX);
		}
		if (!isNaN(sizeY)) {
			sizeY = Math.abs(sizeY);
		}
		var currSizeX = this.getWidth();
		var currSizeY = this.getHeight();
		if (isNaN(sizeX)) {
			if (currSizeY === 0) {
				return this.constructor.blank(0, sizeY);
			}
			sizeX = Math.round(currSizeX * sizeY / currSizeY);
		} else
		if (isNaN(sizeY)) {
			if (currSizeX === 0) {
				return this.constructor.blank(sizeX, 0);
			}
			sizeY = Math.round(currSizeY * sizeX / currSizeX);
		}
		if (sizeX === currSizeX && sizeY === currSizeY) {
			return this;
		}
		if (currSizeX === 0 || currSizeY === 0 || sizeX === 0 || sizeY === 0) {
			return this.constructor.blank(sizeX, sizeY);
		}
		smoothing = parseFloat(smoothing);
		if (isNaN(smoothing)) {
			smoothing = 2;
		} else
		if (smoothing > 1) {
			smoothing /= smoothing - 1;
		} else {
			smoothing = Infinity;
		}
		var finished;
		var _getNextSize = function(currSize, lastSize) {
			if (currSize < lastSize) {
				currSize = Math.min(Math.round(currSize * smoothing), lastSize);
			} else
			if (currSize > lastSize) {
				currSize = Math.max(Math.round(currSize / smoothing), lastSize);
			} else {
				return lastSize;
			}
			finished = false;
			return currSize;
		};
		var canvas = this.toCanvas();
		for (var i = 64; i--;) {
			finished = true;
			var nextSizeX = _getNextSize(currSizeX, sizeX);
			var nextSizeY = _getNextSize(currSizeY, sizeY);
			if (finished) break;
			var ctx = this.constructor.blankContext(nextSizeX, nextSizeY);
			ctx.scale(nextSizeX / currSizeX, nextSizeY / currSizeY);
			ctx.drawImage(canvas, 0, 0);
			currSizeX = nextSizeX;
			currSizeY = nextSizeY;
			canvas = ctx.canvas;
		}
		return this.constructor.from(canvas);
	};

})(PaperDuck);
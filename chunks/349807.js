function(t, e, i) {
    "use strict";
    var n;
    i.r(e), i.d(e, {
        default: function() {
            return n
        }
    }), i("222007"), i("70102");
    n = class {
        drawInto(t, e, i, n) {
            e %= this.frameCount, this.requireFrame(e);
            let [a, s, o, l] = r(e, this.frameWidth, this.frameHeight, this.cells);
            t.drawImage(this.canvas, a, s, o, l, 0, 0, i, n)
        }
        drop() {
            var t;
            null === (t = this.native) || void 0 === t || t.drop(), this.native = null
        }
        requireFrame(t) {
            null != this.native && (!this.renderedFrames.has(t) && (this.paint(t), this.renderedFrames.add(t)), this.renderedFrames.size === this.frameCount && this.drop())
        }
        paint(t) {
            if (null != this.native) {
                var e;
                let i = this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                    n = new ImageData(i, this.frameWidth, this.frameHeight),
                    [a, s, o, l] = r(t, this.frameWidth, this.frameHeight, this.cells);
                null === (e = this.context) || void 0 === e || e.putImageData(n, a, s, 0, 0, o, l)
            }
        }
        constructor(t, e, i, n) {
            let [r, a, s] = function(t, e, i) {
                let n = Math.ceil(Math.sqrt(i));
                return [n, n * t, n * e]
            }(i, n, t.frames);
            if (this.key = e, this.canvas = function(t, e) {
                    if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                    let i = document.createElement("canvas");
                    return i.width = t, i.height = e, i
                }(a, s), this.context = this.canvas.getContext("2d"), this.cells = r, this.native = t, this.renderedFrames = new Set, this.frameWidth = i, this.frameHeight = n, this.frameRate = t.fps, this.frameCount = t.frames, null == this.context) throw Error("couldn't create 2d canvas context.")
        }
    };

    function r(t, e, i, n) {
        return [Math.floor(t / n) * e, t % n * i, e, i]
    }
}
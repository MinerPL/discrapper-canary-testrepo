var r = n(957578).Buffer,
    i = n(477260).Transform,
    a = n(689118);
function s(e) {
    i.call(this), (this._block = r.allocUnsafe(e)), (this._blockSize = e), (this._blockOffset = 0), (this._length = [0, 0, 0, 0]), (this._finalized = !1);
}
a(s, i),
    (s.prototype._transform = function (e, t, n) {
        var r = null;
        try {
            this.update(e, t);
        } catch (e) {
            r = e;
        }
        n(r);
    }),
    (s.prototype._flush = function (e) {
        var t = null;
        try {
            this.push(this.digest());
        } catch (e) {
            t = e;
        }
        e(t);
    }),
    (s.prototype.update = function (e, t) {
        if (
            (!(function (e, t) {
                if (!r.isBuffer(e) && 'string' != typeof e) throw TypeError(t + ' must be a string or a buffer');
            })(e, 'Data'),
            this._finalized)
        )
            throw Error('Digest already called');
        !r.isBuffer(e) && (e = r.from(e, t));
        for (var n = this._block, i = 0; this._blockOffset + e.length - i >= this._blockSize; ) {
            for (var a = this._blockOffset; a < this._blockSize; ) n[a++] = e[i++];
            this._update(), (this._blockOffset = 0);
        }
        for (; i < e.length; ) n[this._blockOffset++] = e[i++];
        for (var s = 0, o = 8 * e.length; o > 0; ++s) (this._length[s] += o), (o = (this._length[s] / 4294967296) | 0) > 0 && (this._length[s] -= 4294967296 * o);
        return this;
    }),
    (s.prototype._update = function () {
        throw Error('_update is not implemented');
    }),
    (s.prototype.digest = function (e) {
        if (this._finalized) throw Error('Digest already called');
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)), this._block.fill(0), (this._blockOffset = 0);
        for (var n = 0; n < 4; ++n) this._length[n] = 0;
        return t;
    }),
    (s.prototype._digest = function () {
        throw Error('_digest is not implemented');
    }),
    (e.exports = s);

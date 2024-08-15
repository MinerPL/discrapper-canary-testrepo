var n = r(815869),
	a = Array.prototype.splice;
e.exports = function (e) {
	var t = this.__data__,
		r = n(t, e);
	return !(r < 0) && (r == t.length - 1 ? t.pop() : a.call(t, r, 1), --this.size, !0);
};

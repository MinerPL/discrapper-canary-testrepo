var n = r(900624),
	a = r(117973),
	o = r(302767);
e.exports = function (e, t) {
	var r = this.__data__;
	if (r instanceof n) {
		var i = r.__data__;
		if (!a || i.length < 199) return i.push([e, t]), (this.size = ++r.size), this;
		r = this.__data__ = new o(i);
	}
	return r.set(e, t), (this.size = r.size), this;
};

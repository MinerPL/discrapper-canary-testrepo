var n = r(466293),
	a = Object.prototype,
	o = a.hasOwnProperty,
	i = a.toString,
	_ = n ? n.toStringTag : void 0;
e.exports = function (e) {
	var t = o.call(e, _),
		r = e[_];
	try {
		e[_] = void 0;
		var n = !0;
	} catch (e) {}
	var a = i.call(e);
	return n && (t ? (e[_] = r) : delete e[_]), a;
};

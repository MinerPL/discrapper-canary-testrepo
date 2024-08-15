var r = n(548015),
	i = Object.prototype,
	a = i.hasOwnProperty,
	s = i.toString,
	o = r.Z ? r.Z.toStringTag : void 0;
t.Z = function (e) {
	var t = a.call(e, o),
		n = e[o];
	try {
		e[o] = void 0;
		var r = !0;
	} catch (e) {}
	var i = s.call(e);
	return r && (t ? (e[o] = n) : delete e[o]), i;
};

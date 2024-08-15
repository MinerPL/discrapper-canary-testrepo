var r = n(257693),
	i = n(957578).Buffer,
	a = n(875115);
t.encrypt = function (e, t) {
	var n = Math.ceil(t.length / 16),
		s = e._cache.length;
	e._cache = i.concat([e._cache, i.allocUnsafe(16 * n)]);
	for (var o = 0; o < n; o++) {
		var l = (function (e) {
				var t = e._cipher.encryptBlockRaw(e._prev);
				return a(e._prev), t;
			})(e),
			u = s + 16 * o;
		e._cache.writeUInt32BE(l[0], u + 0),
			e._cache.writeUInt32BE(l[1], u + 4),
			e._cache.writeUInt32BE(l[2], u + 8),
			e._cache.writeUInt32BE(l[3], u + 12);
	}
	var c = e._cache.slice(0, t.length);
	return (e._cache = e._cache.slice(t.length)), r(t, c);
};

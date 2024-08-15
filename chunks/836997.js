var r = n(957578).Buffer,
	i = n(257693);
function a(e, t, n) {
	var a = t.length,
		s = i(t, e._cache);
	return (e._cache = e._cache.slice(a)), (e._prev = r.concat([e._prev, n ? t : s])), s;
}
t.encrypt = function (e, t, n) {
	for (var i, s = r.allocUnsafe(0); t.length; )
		if (
			(0 === e._cache.length && ((e._cache = e._cipher.encryptBlock(e._prev)), (e._prev = r.allocUnsafe(0))),
			e._cache.length <= t.length)
		)
			(i = e._cache.length), (s = r.concat([s, a(e, t.slice(0, i), n)])), (t = t.slice(i));
		else {
			s = r.concat([s, a(e, t, n)]);
			break;
		}
	return s;
};

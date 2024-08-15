var r = n(957578).Buffer;
t.encrypt = function (e, t, n) {
	for (var i = t.length, a = r.allocUnsafe(i), s = -1; ++s < i; )
		a[s] = (function (e, t, n) {
			var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
			return (e._prev = r.concat([e._prev.slice(1), r.from([n ? t : i])])), i;
		})(e, t[s], n);
	return a;
};

var r = n(754793),
	i = !0,
	a = !0;
try {
	String.fromCharCode.apply(null, [0]);
} catch (e) {
	i = !1;
}
try {
	String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
	a = !1;
}
for (var s = new r.Buf8(256), o = 0; o < 256; o++) s[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
function l(e, t) {
	if (t < 65534 && ((e.subarray && a) || (!e.subarray && i))) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
	for (var n = '', s = 0; s < t; s++) n += String.fromCharCode(e[s]);
	return n;
}
(s[254] = s[254] = 1),
	(t.string2buf = function (e) {
		var t,
			n,
			i,
			a,
			s,
			o = e.length,
			l = 0;
		for (a = 0; a < o; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < o && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), a++), (l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
		for (s = 0, t = new r.Buf8(l), a = 0; s < l; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < o && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), a++), n < 128 ? (t[s++] = n) : (n < 2048 ? (t[s++] = 192 | (n >>> 6)) : (n < 65536 ? (t[s++] = 224 | (n >>> 12)) : ((t[s++] = 240 | (n >>> 18)), (t[s++] = 128 | ((n >>> 12) & 63))), (t[s++] = 128 | ((n >>> 6) & 63))), (t[s++] = 128 | (63 & n)));
		return t;
	}),
	(t.buf2binstring = function (e) {
		return l(e, e.length);
	}),
	(t.binstring2buf = function (e) {
		for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
		return t;
	}),
	(t.buf2string = function (e, t) {
		var n,
			r,
			i,
			a,
			o = t || e.length,
			u = Array(2 * o);
		for (r = 0, n = 0; n < o; ) {
			if ((i = e[n++]) < 128) {
				u[r++] = i;
				continue;
			}
			if ((a = s[i]) > 4) {
				(u[r++] = 65533), (n += a - 1);
				continue;
			}
			for (i &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < o; ) (i = (i << 6) | (63 & e[n++])), a--;
			if (a > 1) {
				u[r++] = 65533;
				continue;
			}
			i < 65536 ? (u[r++] = i) : ((i -= 65536), (u[r++] = 55296 | ((i >> 10) & 1023)), (u[r++] = 56320 | (1023 & i)));
		}
		return l(u, r);
	}),
	(t.utf8border = function (e, t) {
		var n;
		for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && (192 & e[n]) == 128; ) n--;
		return n < 0 || 0 === n ? t : n + s[e[n]] > t ? n : t;
	});

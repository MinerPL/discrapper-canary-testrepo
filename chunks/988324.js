var r,
	i = n(444675),
	a = n(413135),
	s = a.Buffer,
	o = {};
for (r in a) {
	if (!!a.hasOwnProperty(r)) 'SlowBuffer' !== r && 'Buffer' !== r && (o[r] = a[r]);
}
var l = (o.Buffer = {});
for (r in s) {
	if (!!s.hasOwnProperty(r)) 'allocUnsafe' !== r && 'allocUnsafeSlow' !== r && (l[r] = s[r]);
}
if (
	((o.Buffer.prototype = s.prototype),
	(!l.from || l.from === Uint8Array.from) &&
		(l.from = function (e, t, n) {
			if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
			if (e && void 0 === e.length) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
			return s(e, t, n);
		}),
	!l.alloc &&
		(l.alloc = function (e, t, n) {
			if ('number' != typeof e) throw TypeError('The "size" argument must be of type number. Received type ' + typeof e);
			if (e < 0 || e >= 2 * 1073741824) throw RangeError('The value "' + e + '" is invalid for option "size"');
			var r = s(e);
			return t && 0 !== t.length ? ('string' == typeof n ? r.fill(t, n) : r.fill(t)) : r.fill(0), r;
		}),
	!o.kStringMaxLength)
)
	try {
		o.kStringMaxLength = i.binding('buffer').kStringMaxLength;
	} catch (e) {}
!o.constants && ((o.constants = { MAX_LENGTH: o.kMaxLength }), o.kStringMaxLength && (o.constants.MAX_STRING_LENGTH = o.kStringMaxLength)), (e.exports = o);

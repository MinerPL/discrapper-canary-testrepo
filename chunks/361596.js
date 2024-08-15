var n = r(915646),
	a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	o = /\\(\\)?/g,
	i = n(function (e) {
		var t = [];
		return (
			46 === e.charCodeAt(0) && t.push(''),
			e.replace(a, function (e, r, n, a) {
				t.push(n ? a.replace(o, '$1') : r || e);
			}),
			t
		);
	});
e.exports = i;

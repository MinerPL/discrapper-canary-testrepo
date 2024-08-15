r.d(e, {
	T: function () {
		return i;
	}
});
var n = r(779597);
function i(t, e) {
	for (var r = '', i = 0; i < t.length; i++) {
		var o = t.charAt(i);
		if ('j' === o) {
			for (var a = 0; i + 1 < t.length && t.charAt(i + 1) === o; ) a++, i++;
			var s = 1 + (1 & a),
				u = a < 2 ? 1 : 3 + (a >> 1),
				c = (function (t) {
					var e,
						r = t.hourCycle;
					if ((void 0 === r && t.hourCycles && t.hourCycles.length && (r = t.hourCycles[0]), r))
						switch (r) {
							case 'h24':
								return 'k';
							case 'h23':
								return 'H';
							case 'h12':
								return 'h';
							case 'h11':
								return 'K';
							default:
								throw Error('Invalid hourCycle');
						}
					var i = t.language;
					return (
						'root' !== i && (e = t.maximize().region),
						(n._[e || ''] || n._[i || ''] || n._[''.concat(i, '-001')] || n._['001'])[0]
					);
				})(e);
			for (('H' == c || 'k' == c) && (u = 0); u-- > 0; ) r += 'a';
			for (; s-- > 0; ) r = c + r;
		} else 'J' === o ? (r += 'H') : (r += o);
	}
	return r;
}

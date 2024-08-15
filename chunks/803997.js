!(function () {
	var t = {}.hasOwnProperty;
	function n() {
		for (var e = [], r = 0; r < arguments.length; r++) {
			var i = arguments[r];
			if (i) {
				var a = typeof i;
				if ('string' === a || 'number' === a) e.push(i);
				else if (Array.isArray(i) && i.length) {
					var s = n.apply(null, i);
					s && e.push(s);
				} else if ('object' === a) for (var o in i) t.call(i, o) && i[o] && e.push(o);
			}
		}
		return e.join(' ');
	}
	e.exports
		? ((n.default = n), (e.exports = n))
		: 'function' == typeof define && 'object' == typeof define.amd && define.amd
			? define('classnames', [], function () {
					return n;
				})
			: (window.classNames = n);
})();

var r =
		'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
			? function (e) {
					return typeof e;
				}
			: function (e) {
					return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
				},
	n = ('undefined' == typeof window ? 'undefined' : r(window)) === 'object' && ('undefined' == typeof document ? 'undefined' : r(document)) === 'object' && 9 === document.nodeType;
t.Z = n;

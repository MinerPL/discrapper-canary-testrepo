var r = n(29513);
function i() {
	var e = {},
		t = 0,
		n = 0,
		r = 0;
	return {
		add: function (i, a) {
			!a && ((a = i), (i = 0)), i > n ? (n = i) : i < r && (r = i), !e[i] && (e[i] = []), e[i].push(a), t++;
		},
		process: function () {
			for (var t = r; t <= n; t++) {
				for (var i = e[t], a = 0; a < i.length; a++) (0, i[a])();
			}
		},
		size: function () {
			return t;
		}
	};
}
e.exports = function (e) {
	var t,
		n = (e = e || {}).reporter,
		a = r.getOption(e, 'async', !0),
		s = r.getOption(e, 'auto', !0);
	s && !a && (n && n.warn('Invalid options combination. auto=true and async=false is invalid. Setting async=true.'), (a = !0));
	var o = i(),
		l = !1;
	function u() {
		for (l = !0; o.size(); ) {
			var e = o;
			(o = i()), e.process();
		}
		l = !1;
	}
	function c() {
		t = d(u);
	}
	function d(e) {
		return setTimeout(e, 0);
	}
	return {
		add: function (e, n) {
			!l &&
				s &&
				a &&
				0 === o.size() &&
				(function () {
					t = d(u);
				})(),
				o.add(e, n);
		},
		force: function (e) {
			if (!l)
				void 0 === e && (e = a),
					t &&
						((function (e) {
							clearTimeout(e);
						})(t),
						(t = null)),
					e
						? (function () {
								t = d(u);
							})()
						: u();
		}
	};
};

var e,
	n = o(24033),
	c = o(94567),
	i = o(202234),
	u = o(624906),
	a = o(620623),
	f = o(722063),
	E = o(883539),
	s = 'prototype',
	p = 'script',
	R = E('IE_PROTO'),
	l = function () {},
	_ = function (r) {
		return '<' + p + '>' + r + '</' + p + '>';
	},
	d = function (r) {
		r.write(_('')), r.close();
		var t = r.parentWindow.Object;
		return (r = null), t;
	},
	O = function () {
		var r,
			t = f('iframe');
		return (
			(t.style.display = 'none'),
			a.appendChild(t),
			(t.src = String('java' + p + ':')),
			(r = t.contentWindow.document).open(),
			r.write(_('document.F=Object')),
			r.close(),
			r.F
		);
	},
	m = function () {
		try {
			e = new ActiveXObject('htmlfile');
		} catch (r) {}
		m = 'undefined' != typeof document ? (document.domain && e ? d(e) : O()) : d(e);
		for (var r = i.length; r--; ) delete m[s][i[r]];
		return m();
	};
(u[R] = !0),
	(r.exports =
		Object.create ||
		function (r, t) {
			var o;
			return (
				null !== r ? ((l[s] = n(r)), (o = new l()), (l[s] = null), (o[R] = r)) : (o = m()), void 0 === t ? o : c.f(o, t)
			);
		});

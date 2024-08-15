for (
	var n,
		r = 'undefined' != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
		i = {
			alt: 'altKey',
			control: 'ctrlKey',
			meta: 'metaKey',
			shift: 'shiftKey'
		},
		a = {
			add: '+',
			break: 'pause',
			cmd: 'meta',
			command: 'meta',
			ctl: 'control',
			ctrl: 'control',
			del: 'delete',
			down: 'arrowdown',
			esc: 'escape',
			ins: 'insert',
			left: 'arrowleft',
			mod: r ? 'meta' : 'control',
			opt: 'alt',
			option: 'alt',
			return: 'enter',
			right: 'arrowright',
			space: ' ',
			spacebar: ' ',
			up: 'arrowup',
			win: 'meta',
			windows: 'meta'
		},
		s = {
			backspace: 8,
			tab: 9,
			enter: 13,
			shift: 16,
			control: 17,
			alt: 18,
			pause: 19,
			capslock: 20,
			escape: 27,
			' ': 32,
			pageup: 33,
			pagedown: 34,
			end: 35,
			home: 36,
			arrowleft: 37,
			arrowup: 38,
			arrowright: 39,
			arrowdown: 40,
			insert: 45,
			delete: 46,
			meta: 91,
			numlock: 144,
			scrolllock: 145,
			';': 186,
			'=': 187,
			',': 188,
			'-': 189,
			'.': 190,
			'/': 191,
			'`': 192,
			'[': 219,
			'\\': 220,
			']': 221,
			"'": 222
		},
		o = 1;
	o < 20;
	o++
)
	s['f' + o] = 111 + o;
function l(e, t, n) {
	t && !('byKey' in t) && ((n = t), (t = null)), !Array.isArray(e) && (e = [e]);
	var r = e.map(function (e) {
			return u(e, t);
		}),
		i = function (e) {
			return r.some(function (t) {
				return c(t, e);
			});
		};
	return null == n ? i : i(n);
}
function u(e, t) {
	var n = t && t.byKey,
		r = {},
		a = (e = e.replace('++', '+add')).split('+'),
		s = a.length;
	for (var o in i) r[i[o]] = !1;
	var l = !0,
		u = !1,
		c = void 0;
	try {
		for (var E, f = a[Symbol.iterator](); !(l = (E = f.next()).done); l = !0) {
			var h = E.value,
				p = h.endsWith('?') && h.length > 1;
			p && (h = h.slice(0, -1));
			var m = _(h),
				I = i[m];
			(1 === s || !I) && (n ? (r.key = m) : (r.which = d(h))), I && (r[I] = !p || null);
		}
	} catch (e) {
		(u = !0), (c = e);
	} finally {
		try {
			!l && f.return && f.return();
		} finally {
			if (u) throw c;
		}
	}
	return r;
}
function c(e, t) {
	for (var n in e) {
		var r = e[n],
			i = void 0;
		if (null != r && (null != (i = 'key' === n && null != t.key ? t.key.toLowerCase() : 'which' === n ? (91 === r && 93 === t.which ? 91 : t.which) : t[n]) || !1 !== r)) {
			if (i !== r) return !1;
		}
	}
	return !0;
}
function d(e) {
	return s[(e = _(e))] || e.toUpperCase().charCodeAt(0);
}
function _(e) {
	return (e = a[(e = e.toLowerCase())] || e);
}
t.isKeyHotkey = function (e, t) {
	return l(e, { byKey: !0 }, t);
};

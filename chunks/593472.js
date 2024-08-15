var r, i, a, s;
n.d(t, {
	Jx: function () {
		return i;
	},
	SR: function () {
		return r;
	},
	r: function () {
		return o;
	}
}),
	((a = r || (r = {})).ANIMATED = 'ANIMATED'),
	(a.INSTANT = 'INSTANT'),
	((s = i || (i = {}))[(s.UNKNOWN = 0)] = 'UNKNOWN'),
	(s[(s.WINDOWED = 1)] = 'WINDOWED'),
	(s[(s.MAXIMIZED = 2)] = 'MAXIMIZED'),
	(s[(s.BORDERLESS_FULLSCREEN = 3)] = 'BORDERLESS_FULLSCREEN'),
	(s[(s.FULLSCREEN = 4)] = 'FULLSCREEN'),
	(s[(s.MINIMIZED = 5)] = 'MINIMIZED');
let o = {
	compatibilityHook: !1,
	warn: !1,
	enabled: !1,
	allowHook: !0,
	supportsOutOfProcessOverlay: !1
};

t.d(n, {
	MY: function () {
		return u;
	},
	RC: function () {
		return a;
	},
	UF: function () {
		return E;
	}
});
var i = t(857595),
	l = t(607070),
	o = t(981631);
function r(e) {
	return o.yqN.ZOOM_SCALES[
		Math.max(0, Math.min(o.yqN.ZOOM_SCALES.indexOf(l.Z.zoom) + e, o.yqN.ZOOM_SCALES.length - 1))
	];
}
let E = {
		binds: ['mod+plus'],
		comboKeysBindGlobal: !0,
		action: () => ((0, i.cq)(r(1)), !1)
	},
	a = {
		binds: ['mod+minus'],
		comboKeysBindGlobal: !0,
		action: () => ((0, i.cq)(r(-1)), !1)
	},
	u = {
		binds: ['mod+0'],
		comboKeysBindGlobal: !0,
		action: () => ((0, i.cq)(o.yqN.ZOOM_DEFAULT), !1)
	};
n.ZP =
	12633 == t.j
		? {
				ZOOM_IN: E,
				ZOOM_OUT: a,
				ZOOM_RESET: u
			}
		: null;

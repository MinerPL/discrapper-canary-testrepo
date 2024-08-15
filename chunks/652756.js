n.d(t, {
	K5: function () {
		return s;
	},
	g2: function () {
		return a;
	},
	rK: function () {
		return o;
	}
});
var r = n(868635),
	i = n(816383);
function a(e) {
	var t = 1 === e.nodeType ? e : e.parentElement;
	if (!t) return null;
	var n = t.getBoundingClientRect(),
		r = n.top;
	return {
		x: n.left,
		y: r
	};
}
function s(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
function o(e, t, n, s, o) {
	var l,
		u,
		c,
		d,
		_,
		E,
		f,
		h,
		p,
		m = 'IMG' === (l = t).nodeName && ((0, r.v)() || !(null !== (u = document.documentElement) && void 0 !== u && u.contains(l))),
		I = a(m ? e : t),
		T = {
			x: n.x - I.x,
			y: n.y - I.y
		},
		g = e.offsetWidth,
		S = e.offsetHeight,
		A = s.anchorX,
		N = s.anchorY;
	var v =
			((c = m),
			(d = t),
			(_ = g),
			(E = S),
			(f = c ? d.width : _),
			(h = c ? d.height : E),
			(0, r.G)() && c && ((h /= window.devicePixelRatio), (f /= window.devicePixelRatio)),
			{
				dragPreviewWidth: f,
				dragPreviewHeight: h
			}),
		O = v.dragPreviewWidth,
		R = v.dragPreviewHeight,
		C = o.offsetX,
		y = o.offsetY;
	return {
		x: 0 === C || C ? C : new i.I([0, 0.5, 1], [T.x, (T.x / g) * O, T.x + O - g]).interpolate(A),
		y: 0 === y || y ? y : ((p = new i.I([0, 0.5, 1], [T.y, (T.y / S) * R, T.y + R - S]).interpolate(N)), (0, r.G)() && m && (p += (window.devicePixelRatio - 1) * R), p)
	};
}

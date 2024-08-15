let r;
n.d(t, {
	RI: function () {
		return T;
	},
	jy: function () {
		return g;
	}
});
var i = n(570140),
	a = n(519938),
	s = n(317770),
	o = n(928518),
	l = n(592125),
	u = n(819640),
	c = n(366050),
	d = n(19780),
	_ = n(944486),
	E = n(914010),
	f = n(979651),
	h = n(317381),
	p = n(719296),
	m = n(958185),
	I = n(981631);
function T(e) {
	let t = null != e ? e : r;
	null != t && c.Z.isOpen(t) && i.Z.wait(() => a.Cp(t));
}
function g(e) {
	let t = null != e ? e : r;
	null != t && c.Z.isOpen(t) && i.Z.wait(() => a.$Z(t));
}
function S() {
	let e = h.ZP.getConnectedActivityChannelId(),
		t = h.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : I.lds),
		n = l.Z.getChannel(e);
	return null == e || null == n || null == t
		? (function () {
				let e = r;
				null != e && c.Z.isOpen(e) && (i.Z.wait(() => a.xv(e)), (r = null));
			})()
		: (function (e, t) {
				if (c.Z.isOpen(t)) return !1;
				i.Z.wait(() => a.bA(t, I.NYg.EMBED_IFRAME, { channel: e })), (r = t);
			})(n, (0, p.Z)(e, t.applicationId));
}
function A() {
	return (0, m.Z)({
		LayerStore: u.Z,
		PopoutWindowStore: o.Z
	})
		? T()
		: g();
}
class N extends s.Z {
	_initialize() {
		_.Z.addChangeListener(S), E.Z.addChangeListener(S), d.Z.addChangeListener(S), f.Z.addChangeListener(S), o.Z.addChangeListener(S), h.ZP.addChangeListener(S), u.Z.addChangeListener(A);
	}
	_terminate() {
		_.Z.removeChangeListener(S), E.Z.removeChangeListener(S), d.Z.removeChangeListener(S), f.Z.removeChangeListener(S), o.Z.removeChangeListener(S), h.ZP.removeChangeListener(S), u.Z.removeChangeListener(A);
	}
}
t.ZP = new N();

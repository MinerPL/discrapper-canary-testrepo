t.r(e),
	t.d(e, {
		default: function () {
			return P;
		}
	});
var i = t(735250);
t(470079);
var a = t(442837),
	l = t(481060),
	r = t(239091),
	d = t(812206),
	s = t(731646),
	u = t(283595),
	c = t(499502),
	I = t(955809),
	o = t(332845),
	A = t(78874),
	_ = t(350758),
	T = t(149835),
	E = t(38346),
	N = t(683609),
	Z = t(679879),
	M = t(981631),
	b = t(689938);
function C(n) {
	let { application: e, libraryApplication: t, analyticsContext: a, onSelect: d } = n,
		s = {
			...(null != a ? a.location : null),
			object: M.qAy.CONTEXT_MENU
		},
		u = (0, A.Z)(t, s),
		C = (0, _.Z)(t),
		P = (0, E.Z)(t),
		O = (0, Z.Z)(t),
		f = (0, N.Z)(t),
		L = (0, o.Z)(t, e),
		h = (0, T.Z)(t, e),
		p = (0, c.Z)(t, e),
		g = (0, I.Z)(e);
	return (0, i.jsxs)(l.Menu, {
		navId: 'game-context',
		onClose: r.Zy,
		'aria-label': b.Z.Messages.APPLICATION_ACTIONS_MENU_LABEL,
		onSelect: d,
		children: [u, C, P, O, f, L, h, (0, i.jsx)(l.MenuGroup, { children: p }), (0, i.jsx)(l.MenuGroup, { children: g })]
	});
}
function P(n) {
	let { applicationId: e, branchId: t } = n,
		l = (0, a.e7)([d.Z], () => d.Z.getApplication(e), [e]),
		r = (0, a.e7)([u.Z], () => (null != t ? u.Z.getLibraryApplication(e, t) : u.Z.getActiveLibraryApplication(e)), [e, t]);
	return null == l || null == r
		? (0, i.jsx)(s.default, {
				...n,
				id: e,
				label: b.Z.Messages.COPY_ID_APPLICATION
			})
		: (0, i.jsx)(C, {
				...n,
				application: l,
				libraryApplication: r
			});
}

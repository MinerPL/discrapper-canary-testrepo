n(47120);
var i = n(735250),
	l = n(470079),
	r = n(442837),
	a = n(256916),
	s = n(664915),
	o = n(888369),
	c = n(358652),
	u = n(771845),
	d = n(613060),
	h = n(451478),
	p = n(251625),
	_ = n(981631),
	f = n(689938);
let g = 'app-download-item',
	m = 'add-server-item';
function C() {
	return !1;
}
function I(e) {
	var t;
	let n = o.default.getMutableGuildStates();
	return (
		(e === _.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(_.x8Z.SERVER_DISCOVERY_BADGE)) ||
		(e !== g && e !== m && (null === (t = n[null != e ? e : 'null']) || void 0 === t ? void 0 : t.mentionCount) > 0)
	);
}
let E = (0, p.oH)((e, t, n) => ['null', ...t, ...e, m, _.x8Z.E3_SERVER_DISCOVERY_BADGE, g]);
t.Z = l.forwardRef(function (e, t) {
	let n = (0, r.Wu)([u.ZP, c.Z, o.default], () =>
			E(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel())
		),
		l = (0, r.e7)([h.Z], () => h.Z.isFocused()),
		d = (0, r.e7)([s.Z], () => s.Z.getExpandedFolders());
	return (0, i.jsx)(a.Z, {
		...e,
		ref: t,
		items: n,
		isUnread: C,
		textUnread: f.Z.Messages.NEW,
		textMention: f.Z.Messages.NEW,
		isMentioned: I,
		animate: l,
		expandedFolders: d
	});
});

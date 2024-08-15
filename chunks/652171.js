a.r(n),
	a.d(n, {
		default: function () {
			return E;
		}
	});
var t = a(735250);
a(470079);
var l = a(481060),
	i = a(239091),
	u = a(984933),
	s = a(904483),
	d = a(522762),
	r = a(466330),
	o = a(981631),
	c = a(689938);
function E(e) {
	let { guild: n, onSelect: a } = e,
		E = u.ZP.getDefaultChannel(n.id, !0, o.Plq.CREATE_INSTANT_INVITE),
		_ = (0, d.Z)(n.id),
		p = (0, s.Z)(n),
		I = (0, r.Z)({
			guild: n,
			source: o.t4x.GUILD_CONTEXT_MENU,
			channel: E
		});
	return (0, t.jsxs)(l.Menu, {
		navId: 'guild-context',
		'aria-label': c.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
		onClose: i.Zy,
		onSelect: a,
		children: [
			(0, t.jsx)(l.MenuGroup, { children: _ }),
			(0, t.jsxs)(l.MenuGroup, {
				children: [p, I]
			})
		]
	});
}

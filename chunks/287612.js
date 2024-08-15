n.d(t, {
	Z: function () {
		return f;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(318374),
	s = n(522289),
	o = n(565138),
	l = n(726059),
	u = n(162267),
	c = n(228168),
	d = n(182294),
	_ = n(689938),
	E = n(786067);
function f(e) {
	let { user: t, onOpenProfile: n } = e,
		{ mutualFriends: f } = (0, l.Z)(t.id),
		{ mutualGuilds: h } = (0, u.Z)(t.id),
		p = null != f && f.length > 0,
		I = null != h && h.length > 0,
		m = p && I ? 'text-xs/normal' : 'text-sm/normal';
	return p || I
		? (0, r.jsxs)('div', {
				className: E.mutuals,
				children: [
					p
						? (0, r.jsxs)(i.Clickable, {
								className: E.section,
								onClick: () => (null == n ? void 0 : n(c.oh.MUTUAL_FRIENDS)),
								children: [
									(0, r.jsx)(a.Z, {
										maxUsers: 3,
										users: f.map((e) => {
											let { user: t } = e;
											return t;
										}),
										size: d.EF.SIZE_16,
										hideOverflowCount: !0,
										disableUsernameTooltip: !0
									}),
									(0, r.jsx)(i.Text, {
										className: E.text,
										variant: m,
										color: 'interactive-normal',
										children: _.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: f.length })
									})
								]
							})
						: null,
					p && I
						? (0, r.jsx)('div', {
								'aria-hidden': 'true',
								className: E.spacer
							})
						: null,
					I
						? (0, r.jsxs)(i.Clickable, {
								className: E.section,
								onClick: () => (null == n ? void 0 : n(c.oh.MUTUAL_GUILDS)),
								children: [
									!p &&
										(0, r.jsx)(s.Z, {
											maxGuilds: 3,
											guilds: h.map((e) => {
												let { guild: t } = e;
												return t;
											}),
											size: o.Z.Sizes.SMOL,
											hideOverflowCount: !0,
											disableGuildNameTooltip: !0
										}),
									(0, r.jsx)(i.Text, {
										className: E.text,
										variant: m,
										color: 'interactive-normal',
										children: _.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: h.length })
									})
								]
							})
						: null
				]
			})
		: null;
}

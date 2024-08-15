t.d(n, {
	Z: function () {
		return f;
	}
});
var s = t(735250);
t(470079);
var i = t(481060),
	o = t(194359),
	l = t(906732),
	r = t(475413),
	a = t(261253),
	c = t(7242),
	d = t(934861),
	u = t(981631),
	I = t(689938),
	_ = t(353040);
function f(e) {
	let {
			isCurrentUser: n,
			user: t,
			relationshipType: f,
			friendToken: E,
			persistentCallCtaEnabled: m = !1,
			activeInviteToCallCtaEnabled: p = !1,
			onClose: x
		} = e,
		{ newestAnalyticsLocation: Z } = (0, l.ZP)();
	if (n || f === u.OGo.BLOCKED) return null;
	let v = m
			? (0, s.jsx)(a.Z, {
					user: t,
					onClose: x
				})
			: null,
		h = (0, s.jsx)(c.Z, {
			user: t,
			onClose: x
		});
	if (f === u.OGo.FRIEND && p && null != h)
		return (0, s.jsxs)('div', {
			className: _.multipleButtons,
			children: [
				(0, s.jsx)(d.v, {
					userId: t.id,
					onClose: x
				}),
				h
			]
		});
	if (f === u.OGo.FRIEND || t.bot)
		return (0, s.jsxs)('div', {
			className: _.multipleButtons,
			children: [
				v,
				(0, s.jsx)(d.c, {
					userId: t.id,
					onClose: x
				})
			]
		});
	if (f === u.OGo.PENDING_OUTGOING || f === u.OGo.PENDING_INCOMING)
		return p && null != h
			? (0, s.jsxs)('div', {
					className: _.multipleButtons,
					children: [
						(0, s.jsx)(r.ef, {
							icon: i.UserClockIcon,
							tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
							disabled: !0
						}),
						(0, s.jsx)(d.v, {
							userId: t.id,
							onClose: x
						}),
						h
					]
				})
			: (0, s.jsxs)('div', {
					className: _.multipleButtons,
					children: [
						(0, s.jsx)(r.ef, {
							icon: i.UserClockIcon,
							tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
							disabled: !0
						}),
						v,
						(0, s.jsx)(d.c, {
							userId: t.id,
							onClose: x
						})
					]
				});
	return p && null != h
		? (0, s.jsxs)('div', {
				className: _.multipleButtons,
				children: [
					(0, s.jsx)(r.ef, {
						action: 'SEND_FRIEND_REQUEST',
						icon: i.UserPlusIcon,
						tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
						onClick: () => {
							o.Z.addRelationship({
								userId: t.id,
								context: { location: Z },
								friendToken: E
							});
						}
					}),
					(0, s.jsx)(d.v, {
						userId: t.id,
						onClose: x
					}),
					h
				]
			})
		: (0, s.jsxs)('div', {
				className: _.multipleButtons,
				children: [
					v,
					(0, s.jsx)(d.v, {
						userId: t.id,
						onClose: x
					}),
					(0, s.jsx)(r.tG, {
						action: 'SEND_FRIEND_REQUEST',
						icon: i.UserPlusIcon,
						text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
						color: i.Button.Colors.BRAND,
						onClick: () => {
							o.Z.addRelationship({
								userId: t.id,
								context: { location: Z },
								friendToken: E
							});
						}
					})
				]
			});
}

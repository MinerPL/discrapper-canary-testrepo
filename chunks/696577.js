n.d(t, {
	Z: function () {
		return p;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(692547),
	r = n(481060),
	l = n(194359),
	o = n(906732),
	c = n(171368),
	d = n(594174),
	u = n(626135),
	_ = n(321488),
	E = n(417183),
	h = n(170245),
	m = n(981631),
	I = n(689938),
	g = n(739508);
function p(e) {
	let { user: t, type: n, status: p, isFocused: T } = e,
		S = a.useContext(u.AnalyticsContext),
		{ analyticsLocations: f } = (0, o.ZP)(),
		C = (e) => {
			e.stopPropagation(), l.Z.cancelFriendRequest(t.id, { location: 'Friends' });
		},
		N = (e) => {
			e.stopPropagation(),
				l.Z.addRelationship({
					userId: t.id,
					context: { location: 'Friends' }
				});
		},
		A = p === m.Skl.OFFLINE ? m.Skl.UNKNOWN : p,
		v = n === m.OGo.PENDING_INCOMING ? I.Z.Messages.INCOMING_FRIEND_REQUEST : I.Z.Messages.OUTGOING_FRIEND_REQUEST;
	return (0, i.jsx)(E.Z, {
		isFocused: T,
		user: t,
		onClick: () =>
			(0, c.openUserProfileModal)({
				userId: t.id,
				sourceAnalyticsLocations: f,
				analyticsLocation: S.location
			}),
		children: (e) => {
			var a;
			let l =
				n === m.OGo.PENDING_INCOMING
					? (0, i.jsxs)(i.Fragment, {
							children: [
								(null === (a = d.default.getCurrentUser()) || void 0 === a ? void 0 : a.isStaff()) &&
									(null == t ? void 0 : t.isStaff()) &&
									(0, i.jsx)('div', {
										className: g.staffIndicator,
										children: (0, i.jsx)(r.TextBadge, {
											color: s.Z.unsafe_rawColors.BRAND_500.css,
											text: I.Z.Messages.STAFF_BADGE_TOOLTIP
										})
									}),
								(0, i.jsx)(_.Z, {
									icon: r.CheckmarkLargeIcon,
									actionType: _.Z.ActionTypes.ACCEPT,
									tooltip: I.Z.Messages.FRIEND_REQUEST_ACCEPT,
									onClick: N,
									shouldHighlight: e
								}),
								(0, i.jsx)(_.Z, {
									icon: r.XSmallIcon,
									actionType: _.Z.ActionTypes.DENY,
									tooltip: I.Z.Messages.FRIEND_REQUEST_IGNORE,
									onClick: C,
									shouldHighlight: e
								})
							]
						})
					: (0, i.jsx)(_.Z, {
							icon: r.XSmallIcon,
							actionType: _.Z.ActionTypes.DENY,
							tooltip: I.Z.Messages.FRIEND_REQUEST_CANCEL,
							onClick: C,
							shouldHighlight: e
						});
			return (0, i.jsxs)('div', {
				className: g.listItemContents,
				children: [
					(0, i.jsx)(h.Z, {
						user: t,
						hovered: e,
						showAccountIdentifier: !0,
						status: A,
						subText: v,
						className: g.userInfo
					}),
					(0, i.jsx)('div', {
						className: g.actions,
						children: l
					})
				]
			});
		}
	});
}

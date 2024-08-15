n.d(t, {
	Z: function () {
		return d;
	},
	n: function () {
		return c;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(26033),
	s = n(810568),
	o = n(168524),
	l = n(981631),
	u = n(689938);
function c(e) {
	let { user: t, activity: n, entry: r } = e;
	return null != r
		? {
				applicationId: (0, a.dX)(r) ? r.extra.application_id : void 0,
				sourceUserId: r.author_id
			}
		: null != n
			? {
					applicationId: n.type === l.IIU.PLAYING && null != n.application_id ? n.application_id : void 0,
					sourceUserId: t.id
				}
			: {
					applicationId: void 0,
					sourceUserId: void 0
				};
}
function d(e) {
	let { user: t, activity: n, entry: a, onAction: l } = e,
		{ applicationId: d, sourceUserId: _ } = c({
			activity: n,
			entry: a,
			user: t
		}),
		E = (0, o.Z)({
			location: 'UserProfileActivityContextMenu',
			source: s.m1.UserProfileCardContextMenu,
			trackEntryPointImpression: !0,
			applicationId: d,
			sourceUserId: _
		});
	return null == E
		? null
		: (0, r.jsx)(i.MenuItem, {
				id: 'game-profile',
				label: u.Z.Messages.VIEW_GAME_PROFILE,
				action: () => {
					null == l || l({ action: 'PRESS_VIEW_GAME_PROFILE_MENU_ITEM' }), E();
				}
			});
}

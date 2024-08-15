n.d(t, {
	VO: function () {
		return u;
	},
	f0: function () {
		return m;
	},
	fS: function () {
		return d;
	}
});
var l = n(652874),
	r = n(731965),
	i = n(626135),
	a = n(981631);
let o = {
		guildId: void 0,
		channelId: void 0,
		channelType: void 0,
		viewerSwipes: 0,
		thumbnailSwipes: 0,
		selectedItemChanges: 0,
		numMediaItems: 0
	},
	s = (0, l.Z)(() => o);
function d(e, t, n, l) {
	(0, r.j)(() =>
		s.setState({
			...o,
			guildId: e,
			channelId: t,
			channelType: n,
			numMediaItems: l
		})
	);
}
function u() {
	let e = s.getState();
	i.default.track(a.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
		guild_id: e.guildId,
		channel_id: e.channelId,
		channel_type: e.channelType,
		number_viewer_swipes: e.viewerSwipes,
		number_thumbnail_swipes: e.thumbnailSwipes,
		number_selected_item_changes: e.selectedItemChanges,
		number_media_items: e.numMediaItems
	}),
		(0, r.j)(() => s.setState({ ...o }));
}
function m() {
	(0, r.j)(() => s.setState((e) => ({ selectedItemChanges: e.selectedItemChanges + 1 })));
}

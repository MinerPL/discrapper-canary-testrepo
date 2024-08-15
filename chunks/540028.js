n(653041), n(47120);
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(692547),
	s = n(481060),
	o = n(475179),
	l = n(519938),
	u = n(317381),
	c = n(812206),
	d = n(358221),
	_ = n(199902),
	E = n(366050),
	f = n(594174),
	h = n(981631),
	p = n(354459),
	I = n(689938),
	m = n(582920);
function T(e) {
	let { closePopout: t, idle: n, pipWindows: a, voiceChannelId: f, onSelect: m } = e;
	n && t();
	let T = (0, i.e7)([u.ZP], () => u.ZP.getSelfEmbeddedActivityForChannel(f)),
		g = (0, i.e7)([E.Z], () => E.Z.pipWindow),
		S = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(f)),
		A = (0, i.e7)([d.Z], () => d.Z.getStreamParticipants(f));
	return (0, r.jsx)(s.Menu, {
		navId: 'pip-menu',
		'aria-label': 'switch PIP',
		onClose: t,
		onSelect: m,
		children: (function () {
			let e = a.find((e) => e.component === h.NYg.EMBED_IFRAME),
				t = a.find((e) => e.component === h.NYg.VIDEO),
				n = [];
			return (
				null != e && (null == g ? void 0 : g.id) !== e.id && n.push({ pipWindow: e }),
				null != t &&
					A.forEach((e) => {
						let r = _.Z.getActiveStreamForApplicationStream(e.stream),
							i = e.id === (null == S ? void 0 : S.id) && (null == g ? void 0 : g.id) === t.id;
						null != r &&
							!i &&
							n.push({
								pipWindow: t,
								participant: e,
								stream: r
							});
					}),
				n
			);
		})().map(function (e) {
			var t;
			let n = e.pipWindow.id,
				i = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
				a = (function (e) {
					if (e.pipWindow.component === h.NYg.EMBED_IFRAME && null != T) {
						var t;
						let e = null === (t = c.Z.getApplication(T.applicationId)) || void 0 === t ? void 0 : t.name;
						return null == e
							? I.Z.Messages.SWITCH_PIP_TO_ACTIVITY
							: I.Z.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({ activityName: e });
					}
					return null == e.participant || e.participant.type !== p.fO.STREAM
						? I.Z.Messages.SWITCH_PIP_TO_GO_LIVE
						: I.Z.Messages.SWITCH_PIP_TO_USER_STREAM.format({ username: e.participant.userNick });
				})(e),
				u = ''.concat(n).concat(null != i ? i : '');
			return (0, r.jsx)(
				s.MenuItem,
				{
					id: u,
					label: a,
					action: () =>
						(function (e) {
							(null == g ? void 0 : g.id) !== e.pipWindow.id && (0, l.k3)(e.pipWindow.id);
							let t = e.participant;
							null != t && t.type !== p.fO.ACTIVITY && o.Z.selectParticipant(f, t.id);
						})(e)
				},
				u
			);
		})
	});
}
t.Z = function (e) {
	let { voiceChannelId: t, idle: n } = e,
		o = Array.from((0, i.e7)([E.Z], () => E.Z.pipWindows).values()),
		l = (0, i.Wu)([_.Z], () => _.Z.getAllActiveStreamsForChannel(t)).filter((e) => {
			var n;
			return (
				e.ownerId !== (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
			);
		}),
		u = (1 === o.length && o[0].component === h.NYg.EMBED_IFRAME) || 0 === l.length,
		c = 1 === o.length && l.length <= 1;
	return u || c
		? null
		: (0, r.jsx)(s.Popout, {
				position: 'bottom',
				renderPopout: (e) =>
					(0, r.jsx)(T, {
						voiceChannelId: t,
						pipWindows: o,
						idle: n,
						...e
					}),
				children: (e) =>
					(0, r.jsx)(s.Clickable, {
						className: m.menuIcon,
						...e,
						children: (0, r.jsx)(s.MoreVerticalIcon, {
							size: 'md',
							color: a.Z.unsafe_rawColors.WHITE_500.css
						})
					})
			});
};

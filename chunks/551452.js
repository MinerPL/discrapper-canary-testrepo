n.d(t, {
	Z: function () {
		return T;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(239091),
	s = n(287734),
	o = n(364640),
	l = n(754688),
	u = n(336197),
	c = n(124072),
	d = n(891984),
	_ = n(131704),
	E = n(592125),
	f = n(430824),
	h = n(900849),
	p = n(746878),
	m = n(981631);
async function I(e, t, n) {
	if (null == t) return;
	if (
		(o.Z.trackDiscordLinkClicked({
			guildId: e,
			channelId: t,
			messageId: n
		}),
		null != e)
	) {
		let n = f.Z.getGuild(e);
		if ((null == n ? void 0 : n.joinedAt) == null)
			try {
				await h.Ub(e, {}, { channelId: t });
				return;
			} catch {}
	}
	let r = E.Z.getChannel(t);
	if (null != r && null == n && (0, _.bw)(r.type) && (0, l.YO)(r)) {
		s.default.selectVoiceChannel(r.id);
		return;
	}
	(0, u.Z)(m.Z5c.CHANNEL(e, t, n));
}
function T(e) {
	return {
		react(t, s, o) {
			let l = E.Z.getChannel(t.channelId),
				u = o.noStyleAndInteraction
					? void 0
					: (n) => {
							e.shouldStopPropagation && (null == n || n.stopPropagation()), I(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, i.closeAllModals)();
						},
				_ =
					o.noStyleAndInteraction || null == t.channelId || (null == l && null == t.originalLink)
						? m.dG4
						: (e) => {
								(0, a.jW)(e, async () => {
									let { default: e } = await n.e('9573').then(n.bind(n, 546649));
									return (n) => {
										var i;
										return (0, r.jsx)(e, {
											...n,
											channel: l,
											channelId: null !== (i = null == l ? void 0 : l.id) && void 0 !== i ? i : t.channelId,
											originalLink: t.originalLink,
											messageId: t.messageId
										});
									};
								});
							};
			return (0, r.jsxs)(
				c.Z,
				{
					role: 'link',
					onClick: u,
					onContextMenu: _,
					className: 'channelMention',
					children: [null != t.inContent ? s(t.inContent, o) : null, null != t.inContent ? (0, r.jsx)(d.Z, {}) : null, (0, p.S)(t, s, o)]
				},
				o.key
			);
		}
	};
}

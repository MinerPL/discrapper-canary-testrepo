n.d(t, {
	Z: function () {
		return I;
	}
}),
	n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(481060),
	l = n(446411),
	o = n(454585),
	c = n(834129),
	u = n(553385),
	d = n(981631),
	_ = n(689938),
	E = n(980469);
function I(e) {
	let { message: t, channel: a, compact: l } = e,
		o = null != t.embeds && t.embeds.length > 0;
	return (0, i.jsxs)('div', {
		children: [
			(0, i.jsx)(c.Z, {
				className: s()(E.mainContainer, { [E.compact]: l }),
				icon: n(570111),
				compact: l,
				children: (0, i.jsx)('div', {
					className: s()(E.__invalid_content, { [E.compact]: l }),
					children: (0, i.jsx)('div', {
						className: s()(E.__invalid_messageContent, { [E.compact]: l }),
						children: t.content
					})
				})
			}),
			(0, i.jsx)('div', {
				className: s()(E.__invalid_embedContent, { [E.compact]: l }),
				children: (0, i.jsx)(m, { message: t })
			}),
			(0, i.jsx)('div', {
				className: E.actions,
				children: (0, i.jsx)(r.Button, {
					color: r.Button.Colors.PRIMARY,
					onClick: () => {
						o ? (0, u.z$)(t) : (0, u.XP)(a.guild_id, a.id, t.id);
					},
					children: _.Z.Messages.SYSTEM_MESSAGE_GET_GAMING_STATS
				})
			})
		]
	});
}
function m(e) {
	var t;
	let { message: n } = e,
		[a] = null !== (t = n.embeds) && void 0 !== t ? t : [];
	return null == a
		? null
		: (0, i.jsx)(l.ZP, {
				className: E.embed,
				embed: a,
				renderTitle: (e, t) => o.Z.parseEmbedTitle(t, !0, { channelId: n.channel_id }),
				renderDescription: (e, t, i) => o.Z.parse(t, !0, { channelId: n.channel_id }),
				autoPlayGif: !1,
				renderImageComponent: d.VqG,
				renderVideoComponent: d.VqG,
				renderLinkComponent: d.VqG,
				renderForwardComponent: d.VqG
			});
}

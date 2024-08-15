n.d(t, {
	g: function () {
		return h;
	}
});
var i = n(392711),
	s = n.n(i),
	o = n(995774),
	a = n(592125),
	l = n(542578),
	r = n(699516),
	c = n(5192),
	u = n(566006),
	d = n(689938);
function h(e, t) {
	var n;
	let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
		h = arguments.length > 3 ? arguments[3] : void 0,
		m = l.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
		p = a.Z.getChannel(e.getChannelId()),
		g = null == p || p.isPrivate() ? null : p.getGuildId(),
		f = e.getReaction(t),
		T = i === u.O.BURST,
		_ = s()(m)
			.reject((e) => r.Z.isBlocked(e.id))
			.take(3)
			.map((e) => c.ZP.getName(g, null == p ? void 0 : p.id, e))
			.value();
	if (0 === _.length) return '';
	let v = {
			standard: {
				reactionTooltip1NInteractive: d.Z.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
				reactionTooltip1N: d.Z.Messages.REACTION_TOOLTIP_1_N,
				reactionTooltip1: d.Z.Messages.REACTION_TOOLTIP_1,
				reactionTooltip2NInteractive: d.Z.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
				reactionTooltip2N: d.Z.Messages.REACTION_TOOLTIP_2_N,
				reactionTooltip2: d.Z.Messages.REACTION_TOOLTIP_2,
				reactionTooltip3NInteractive: d.Z.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
				reactionTooltip3N: d.Z.Messages.REACTION_TOOLTIP_3_N,
				reactionTooltip3: d.Z.Messages.REACTION_TOOLTIP_3,
				reactionTooltipNInteractive: d.Z.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
				reactionTooltipN: d.Z.Messages.REACTION_TOOLTIP_N
			},
			burst: {
				reactionTooltip1NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
				reactionTooltip1N: d.Z.Messages.BURST_REACTION_TOOLTIP_1_N,
				reactionTooltip1: d.Z.Messages.BURST_REACTION_TOOLTIP_1,
				reactionTooltip2NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
				reactionTooltip2N: d.Z.Messages.BURST_REACTION_TOOLTIP_2_N,
				reactionTooltip2: d.Z.Messages.BURST_REACTION_TOOLTIP_2,
				reactionTooltip3NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
				reactionTooltip3N: d.Z.Messages.BURST_REACTION_TOOLTIP_3_N,
				reactionTooltip3: d.Z.Messages.BURST_REACTION_TOOLTIP_3,
				reactionTooltipNInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
				reactionTooltipN: d.Z.Messages.BURST_REACTION_TOOLTIP_N
			}
		},
		b = T ? v.burst : v.standard,
		E = Math.max(0, (null !== (n = T ? (null == f ? void 0 : f.burst_count) : null == f ? void 0 : f.count) && void 0 !== n ? n : 0) - _.length),
		I = (0, o.Lh)(t);
	if (1 === _.length)
		return E > 0
			? null != h
				? b.reactionTooltip1NInteractive.format({
						a: _[0],
						n: E,
						emojiName: I,
						onClick: h
					})
				: b.reactionTooltip1N.format({
						a: _[0],
						n: E,
						emojiName: I
					})
			: b.reactionTooltip1.format({
					a: _[0],
					emojiName: I
				});
	if (2 === _.length)
		return E > 0
			? null != h
				? b.reactionTooltip2NInteractive.format({
						a: _[0],
						b: _[1],
						n: E,
						emojiName: I,
						onClick: h
					})
				: b.reactionTooltip2N.format({
						a: _[0],
						b: _[1],
						n: E,
						emojiName: I
					})
			: b.reactionTooltip2.format({
					a: _[0],
					b: _[1],
					emojiName: I
				});
	if (3 === _.length)
		return E > 0
			? null != h
				? b.reactionTooltip3NInteractive.format({
						a: _[0],
						b: _[1],
						c: _[2],
						n: E,
						emojiName: I,
						onClick: h
					})
				: b.reactionTooltip3N.format({
						a: _[0],
						b: _[1],
						c: _[2],
						n: E,
						emojiName: I
					})
			: b.reactionTooltip3.format({
					a: _[0],
					b: _[1],
					c: _[2],
					emojiName: I
				});
	else
		return null != h
			? b.reactionTooltipNInteractive.format({
					n: E,
					emojiName: I,
					onClick: h
				})
			: b.reactionTooltipN.format({
					n: E,
					emojiName: I
				});
}

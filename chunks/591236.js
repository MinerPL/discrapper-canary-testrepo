var r = n(588468),
	i = n(496675),
	a = n(483360),
	s = n(877565),
	o = n(590921),
	l = n(665692),
	u = n(981631),
	c = n(185923),
	d = n(689938);
let _ = {
	sentinel: l.a4,
	matches(e, t, n, r, a) {
		var s, o;
		return (
			r &&
			null !== (o = null === (s = a.chatInputType.autocomplete) || void 0 === s ? void 0 : s.addReactionShortcut) &&
			void 0 !== o &&
			o &&
			(i.Z.can(u.Plq.ADD_REACTIONS, e) || e.isPrivate())
		);
	},
	queryResults(e, t, n, r, i) {
		let { emojis: s } = a.ZP.queryEmojiResults({
			query: n,
			channel: e,
			intention: c.Hz.REACTION
		});
		return { results: { emojis: s.unlocked } };
	},
	renderResults(e) {
		let {
			results: { emojis: t },
			selectedIndex: n,
			query: i,
			onHover: a,
			onClick: o
		} = e;
		return (0, s.HI)({
			query: i,
			selectedIndex: n,
			autocompletes: t,
			onHover: a,
			onClick: o,
			titleWithQuery: d.Z.Messages.REACTIONS_MATCHING,
			titleWithoutQuery: d.Z.Messages.EMOJI,
			Component: r.ZP.Emoji,
			getProps: (e) => ({
				emoji: e,
				key: e.id || e.uniqueName || e.name,
				sentinel: l.Iv
			}),
			getQuery: (e) => ''.concat(l.a4).concat(e),
			key: 'reactions'
		});
	},
	onSelect(e) {
		let {
				results: { emojis: t },
				index: n,
				options: r
			} = e,
			i = t[n];
		return (
			r.sendMessage(
				(function (e) {
					return ''.concat(l.a4).concat(e.name).concat(l.jp);
				})(i)
			),
			{ type: o.z2.REACTION }
		);
	}
};
t.Z = _;

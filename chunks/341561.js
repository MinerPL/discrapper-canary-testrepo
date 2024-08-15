var r = n(735250);
n(470079);
var i = n(952265),
	a = n(588468),
	s = n(285651),
	o = n(268350),
	l = n(926491),
	u = n(373228),
	c = n(419922),
	d = n(430824),
	_ = n(483360),
	E = n(877565),
	f = n(590921),
	h = n(665692),
	p = n(981631),
	I = n(689938),
	m = n(339626);
function T(e, t) {
	return (0, r.jsx)(c.ZP, {
		sticker: e,
		isInteracting: t,
		size: 40
	});
}
let g = {
	sentinel: h.Iv,
	stores: [l.Z],
	matches: (e, t, n, r, i) => n.length > 1,
	queryResults(e, t, n, r, i) {
		let a = r.allowStickers ? 0 : 40,
			l = p.rnv + a,
			{
				emojis: { unlocked: u }
			} = _.ZP.queryEmojiResults({
				query: n,
				channel: e,
				intention: r.emojiIntention,
				maxCount: l
			});
		'-' === n[0] &&
			(u = u.filter((e) => {
				var t;
				return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n);
			}));
		let c = [];
		if (r.allowStickers) {
			(0, o.$p)();
			let t = _.ZP.queryStickers([n], !0, [e, (e, t) => t === s.eb.SENDABLE]),
				r = Math.max(4, 8 - u.length);
			(c = t.slice(0, r)), '-' === n[0] && (c = t.filter((e) => e.sticker.name === n));
		}
		let d = u.slice(0, l - c.length);
		return {
			results: {
				emojis: d,
				emojisLocked: [],
				stickers: c
			},
			metadata: {
				numEmojiResults: d.length,
				numLockedEmojiResults: 0,
				numStickerResults: c.length
			}
		};
	},
	renderResults(e) {
		let {
			results: { emojis: t, stickers: s, emojisLocked: o },
			selectedIndex: l,
			query: u,
			onHover: c,
			onClick: _
		} = e;
		return (0, r.jsxs)(r.Fragment, {
			children: [
				(0, E.HI)({
					query: u,
					selectedIndex: l,
					autocompletes: t,
					onHover: c,
					onClick: _,
					titleWithQuery: I.Z.Messages.EMOJI_MATCHING,
					titleWithoutQuery: I.Z.Messages.EMOJI,
					Component: a.ZP.Emoji,
					getProps: (e) => ({
						emoji: e,
						key: e.id || e.uniqueName || e.name,
						sentinel: h.Iv,
						guild: null != e.guildId ? d.Z.getGuild(e.guildId) : null
					}),
					getQuery: (e) => ''.concat(h.Iv).concat(e),
					key: 'emoji'
				}),
				o.length > 0
					? (0, E.HI)({
							query: u,
							selectedIndex: l,
							autocompletes: o,
							onHover: c,
							onClick: () => {
								(0, i.ZD)(async () => {
									let { default: e } = await n.e('9766').then(n.bind(n, 889684));
									return (t) => (0, r.jsx)(e, { ...t });
								});
							},
							titleWithQuery: 0 === t.length ? I.Z.Messages.EMOJI_MATCHING : null,
							titleWithoutQuery: 0 === t.length ? I.Z.Messages.EMOJI : null,
							Component: a.ZP.EmojiUpsell,
							getProps: (e) => {
								let { emojis: t } = e;
								return {
									key: 'emoji-upsell',
									emojis: t
								};
							},
							getQuery: (e) => ''.concat(h.Iv).concat(e),
							key: 'emoji-upsell',
							indexOffset: t.length
						})
					: null,
				(t.length > 0 || o.length > 0) &&
					s.length > 0 &&
					(0, r.jsx)(a.ZP.Divider, { className: m.emojiStickersDivider }),
				(0, E.HI)({
					query: u,
					selectedIndex: l,
					autocompletes: s,
					onHover: c,
					onClick: _,
					titleWithQuery: I.Z.Messages.STICKERS_MATCHING,
					titleWithoutQuery: I.Z.Messages.STICKER,
					Component: a.ZP.Sticker,
					getProps: (e) => {
						let { comparator: t, sticker: n } = e;
						return {
							renderSticker: T,
							queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
							sticker: n,
							key: n.id
						};
					},
					getQuery: (e) => e,
					key: 'stickers',
					indexOffset: t.length + o.length,
					headerClassName: t.length > 0 ? m.stickersHeaderWithEmojiResults : void 0
				})
			]
		});
	},
	onSelect(e) {
		let {
			results: { emojis: t, emojisLocked: n, stickers: r },
			index: i,
			options: a
		} = e;
		if (i < t.length) {
			let e = t[i];
			return (
				a.insertText(
					(function (e) {
						return ''.concat(h.Iv).concat(e.name).concat(h.Iv);
					})(e),
					(function (e) {
						var t;
						let n = e.animated ? 'a' : '';
						return e.managed || null == e.id
							? ''.concat(h.Iv).concat(e.name).concat(h.Iv)
							: '<'
									.concat(n, ':')
									.concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ':')
									.concat(e.id, '>');
					})(e)
				),
				{
					type: f.z2.EMOJI,
					metadata: {
						emojiId: e.id,
						numEmojiResults: t.length,
						numStickerResults: r.length,
						expressionName: e.name,
						isCustom: null != e.id,
						isAnimated: e.animated
					}
				}
			);
		}
		if ((i -= t.length) < n.length) return { type: null };
		if ((i -= n.length) < r.length) {
			let e = r[i];
			return (
				a.insertText(''),
				a.sendSticker(e.sticker, u.V0.AUTOCOMPLETE),
				{
					type: f.z2.STICKER,
					metadata: {
						numEmojiResults: t.length,
						numStickerResults: r.length,
						stickerId: e.sticker.id
					}
				}
			);
		}
		return { type: null };
	}
};
t.Z = g;

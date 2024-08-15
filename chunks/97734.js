n(47120);
var r = n(302454),
	i = n.n(r),
	a = n(339085),
	s = n(633302),
	o = n(176354),
	l = n(594199);
let u = {
	s: {
		requiredFirstCharacters: ['~'],
		match: i().inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
	},
	highlight: {
		order: l.ZP.order,
		match: () => null
	},
	emoji: {
		order: l.ZP.order,
		requiredFirstCharacters: [':'],
		match(e) {
			let t = s.ZP.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
			return null != t && '' !== s.ZP.convertNameToSurrogate(t[1]) ? t : null;
		},
		parse(e) {
			let [t, n] = e,
				r = s.ZP.convertNameToSurrogate(n);
			return null == r || '' === r
				? {
						type: 'text',
						content: t
					}
				: {
						name: ':'.concat(n, ':'),
						surrogate: r,
						src: o.ZP.getURL(r)
					};
		}
	},
	customEmoji: {
		order: i().defaultRules.codeBlock.order,
		requiredFirstCharacters: ['<'],
		match: (e) => /^<(a)?:(\w+):(\d+)>/.exec(e),
		parse(e, t, n) {
			let [r, i, s, o] = e,
				{ guildId: l } = n,
				u = a.ZP.getDisambiguatedEmojiContext(l).getById(o),
				c = null == u || u.require_colons;
			return (
				null != u && (s = u.name),
				{
					emojiId: o,
					name: c ? ':'.concat(s, ':') : s,
					animated: 'a' === i
				}
			);
		}
	},
	text: {
		parse(e) {
			let t = s.ZP.findInlineEmojisFromSurrogates(e[0]),
				n = 0;
			return t.map((e) => {
				if ('text' === e.type) {
					let t = {
						index: n,
						0: e.text
					};
					return (
						(n += e.text.length),
						{
							type: 'text',
							content: e.text,
							originalMatch: t
						}
					);
				}
				{
					let t = {
						index: n,
						0: e.surrogate
					};
					return (
						(n += e.surrogate.length),
						{
							type: 'emoji',
							name: e.emojiName,
							surrogate: e.surrogate,
							src: o.ZP.getURL(e.surrogate),
							originalMatch: t
						}
					);
				}
			});
		}
	},
	looseEm: {
		...i().defaultRules.em,
		match: i().inlineRegex(RegExp('^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)')),
		parse: (e, t, n) => ({
			type: 'em',
			content: t(e[1], n),
			originalMatch: e
		})
	}
};
t.Z = u;

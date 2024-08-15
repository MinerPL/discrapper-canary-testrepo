n.d(t, {
	ZP: function () {
		return f;
	},
	k$: function () {
		return h;
	},
	n0: function () {
		return E;
	},
	p6: function () {
		return _;
	},
	rs: function () {
		return d;
	}
}),
	n(47120),
	n(757143),
	n(865427);
var r = n(830121),
	i = n(202131),
	a = n(454585);
n(665430);
var s = n(55406),
	o = n(408433),
	l = n(981631);
n(46140);
let u = new Set([l.hBH.IMAGE, l.hBH.GIFV]),
	c = new Set(['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler']);
function d(e, t) {
	let n = _({
			channelId: e.channel_id,
			messageId: e.id,
			renderOptions: t
		}),
		r = null != e.webhookId;
	return {
		...n,
		allowLinks: r || n.allowLinks,
		allowEmojiLinks: r,
		mentionChannels: e.mentionChannels
	};
}
function _(e) {
	let { channelId: t, messageId: n, renderOptions: r } = e;
	return {
		channelId: t,
		messageId: n,
		allowLinks: !!r.allowLinks,
		allowDevLinks: !!r.allowDevLinks,
		formatInline: !!r.formatInline,
		noStyleAndInteraction: !!r.noStyleAndInteraction,
		allowHeading: !!r.allowHeading,
		allowList: !!r.allowList,
		previewLinkTarget: !!r.previewLinkTarget,
		disableAnimatedEmoji: !!r.disableAnimatedEmoji,
		isInteracting: !!r.isInteracting,
		allowEmojiLinks: !1,
		disableAutoBlockNewlines: !0,
		mentionChannels: [],
		muted: !1,
		unknownUserMentionPlaceholder: !0,
		viewingChannelId: r.viewingChannelId,
		forceWhite: !!r.forceWhite
	};
}
function E(e, t, n) {
	return {
		hasSpoilerEmbeds: !1,
		content: a.Z.reactParserFor(s.Z.getDefaultRules(t))(e.content, !1, null != n ? { changeLog: n } : {})
	};
}
function f(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
	return (function (e, t, n) {
		var a;
		let {
				toAST: s = !1,
				hideSimpleEmbedContent: l = !0,
				formatInline: _ = !1,
				postProcessor: E,
				shouldFilterKeywords: f,
				contentMessage: h
			} = n,
			m = !1,
			T = (null != h ? h : t).content,
			g = e(
				f
					? (0, i.N)(T, {
							escapeReplacement: !0,
							messageId: t.id,
							channelId: t.channel_id,
							authorId: null === (a = t.author) || void 0 === a ? void 0 : a.id
						})
					: T,
				!0,
				d(t, n),
				(e, n) => (
					!Array.isArray(e) && (e = [e]),
					l &&
						(e = (function (e, t) {
							if (1 !== e.length || 1 !== t.length) return e;
							let n = e[0],
								r = t[0];
							return ('link' === n.type || 'attachmentLink' === n.type) && u.has(r.type) && (0, o.dY)(r) ? [] : e;
						})(e, (null != h ? h : t).embeds)),
					!_ &&
						(e = (function (e, t) {
							return t
								? p(e)
								: ('paragraph' === e[0].type && e[0].content instanceof Array && (e[0].content = p(e[0].content)), e);
						})(e, n)),
					(m = (function (e, t) {
						return t ? I(e) : 'paragraph' === e[0].type && e[0].content instanceof Array && I(e[0].content);
					})(
						(e = (function (e) {
							let t = e.some((e) => 'link' !== e.type || !1);
							return e.filter((e) => {
								let n = 'link' === e.type,
									i = (0, r.el)(e.target);
								return !(n && null != i && !t);
							});
						})(e)),
						n
					)),
					_ &&
						(e = (function e(t) {
							return (
								t.forEach((t) => {
									c.has(t.type) &&
										null != t.content &&
										(Array.isArray(t.content) ? e(t.content) : (t.content = t.content.replace(/\n/g, ' ')));
								}),
								t
							);
						})(e)),
					null != E && (e = E(e, n)),
					e
				)
			);
		return {
			hasSpoilerEmbeds: m,
			content: g
		};
	})(t.formatInline ? a.Z.parseInlineReply : a.Z.parse, e, t);
}
function h(e, t, n) {
	var r;
	return (
		(r = a.Z.parseAutoModerationSystemMessage),
		r(
			e,
			!0,
			{
				allowLinks: !1,
				allowDevLinks: !1,
				allowEmojiLinks: !1,
				mentionChannels: [],
				isInteracting: !1,
				formatInline: !1,
				noStyleAndInteraction: !1,
				allowHeading: !1,
				allowList: !1,
				disableAutoBlockNewlines: !0,
				highlightWord: t,
				disableAnimatedEmoji: !1,
				channelId: n,
				muted: !1
			},
			(e) => (!Array.isArray(e) && (e = [e]), e)
		)
	);
}
function p(e) {
	if (
		e.some(
			(e) =>
				'emoji' !== e.type &&
				'customEmoji' !== e.type &&
				'soundboard' !== e.type &&
				('string' != typeof e.content || '' !== e.content.trim()) &&
				!0
		)
	)
		return e;
	let t = 0;
	return (e.forEach((e) => {
		if ((('emoji' === e.type || 'customEmoji' === e.type || 'soundboard' === e.type) && (t += 1), t > 30)) return !1;
	}),
	t > 30)
		? e
		: (e.forEach((e) => {
				e.jumboable = !0;
			}),
			e);
}
function I(e) {
	return e.some(
		(e) =>
			'spoiler' === e.type &&
			Array.isArray(e.content) &&
			e.content.some((e) => 'link' === e.type || 'attachmentLink' === e.type)
	);
}

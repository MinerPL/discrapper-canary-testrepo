n(47120);
var r = n(392711),
	i = n.n(r),
	a = n(25209),
	s = n(691424),
	o = n(428595),
	l = n(364458);
let u = null;
function c(e, t) {
	let n = {};
	return null != e.mention && null != u && (n = { mention: u }), (0, l.Z)([e, ...t, n]);
}
u = n(878611).Z;
let d = {
		enableBuildOverrides: !1,
		enableEmojiClick: !0
	},
	_ = c(o.Z.RULES, [(0, s.Z)({ enableBuildOverrides: !0 })]),
	E = i().omit(c(o.Z.RULES, [(0, s.Z)(d)]), 'paragraph', 'newline'),
	f = c(o.Z.CHANNEL_TOPIC_RULES, [
		(0, s.Z)({
			...d,
			emojiTooltipPosition: 'bottom'
		}),
		{ codeBlock: { react: o.Z.RULES.text.react } }
	]),
	h = c(o.Z.VOICE_CHANNEL_STATUS_RULES, [
		(0, s.Z)({
			...d,
			enableEmojiClick: !1
		})
	]),
	p = c(o.Z.EMBED_TITLE_RULES, [(0, s.Z)(d)]),
	I = c(o.Z.INLINE_REPLY_RULES, [(0, s.Z)(d)]),
	m = c(o.Z.GUILD_VERIFICATION_FORM_RULES, [(0, s.Z)(d)]),
	T = c(o.Z.GUILD_EVENT_RULES, [(0, s.Z)(d)]),
	g = c(o.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.Z)(d)]),
	S = i().omit(
		c(o.Z.RULES, [(0, s.Z)(d)]),
		'paragraph',
		'newline',
		'strong',
		'codeBlock',
		'inlineCode',
		'u',
		'link',
		'url',
		'autolink',
		'list',
		'heading',
		'subtext'
	),
	A = { text: o.Z.RULES.text };
t.Z = {
	combineAndInjectMentionRule: c,
	createReactRules: s.Z,
	defaultReactRuleOptions: d,
	defaultRules: _,
	guildEventRules: T,
	notifCenterV2MessagePreviewRules: S,
	lockscreenWidgetMessageRules: A,
	astParserFor: a._p,
	reactParserFor: a.w4,
	parse: a.w4(_),
	parseTopic: a.w4(f),
	parseVoiceChannelStatus: a.w4(h),
	parseEmbedTitle: a.w4(p),
	parseInlineReply: a.w4(I),
	parseGuildVerificationFormRule: a.w4(m),
	parseGuildEventDescription: a.w4(T),
	parseAutoModerationSystemMessage: a.w4(g),
	parseForumPostGuidelines: a.w4(E),
	parseToAST: a._p(_),
	parseTopicToAST: a._p(f),
	parseEmbedTitleToAST: a._p(p),
	parseInlineReplyToAST: a._p(I),
	parseAutoModerationSystemMessageToAST: a._p(g)
};

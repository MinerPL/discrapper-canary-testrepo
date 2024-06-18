"use strict";
n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(25209),
  o = n(691424),
  a = n(428595),
  l = n(364458);
let u = null;

function _(e, t) {
  let n = {};
  return null != e.mention && null != u && (n = {
    mention: u
  }), (0, l.Z)([e, ...t, n])
}
u = n(878611).Z;
let d = {
    enableBuildOverrides: !1,
    enableEmojiClick: !0
  },
  c = _(a.Z.RULES, [(0, o.Z)({
    enableBuildOverrides: !0
  })]),
  E = r().omit(_(a.Z.RULES, [(0, o.Z)(d)]), "paragraph", "newline"),
  I = _(a.Z.CHANNEL_TOPIC_RULES, [(0, o.Z)({
    ...d,
    emojiTooltipPosition: "bottom"
  }), {
    codeBlock: {
      react: a.Z.RULES.text.react
    }
  }]),
  T = _(a.Z.VOICE_CHANNEL_STATUS_RULES, [(0, o.Z)({
    ...d,
    enableEmojiClick: !1
  })]),
  h = _(a.Z.EMBED_TITLE_RULES, [(0, o.Z)(d)]),
  S = _(a.Z.INLINE_REPLY_RULES, [(0, o.Z)(d)]),
  f = _(a.Z.GUILD_VERIFICATION_FORM_RULES, [(0, o.Z)(d)]),
  N = _(a.Z.GUILD_EVENT_RULES, [(0, o.Z)(d)]),
  A = _(a.Z.INLINE_REPLY_RULES, [(0, o.Z)({
    ...d,
    emoji: {
      height: 14,
      width: 14,
      lineHeight: 18
    }
  })]),
  m = _(a.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, o.Z)(d)]),
  O = r().omit(_(a.Z.RULES, [(0, o.Z)({
    ...d,
    emoji: {
      height: 14,
      width: 14
    }
  })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading", "subtext"),
  R = {
    text: a.Z.RULES.text
  };
t.Z = {
  combineAndInjectMentionRule: _,
  createReactRules: o.Z,
  defaultReactRuleOptions: d,
  defaultRules: c,
  guildEventRules: N,
  notifCenterV2MessagePreviewRules: O,
  lockscreenWidgetMessageRules: R,
  astParserFor: s._p,
  reactParserFor: s.w4,
  parse: s.w4(c),
  parseTopic: s.w4(I),
  parseVoiceChannelStatus: s.w4(T),
  parseEmbedTitle: s.w4(h),
  parseInlineReply: s.w4(S),
  parseGuildVerificationFormRule: s.w4(f),
  parseGuildEventDescription: s.w4(N),
  parseAutoModerationSystemMessage: s.w4(m),
  parseForumPostGuidelines: s.w4(E),
  parseForumPostMostRecentMessage: s.w4(A),
  parseNotifCenterMessagePreview: s.w4(O),
  parseToAST: s._p(c),
  parseTopicToAST: s._p(I),
  parseEmbedTitleToAST: s._p(h),
  parseInlineReplyToAST: s._p(S),
  parseAutoModerationSystemMessageToAST: s._p(m)
}
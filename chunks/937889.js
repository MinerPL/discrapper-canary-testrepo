"use strict";
n.d(t, {
  ZP: function() {
    return I
  },
  k$: function() {
    return T
  },
  n0: function() {
    return E
  },
  p6: function() {
    return c
  },
  rs: function() {
    return d
  }
}), n(47120), n(757143), n(865427);
var i = n(830121),
  r = n(202131),
  s = n(454585),
  o = n(55406),
  a = n(408433),
  l = n(981631);
let u = new Set([l.hBH.IMAGE, l.hBH.GIFV]),
  _ = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function d(e, t) {
  let n = c({
      channelId: e.channel_id,
      messageId: e.id,
      renderOptions: t
    }),
    i = null != e.webhookId;
  return {
    ...n,
    allowLinks: i || n.allowLinks,
    allowEmojiLinks: i,
    mentionChannels: e.mentionChannels
  }
}

function c(e) {
  let {
    channelId: t,
    messageId: n,
    renderOptions: i
  } = e;
  return {
    channelId: t,
    messageId: n,
    allowLinks: !!i.allowLinks,
    allowDevLinks: !!i.allowDevLinks,
    formatInline: !!i.formatInline,
    noStyleAndInteraction: !!i.noStyleAndInteraction,
    allowHeading: !!i.allowHeading,
    allowList: !!i.allowList,
    previewLinkTarget: !!i.previewLinkTarget,
    disableAnimatedEmoji: !!i.disableAnimatedEmoji,
    isInteracting: !!i.isInteracting,
    allowEmojiLinks: !1,
    disableAutoBlockNewlines: !0,
    mentionChannels: [],
    muted: !1,
    unknownUserMentionPlaceholder: !0,
    viewingChannelId: i.viewingChannelId
  }
}

function E(e, t, n) {
  return {
    hasSpoilerEmbeds: !1,
    content: s.Z.reactParserFor(o.Z.getDefaultRules(t))(e.content, !1, null != n ? {
      changeLog: n
    } : {})
  }
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return function(e, t, n) {
    var s;
    let {
      toAST: o = !1,
      hideSimpleEmbedContent: l = !0,
      formatInline: c = !1,
      postProcessor: E,
      shouldFilterKeywords: I,
      contentMessage: T
    } = n, f = !1, N = (null != T ? T : t).content, A = e(I ? (0, r.N)(N, {
      escapeReplacement: !0,
      messageId: t.id,
      channelId: t.channel_id,
      authorId: null === (s = t.author) || void 0 === s ? void 0 : s.id
    }) : N, !0, d(t, n), (e, n) => (!Array.isArray(e) && (e = [e]), l && (e = function(e, t) {
      if (1 !== e.length || 1 !== t.length) return e;
      let n = e[0],
        i = t[0];
      return ("link" === n.type || "attachmentLink" === n.type) && u.has(i.type) && (0, a.dY)(i) ? [] : e
    }(e, (null != T ? T : t).embeds)), !c && (e = function(e, t) {
      return t ? h(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = h(e[0].content)), e)
    }(e, n)), f = function(e, t) {
      return t ? S(e) : "paragraph" === e[0].type && e[0].content instanceof Array && S(e[0].content)
    }(e = function(e) {
      let t = e.some(e => "link" !== e.type || !1);
      return e.filter(e => {
        let n = "link" === e.type,
          r = (0, i.el)(e.target);
        return !(n && null != r && !t)
      })
    }(e), n), c && (e = function e(t) {
      return t.forEach(t => {
        _.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
      }), t
    }(e)), null != E && (e = E(e, n)), e));
    return {
      hasSpoilerEmbeds: f,
      content: A
    }
  }(t.formatInline ? s.Z.parseInlineReply : s.Z.parse, e, t)
}

function T(e, t, n) {
  var i;
  return i = s.Z.parseAutoModerationSystemMessage, i(e, !0, {
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
  }, e => (!Array.isArray(e) && (e = [e]), e))
}

function h(e) {
  if (e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0)) return e;
  let t = 0;
  return (e.forEach(e => {
    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30) return !1
  }), t > 30) ? e : (e.forEach(e => {
    e.jumboable = !0
  }), e)
}

function S(e) {
  return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
}
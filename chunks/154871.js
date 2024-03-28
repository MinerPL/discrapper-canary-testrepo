"use strict";
a.r(t), a.d(t, {
  GuildFeedConversationReply: function() {
    return v
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("481060"),
  r = a("739566"),
  u = a("453687"),
  o = a("507418"),
  c = a("348238"),
  f = a("38267"),
  m = a("25015"),
  h = a("438075"),
  g = a("113039"),
  E = a("778947"),
  _ = a("534761"),
  I = a("959517"),
  x = a("711593");

function S(e) {
  let {
    message: t,
    guildId: a,
    animateAvatar: s,
    channel: i,
    author: r
  } = e, {
    popouts: m,
    setPopout: h
  } = (0, f.default)(t.id, I.DEFAULT_POPOUTS), {
    usernameProfile: g,
    avatarProfile: S
  } = m, v = n.useMemo(() => e => (0, o.default)(e, t), [t]), C = (0, c.useContextMenuUser)(t.author.id, i.id), N = (0, c.useClickMessageAuthorUsername)(t, i, g, h), p = (0, c.useClickMessageAuthorAvatar)(S, h), T = n.useCallback(() => h({
    usernameProfile: !1,
    avatarProfile: !1,
    referencedUsernameProfile: !1
  }), [h]), A = (0, E.useAvatar)({
    props: {
      message: t,
      channel: i,
      author: r,
      guildId: a,
      compact: !0,
      displayCompactAvatars: !0,
      animate: s,
      showAvatarPopout: S,
      showUsernamePopout: g,
      onContextMenu: C,
      onClickUsername: N,
      onClickAvatar: p,
      onPopoutRequestClose: T
    },
    guildId: a,
    handleRenderPopout: v,
    className: x.avatar
  }), j = (0, E.useUsername)(e, v), M = (0, u.getMessageUsernameId)(t), D = (0, u.getMessageTimestampId)(t), F = "".concat(M, " ").concat(D), L = (0, u.getMessageReplyId)(t);
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)(d.H, {
      className: x.__invalid_header,
      "aria-describedby": L,
      "aria-labelledby": F,
      children: [A, (0, l.jsx)("span", {
        id: (0, u.getMessageUsernameId)(t),
        className: x.__invalid_username,
        children: (0, l.jsx)(l.Fragment, {
          children: j
        })
      }), (0, l.jsx)(_.default, {
        id: (0, u.getMessageTimestampId)(t),
        timestamp: t.timestamp,
        className: x.timestamp
      })]
    })
  })
}
let v = n.forwardRef(function(e, t) {
  let {
    message: a,
    className: s,
    onMessageClick: u,
    children: o,
    isTruncated: c,
    channel: f,
    guildId: E,
    animateAvatar: _
  } = e, I = n.useRef(null), {
    content: v,
    hasSpoilerEmbeds: C
  } = (0, m.default)(a, {
    hideSimpleEmbedContent: !0
  }), N = (0, r.default)(a), p = n.useCallback(e => {
    u(e, I.current, a)
  }, [u, a]);
  return (0, l.jsxs)("div", {
    ref: I,
    className: s,
    onClick: p,
    role: "article",
    children: [(0, l.jsx)(d.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, l.jsxs)("div", {
        children: [(0, l.jsxs)("div", {
          children: [(0, l.jsx)(S, {
            author: N,
            message: a,
            channel: f,
            guildId: E,
            animateAvatar: _
          }), (0, l.jsx)(g.default, {
            className: i()(x.messageContent, {
              [x.truncatedReply]: c
            }),
            message: a,
            content: v,
            contentRef: t
          })]
        }), (0, h.default)({
          className: x.accessories,
          channelMessageProps: e,
          hasSpoilerEmbeds: C,
          isInteracting: !1
        })]
      })
    }), o]
  })
})
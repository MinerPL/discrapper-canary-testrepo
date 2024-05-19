"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  },
  renderSingleLineMessage: function() {
    return w
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("913527"),
  l = n.n(o),
  u = n("304497"),
  d = n("481060"),
  _ = n("100527"),
  c = n("906732"),
  E = n("372900"),
  I = n("453687"),
  T = n("123145"),
  f = n("223021"),
  S = n("79390"),
  h = n("869765"),
  A = n("403132"),
  m = n("378233"),
  N = n("377617"),
  p = n("84017"),
  O = n("748500"),
  C = n("836879"),
  R = n("191741"),
  g = n("768581"),
  L = n("55935"),
  v = n("823379"),
  D = n("113039"),
  M = n("768760"),
  y = n("981631"),
  P = n("689938"),
  U = n("822545");

function b(e) {
  let {
    width: t = 12,
    height: n = 8,
    color: r = "currentColor",
    className: a,
    foreground: s
  } = e;
  return (0, i.jsx)("svg", {
    className: a,
    width: t,
    height: n,
    viewBox: "0 0 12 8",
    children: (0, i.jsx)("path", {
      d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
      className: s,
      fill: r
    })
  })
}

function G(e) {
  let {
    width: t = 18,
    height: n = 18,
    className: r,
    foreground: a
  } = e;
  return (0, i.jsx)("svg", {
    className: r,
    width: t,
    height: n,
    viewBox: "0 0 18 18",
    children: (0, i.jsx)("path", {
      fill: "#3ba55c",
      d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
      className: a
    })
  })
}

function w(e, t, n, r, a) {
  let s, o, l;
  let {
    iconClass: d,
    iconSize: _
  } = a, c = null == t || "" === t || Array.isArray(t) && 0 === t.length, E = (0, m.getMessageStickers)(e).length > 0, I = null != e.interaction, T = e.hasFlag(y.MessageFlags.IS_VOICE_MESSAGE), f = e.isPoll(), h = e.type === y.MessageTypes.POLL_RESULT;
  if (n) s = P.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
  else if (e.type === y.MessageTypes.CHANNEL_PINNED_MESSAGE) s = P.default.Messages.MESSAGE_PINNED;
  else if (c) {
    if (f) {
      var A, R;
      o = null == e ? void 0 : null === (R = e.poll) || void 0 === R ? void 0 : null === (A = R.question) || void 0 === A ? void 0 : A.text
    } else h ? s = (0, S.getPollResultsReplyPreview)(e) : E ? s = P.default.Messages.REPLY_QUOTE_STICKER : I ? s = P.default.Messages.REPLY_QUOTE_COMMAND : T ? s = P.default.Messages.REPLY_QUOTE_VOICE_MESSAGE : (s = P.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, l = (0, i.jsx)(p.default, {
      className: d,
      width: _,
      height: _
    }))
  } else o = (0, i.jsx)(D.default, {
    message: e,
    content: t,
    className: r
  });
  return E ? l = (0, i.jsx)(C.default, {
    className: d,
    width: _,
    height: _
  }) : I ? l = (0, i.jsx)(N.default, {
    className: d,
    width: _,
    height: _
  }) : T ? l = (0, i.jsx)(O.default, {
    className: d,
    width: 19 / 24 * _,
    height: _
  }) : h ? l = (0, i.jsx)(u.PollsIcon, {
    className: d,
    width: _,
    height: _
  }) : (e.attachments.length > 0 || e.embeds.length > 0) && (l = (0, i.jsx)(p.default, {
    className: d,
    width: _,
    height: _
  })), {
    contentPlaceholder: s,
    renderedContent: o,
    icon: l
  }
}

function k(e) {
  let t;
  let {
    repliedAuthor: n,
    baseAuthor: a,
    baseMessage: o,
    referencedMessage: u,
    renderPopout: S
  } = e, m = r.useMemo(() => null != S && u.state === h.ReferencedMessageState.LOADED ? e => S(e, u.message) : void 0, [u, S]), N = function(e, t, n) {
    let {
      referencedMessage: r,
      compact: a,
      isReplyAuthorBlocked: o,
      repliedAuthor: l,
      showAvatarPopout: u,
      onClickAvatar: E,
      onContextMenu: I,
      onPopoutRequestClose: T
    } = e, {
      analyticsLocations: f
    } = (0, c.default)(_.default.AVATAR);
    if (a || r.state !== h.ReferencedMessageState.LOADED || o) return (0, i.jsx)("div", {
      className: U.replyBadge,
      children: (0, i.jsx)(b, {
        className: U.replyIcon
      })
    });
    if (r.message.type === y.MessageTypes.USER_JOIN || r.message.type === y.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || r.message.type === y.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || r.message.type === y.MessageTypes.GUILD_GAMING_STATS_PROMPT) return (0, i.jsx)(G, {
      className: U.userJoinSystemMessageIcon
    });
    if (r.message.type === y.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.jsx)(R.default, {
      className: U.ticketIcon
    });
    let S = () => {
      var e, n, a, o, u;
      return e = r.message.author, n = l, a = t, o = E, u = I, (0, i.jsx)("img", {
        alt: "",
        src: (null == n ? void 0 : n.guildMemberAvatar) != null && null != a ? (0, g.getGuildMemberAvatarURLSimple)({
          guildId: a,
          userId: e.id,
          avatar: n.guildMemberAvatar
        }) : e.getAvatarURL(a, 16),
        onClick: o,
        onContextMenu: u,
        className: s()({
          [U.replyAvatar]: !0,
          [U.clickable]: null != o
        })
      })
    };
    return null != n && null != u ? (0, i.jsx)(c.AnalyticsLocationProvider, {
      value: f,
      children: (0, i.jsx)(d.Popout, {
        renderPopout: n,
        shouldShow: u,
        position: "right",
        onRequestClose: T,
        children: S
      })
    }) : (0, i.jsx)(c.AnalyticsLocationProvider, {
      value: f,
      children: S()
    })
  }(e, r.useContext(E.default), m), p = function(e, t) {
    let {
      baseMessage: n,
      channel: r,
      referencedMessage: a,
      showUsernamePopout: s,
      onClickUsername: o,
      onContextMenu: l,
      onPopoutRequestClose: u
    } = e, d = (null == a ? void 0 : a.state) === h.ReferencedMessageState.LOADED ? a.message : void 0;
    return null == d || d.type === y.MessageTypes.USER_JOIN || d.type === y.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE || d.type === y.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || d.type === y.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT || d.type === y.MessageTypes.GUILD_GAMING_STATS_PROMPT ? null : (0, i.jsx)(T.default, {
      message: d,
      channel: r,
      compact: !0,
      withMentionPrefix: (0, A.default)(n, d),
      showPopout: s,
      renderPopout: t,
      onClick: o,
      onContextMenu: l,
      onPopoutRequestClose: u,
      isRepliedMessage: !0
    })
  }(e, m), O = function(e) {
    let {
      content: t,
      referencedMessage: n,
      isReplyAuthorBlocked: r
    } = e, a = n.state !== h.ReferencedMessageState.DELETED ? e.onClickReply : void 0;
    switch (n.state) {
      case h.ReferencedMessageState.LOADED: {
        let {
          contentPlaceholder: e,
          renderedContent: o,
          icon: l
        } = w(n.message, t, r, U.repliedTextContent, {
          iconClass: U.repliedTextContentIcon,
          iconSize: M.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Clickable, {
            className: s()(U.repliedTextPreview, U.clickable),
            onClick: a,
            children: (0, i.jsx)(d.BlockInteractions, {
              children: null != o ? o : (0, i.jsx)("span", {
                className: U.repliedTextPlaceholder,
                children: e
              })
            })
          }), l]
        })
      }
      case h.ReferencedMessageState.NOT_LOADED:
        return (0, i.jsx)(d.Clickable, {
          className: s()(U.repliedTextPreview, U.clickable),
          onClick: a,
          children: (0, i.jsx)("span", {
            className: U.repliedTextPlaceholder,
            children: P.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
          })
        });
      case h.ReferencedMessageState.DELETED:
        return (0, i.jsx)("div", {
          className: U.repliedTextPreview,
          children: (0, i.jsx)("span", {
            className: U.repliedTextPlaceholder,
            children: P.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
          })
        });
      default:
        (0, v.assertNever)(n)
    }
  }(e), C = r.useMemo(() => e.compact ? (0, f.default)((0, L.dateFormat)(l()(), "LT")) : null, [e.compact]);
  return null != n && null != a && (t = P.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
    author: null == a ? void 0 : a.nick,
    repliedAuthor: null == n ? void 0 : n.nick
  })), (0, i.jsxs)("div", {
    id: (0, I.getMessageReplyId)(o),
    className: s()(U.repliedMessage, C),
    "aria-label": t,
    children: [N, p, O]
  })
}
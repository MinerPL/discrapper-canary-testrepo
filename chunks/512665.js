"use strict";
n.d(t, {
  Z: function() {
    return V
  },
  f: function() {
    return x
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(913527),
  l = n.n(a),
  u = n(255025),
  _ = n(304497),
  d = n(481060),
  c = n(100527),
  E = n(906732),
  I = n(978003),
  T = n(39154),
  h = n(372900),
  S = n(453687),
  f = n(123145),
  N = n(223021),
  A = n(79390),
  m = n(869765),
  O = n(403132),
  R = n(378233),
  C = n(377617),
  p = n(84017),
  g = n(748500),
  L = n(836879),
  v = n(191741),
  D = n(768581),
  M = n(55935),
  P = n(823379),
  y = n(113039),
  U = n(768760),
  b = n(981631),
  G = n(689938),
  w = n(822545);

function k(e) {
  let {
    width: t = 12,
    height: n = 8,
    color: r = "currentColor",
    className: s,
    foreground: o
  } = e;
  return (0, i.jsx)("svg", {
    className: s,
    width: t,
    height: n,
    viewBox: "0 0 12 8",
    children: (0, i.jsx)("path", {
      d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
      className: o,
      fill: r
    })
  })
}

function B(e) {
  let {
    width: t = 18,
    height: n = 18,
    className: r,
    foreground: s
  } = e;
  return (0, i.jsx)("svg", {
    className: r,
    width: t,
    height: n,
    viewBox: "0 0 18 18",
    children: (0, i.jsx)("path", {
      fill: "#3ba55c",
      d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
      className: s
    })
  })
}

function x(e, t, n, r, s) {
  let o, a, l, _;
  let d = (0, T.Z)(e),
    {
      trailingIconClass: c,
      leadingIconClass: E,
      iconSize: h
    } = s,
    S = null == t || "" === t || Array.isArray(t) && 0 === t.length,
    f = (0, R.cv)(d).length > 0,
    N = null != d.interaction,
    m = d.hasFlag(b.iLy.IS_VOICE_MESSAGE),
    O = d.isPoll(),
    v = d.type === b.uaV.POLL_RESULT;
  if ((0, I.Z)(e) && (_ = (0, i.jsx)(u.a, {
      className: E,
      width: h,
      height: h
    })), n) o = G.Z.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
  else if (d.type === b.uaV.CHANNEL_PINNED_MESSAGE) o = G.Z.Messages.MESSAGE_PINNED;
  else if (S) {
    if (O) {
      var D, M;
      a = null == d ? void 0 : null === (M = d.poll) || void 0 === M ? void 0 : null === (D = M.question) || void 0 === D ? void 0 : D.text
    } else v ? o = (0, A.N4)(d) : f ? o = G.Z.Messages.REPLY_QUOTE_STICKER : N ? o = G.Z.Messages.REPLY_QUOTE_COMMAND : m ? o = G.Z.Messages.REPLY_QUOTE_VOICE_MESSAGE : (o = G.Z.Messages.REPLY_QUOTE_NO_TEXT_CONTENT, l = (0, i.jsx)(p.Z, {
      className: c,
      width: h,
      height: h
    }))
  } else a = (0, i.jsx)(y.ZP, {
    message: d,
    content: t,
    className: r
  });
  return f ? l = (0, i.jsx)(L.Z, {
    className: c,
    width: h,
    height: h
  }) : N ? l = (0, i.jsx)(C.Z, {
    className: c,
    width: h,
    height: h
  }) : m ? l = (0, i.jsx)(g.Z, {
    className: c,
    width: 19 / 24 * h,
    height: h
  }) : (d.attachments.length > 0 || d.embeds.length > 0) && !v && (l = (0, i.jsx)(p.Z, {
    className: c,
    width: h,
    height: h
  })), {
    contentPlaceholder: o,
    renderedContent: a,
    trailingIcon: l,
    leadingIcon: _
  }
}

function V(e) {
  let t;
  let {
    repliedAuthor: n,
    baseAuthor: s,
    baseMessage: a,
    referencedMessage: u,
    renderPopout: I
  } = e, T = r.useMemo(() => null != I && u.state === m.Y.LOADED ? e => I(e, u.message) : void 0, [u, I]), A = function(e, t, n) {
    let {
      referencedMessage: r,
      compact: s,
      isReplyAuthorBlocked: a,
      repliedAuthor: l,
      showAvatarPopout: u,
      onClickAvatar: I,
      onContextMenu: T,
      onPopoutRequestClose: h
    } = e, {
      analyticsLocations: S
    } = (0, E.ZP)(c.Z.AVATAR);
    if (s || r.state !== m.Y.LOADED || a) return (0, i.jsx)("div", {
      className: w.replyBadge,
      children: (0, i.jsx)(k, {
        className: w.replyIcon
      })
    });
    if (r.message.type === b.uaV.USER_JOIN || r.message.type === b.uaV.ROLE_SUBSCRIPTION_PURCHASE || r.message.type === b.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || r.message.type === b.uaV.GUILD_GAMING_STATS_PROMPT) return (0, i.jsx)(B, {
      className: w.userJoinSystemMessageIcon
    });
    if (r.message.type === b.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.jsx)(v.Z, {
      className: w.ticketIcon
    });
    if (r.message.type === b.uaV.POLL_RESULT) return (0, i.jsx)(_.Q, {
      className: w.repliedTextContentLeadingIcon,
      width: U.WW,
      height: U.WW
    });
    let f = () => {
      var e, n, s, a, u;
      return e = r.message.author, n = l, s = t, a = I, u = T, (0, i.jsx)("img", {
        alt: "",
        src: (null == n ? void 0 : n.guildMemberAvatar) != null && null != s ? (0, D.JM)({
          guildId: s,
          userId: e.id,
          avatar: n.guildMemberAvatar
        }) : e.getAvatarURL(s, 16),
        onClick: a,
        onContextMenu: u,
        className: o()({
          [w.replyAvatar]: !0,
          [w.clickable]: null != a
        })
      })
    };
    return null != n && null != u ? (0, i.jsx)(E.Gt, {
      value: S,
      children: (0, i.jsx)(d.Popout, {
        renderPopout: n,
        shouldShow: u,
        position: "right",
        onRequestClose: h,
        children: f
      })
    }) : (0, i.jsx)(E.Gt, {
      value: S,
      children: f()
    })
  }(e, r.useContext(h.Z), T), R = function(e, t) {
    let {
      baseMessage: n,
      channel: r,
      referencedMessage: s,
      showUsernamePopout: o,
      onClickUsername: a,
      onContextMenu: l,
      onPopoutRequestClose: u
    } = e, _ = (null == s ? void 0 : s.state) === m.Y.LOADED ? s.message : void 0;
    return null == _ || _.type === b.uaV.USER_JOIN || _.type === b.uaV.ROLE_SUBSCRIPTION_PURCHASE || _.type === b.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || _.type === b.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || _.type === b.uaV.GUILD_GAMING_STATS_PROMPT || _.type === b.uaV.POLL_RESULT ? null : (0, i.jsx)(f.Z, {
      message: _,
      channel: r,
      compact: !0,
      withMentionPrefix: (0, O.Z)(n, _),
      showPopout: o,
      renderPopout: t,
      onClick: a,
      onContextMenu: l,
      onPopoutRequestClose: u,
      isRepliedMessage: !0
    })
  }(e, T), C = function(e) {
    let {
      content: t,
      referencedMessage: n,
      isReplyAuthorBlocked: r
    } = e, s = n.state !== m.Y.DELETED ? e.onClickReply : void 0;
    switch (n.state) {
      case m.Y.LOADED: {
        let {
          contentPlaceholder: e,
          renderedContent: a,
          trailingIcon: l,
          leadingIcon: u
        } = x(n.message, t, r, w.repliedTextContent, {
          trailingIconClass: w.repliedTextContentTrailingIcon,
          leadingIconClass: w.repliedTextContentLeadingIcon,
          iconSize: U.WW
        });
        return (0, i.jsxs)(i.Fragment, {
          children: [u, (0, i.jsx)(d.Clickable, {
            className: o()(w.repliedTextPreview, w.clickable),
            onClick: s,
            children: (0, i.jsx)(d.BlockInteractions, {
              children: null != a ? a : (0, i.jsx)("span", {
                className: w.repliedTextPlaceholder,
                children: e
              })
            })
          }), l]
        })
      }
      case m.Y.NOT_LOADED:
        return (0, i.jsx)(d.Clickable, {
          className: o()(w.repliedTextPreview, w.clickable),
          onClick: s,
          children: (0, i.jsx)("span", {
            className: w.repliedTextPlaceholder,
            children: G.Z.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
          })
        });
      case m.Y.DELETED:
        return (0, i.jsx)("div", {
          className: w.repliedTextPreview,
          children: (0, i.jsx)("span", {
            className: w.repliedTextPlaceholder,
            children: G.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
          })
        });
      default:
        (0, P.vE)(n)
    }
  }(e), p = r.useMemo(() => e.compact ? (0, N.Z)((0, M.vc)(l()(), "LT")) : null, [e.compact]);
  return null != n && null != s && (t = G.Z.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
    author: null == s ? void 0 : s.nick,
    repliedAuthor: null == n ? void 0 : n.nick
  })), (0, i.jsxs)("div", {
    id: (0, S.Gq)(a),
    className: o()(w.repliedMessage, p),
    "aria-label": t,
    children: [A, R, C]
  })
}
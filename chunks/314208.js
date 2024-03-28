"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
});
var s = a("735250"),
  l = a("470079"),
  r = a("442837"),
  n = a("481060"),
  u = a("99690"),
  d = a("58540"),
  i = a("995123"),
  o = a("937889"),
  c = a("739566"),
  f = a("271383"),
  h = a("306680"),
  m = a("699516"),
  T = a("594174"),
  g = a("934458"),
  C = a("512665"),
  E = a("709054"),
  S = a("51144"),
  v = a("144140"),
  x = a("91159"),
  N = a("768760"),
  _ = a("689938"),
  R = a("45721");

function M(e) {
  return e.isActiveThread() ? (0, s.jsx)(H, {
    channel: e
  }) : (0, s.jsx)(p, {
    channel: e
  })
}

function H(e) {
  let {
    channel: t
  } = e, a = (0, r.useStateFromStores)([v.default], () => v.default.getMostRecentMessage(t.id));
  return null == a ? (0, s.jsx)(A, {
    channel: t
  }) : (0, s.jsx)(j, {
    channel: t,
    message: a
  })
}

function A(e) {
  let {
    channel: t
  } = e, a = (0, x.useLastMessageTimestamp)(t);
  return (0, s.jsxs)(n.Text, {
    className: R.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [_.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, x.getTimestampString)(a)]
  })
}

function j(e) {
  let {
    channel: t,
    message: a
  } = e;
  (0, d.useSubscribeGuildMembers)({
    [t.guild_id]: [a.author.id]
  });
  let i = (0, r.useStateFromStores)([T.default], () => {
      var e;
      return null !== (e = T.default.getUser(a.author.id)) && void 0 !== e ? e : a.author
    }),
    {
      nick: f,
      colorString: h
    } = (0, c.default)(a),
    g = (0, r.useStateFromStores)([m.default], () => m.default.isBlocked(a.author.id)),
    S = l.useMemo(() => {
      let e = null != a.content && "" !== a.content ? (0, o.default)(a, {
          formatInline: !0
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: l,
          icon: r
        } = (0, C.renderSingleLineMessage)(a, e, g, R.messageContent, {
          iconClass: R.messageContentIcon,
          iconSize: N.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
      return (0, s.jsxs)(s.Fragment, {
        children: [null != l ? l : (0, s.jsx)("span", {
          children: t
        }), r]
      })
    }, [a, g]);
  return (0, s.jsxs)(n.Text, {
    className: R.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, s.jsx)(u.default, {
      className: R.avatar,
      user: i,
      size: n.AvatarSizes.SIZE_16
    }), (0, s.jsx)(n.NameWithRole, {
      name: f,
      color: h,
      className: R.authorName
    }), ":\xa0", S, "\xa0 • \xa0", (0, x.getTimestampString)(E.default.extractTimestamp(a.id))]
  })
}

function p(e) {
  var t, a, l;
  let {
    channel: o
  } = e, c = (0, r.useStateFromStores)([h.default], () => h.default.lastMessageId(o.id)), m = null == c ? new Date(null !== (a = null === (t = o.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== a ? a : Date.now()).getTime() : E.default.extractTimestamp(c);
  (0, d.useSubscribeGuildMembers)({
    [o.guild_id]: [o.ownerId]
  });
  let C = (0, r.useStateFromStores)([T.default], () => T.default.getUser(o.ownerId)),
    v = (0, r.useStateFromStores)([f.default], () => f.default.getMember(o.guild_id, o.ownerId)),
    N = null !== (l = (0, i.default)(o)) && void 0 !== l ? l : g.default;
  return (0, s.jsx)(n.Text, {
    className: R.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == C ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: R.noAvatarIcon,
        children: (0, s.jsx)(N, {
          width: 10,
          height: 10
        })
      }), _.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, x.getTimestampString)(m)
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(u.default, {
        className: R.avatar,
        user: C,
        size: n.AvatarSizes.SIZE_16
      }), _.default.Messages.THREAD_BROWSER_STARTED_BY.format({
        authorHook(e, t) {
          var a, l;
          return (0, s.jsx)(n.NameWithRole, {
            className: R.startedByName,
            color: null !== (a = null == v ? void 0 : v.colorString) && void 0 !== a ? a : void 0,
            name: null !== (l = null == v ? void 0 : v.nick) && void 0 !== l ? l : S.default.getName(C)
          }, t)
        }
      }), (0, s.jsx)("span", {
        className: R.bullet,
        children: "•"
      }), _.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, x.getTimestampString)(m)
      })]
    })
  })
}
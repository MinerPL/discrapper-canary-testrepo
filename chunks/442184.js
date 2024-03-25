"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var l = n("37983"),
  a = n("884691"),
  r = n("446674"),
  s = n("77078"),
  i = n("308289"),
  u = n("750560"),
  o = n("619335"),
  d = n("95045"),
  c = n("574073"),
  f = n("26989"),
  C = n("660478"),
  h = n("27618"),
  m = n("697218"),
  v = n("959097"),
  p = n("93427"),
  g = n("299039"),
  x = n("158998"),
  N = n("610730"),
  S = n("487269"),
  T = n("719347"),
  M = n("782340"),
  E = n("963906");

function L(e) {
  return e.isActiveThread() ? (0, l.jsx)(j, {
    channel: e
  }) : (0, l.jsx)(R, {
    channel: e
  })
}

function j(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([N.default], () => N.default.getMostRecentMessage(t.id));
  return null == n ? (0, l.jsx)(I, {
    channel: t
  }) : (0, l.jsx)(y, {
    channel: t,
    message: n
  })
}

function I(e) {
  let {
    channel: t
  } = e, n = (0, S.useLastMessageTimestamp)(t);
  return (0, l.jsxs)(s.Text, {
    className: E.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [M.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, S.getTimestampString)(n)]
  })
}

function y(e) {
  let {
    channel: t,
    message: n
  } = e;
  (0, u.useSubscribeGuildMembers)({
    [t.guild_id]: [n.author.id]
  });
  let o = (0, r.useStateFromStores)([m.default], () => {
      var e;
      return null !== (e = m.default.getUser(n.author.id)) && void 0 !== e ? e : n.author
    }),
    {
      nick: f,
      colorString: C
    } = (0, c.default)(n),
    v = (0, r.useStateFromStores)([h.default], () => h.default.isBlocked(n.author.id)),
    x = a.useMemo(() => {
      let e = null != n.content && "" !== n.content ? (0, d.default)(n, {
          formatInline: !0
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: a,
          icon: r
        } = (0, p.renderSingleLineMessage)(n, e, v, E.messageContent, {
          iconClass: E.messageContentIcon,
          iconSize: T.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
      return (0, l.jsxs)(l.Fragment, {
        children: [null != a ? a : (0, l.jsx)("span", {
          children: t
        }), r]
      })
    }, [n, v]);
  return (0, l.jsxs)(s.Text, {
    className: E.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, l.jsx)(i.default, {
      className: E.avatar,
      user: o,
      size: s.AvatarSizes.SIZE_16
    }), (0, l.jsx)(s.NameWithRole, {
      name: f,
      color: C,
      className: E.authorName
    }), ":\xa0", x, "\xa0 • \xa0", (0, S.getTimestampString)(g.default.extractTimestamp(n.id))]
  })
}

function R(e) {
  var t, n, a;
  let {
    channel: d
  } = e, c = (0, r.useStateFromStores)([C.default], () => C.default.lastMessageId(d.id)), h = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : g.default.extractTimestamp(c);
  (0, u.useSubscribeGuildMembers)({
    [d.guild_id]: [d.ownerId]
  });
  let p = (0, r.useStateFromStores)([m.default], () => m.default.getUser(d.ownerId)),
    N = (0, r.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
    T = null !== (a = (0, o.default)(d)) && void 0 !== a ? a : v.default;
  return (0, l.jsx)(s.Text, {
    className: E.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == p ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: E.noAvatarIcon,
        children: (0, l.jsx)(T, {
          width: 10,
          height: 10
        })
      }), M.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, S.getTimestampString)(h)
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.default, {
        className: E.avatar,
        user: p,
        size: s.AvatarSizes.SIZE_16
      }), M.default.Messages.THREAD_BROWSER_STARTED_BY.format({
        authorHook(e, t) {
          var n, a;
          return (0, l.jsx)(s.NameWithRole, {
            className: E.startedByName,
            color: null !== (n = null == N ? void 0 : N.colorString) && void 0 !== n ? n : void 0,
            name: null !== (a = null == N ? void 0 : N.nick) && void 0 !== a ? a : x.default.getName(p)
          }, t)
        }
      }), (0, l.jsx)("span", {
        className: E.bullet,
        children: "•"
      }), M.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, S.getTimestampString)(h)
      })]
    })
  })
}
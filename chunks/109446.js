"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("99690"),
  d = n("359110"),
  c = n("601070"),
  f = n("91159"),
  h = n("488131"),
  m = n("496675"),
  C = n("306680"),
  p = n("594174"),
  g = n("768581"),
  E = n("709054"),
  _ = n("981631"),
  S = n("124368"),
  I = n("689938"),
  N = n("97600");

function T(e) {
  let {
    channel: t
  } = e, s = (0, r.useStateFromStoresArray)([c.default, C.default, m.default], () => {
    let e = c.default.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
    return i()(c.default.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(i().values(c.default.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && m.default.can(_.Permissions.VIEW_CHANNEL, t)).sort((e, t) => {
      let n = C.default.lastMessageId(e.id),
        l = C.default.lastMessageId(t.id);
      return E.default.compare(n, l)
    }).reverse().value()
  }), u = t.isForumLikeChannel() ? 5 : 3;
  return a.useEffect(() => {
    (0, f.trackActiveThreadsPopoutOpened)()
  }, []), (0, l.jsxs)("div", {
    className: N.popout,
    children: [(0, l.jsx)(o.Text, {
      className: N.title,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: t.isForumLikeChannel() ? I.default.Messages.ACTIVE_THREADS_POPOUT_HEADER_FORUM : I.default.Messages.ACTIVE_THREADS_POPOUT_HEADER
    }), s.slice(0, t.isForumLikeChannel() ? s.length : u).map(e => (0, l.jsx)(A, {
      thread: e
    }, e.id)).filter(e => a.isValidElement(e)).slice(0, u), (0, l.jsx)(o.Clickable, {
      className: N.more,
      onClick: () => {
        t.isForumLikeChannel() ? (0, d.transitionToChannel)(t.id) : (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("34424")]).then(n.bind(n, "223901"));
          return n => (0, l.jsx)(e, {
            channel: t,
            ...n
          })
        })
      },
      children: (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: I.default.Messages.ACTIVE_THREADS_POPOUT_LINK
      })
    })]
  })
}

function A(e) {
  let {
    thread: t
  } = e, n = (0, r.useStateFromStores)([p.default], () => p.default.getUser(t.ownerId)), a = (0, f.useLastMessageTimestamp)(t);
  return (0, l.jsxs)(o.Clickable, {
    className: N.row,
    onClick: e => {
      (0, h.openThreadSidebarForViewing)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, S.OpenThreadAnalyticsLocations.POPOUT)
    },
    children: [null == n ? (0, l.jsx)("img", {
      className: N.avatar,
      src: g.default.getDefaultAvatarURL(void 0, void 0),
      alt: ""
    }) : (0, l.jsx)(u.default, {
      className: N.avatar,
      user: n,
      size: o.AvatarSizes.SIZE_16
    }), (0, l.jsx)(o.Text, {
      className: N.name,
      variant: "text-sm/normal",
      color: "none",
      children: t.name
    }), (0, l.jsxs)(o.Text, {
      className: N.timestamp,
      variant: "text-sm/normal",
      color: "none",
      children: [(0, l.jsx)("span", {
        className: N.bullet,
        children: "•"
      }), (0, f.getTimestampString)(a)]
    })]
  })
}
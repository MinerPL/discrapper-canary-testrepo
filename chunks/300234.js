"use strict";
a.r(t);
var s = a("735250"),
  l = a("470079"),
  r = a("442837"),
  n = a("481060"),
  u = a("239091"),
  d = a("592125"),
  i = a("720202"),
  o = a("594174"),
  c = a("602623"),
  f = a("260483"),
  h = a("314208"),
  m = a("124368"),
  T = a("45721");

function g(e) {
  let {
    channel: t
  } = e, a = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
  }), n = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
  }), u = (0, r.useStateFromStoresArray)([o.default], () => a.map(e => o.default.getUser(e)));
  return (l.useEffect(() => {
    a.filter((e, t) => null == u[t]).forEach(e => {
      i.default.requestMember(t.guild_id, e)
    })
  }, []), 0 === a.length) ? null : (0, s.jsx)(c.default, {
    className: T.facepile,
    showDefaultAvatarsForNullUsers: !0,
    guildId: t.guild_id,
    users: u,
    count: n,
    max: m.MAX_THREAD_MEMBERS_PREVIEW
  })
}
t.default = l.memo(function(e) {
  let {
    threadId: t,
    goToThread: l,
    showChannelName: i
  } = e, o = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(t)), c = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(o.parent_id));
  return (0, s.jsxs)(n.Clickable, {
    className: T.container,
    onClick: e => l(o, e.shiftKey),
    onContextMenu: e => (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("39285"), a.e("53466"), a.e("40157")]).then(a.bind(a, "422200"));
      return t => (0, s.jsx)(e, {
        ...t,
        channel: o
      })
    }),
    children: [(0, s.jsxs)("div", {
      className: T.left,
      children: [(0, s.jsxs)(n.Heading, {
        className: T.threadNameLine,
        variant: "heading-md/semibold",
        children: [(0, s.jsx)("span", {
          className: T.threadName,
          children: o.name
        }), i && null != c ? (0, s.jsx)("span", {
          className: T.parentName,
          children: "#".concat(c.name)
        }) : null]
      }), (0, h.default)(o)]
    }), (0, s.jsx)(g, {
      channel: o
    })]
  })
})
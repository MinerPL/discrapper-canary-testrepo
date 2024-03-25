"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("37983"),
  a = n("884691"),
  r = n("446674"),
  s = n("77078"),
  i = n("272030"),
  u = n("42203"),
  o = n("124948"),
  d = n("697218"),
  c = n("811305"),
  f = n("800843"),
  C = n("442184"),
  h = n("648564"),
  m = n("963906"),
  v = a.memo(function(e) {
    let {
      threadId: t,
      goToThread: a,
      showChannelName: o
    } = e, d = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
    return (0, l.jsxs)(s.Clickable, {
      className: m.container,
      onClick: e => a(d, e.shiftKey),
      onContextMenu: e => (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("994827").then(n.bind(n, "994827"));
        return t => (0, l.jsx)(e, {
          ...t,
          channel: d
        })
      }),
      children: [(0, l.jsxs)("div", {
        className: m.left,
        children: [(0, l.jsxs)(s.Heading, {
          className: m.threadNameLine,
          variant: "heading-md/semibold",
          children: [(0, l.jsx)("span", {
            className: m.threadName,
            children: d.name
          }), o && null != c ? (0, l.jsx)("span", {
            className: m.parentName,
            children: "#".concat(c.name)
          }) : null]
        }), (0, C.default)(d)]
      }), (0, l.jsx)(p, {
        channel: d
      })]
    })
  });

function p(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
  }), s = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
  }), i = (0, r.useStateFromStoresArray)([d.default], () => n.map(e => d.default.getUser(e)));
  return (a.useEffect(() => {
    n.filter((e, t) => null == i[t]).forEach(e => {
      o.default.requestMember(t.guild_id, e)
    })
  }, []), 0 === n.length) ? null : (0, l.jsx)(c.default, {
    className: m.facepile,
    showDefaultAvatarsForNullUsers: !0,
    guildId: t.guild_id,
    users: i,
    count: s,
    max: h.MAX_THREAD_MEMBERS_PREVIEW
  })
}
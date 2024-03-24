"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var a = n("974667"),
  s = n("446674"),
  i = n("151426"),
  r = n("77078"),
  o = n("272030"),
  u = n("10641"),
  d = n("534222"),
  c = n("660478"),
  f = n("282109"),
  h = n("943232"),
  C = n("956089"),
  p = n("708402"),
  m = n("133335"),
  E = n("782340"),
  g = n("39776");

function I(e) {
  let {
    selected: t,
    showUnread: n,
    onClick: s,
    onContextMenu: i,
    eventsMuted: r,
    rowLabel: o,
    mentionCount: u,
    guildId: d
  } = e, c = (0, a.useListItem)("upcoming-events-".concat(d));
  return (0, l.jsx)(p.default, {
    ...c,
    renderIcon: e => (0, l.jsx)(h.default, {
      className: e
    }),
    text: o,
    selected: t,
    onClick: s,
    onContextMenu: i,
    showUnread: n,
    badge: !r && u > 0 ? (0, l.jsx)(C.NumberBadge, {
      className: g.numberBadge,
      disableColor: !0,
      count: u
    }) : null
  })
}

function S(e) {
  let {
    guild: t,
    selected: a
  } = e, {
    hasUnread: h,
    mentionCount: C
  } = (0, s.useStateFromStoresObject)([c.default], () => ({
    hasUnread: c.default.hasUnread(t.id, m.ReadStateTypes.GUILD_EVENT),
    mentionCount: c.default.getMentionCount(t.id, m.ReadStateTypes.GUILD_EVENT)
  }), [t.id]), p = (0, s.useStateFromStores)([f.default], () => f.default.isMuteScheduledEventsEnabled(t.id));
  async function g() {
    await (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("659707").then(n.bind(n, "659707"));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t.id
      })
    }), (0, u.markDismissibleContentAsDismissed)(i.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)
  }
  let S = (0, d.default)(t.id),
    _ = S.length > 0 ? E.default.Messages.GUILD_EVENTS_PLURAL.format({
      number: S.length
    }) : E.default.Messages.GUILD_EVENTS;
  return (0, l.jsx)(I, {
    selected: a,
    showUnread: h && !p,
    onClick: g,
    onContextMenu: e => {
      (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("213528").then(n.bind(n, "213528"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildId: t.id
        })
      })
    },
    eventsMuted: p,
    rowLabel: _,
    mentionCount: C,
    guildId: t.id
  })
}
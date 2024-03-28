"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("735250");
n("470079");
var a = n("924826"),
  s = n("442837"),
  i = n("524437"),
  r = n("481060"),
  o = n("239091"),
  u = n("605236"),
  d = n("554747"),
  c = n("306680"),
  f = n("9156"),
  h = n("305878"),
  C = n("26290"),
  p = n("434479"),
  m = n("490897"),
  g = n("689938"),
  E = n("697908");

function S(e) {
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
      className: E.numberBadge,
      disableColor: !0,
      count: u
    }) : null
  })
}

function _(e) {
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
  async function E() {
    await (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("22347"), n.e("56236")]).then(n.bind(n, "17671"));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t.id
      })
    }), (0, u.markDismissibleContentAsDismissed)(i.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)
  }
  let _ = (0, d.default)(t.id),
    I = _.length > 0 ? g.default.Messages.GUILD_EVENTS_PLURAL.format({
      number: _.length
    }) : g.default.Messages.GUILD_EVENTS;
  return (0, l.jsx)(S, {
    selected: a,
    showUnread: h && !p,
    onClick: E,
    onContextMenu: e => {
      (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("95307").then(n.bind(n, "867757"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildId: t.id
        })
      })
    },
    eventsMuted: p,
    rowLabel: I,
    mentionCount: C,
    guildId: t.id
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("524437"),
  i = n("481060"),
  r = n("239091"),
  o = n("605236"),
  u = n("554747"),
  d = n("306680"),
  c = n("9156"),
  f = n("305878"),
  h = n("26290"),
  p = n("434479"),
  m = n("490897"),
  C = n("689938"),
  g = n("784545");

function E(e) {
  let {
    guild: t,
    selected: E
  } = e, {
    hasUnread: _,
    mentionCount: S
  } = (0, a.useStateFromStoresObject)([d.default], () => ({
    hasUnread: d.default.hasUnread(t.id, m.ReadStateTypes.GUILD_EVENT),
    mentionCount: d.default.getMentionCount(t.id, m.ReadStateTypes.GUILD_EVENT)
  }), [t.id]), I = (0, a.useStateFromStores)([c.default], () => c.default.isMuteScheduledEventsEnabled(t.id));
  async function N() {
    await (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("22347"), n.e("56236")]).then(n.bind(n, "17671"));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t.id
      })
    }), (0, o.markDismissibleContentAsDismissed)(s.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)
  }
  let T = (0, u.default)(t.id),
    A = T.length > 0 ? C.default.Messages.GUILD_EVENTS_PLURAL.format({
      number: T.length
    }) : C.default.Messages.GUILD_EVENTS;
  return (0, l.jsx)(p.BasicChannelRow, {
    id: "upcoming-events-".concat(t.id),
    renderIcon: e => (0, l.jsx)(f.default, {
      className: e
    }),
    text: A,
    selected: E,
    onClick: N,
    onContextMenu: e => {
      (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("95307").then(n.bind(n, "867757"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildId: t.id
        })
      })
    },
    showUnread: _ && !I,
    trailing: !I && S > 0 ? (0, l.jsx)(h.NumberBadge, {
      className: g.numberBadge,
      disableColor: !0,
      count: S
    }) : null
  })
}
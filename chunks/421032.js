"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
});
var n = l("735250");
l("470079");
var s = l("120356"),
  u = l.n(s),
  i = l("442837"),
  a = l("481060"),
  o = l("239091"),
  r = l("592125"),
  d = l("430824"),
  c = l("808268"),
  f = l("924301"),
  E = l("894017"),
  h = l("854698"),
  _ = l("390966"),
  N = l("765305"),
  g = l("689938"),
  C = l("875842");

function v(e) {
  let {
    recurrenceId: t,
    originalScheduledStartTime: s,
    guildEventId: v,
    onClick: m,
    isActive: L
  } = e, S = (0, i.useStateFromStores)([f.default], () => f.default.getGuildScheduledEvent(v)), I = (0, E.default)(t, null == S ? void 0 : S.id), x = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(null == S ? void 0 : S.guild_id)), R = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(null == S ? void 0 : S.channel_id));
  if (null == S) return null;
  let {
    is_canceled: T = !1
  } = null != I ? I : {}, p = (null == I ? void 0 : I.scheduled_start_time) != null ? new Date(null == I ? void 0 : I.scheduled_start_time) : s, M = (0, h.getNextRecurrenceIdInEvent)(S), B = T ? N.GuildScheduledEventStatus.CANCELED : N.GuildScheduledEventStatus.SCHEDULED;
  M === t && (B = S.status);
  let j = (null == S ? void 0 : S.scheduled_start_time) != null ? (0, h.getRecurrenceStatus)(I, p, new Date(null == S ? void 0 : S.scheduled_start_time)) : null,
    k = e => {
      e.stopPropagation(), null != x && (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("15450"), l.e("37133")]).then(l.bind(l, "215269"));
        return l => (0, n.jsx)(e, {
          guildEventId: S.id,
          recurrenceId: t,
          channel: R,
          guild: x,
          isRecurrenceItem: !0,
          ...l
        })
      })
    };
  return (0, n.jsxs)(a.ClickableContainer, {
    className: u()(C.container, {
      [C.canceled]: T,
      [C.clickable]: null != m,
      [C.active]: L
    }),
    onClick: e => {
      e.stopPropagation(), !T && (null == m || m(t))
    },
    onContextMenu: k,
    "aria-label": "",
    children: [(0, n.jsx)(_.GuildEventTimeStatus, {
      startTime: p.toISOString(),
      status: null != j ? j : B,
      eventType: S.entity_type,
      guildEventId: S.id,
      recurrenceId: t,
      className: C.timeStatus
    }), T && (0, n.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: C.canceledStatus,
      children: g.default.Messages.EVENT_CANCELED
    }), (0, n.jsx)(a.Tooltip, {
      text: g.default.Messages.MORE,
      position: "top",
      "aria-label": g.default.Messages.EDIT,
      children: e => (0, n.jsx)(a.Clickable, {
        ...e,
        onClick: k,
        className: C.iconButton,
        children: (0, n.jsx)(c.default, {
          width: 20,
          height: 20,
          className: C.icon
        })
      })
    })]
  })
}
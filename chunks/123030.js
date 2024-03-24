"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var n = l("37983");
l("884691");
var s = l("414456"),
  u = l.n(s),
  a = l("446674"),
  i = l("77078"),
  o = l("272030"),
  r = l("42203"),
  d = l("305961"),
  c = l("433487"),
  E = l("398604"),
  f = l("397680"),
  h = l("822516"),
  C = l("393745"),
  g = l("745049"),
  v = l("782340"),
  N = l("964385");

function S(e) {
  let {
    recurrenceId: t,
    originalScheduledStartTime: s,
    guildEventId: S,
    onClick: _,
    isActive: I
  } = e, L = (0, a.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(S)), m = (0, f.default)(t, null == L ? void 0 : L.id), x = (0, a.useStateFromStores)([d.default], () => d.default.getGuild(null == L ? void 0 : L.guild_id)), R = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(null == L ? void 0 : L.channel_id));
  if (null == L) return null;
  let {
    is_canceled: T = !1
  } = null != m ? m : {}, p = (null == m ? void 0 : m.scheduled_start_time) != null ? new Date(null == m ? void 0 : m.scheduled_start_time) : s, M = (0, h.getNextRecurrenceIdInEvent)(L), B = T ? g.GuildScheduledEventStatus.CANCELED : g.GuildScheduledEventStatus.SCHEDULED;
  M === t && (B = L.status);
  let G = (null == L ? void 0 : L.scheduled_start_time) != null ? (0, h.getRecurrenceStatus)(m, p, new Date(null == L ? void 0 : L.scheduled_start_time)) : null,
    j = e => {
      e.stopPropagation(), null != x && (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await l.el("110374").then(l.bind(l, "110374"));
        return l => (0, n.jsx)(e, {
          guildEventId: L.id,
          recurrenceId: t,
          channel: R,
          guild: x,
          isRecurrenceItem: !0,
          ...l
        })
      })
    };
  return (0, n.jsxs)(i.ClickableContainer, {
    className: u(N.container, {
      [N.canceled]: T,
      [N.clickable]: null != _,
      [N.active]: I
    }),
    onClick: e => {
      e.stopPropagation(), !T && (null == _ || _(t))
    },
    onContextMenu: j,
    "aria-label": "",
    children: [(0, n.jsx)(C.GuildEventTimeStatus, {
      startTime: p.toISOString(),
      status: null != G ? G : B,
      eventType: L.entity_type,
      guildEventId: L.id,
      recurrenceId: t,
      className: N.timeStatus
    }), T && (0, n.jsx)(i.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: N.canceledStatus,
      children: v.default.Messages.EVENT_CANCELED
    }), (0, n.jsx)(i.Tooltip, {
      text: v.default.Messages.MORE,
      position: "top",
      "aria-label": v.default.Messages.EDIT,
      children: e => (0, n.jsx)(i.Clickable, {
        ...e,
        onClick: j,
        className: N.iconButton,
        children: (0, n.jsx)(c.default, {
          width: 20,
          height: 20,
          className: N.icon
        })
      })
    })]
  })
}
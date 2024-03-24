"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("37983");
n("884691");
var u = n("77078"),
  a = n("272030"),
  d = n("901582"),
  i = n("861370"),
  s = n("455933"),
  r = n("248900"),
  o = n("385752"),
  c = n("222971"),
  E = n("601131"),
  f = n("876725"),
  _ = n("367989"),
  T = n("891603"),
  S = n("510692"),
  v = n("49111"),
  g = n("782340");

function I(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    channel: I,
    guild: N,
    analyticsContext: m,
    isRecurrenceItem: M = !1,
    onSelect: h
  } = e, p = (0, _.default)({
    guildEventId: t,
    recurrenceId: n,
    guild: N,
    channel: I
  }), D = (0, o.default)({
    guildEventId: t,
    recurrenceId: n,
    guild: N,
    channel: I
  }), R = (0, c.default)({
    guildEventId: t,
    guild: N,
    channel: I,
    recurrenceId: n,
    isRecurrenceItem: M
  }), C = (0, E.default)(t, N, I), O = (0, S.default)(t, N, I), A = (0, r.default)(t, N.id, n), L = (0, f.default)(t), G = (0, i.default)({
    id: t,
    label: g.default.Messages.COPY_ID_EVENT
  }), y = (0, i.default)({
    id: n,
    label: g.default.Messages.COPY_ID_EVENT_RECURRENCE
  }), x = (0, s.default)(t, N.id, I, n), V = (0, T.default)({
    guildEventId: t,
    guildId: N.id,
    recurrenceId: n
  });
  return (0, l.jsx)(d.default, {
    context: m,
    object: v.AnalyticsObjects.CONTEXT_MENU,
    children: (0, l.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: h,
      children: [(0, l.jsxs)(u.MenuGroup, {
        children: [x, !M && O, R, !M && C, D, p, A, M && V]
      }), !M && (0, l.jsx)(u.MenuGroup, {
        children: L
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [G, y]
      })]
    })
  })
}
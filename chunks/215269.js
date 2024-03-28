"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("735250");
n("470079");
var u = n("481060"),
  a = n("239091"),
  s = n("410575"),
  d = n("299206"),
  i = n("70877"),
  r = n("572427"),
  o = n("231259"),
  c = n("159233"),
  E = n("924952"),
  f = n("99528"),
  _ = n("830394"),
  T = n("473545"),
  S = n("124422"),
  N = n("981631"),
  v = n("689938");

function I(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    channel: I,
    guild: g,
    analyticsContext: m,
    isRecurrenceItem: M = !1,
    onSelect: h
  } = e, p = (0, _.default)({
    guildEventId: t,
    recurrenceId: n,
    guild: g,
    channel: I
  }), D = (0, o.default)({
    guildEventId: t,
    recurrenceId: n,
    guild: g,
    channel: I
  }), R = (0, c.default)({
    guildEventId: t,
    guild: g,
    channel: I,
    recurrenceId: n,
    isRecurrenceItem: M
  }), O = (0, E.default)(t, g, I), C = (0, S.default)(t, g, I), A = (0, r.default)(t, g.id, n), L = (0, f.default)(t), G = (0, d.default)({
    id: t,
    label: v.default.Messages.COPY_ID_EVENT
  }), y = (0, d.default)({
    id: n,
    label: v.default.Messages.COPY_ID_EVENT_RECURRENCE
  }), P = (0, i.default)(t, g.id, I, n), V = (0, T.default)({
    guildEventId: t,
    guildId: g.id,
    recurrenceId: n
  });
  return (0, l.jsx)(s.default, {
    context: m,
    object: N.AnalyticsObjects.CONTEXT_MENU,
    children: (0, l.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": v.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: h,
      children: [(0, l.jsxs)(u.MenuGroup, {
        children: [P, !M && C, R, !M && O, D, p, A, M && V]
      }), !M && (0, l.jsx)(u.MenuGroup, {
        children: L
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [G, y]
      })]
    })
  })
}
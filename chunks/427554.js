"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var n = l("37983");
l("884691");
var s = l("414456"),
  u = l.n(s),
  a = l("77078"),
  i = l("299039"),
  o = l("276676"),
  r = l("123030"),
  d = l("782340"),
  c = l("912215");

function E(e) {
  let {
    guildId: t,
    recurrenceRule: l,
    guildEventId: s,
    onRecurrenceClick: E,
    hideScroller: f = !1,
    activeRecurrenceId: h
  } = e, {
    recurrenceStartTimes: C,
    canViewMoreRecurrences: g,
    updateRecurrenceStartTimes: v
  } = (0, o.default)(s, t, l);
  return (0, n.jsxs)("div", {
    className: c.recurrences,
    children: [(0, n.jsx)(a.Heading, {
      variant: "heading-sm/medium",
      className: c.heading,
      children: d.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
    }), (0, n.jsxs)(a.Scroller, {
      className: u(c.scroller, {
        [c.showScroller]: !f
      }),
      children: [C.map(e => {
        let t = i.default.fromTimestamp(e.getTime());
        return (0, n.jsx)(r.default, {
          recurrenceId: t,
          originalScheduledStartTime: e,
          guildEventId: s,
          onClick: E,
          isActive: t === h
        }, t)
      }), g && (0, n.jsx)(a.Button, {
        grow: !1,
        onClick: e => {
          e.stopPropagation(), v()
        },
        look: a.Button.Looks.LINK,
        size: a.Button.Sizes.MIN,
        color: a.Button.Colors.LINK,
        className: c.button,
        children: d.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
      })]
    })]
  })
}
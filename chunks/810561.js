"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("735250");
l("470079");
var s = l("803997"),
  u = l.n(s),
  i = l("481060"),
  a = l("709054"),
  o = l("7697"),
  r = l("421032"),
  d = l("689938"),
  c = l("299784");

function f(e) {
  let {
    guildId: t,
    recurrenceRule: l,
    guildEventId: s,
    onRecurrenceClick: f,
    hideScroller: E = !1,
    activeRecurrenceId: h
  } = e, {
    recurrenceStartTimes: _,
    canViewMoreRecurrences: N,
    updateRecurrenceStartTimes: g
  } = (0, o.default)(s, t, l);
  return (0, n.jsxs)("div", {
    className: c.recurrences,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-sm/medium",
      className: c.heading,
      children: d.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
    }), (0, n.jsxs)(i.Scroller, {
      className: u()(c.scroller, {
        [c.showScroller]: !E
      }),
      children: [_.map(e => {
        let t = a.default.fromTimestamp(e.getTime());
        return (0, n.jsx)(r.default, {
          recurrenceId: t,
          originalScheduledStartTime: e,
          guildEventId: s,
          onClick: f,
          isActive: t === h
        }, t)
      }), N && (0, n.jsx)(i.Button, {
        grow: !1,
        onClick: e => {
          e.stopPropagation(), g()
        },
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.MIN,
        color: i.Button.Colors.LINK,
        className: c.button,
        children: d.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
      })]
    })]
  })
}
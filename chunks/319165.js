"use strict";
s.r(t), s.d(t, {
  useMutedUntilText: function() {
    return l
  },
  default: function() {
    return r
  }
});
var i = s("37983");
s("884691");
var n = s("77078"),
  a = s("782340");

function l(e) {
  return null == e || null == e.end_time ? null : a.default.Messages.MUTED_UNTIL_TIME.format({
    endTime: new Date(e.end_time).toLocaleString(a.default.getLocale(), {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function r(e) {
  let {
    muteConfig: t,
    className: s
  } = e, a = l(t);
  return null != a ? (0, i.jsx)(n.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: s,
    children: a
  }) : null
}
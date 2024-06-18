"use strict";
n.d(t, {
  U: function() {
    return o
  },
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(689938);

function o(e) {
  return null == e || null == e.end_time ? null : s.Z.Messages.MUTED_UNTIL_TIME.format({
    endTime: new Date(e.end_time).toLocaleString(s.Z.getLocale(), {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function a(e) {
  let {
    muteConfig: t,
    className: n
  } = e, s = o(t);
  return null != s ? (0, i.jsx)(r.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: s
  }) : null
}
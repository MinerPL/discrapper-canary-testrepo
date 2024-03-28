"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("493683"),
  s = n("599059"),
  i = n("762914"),
  r = n("933557"),
  o = n("981631"),
  u = n("198546");
t.default = e => {
  let {
    channel: t
  } = e, n = (0, r.default)(t), d = (0, i.useIsBroadcastingGDM)(t.id);
  return (0, a.jsx)("div", {
    className: u.container,
    onDoubleClick: e => e.stopPropagation(),
    children: d ? (0, a.jsx)("div", {
      className: u.channelName,
      children: n
    }) : (0, a.jsx)(s.default, {
      minLen: 1,
      maxLen: o.MAX_CHANNEL_NAME_LENGTH,
      className: u.channelName,
      name: "channel_name",
      autoComplete: "off",
      value: null != n ? n : "",
      onBlur: e => {
        n !== e.currentTarget.value && l.default.setName(t.id, e.currentTarget.value)
      }
    })
  })
}
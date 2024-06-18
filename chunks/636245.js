"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(922482),
  l = n(979651),
  u = n(915863),
  _ = n(689938),
  d = n(262470);
t.Z = e => {
  let {
    guildId: t,
    channelId: n,
    color: r,
    look: c,
    isProfile: E,
    onAction: I
  } = e, T = (0, o.e7)([l.Z], () => l.Z.isInChannel(n), [n]);
  return (0, i.jsx)(u.Z, {
    className: s()(d.button, {
      [d.popout]: !E
    }),
    color: r,
    look: c,
    disabled: T,
    onClick: () => {
      null == I || I(), a.AC(t, n)
    },
    fullWidth: !0,
    children: _.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
  }, "stage")
}
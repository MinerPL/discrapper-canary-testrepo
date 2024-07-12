n.d(t, {
  Z: function() {
return c;
  }
}), n(789020);
var i = n(735250);
n(470079);
var a = n(630388),
  l = n(901461),
  s = n(773176),
  r = n(981631),
  o = n(848509);

function c(e) {
  let {
setPopout: t,
messagePopouts: {
  emojiPicker: n,
  emojiBurstPicker: c,
  moreUtilities: d
},
isFocused: u,
buttonProps: {
  message: h,
  channel: p,
  groupId: m,
  compact: _ = !1
}
  } = e, f = h.state === r.yb.SENDING, E = h.id === m, C = (0, a.yE)(h.flags, r.iLy.EPHEMERAL), g = h.state === r.yb.SEND_FAILED;
  return f || C && !g ? null : (0, i.jsx)(s.Z, {
className: o.buttons,
innerClassName: o.buttonsInner,
isHeader: !_ && E && !(0, l.Z)(h),
channel: p,
message: h,
setPopout: t,
showEmojiPicker: n,
showEmojiBurstPicker: c,
showMoreUtilities: d,
isFocused: u
  });
}
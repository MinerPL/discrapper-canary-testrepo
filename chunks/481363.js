"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("789020");
var a = n("735250");
n("470079");
var l = n("630388"),
  s = n("901461"),
  i = n("773176"),
  r = n("981631"),
  o = n("264558");

function u(e) {
  let {
    setPopout: t,
    messagePopouts: {
      emojiPicker: n,
      emojiBurstPicker: u,
      moreUtilities: d
    },
    isFocused: c,
    buttonProps: {
      message: f,
      channel: h,
      groupId: m,
      compact: p = !1
    }
  } = e, E = f.state === r.MessageStates.SENDING, C = f.id === m, g = (0, l.hasFlag)(f.flags, r.MessageFlags.EPHEMERAL), S = f.state === r.MessageStates.SEND_FAILED;
  return E || g && !S ? null : (0, a.jsx)(i.default, {
    className: o.buttons,
    innerClassName: o.buttonsInner,
    isHeader: !p && C && !(0, s.default)(f),
    channel: h,
    message: f,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: u,
    showMoreUtilities: d,
    isFocused: c
  })
}
"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(427217),
  s = n(659101),
  o = n(812780);

function a(e) {
  let {
    customStatusActivity: t,
    className: n,
    animate: a
  } = e;
  return null == t ? null : (0, i.jsx)(s.Z, {
    className: n,
    children: (0, i.jsx)(r.Z, {
      activity: t,
      className: o.customStatus,
      animate: a,
      emojiClassName: o.customStatusEmoji,
      soloEmojiClassName: o.customStatusSoloEmoji,
      textClassName: o.customStatusText
    })
  })
}
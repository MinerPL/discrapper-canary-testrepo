"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(442837),
  r = n(706454),
  s = n(689938);

function o(e) {
  let t = (0, i.e7)([r.default], () => r.default.locale.startsWith("en-"));
  return ":pizza:" === e && t ? s.Z.Messages.POLLS_MARKETING_EASTER_EGG_PIZZA_EMOJI_DESCRIPTION.format({
    emojiName: e
  }) : e
}
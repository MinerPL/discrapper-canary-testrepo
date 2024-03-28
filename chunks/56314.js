"use strict";
i.r(t), i.d(t, {
  useEmojiColorPalette: function() {
    return r
  }
});
var n = i("442837"),
  a = i("780384"),
  s = i("607070"),
  l = i("210887"),
  o = i("712057");
let r = e => {
  let t = (0, n.useStateFromStores)([s.default], () => s.default.saturation),
    i = (0, n.useStateFromStores)([l.default], () => (0, a.isThemeDark)(l.default.theme));
  return (0, o.buildEmojiColorPalette)(e, t, i)
}
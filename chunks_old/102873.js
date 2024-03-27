"use strict";
i.r(t), i.d(t, {
  useEmojiColorPalette: function() {
    return r
  }
});
var n = i("446674"),
  a = i("819855"),
  l = i("206230"),
  o = i("161778"),
  s = i("584375");
let r = e => {
  let t = (0, n.useStateFromStores)([l.default], () => l.default.saturation),
    i = (0, n.useStateFromStores)([o.default], () => (0, a.isThemeDark)(o.default.theme));
  return (0, s.buildEmojiColorPalette)(e, t, i)
}
"use strict";
n(47120), n(757143);
var i = n(946188),
  r = n(768581),
  s = n(302221),
  o = n(956664),
  a = n(753090);
let l = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);

function u(e) {
  if (l.has(e)) return "";
  try {
    let t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
    return n(916529)("./".concat(i.Z.convert.toCodePoint(t), ".svg"))
  } catch (t) {
    return console.warn(t, "no emoji for", e), ""
  }
}
async function _(e) {
  let t;
  let {
    id: n,
    name: i
  } = e;
  t = null != n ? r.ZP.getEmojiURL({
    id: n,
    size: 32,
    animated: !1
  }) : u(i);
  let a = await (0, o.OF)(t);
  return null == a ? void 0 : a.map(e => {
    let [t, n, i] = e;
    return (0, s.vq)(t, n, i)
  })
}
t.Z = {
  getURL: a.Z.makeMemoizer(u),
  filterUnsupportedEmojis: function(e) {
    return e
  },
  applyPlatformToThemedEmojiColorPalette: function(e) {
    let {
      palette: t,
      shouldProcessMobileColors: n = !1
    } = e;
    return t
  },
  getEmojiColors: _,
  triggerFullscreenAnimation: function(e) {
    let {
      channelId: t,
      messageId: n,
      emoji: i
    } = e
  }
}
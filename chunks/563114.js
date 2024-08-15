n(47120), n(757143);
var r = n(946188),
  i = n(768581),
  a = n(302221),
  s = n(956664),
  o = n(753090);
let l = new Set([
  '\u2122',
  '\u2122️',
  '\xA9',
  '\xA9️',
  '\xAE',
  '\xAE️'
]);

function u(e) {
  if (l.has(e))
return '';
  try {
let t = 0 > e.indexOf('‍') ? e.replace('️', '') : e;
return n(916529)('./'.concat(r.Z.convert.toCodePoint(t), '.svg'));
  } catch (t) {
return console.warn(t, 'no emoji for', e), '';
  }
}
async function c(e) {
  let t;
  let {
id: n,
name: r
  } = e;
  t = null != n ? i.ZP.getEmojiURL({
id: n,
size: 32,
animated: !1
  }) : u(r);
  let o = await (0, s.OF)(t);
  return null == o ? void 0 : o.map(e => {
let [t, n, r] = e;
return (0, a.vq)(t, n, r);
  });
}
t.Z = {
  getURL: o.Z.makeMemoizer(u),
  filterUnsupportedEmojis: function(e) {
return e;
  },
  applyPlatformToThemedEmojiColorPalette: function(e) {
let {
  palette: t,
  shouldProcessMobileColors: n = !1
} = e;
return t;
  },
  getEmojiColors: c,
  triggerFullscreenAnimation: function(e) {
let {
  channelId: t,
  messageId: n,
  emoji: r
} = e;
  }
};
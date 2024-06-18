"use strict";
n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041);
var i = n(147913),
  r = n(339085),
  s = n(592125),
  o = n(768581),
  a = n(176354),
  l = n(176505),
  u = n(149203);
let _ = new Worker(new URL(n.p + n.u("80493"), n.b));
class d extends i.Z {
  handleChannelPreload(e) {
    let {
      channelId: t
    } = e;
    if ((0, l.AB)(t)) return;
    let n = s.Z.getChannel(t);
    null != n && n.isForumLikeChannel() && (function(e) {
      let t = [],
        n = e.defaultReactionEmoji;
      if ((null == n ? void 0 : n.emojiId) != null) {
        var i, s;
        t.push(o.ZP.getEmojiURL({
          id: n.emojiId,
          animated: null !== (s = null === (i = r.Z.getUsableCustomEmojiById(n.emojiId)) || void 0 === i ? void 0 : i.animated) && void 0 !== s && s,
          size: u.kV.reaction
        }))
      } else(null == n ? void 0 : n.emojiName) != null && t.push(a.ZP.getURL(n.emojiName));
      return e.availableTags.forEach(e => {
        null != e.emojiId ? t.push(o.ZP.getEmojiURL({
          id: e.emojiId,
          animated: !1,
          size: u.kV.reaction
        })) : null != e.emojiName && t.push(a.ZP.getURL(e.emojiName))
      }), t
    })(n).forEach(e => {
      if (null != e && 0 !== e.length) {
        var t;
        t = e, new Promise(e => {
          let n = i => {
            let {
              data: {
                url: r
              }
            } = i;
            null == _ || _.removeEventListener("message", n), t === r && e()
          };
          null == _ || _.addEventListener("message", n), null == _ || _.postMessage({
            url: t
          })
        })
      }
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      CHANNEL_PRELOAD: this.handleChannelPreload
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new d
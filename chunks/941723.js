"use strict";
i.r(t), i.d(t, {
  ANIMATION_TO_EMOJI_RATIO: function() {
    return u
  },
  getResizedAnimation: function() {
    return c
  },
  buildEffect: function() {
    return d
  }
}), i("781738");
var n = i("917351"),
  a = i("748820"),
  l = i("407063"),
  o = i("397485"),
  s = i("284679"),
  r = i("103475");
let u = 7.5,
  c = (0, n.memoize)((e, t, i, n) => new Promise(e => {
    let a = new Image;
    a.src = t, a.crossOrigin = "Anonymous", a.onload = () => {
      let t = 32 * (0, l.getDevicePixelRatio)(),
        o = JSON.stringify(i);
      if (null != n && (o = (0, r.replaceAnimationColors)(o, (0, s.hexToRgb)(n))), a.width === t && a.height === t || 0 === a.width && 0 === a.height) e(JSON.parse(o));
      else {
        let t = 128 / a.width * a.height;
        e(JSON.parse(o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function d(e, t, i, n) {
  let {
    emojiSize: l,
    key: s,
    messageId: r
  } = null != n ? n : {}, u = (0, o.getEffectUrl)(e, null != l ? 2 * l : void 0);
  return {
    channelId: i,
    messageId: r,
    emoji: e,
    animationId: (0, a.v4)(),
    url: u,
    key: s,
    color: t
  }
}
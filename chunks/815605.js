"use strict";
i.r(t), i.d(t, {
  ANIMATION_TO_EMOJI_RATIO: function() {
    return u
  },
  buildEffect: function() {
    return c
  },
  getResizedAnimation: function() {
    return d
  }
}), i("757143");
var n = i("392711"),
  a = i("153832"),
  s = i("134432"),
  l = i("963838"),
  o = i("302221"),
  r = i("347904");
let u = 7.5,
  d = (0, n.memoize)((e, t, i, n) => new Promise(e => {
    let a = new Image;
    a.src = t, a.crossOrigin = "Anonymous", a.onload = () => {
      let t = 32 * (0, s.getDevicePixelRatio)(),
        l = JSON.stringify(i);
      if (null != n && (l = (0, r.replaceAnimationColors)(l, (0, o.hexToRgb)(n))), a.width === t && a.height === t || 0 === a.width && 0 === a.height) e(JSON.parse(l));
      else {
        let t = 128 / a.width * a.height;
        e(JSON.parse(l = (l = l.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function c(e, t, i, n) {
  let {
    emojiSize: s,
    key: o,
    messageId: r
  } = null != n ? n : {}, u = (0, l.getEffectUrl)(e, null != s ? 2 * s : void 0);
  return {
    channelId: i,
    messageId: r,
    emoji: e,
    animationId: (0, a.v4)(),
    url: u,
    key: o,
    color: t
  }
}
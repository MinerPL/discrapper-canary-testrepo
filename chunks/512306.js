"use strict";
i.r(t), i.d(t, {
  BurstReactionSize: function() {
    return a
  },
  default: function() {
    return g
  }
});
var n, a, l = i("37983"),
  o = i("884691"),
  s = i("414456"),
  r = i.n(s),
  u = i("865981"),
  c = i.n(u),
  d = i("913144"),
  h = i("15935"),
  m = i("569512"),
  f = i("941723"),
  p = i("49111"),
  T = i("235735");
(n = a || (a = {}))[n.NORMAL = 16] = "NORMAL", n[n.LARGE = 32] = "LARGE";
let R = async e => {
  var t;
  let {
    effect: i
  } = e, n = await (0, m.getBurstAnimation)(i.channelId, null !== (t = i.messageId) && void 0 !== t ? t : p.EMPTY_STRING_SNOWFLAKE_ID, i.emoji.name), a = await (0, f.getResizedAnimation)("".concat(i.channelId, ":").concat(i.messageId, ":").concat(i.emoji.name), i.url, n, i.color);
  return a.assets[0].p = i.url, a
};

function g(e) {
  let {
    className: t,
    effect: i,
    onComplete: n,
    emojiSize: a = 16
  } = e, s = o.useRef(null), u = a * f.ANIMATION_TO_EMOJI_RATIO, m = (u + a) / 2;
  return o.useEffect(() => {
    let e;
    if (null != i) return !async function() {
      if (null != s.current) {
        let t = await R({
          effect: i
        });
        (e = c.loadAnimation({
          container: s.current,
          renderer: "svg",
          loop: !1,
          autoplay: !0,
          animationData: t
        })).addEventListener("complete", () => {
          null == n || n(), e.destroy()
        }), null != i.channelId && null != i.messageId && null != i.emoji && i.key === h.BurstReactionEffectSource.HOVER && d.default.dispatch({
          type: "BURST_REACTION_ANIMATION_ADD",
          channelId: i.channelId,
          messageId: i.messageId,
          emoji: i.emoji,
          animation: e
        })
      }
    }(), () => {
      null != e && e.destroy()
    }
  }, [n, i, a]), (0, l.jsx)("div", {
    className: T.effectsWrapper,
    children: (0, l.jsx)("div", {
      className: r(T.effect, t),
      style: {
        transform: "translateY(".concat(m, "px)"),
        height: u,
        width: u
      },
      ref: s
    })
  })
}
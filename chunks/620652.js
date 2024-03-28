"use strict";
i.r(t), i.d(t, {
  BurstReactionSize: function() {
    return a
  },
  default: function() {
    return v
  }
});
var n, a, s = i("735250"),
  l = i("470079"),
  o = i("803997"),
  r = i.n(o),
  u = i("500923"),
  d = i.n(u),
  c = i("570140"),
  h = i("960020"),
  f = i("831244"),
  m = i("815605"),
  p = i("981631"),
  g = i("849521");
(n = a || (a = {}))[n.NORMAL = 16] = "NORMAL", n[n.LARGE = 32] = "LARGE";
let T = async e => {
  var t;
  let {
    effect: i
  } = e, n = await (0, f.getBurstAnimation)(i.channelId, null !== (t = i.messageId) && void 0 !== t ? t : p.EMPTY_STRING_SNOWFLAKE_ID, i.emoji.name), a = await (0, m.getResizedAnimation)("".concat(i.channelId, ":").concat(i.messageId, ":").concat(i.emoji.name), i.url, n, i.color);
  return a.assets[0].p = i.url, a
};

function v(e) {
  let {
    className: t,
    effect: i,
    onComplete: n,
    emojiSize: a = 16
  } = e, o = l.useRef(null), u = a * m.ANIMATION_TO_EMOJI_RATIO, f = (u + a) / 2;
  return l.useEffect(() => {
    let e;
    if (null != i) return !async function() {
      if (null != o.current) {
        let t = await T({
          effect: i
        });
        (e = d().loadAnimation({
          container: o.current,
          renderer: "svg",
          loop: !1,
          autoplay: !0,
          animationData: t
        })).addEventListener("complete", () => {
          null == n || n(), e.destroy()
        }), null != i.channelId && null != i.messageId && null != i.emoji && i.key === h.BurstReactionEffectSource.HOVER && c.default.dispatch({
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
  }, [n, i, a]), (0, s.jsx)("div", {
    className: g.effectsWrapper,
    children: (0, s.jsx)("div", {
      className: r()(g.effect, t),
      style: {
        transform: "translateY(".concat(f, "px)"),
        height: u,
        width: u
      },
      ref: o
    })
  })
}
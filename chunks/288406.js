"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(481060),
  _ = n(633302),
  d = n(334920),
  c = n(242411),
  E = n(768581),
  I = n(185923),
  T = n(414073);
let h = l().memoize(e => "".concat(e * I.DC.NonDiversityPerRow, "px ").concat(e * Math.ceil(_.ZP.numNonDiversitySprites / I.DC.NonDiversityPerRow), "px")),
  S = l().memoize(e => "".concat(e * I.DC.DiversityPerRow, "px ").concat(e * Math.ceil(_.ZP.numDiversitySprites / I.DC.DiversityPerRow), "px")),
  f = (e, t, i) => {
    let r, s, o;
    if (!e.useSpriteSheet) return;
    let a = null != e.index ? e.index : 0;
    e.hasDiversity ? (r = n(735800)("./spritesheet-".concat(t, "-").concat(i, ".png")), s = S(i), o = I.DC.DiversityPerRow) : (r = n(604901)("./spritesheet-emoji-".concat(i, ".png")), s = h(i), o = I.DC.NonDiversityPerRow);
    let l = -a % o * i,
      u = -Math.floor(a / o) * i;
    return {
      backgroundImage: "url('".concat(r, "')"),
      backgroundPosition: "".concat(l, "px ").concat(u, "px"),
      backgroundSize: s,
      height: i,
      width: i
    }
  },
  N = r.memo(function(e) {
    let {
      emoji: t,
      size: n,
      surrogateCodePoint: s,
      allowAnimatedEmoji: a,
      "aria-label": l,
      isLocked: _
    } = e, h = (() => {
      if (!t.useSpriteSheet) {
        var e;
        let r = null == t.id ? t.url : E.ZP.getEmojiURL({
          id: t.id,
          animated: a && t.animated,
          size: I.$U
        });
        return null != r ? (0, i.jsx)(d.Z, {
          className: T.lockedEmoji,
          "aria-label": l,
          src: r,
          size: n,
          alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ""
        }) : null
      }
      return (0, i.jsx)("div", {
        className: o()(T.emojiSpriteImage, {
          [T.lockedEmoji]: _
        }),
        style: f(t, s, n),
        children: (0, i.jsx)(u.HiddenVisually, {
          children: l
        })
      })
    })();
    return (0, i.jsxs)(r.Fragment, {
      children: [h, _ ? (0, i.jsx)("div", {
        className: T.emojiLockIconContainer,
        children: (0, i.jsx)(c.Z, {
          width: 16,
          height: 16,
          className: T.emojiLockIcon
        })
      }) : null]
    })
  });
t.Z = N
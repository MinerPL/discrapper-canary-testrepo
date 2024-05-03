"use strict";
n.r(t), n.d(t, {
  drawBadges: function() {
    return s
  }
}), n("47120");
var a = n("693824"),
  l = n("169040");

function s(e) {
  let t, {
    canvas: n,
    badges: s,
    startPosition: i,
    maxWidth: r
  } = e;
  for (let {
      iconPath: e,
      text: o
    }
    of(n.setFont({
      size: 12,
      truncate: a.TextTruncationMethod.None
    }), s)) {
    let a = null != t ? t.w + t.x + l.spaceBetweenBadges : i,
      s = null != t ? t.w + t.x + l.spaceBetweenBadges + l.spaceBetweenBadgeIconAndText : i + l.spaceBetweenBadgeIconAndText;
    n.drawPath(e, {
      x: a,
      y: l.badgeIconPosition
    }, !0, .6), t = n.drawText(o, {
      x: s,
      y: l.badgeTextPosition,
      w: r
    }, !0)
  }
}
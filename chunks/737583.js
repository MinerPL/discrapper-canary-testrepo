"use strict";
n.r(t), n.d(t, {
  drawAvatars: function() {
    return i
  },
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

function i(e) {
  let {
    canvas: t,
    avatarSrcs: n,
    position: {
      x: l,
      y: s
    },
    avatarImageSize: i
  } = e;
  for (let e = 0; e < n.length; e++) e < n.length - 1 && t.clipRoundedRect({
    x: l + (e + 1) * (i - 8) - 2,
    y: s - 1,
    w: i + 2,
    h: i + 2
  }, i / 2, !0), t.drawRoundedImage(n[e], {
    x: l + e * (i - 8),
    y: s
  }, {
    w: i,
    h: i
  }, 50, {
    fillMode: a.FillMode.Cover
  }), t.restoreContext()
}
"use strict";
n.d(t, {
  Iu: function() {
    return x
  },
  Jw: function() {
    return k
  },
  _r: function() {
    return V
  },
  cX: function() {
    return H
  },
  lv: function() {
    return B
  },
  v: function() {
    return b
  }
});
var i = n(392711),
  r = n.n(i),
  s = n(490757),
  o = n(429827),
  a = n(353928),
  l = n(336892),
  u = n(624833),
  _ = n(944314),
  d = n(399358),
  c = n(945835),
  E = n(912931),
  I = n(966552),
  T = n(561763),
  h = n(529306),
  S = n(90075),
  f = n(862666),
  N = n(252611),
  A = n(136144),
  m = n(316137),
  O = n(654123),
  R = n(660020),
  C = n(980084),
  p = n(24688),
  g = n(200997),
  L = n(633302),
  v = n(134432),
  D = n(594174),
  M = n(768581),
  P = n(176354),
  y = n(353368),
  U = n(689938);
let b = {
    start: 10,
    end: 15
  },
  G = [s],
  w = [o, a, l, u, _, d, c, E, I, T, h, S, f, N, A, m, O, R, C, p, g],
  k = {
    [y.q.BASIC]: G,
    [y.q.PREMIUM]: w
  },
  B = r().memoize(e => new Promise(t => {
    let n = new Image;
    n.src = e, n.crossOrigin = "Anonymous", n.onload = () => {
      let i = y.v * (0, v.x_)();
      if (n.width === i && n.height === i) t(e);
      else {
        var r;
        let e = document.createElement("canvas");
        e.width = i, e.height = i, null === (r = e.getContext("2d")) || void 0 === r || r.drawImage(n, 0, 0), t(e.toDataURL("image/png"))
      }
    }
  })),
  x = (e, t) => {
    let n = k[e];
    if (null != t && e === y.q.PREMIUM) {
      let e = t.end + 1;
      return Math.floor(Math.random() * (t.start - e) + e)
    }
    return Math.floor(Math.random() * n.length)
  };

function V(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.v;
  if (null != e.id) {
    var n;
    return M.ZP.getEmojiURL({
      id: e.id,
      animated: null !== (n = e.animated) && void 0 !== n && n,
      size: t
    })
  }
  let i = L.ZP.convertSurrogateToName(e.name, !1),
    r = L.ZP.getByName(i);
  return null != r ? P.ZP.getURL(r.surrogates) : ""
}

function Z(e, t) {
  return r()(e).map(e => {
    var n;
    return null !== (n = e[t]) && void 0 !== n ? n : null
  }).filter(e => null != e).uniq().value()
}

function H(e) {
  var t, n, i, r, s, o;
  if (e.length < 1) return "";
  let a = Z(e, "userId"),
    l = Z(e, "emojiName"),
    u = l.length < 2 ? null !== (t = null == l ? void 0 : l[0]) && void 0 !== t ? t : "" : l.join(", ");
  if (a.length < 1) return "";
  if (1 === a.length) return U.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
    firstUsername: null === (n = D.default.getUser(a[0])) || void 0 === n ? void 0 : n.username,
    emojiNames: u
  });
  if (2 === a.length) return U.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
    firstUsername: null === (i = D.default.getUser(a[0])) || void 0 === i ? void 0 : i.username,
    secondUsername: null === (r = D.default.getUser(a[1])) || void 0 === r ? void 0 : r.username,
    emojiNames: u
  });
  else return U.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
    firstUsername: null === (s = D.default.getUser(a[0])) || void 0 === s ? void 0 : s.username,
    secondUsername: null === (o = D.default.getUser(a[1])) || void 0 === o ? void 0 : o.username,
    count: a.length - 2,
    emojiNames: u
  })
}
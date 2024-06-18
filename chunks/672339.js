"use strict";
n.d(t, {
  FU: function() {
    return A
  },
  eH: function() {
    return m
  },
  wG: function() {
    return N
  }
}), n(66153), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(512722),
  r = n.n(i),
  s = n(46973),
  o = n(594174),
  a = n(768581),
  l = n(932724),
  u = n(716161),
  _ = n(634041),
  d = n(647177),
  c = n(63985),
  E = n(638457),
  I = n(678916),
  T = n(981631);
async function h(e) {
  let t = await fetch(e),
    n = await t.blob();
  return new Uint8ClampedArray(await n.arrayBuffer())
}

function S(e, t, n, i, r) {
  (0, u.RI)({
    [e]: {
      graph: n,
      target: t,
      image: i,
      blob: r
    }
  })
}
async function f(e, t, n) {
  var i, o;
  let l, _ = !1;
  if (null == n) return S(e, t, s.zZ.NONE);
  if (n === I.f7) return S(e, t, s.zZ.BACKGROUND_BLUR);
  if ("string" == typeof n || "number" == typeof n) {
    ;
    let e = (0, c.Z)()[n];
    _ = null !== (i = e.isVideo) && void 0 !== i && i, l = e.source
  } else {
    let e = n.asset;
    _ = (0, a.xR)(e) || (0, a.ay)(e), l = (0, a.rI)({
      userId: n.user_id,
      assetId: n.id,
      assetHash: e,
      size: I.HE.width
    })
  }
  if (null != l) try {
    ;
    let n = _ ? void 0 : await (o = l, new Promise((e, t) => {
        let n = new Image;
        n.crossOrigin = "anonymous", n.onload = () => {
          let t = document.createElement("canvas");
          t.width = I.HE.width, t.height = I.HE.height;
          let i = t.getContext("2d");
          r()(null != i, "Canvas context is missing");
          let s = n.height / n.width,
            o = I.HE.height,
            a = I.HE.height / s,
            l = (t.width - a) / 2,
            u = (t.height - o) / 2;
          i.drawImage(n, l, u, a, o);
          let _ = i.getImageData(0, 0, t.width, t.height);
          e({
            data: _.data,
            width: _.width,
            height: _.height,
            pixelFormat: "rgba"
          })
        }, n.onerror = e => t(e), n.src = o
      })),
      i = _ ? await h(l) : void 0;
    S(e, t, s.zZ.BACKGROUND_REPLACEMENT, n, i)
  } catch (e) {
    (0, u.Nm)()
  }
}
async function N(e, t) {
  let {
    track: n = !0,
    location: i
  } = t;
  await f(s.TO.CAMERA_BACKGROUND_LIVE, {
    type: s.W$.INPUT_DEVICE
  }, e), n && (0, d.Bh)(e, i, "Enabled")
}
async function A(e, t, n) {
  let {
    track: i = !0,
    location: r
  } = n;
  (0, u.GS)(), await f(s.TO.CAMERA_BACKGROUND_PREVIEW, {
    type: s.W$.STREAM,
    streamId: t
  }, e), i && (0, d.Bh)(e, r, "Preview")
}

function m() {
  let e = o.default.getCurrentUser();
  if (null == e) return;
  let t = (0, l.P)(e);
  (0, E.Z)() && !_.Z.hasBeenApplied && null != t && N(t, {
    track: !1
  }).catch(T.dG4)
}
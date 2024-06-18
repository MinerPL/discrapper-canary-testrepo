"use strict";
t.d(s, {
  $p: function() {
    return a
  },
  AK: function() {
    return E
  },
  Ae: function() {
    return _
  },
  Es: function() {
    return d
  },
  PT: function() {
    return r
  },
  U$: function() {
    return o
  },
  kH: function() {
    return u
  }
}), t(315314), t(610138), t(216116), t(78328), t(815648), t(47120), t(411104), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817);
var n = t(392711),
  i = t(486324);

function l(e, s, t, n) {
  let i = e.naturalWidth / e.width,
    l = s.width / 2,
    a = s.height / 2,
    r = (e.width / 2 - l - t.x) * i,
    o = (e.height / 2 - a - t.y) * i,
    c = s.width * i,
    d = s.height * i,
    u = Math.min(c, n.width),
    E = Math.min(d, n.height);
  return {
    x: r,
    y: o,
    scaledCropWidth: c,
    scaledCropHeight: d,
    canvasWidth: u,
    canvasHeight: E
  }
}
async function a(e, s, n, a, r) {
  let {
    x: o,
    y: c,
    scaledCropWidth: d,
    scaledCropHeight: u
  } = l(s, n, a, r), E = await e.arrayBuffer(), _ = new Worker(new URL(t.p + t.u("86047"), t.b)), I = new Promise((e, s) => {
    _.onmessage = t => {
      let {
        data: n
      } = t;
      if (n.type === i.u.CROP_GIF_COMPLETE) {
        var l;
        e((l = new Blob([n.result]), new Promise(e => {
          let s = new FileReader;
          s.onload = s => {
            var t;
            let n = null === (t = s.target) || void 0 === t ? void 0 : t.result;
            "string" == typeof n ? e(n) : e("")
          }, s.readAsDataURL(l)
        }))), _.terminate()
      } else n.type === i.u.CROP_GIF_ERROR && (s(Error("Error cropping GIF")), _.terminate())
    }
  });
  return _.postMessage({
    type: i.u.CROP_GIF_START,
    gif: new Uint8Array(E),
    x: 0 | o,
    y: 0 | c,
    width: 0 | d,
    height: 0 | u
  }), {
    result: I,
    cancelFn: () => _.terminate()
  }
}

function r(e, s, t, n) {
  let {
    x: i,
    y: a,
    scaledCropWidth: r,
    scaledCropHeight: o,
    canvasWidth: c,
    canvasHeight: d
  } = l(e, s, t, n), u = document.createElement("canvas");
  u.width = c, u.height = d;
  let E = u.getContext("2d");
  return null != E && E.drawImage(e, i, a, r, o, 0, 0, u.width, u.height), u.toDataURL("image/png")
}

function o(e, s, t) {
  return {
    x: (0, n.clamp)(e, t.left, t.right),
    y: (0, n.clamp)(s, t.bottom, t.top)
  }
}

function c(e, s, t, n) {
  let l = t,
    a = n;
  return (t > i.vJ && (l = i.vJ, a = n * (i.vJ / t)), t / n < e) ? {
    width: l,
    height: a
  } : {
    width: s / a * l,
    height: s
  }
}

function d(e, s, t) {
  switch (e) {
    case i.pC.AVATAR:
    case i.pC.AVATAR_DECORATION:
      return {
        width: s, height: t
      };
    case i.pC.BANNER:
      return c(i.MY, i.qj, s, t);
    case i.pC.GUILD_BANNER:
      return c(i.Ij, i.C5, s, t);
    case i.pC.VIDEO_BACKGROUND:
      return c(i.Ff, i.PB, s, t);
    case i.pC.SCHEDULED_EVENT_IMAGE:
      return c(i.ut, i.WV, s, t);
    case i.pC.HOME_HEADER:
      return c(i.sX, i.SW, s, t)
  }
}

function u(e, s, t) {
  let n = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    i = e - t.width,
    l = s - t.height;
  return 0 !== i && (n.left = -Math.abs(i / 2), n.right = i / 2), 0 !== l && (n.bottom = -Math.abs(l / 2), n.top = l / 2), n
}

function E(e, s, t, n) {
  switch (e) {
    case i.pC.AVATAR:
    case i.pC.AVATAR_DECORATION:
      let l = Math.min(s, t);
      return {
        width: l, height: l
      };
    case i.pC.BANNER:
      let a = Math.min(s, i.vJ);
      return {
        width: a, height: a * (1 / i.MY)
      };
    case i.pC.GUILD_BANNER:
      let r = Math.min(s, i.vJ);
      return {
        width: r, height: Math.min(9 / 16 * r, n)
      };
    case i.pC.VIDEO_BACKGROUND:
      let o = Math.min(s, i.vJ);
      return {
        width: o, height: 9 / 16 * o
      };
    case i.pC.SCHEDULED_EVENT_IMAGE:
      let c = Math.min(s, i.vJ);
      return {
        width: c, height: .4 * c
      };
    case i.pC.HOME_HEADER:
      let d = Math.min(s, i.vJ);
      return {
        width: d, height: d * (1 / i.sX)
      }
  }
}

function _(e, s, t) {
  let n = e.naturalWidth / e.naturalHeight,
    i = s,
    l = t;
  e.naturalWidth > e.naturalHeight ? i /= n : l *= n;
  let a = {
    height: i,
    width: l
  };
  return r(e, {
    width: e.width,
    height: e.height
  }, {
    x: 0,
    y: 0
  }, a)
}
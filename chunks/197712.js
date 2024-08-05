n.d(t, {
  $p: function() {
return l;
  },
  AK: function() {
return d;
  },
  Ae: function() {
return g;
  },
  Es: function() {
return c;
  },
  PT: function() {
return s;
  },
  U$: function() {
return o;
  },
  kH: function() {
return h;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var r = n(392711),
  a = n(486324);

function i(e, t, n, r) {
  let a = e.naturalWidth / e.width,
i = t.width / 2,
l = t.height / 2,
s = (e.width / 2 - i - n.x) * a,
o = (e.height / 2 - l - n.y) * a,
u = t.width * a,
c = t.height * a,
h = Math.min(u, r.width),
d = Math.min(c, r.height);
  return {
x: s,
y: o,
scaledCropWidth: u,
scaledCropHeight: c,
canvasWidth: h,
canvasHeight: d
  };
}
async function l(e, t, r, l, s) {
  let {
x: o,
y: u,
scaledCropWidth: c,
scaledCropHeight: h
  } = i(t, r, l, s), d = await e.arrayBuffer(), g = new Worker(new URL('/assets/' + n.u('86047'), n.b)), A = new Promise((e, t) => {
g.onmessage = n => {
  let {
    data: r
  } = n;
  if (r.type === a.u.CROP_GIF_COMPLETE) {
    var i;
    e((i = new Blob([r.result]), new Promise(e => {
      let t = new FileReader();
      t.onload = t => {
        var n;
        let r = null === (n = t.target) || void 0 === n ? void 0 : n.result;
        'string' == typeof r ? e(r) : e('');
      }, t.readAsDataURL(i);
    }))), g.terminate();
  } else
    r.type === a.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), g.terminate());
};
  });
  return g.postMessage({
type: a.u.CROP_GIF_START,
gif: new Uint8Array(d),
x: 0 | o,
y: 0 | u,
width: 0 | c,
height: 0 | h
  }), {
result: A,
cancelFn: () => g.terminate()
  };
}

function s(e, t, n, r) {
  let {
x: a,
y: l,
scaledCropWidth: s,
scaledCropHeight: o,
canvasWidth: u,
canvasHeight: c
  } = i(e, t, n, r), h = document.createElement('canvas');
  h.width = u, h.height = c;
  let d = h.getContext('2d');
  return null != d && d.drawImage(e, a, l, s, o, 0, 0, h.width, h.height), h.toDataURL('image/png');
}

function o(e, t, n) {
  return {
x: (0, r.clamp)(e, n.left, n.right),
y: (0, r.clamp)(t, n.bottom, n.top)
  };
}

function u(e, t, n, r) {
  let i = n,
l = r;
  return (n > a.vJ && (i = a.vJ, l = r * (a.vJ / n)), n / r < e) ? {
width: i,
height: l
  } : {
width: t / l * i,
height: t
  };
}

function c(e, t, n) {
  switch (e) {
case a.pC.AVATAR:
case a.pC.AVATAR_DECORATION:
  return {
    width: t,
      height: n
  };
case a.pC.BANNER:
  return u(a.MY, a.qj, t, n);
case a.pC.GUILD_BANNER:
  return u(a.Ij, a.C5, t, n);
case a.pC.VIDEO_BACKGROUND:
  return u(a.Ff, a.PB, t, n);
case a.pC.SCHEDULED_EVENT_IMAGE:
  return u(a.ut, a.WV, t, n);
case a.pC.HOME_HEADER:
  return u(a.sX, a.SW, t, n);
  }
}

function h(e, t, n) {
  let r = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
},
a = e - n.width,
i = t - n.height;
  return 0 !== a && (r.left = -Math.abs(a / 2), r.right = a / 2), 0 !== i && (r.bottom = -Math.abs(i / 2), r.top = i / 2), r;
}

function d(e, t, n, r) {
  switch (e) {
case a.pC.AVATAR:
case a.pC.AVATAR_DECORATION:
  let i = Math.min(t, n);
  return {
    width: i,
      height: i
  };
case a.pC.BANNER:
  let l = Math.min(t, a.vJ);
  return {
    width: l,
      height: l * (1 / a.MY)
  };
case a.pC.GUILD_BANNER:
  let s = Math.min(t, a.vJ);
  return {
    width: s,
      height: Math.min(9 / 16 * s, r)
  };
case a.pC.VIDEO_BACKGROUND:
  let o = Math.min(t, a.vJ);
  return {
    width: o,
      height: 9 / 16 * o
  };
case a.pC.SCHEDULED_EVENT_IMAGE:
  let u = Math.min(t, a.vJ);
  return {
    width: u,
      height: 0.4 * u
  };
case a.pC.HOME_HEADER:
  let c = Math.min(t, a.vJ);
  return {
    width: c,
      height: c * (1 / a.sX)
  };
  }
}

function g(e, t, n) {
  let r = e.naturalWidth / e.naturalHeight,
a = t,
i = n;
  e.naturalWidth > e.naturalHeight ? a /= r : i *= r;
  let l = {
height: a,
width: i
  };
  return s(e, {
width: e.width,
height: e.height
  }, {
x: 0,
y: 0
  }, l);
}
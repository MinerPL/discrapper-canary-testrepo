
function s(e, t, n, s) {
  let a = e.naturalWidth / e.width,
i = t.width / 2,
r = t.height / 2,
l = (e.width / 2 - i - n.x) * a,
o = (e.height / 2 - r - n.y) * a,
c = t.width * a,
d = t.height * a,
u = Math.min(c, s.width),
_ = Math.min(d, s.height);
  return {
x: l,
y: o,
scaledCropWidth: c,
scaledCropHeight: d,
canvasWidth: u,
canvasHeight: _
  };
}

function a(e, t, n, a) {
  let {
x: i,
y: r,
scaledCropWidth: l,
scaledCropHeight: o,
canvasWidth: c,
canvasHeight: d
  } = s(e, t, n, a), u = document.createElement('canvas');
  u.width = c, u.height = d;
  let _ = u.getContext('2d');
  return null != _ && _.drawImage(e, i, r, l, o, 0, 0, u.width, u.height), u.toDataURL('image/png');
}

function i(e, t, n) {
  let s = e.naturalWidth / e.naturalHeight,
i = t,
r = n;
  e.naturalWidth > e.naturalHeight ? i /= s : r *= s;
  let l = {
height: i,
width: r
  };
  return a(e, {
width: e.width,
height: e.height
  }, {
x: 0,
y: 0
  }, l);
}
n.d(t, {
  Ae: function() {
return i;
  },
  PT: function() {
return a;
  },
  eu: function() {
return s;
  }
});
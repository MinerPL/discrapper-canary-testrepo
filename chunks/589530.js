n.d(t, {
  FC: function() {
return a;
  },
  Zj: function() {
return l;
  },
  jA: function() {
return o;
  },
  rs: function() {
return s;
  }
});
var r = n(433517);
let i = 'MediaPlayerVolume';

function a() {
  var e;
  let {
volume: t
  } = null !== (e = r.K.get(i)) && void 0 !== e ? e : {};
  return 'number' != typeof t && (t = 1), t = Math.min(1, Math.max(0, t));
}

function o(e) {
  r.K.set(i, {
volume: e,
muted: s()
  });
}

function s() {
  var e;
  let {
muted: t
  } = null !== (e = r.K.get(i)) && void 0 !== e ? e : {};
  return 'boolean' != typeof t && (t = !1), t;
}

function l(e) {
  r.K.set(i, {
volume: a(),
muted: e
  });
}
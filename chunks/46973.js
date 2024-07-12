n.d(t, {
  Mt: function() {
return h;
  },
  Sh: function() {
return u.S;
  },
  TO: function() {
return l;
  },
  W$: function() {
return o;
  },
  Yn: function() {
return _.Yn;
  },
  aB: function() {
return d.a;
  },
  aj: function() {
return c.a;
  },
  jj: function() {
return f;
  },
  zZ: function() {
return s;
  }
});
var r, i, a, o, s, l, u = n(839548),
  c = n(60541),
  d = n(946695),
  _ = n(65154);

function E(e) {
  switch (e) {
case _.AS.NATIVE:
  return n(743426).Z;
case _.AS.WEBRTC:
  return n(959856).Z;
case _.AS.DUMMY:
default:
  return n(135670).Z;
  }
}

function f() {
  var e;
  return null !== (e = [
_.AS.NATIVE,
_.AS.WEBRTC
  ].find(e => E(e).supported())) && void 0 !== e ? e : _.AS.DUMMY;
}

function h(e) {
  return new(E(e))();
}
(r = o || (o = {})).INPUT_DEVICE = 'input_device', r.STREAM = 'stream', (i = s || (s = {})).NONE = '', i.BACKGROUND_BLUR = 'background_blur', i.BACKGROUND_REPLACEMENT = 'background_replacement', (a = l || (l = {})).CAMERA_BACKGROUND_PREVIEW = 'cameraBackgroundPreview', a.CAMERA_BACKGROUND_LIVE = 'cameraBackgroundLive';
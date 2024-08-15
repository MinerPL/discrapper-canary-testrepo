n.d(t, {
  Mt: function() {
return f;
  },
  Sh: function() {
return u.S;
  },
  TO: function() {
return l;
  },
  W$: function() {
return s;
  },
  Yn: function() {
return d.Yn;
  },
  aB: function() {
return c.a;
  },
  jj: function() {
return E;
  },
  zZ: function() {
return o;
  }
});
var r, i, a, s, o, l, u = n(839548),
  c = n(946695),
  d = n(65154);

function _(e) {
  switch (e) {
case d.AS.NATIVE:
  return n(743426).Z;
case d.AS.WEBRTC:
  return n(959856).Z;
case d.AS.DUMMY:
default:
  return n(135670).Z;
  }
}

function E() {
  var e;
  return null !== (e = [
d.AS.NATIVE,
d.AS.WEBRTC
  ].find(e => _(e).supported())) && void 0 !== e ? e : d.AS.DUMMY;
}

function f(e) {
  return new(_(e))();
}
(r = s || (s = {})).INPUT_DEVICE = 'input_device', r.STREAM = 'stream', (i = o || (o = {})).NONE = '', i.BACKGROUND_BLUR = 'background_blur', i.BACKGROUND_REPLACEMENT = 'background_replacement', (a = l || (l = {})).CAMERA_BACKGROUND_PREVIEW = 'cameraBackgroundPreview', a.CAMERA_BACKGROUND_LIVE = 'cameraBackgroundLive';
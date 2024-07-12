let r, i;

function a() {
  if (null == r)
throw Error('Native dependencies have not been injected.');
}

function o(e) {
  r = e;
}

function s() {
  return a(), r.supported();
}

function l(e) {
  return a(), r.supportsFeature(e);
}

function u(e) {
  a(), r.setProcessPriority(e);
}

function c() {
  return a(), null != i ? i : i = r.getVoiceEngine();
}
n.d(t, {
  Zh: function() {
return s;
  },
  eJ: function() {
return l;
  },
  f3: function() {
return o;
  },
  p8: function() {
return u;
  },
  zS: function() {
return c;
  }
}), n(411104);
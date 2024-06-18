"use strict";
n.d(t, {
  C4: function() {
    return l
  },
  RF: function() {
    return a
  },
  pX: function() {
    return s
  },
  vw: function() {
    return o
  },
  yV: function() {
    return u
  }
});
var i = n(352981),
  r = n(732845);

function s() {
  let {
    enabled: e
  } = r.mv.useExperiment({
    location: "adf3ea_1"
  });
  return e
}

function o() {
  let {
    enabled: e
  } = r.mv.getCurrentConfig({
    location: "adf3ea_2"
  });
  return e
}

function a(e, t) {
  let {
    enabled: n
  } = r.xB.useExperiment({
    location: t
  }), s = (0, i.y)(e, t);
  return n && s
}

function l(e, t) {
  let {
    enabled: n
  } = r.xB.getCurrentConfig({
    location: t
  }), s = (0, i.p)(e, t);
  return n && s
}

function u(e) {
  let {
    enabled: t
  } = r.ac.useExperiment({
    location: e
  });
  return t
}
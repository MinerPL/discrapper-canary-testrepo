"use strict";
n.d(t, {
  Kw: function() {
    return o
  },
  Po: function() {
    return l
  },
  hv: function() {
    return a
  }
});
var i = n(570140),
  r = n(626135),
  s = n(981631);

function o(e) {
  r.default.track(s.rMx.HOTSPOT_HIDDEN, {
    hotspot_location: e
  }), i.Z.wait(() => {
    i.Z.dispatch({
      type: "HOTSPOT_HIDE",
      location: e
    })
  })
}

function a(e, t) {
  i.Z.dispatch({
    type: "HOTSPOT_OVERRIDE_SET",
    location: e,
    enabled: t
  })
}

function l(e) {
  i.Z.dispatch({
    type: "HOTSPOT_OVERRIDE_CLEAR",
    location: e
  })
}
"use strict";
n.d(t, {
  CP: function() {
    return l
  },
  Je: function() {
    return I
  },
  KJ: function() {
    return c
  },
  OT: function() {
    return u
  },
  Tu: function() {
    return a
  },
  d0: function() {
    return d
  },
  lK: function() {
    return E
  },
  xI: function() {
    return _
  }
}), n(47120), n(724458);
var i = n(695346),
  r = n(594174),
  s = n(55563),
  o = n(981631);

function a(e, t) {
  return "".concat(e, ":").concat(t)
}

function l(e) {
  let [t, n] = e.split(":");
  return {
    applicationId: t,
    branchId: n
  }
}

function u(e, t) {
  if (!i.G6.getSetting() || i.co.getSetting() === o.Skl.INVISIBLE) return !1;
  let n = t.getActiveLibraryApplication(e);
  return null == n || !n.hasFlag(o.eHb.PRIVATE)
}

function _(e, t) {
  return 0 === t ? 100 : e / t * 100
}

function d(e, t, n) {
  return !(null == t || n.enabled && t.hasFlag(o.eHb.PRIVATE)) && !t.isHidden()
}

function c(e) {
  return null == e ? null : e.type === o.vxO.INSTALLING || e.type === o.vxO.UPDATING || e.type === o.vxO.UNINSTALLING ? e : null
}

function E(e) {
  return e.reduce((e, t) => {
    let n = c(t);
    return null == n || t.type === o.vxO.UP_TO_DATE ? e : {
      total: e.total + Number(n.total),
      progress: e.progress + Number(n.progress)
    }
  }, {
    total: 0,
    progress: 0
  })
}

function I(e) {
  return !!e.isDiscordApplication() && e.isEntitled(r.default.getCurrentUser(), s.Z)
}
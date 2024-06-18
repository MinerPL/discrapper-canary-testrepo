"use strict";
n.d(t, {
  CZ: function() {
    return a
  },
  LB: function() {
    return u
  },
  O5: function() {
    return l
  },
  QI: function() {
    return _
  },
  YC: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s = n(433517),
  o = n(689938);
(r = i || (i = {})).CLASSIC = "classic", r.DETUNE = "detune", r.RETRO = "retro", r.BUBBLE = "bop", r.DUCKY = "ducky", r.LOFI = "lofi", r.ASMR = "asmr", r.DISCODO = "discodo";
let a = "custom_notification_sounds_asmr",
  l = "custom_notification_sounds_discodo";

function u() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = function(e) {
      if (!e) return [];
      let t = [];
      return s.K.get(l, !1) && t.push({
        value: "discodo",
        label: "DISCODO",
        description: "๑(◕‿◕)๑",
        requirePremium: !0
      }), s.K.get(a, !1) && t.push({
        value: "asmr",
        label: o.Z.Messages.SOUNDPACK_ASMR_LABEL,
        description: o.Z.Messages.SOUNDPACK_ASMR_DESCRIPTION,
        requirePremium: !0
      }), t
    }(e);
  return [{
    value: "classic",
    label: o.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
    description: o.Z.Messages.SOUNDPACK_DEFAULT_DESCRIPTION,
    requirePremium: !1
  }, {
    value: "retro",
    label: o.Z.Messages.SOUNDPACK_RETRO_LABEL,
    description: o.Z.Messages.SOUNDPACK_RETRO_DESCRIPTION,
    requirePremium: !0
  }, {
    value: "lofi",
    label: o.Z.Messages.SOUNDPACK_LOFI_LABEL,
    description: o.Z.Messages.SOUNDPACK_LOFI_DESCRIPTION,
    requirePremium: !0
  }, {
    value: "ducky",
    label: o.Z.Messages.SOUNDPACK_DUCKY_LABEL,
    description: o.Z.Messages.SOUNDPACK_DUCKY_DESCRIPTION,
    requirePremium: !0
  }, {
    value: "bop",
    label: o.Z.Messages.SOUNDPACK_BUBBLE_LABEL,
    description: o.Z.Messages.SOUNDPACK_BUBBLE_DESCRIPTION,
    requirePremium: !0
  }, ...t]
}

function _() {
  return [{
    value: "classic",
    label: o.Z.Messages.SOUNDPACK_CLASSIC_LABEL
  }, {
    value: "detune",
    label: o.Z.Messages.SOUNDPACK_DETUNE_LABEL
  }]
}
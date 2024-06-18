"use strict";
t.d(s, {
  t: function() {
    return h
  }
}), t(411104);
var n = t(120356),
  i = t.n(n),
  l = t(263704),
  a = t(642113),
  r = t(242315),
  o = t(115102),
  c = t(241820),
  d = t(536952),
  u = t(503705),
  E = t(170039),
  _ = t(898140),
  I = t(68736),
  T = t(761374),
  N = t(363138),
  m = t(267642),
  S = t(426305);

function h(e, s) {
  if (s) return {
    icon: l.Z,
    className: S.unlocked
  };
  switch (e) {
    case m.Ro.EMOJI:
      return {
        icon: a.Z, className: i()(S.icon, S.emoji)
      };
    case m.Ro.AUDIO:
      return {
        icon: r.Z, className: i()(S.icon, S.audio)
      };
    case m.Ro.ANIMATED:
      return {
        icon: o.Z, className: i()(S.icon, S.animated)
      };
    case m.Ro.CUSTOMIZATION:
      return {
        icon: d.Z, className: i()(S.icon, S.customization)
      };
    case m.Ro.UPLOAD:
      return {
        icon: N.Z, className: i()(S.icon, S.upload)
      };
    case m.Ro.VANITY:
      return {
        icon: _.Z, className: i()(S.icon, S.vanity)
      };
    case m.Ro.STREAM:
      return {
        icon: T.Z, className: i()(S.icon, S.stream)
      };
    case m.Ro.STICKER:
      return {
        icon: I.Z, className: i()(S.icon, S.sticker)
      };
    case m.Ro.CUSTOM_ROLE_ICON:
      return {
        icon: c.Z, className: i()(S.icon, S.customRoleIcon)
      };
    case m.Ro.STAGE_VIDEO:
      return {
        icon: E.Z, className: i()(S.icon, S.stage)
      };
    case m.Ro.SOUNDBOARD:
      return {
        icon: u.Z, className: i()(S.icon, S.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}
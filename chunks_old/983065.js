"use strict";
s.r(t), s.d(t, {
  getPerkIcon: function() {
    return N
  }
}), s("70102");
var a = s("414456"),
  l = s.n(a),
  n = s("36694"),
  i = s("46829"),
  r = s("272339"),
  o = s("110006"),
  d = s("682344"),
  u = s("238521"),
  c = s("754576"),
  E = s("228427"),
  _ = s("290581"),
  I = s("595086"),
  T = s("619911"),
  S = s("698015"),
  f = s("427459"),
  m = s("532749");

function N(e, t) {
  if (t) return {
    icon: n.default,
    className: m.unlocked
  };
  switch (e) {
    case f.PerkIcons.EMOJI:
      return {
        icon: i.default, className: l(m.icon, m.emoji)
      };
    case f.PerkIcons.AUDIO:
      return {
        icon: r.default, className: l(m.icon, m.audio)
      };
    case f.PerkIcons.ANIMATED:
      return {
        icon: o.default, className: l(m.icon, m.animated)
      };
    case f.PerkIcons.CUSTOMIZATION:
      return {
        icon: u.default, className: l(m.icon, m.customization)
      };
    case f.PerkIcons.UPLOAD:
      return {
        icon: S.default, className: l(m.icon, m.upload)
      };
    case f.PerkIcons.VANITY:
      return {
        icon: _.default, className: l(m.icon, m.vanity)
      };
    case f.PerkIcons.STREAM:
      return {
        icon: T.default, className: l(m.icon, m.stream)
      };
    case f.PerkIcons.STICKER:
      return {
        icon: I.default, className: l(m.icon, m.sticker)
      };
    case f.PerkIcons.CUSTOM_ROLE_ICON:
      return {
        icon: d.default, className: l(m.icon, m.customRoleIcon)
      };
    case f.PerkIcons.STAGE_VIDEO:
      return {
        icon: E.default, className: l(m.icon, m.stage)
      };
    case f.PerkIcons.SOUNDBOARD:
      return {
        icon: c.default, className: l(m.icon, m.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}
"use strict";
s.r(t), s.d(t, {
  getPerkIcon: function() {
    return N
  }
}), s("411104");
var a = s("803997"),
  l = s.n(a),
  n = s("263704"),
  i = s("642113"),
  r = s("242315"),
  o = s("115102"),
  d = s("241820"),
  u = s("536952"),
  c = s("503705"),
  E = s("170039"),
  _ = s("898140"),
  I = s("68736"),
  T = s("761374"),
  S = s("363138"),
  f = s("267642"),
  m = s("599083");

function N(e, t) {
  if (t) return {
    icon: n.default,
    className: m.unlocked
  };
  switch (e) {
    case f.PerkIcons.EMOJI:
      return {
        icon: i.default, className: l()(m.icon, m.emoji)
      };
    case f.PerkIcons.AUDIO:
      return {
        icon: r.default, className: l()(m.icon, m.audio)
      };
    case f.PerkIcons.ANIMATED:
      return {
        icon: o.default, className: l()(m.icon, m.animated)
      };
    case f.PerkIcons.CUSTOMIZATION:
      return {
        icon: u.default, className: l()(m.icon, m.customization)
      };
    case f.PerkIcons.UPLOAD:
      return {
        icon: S.default, className: l()(m.icon, m.upload)
      };
    case f.PerkIcons.VANITY:
      return {
        icon: _.default, className: l()(m.icon, m.vanity)
      };
    case f.PerkIcons.STREAM:
      return {
        icon: T.default, className: l()(m.icon, m.stream)
      };
    case f.PerkIcons.STICKER:
      return {
        icon: I.default, className: l()(m.icon, m.sticker)
      };
    case f.PerkIcons.CUSTOM_ROLE_ICON:
      return {
        icon: d.default, className: l()(m.icon, m.customRoleIcon)
      };
    case f.PerkIcons.STAGE_VIDEO:
      return {
        icon: E.default, className: l()(m.icon, m.stage)
      };
    case f.PerkIcons.SOUNDBOARD:
      return {
        icon: c.default, className: l()(m.icon, m.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}
"use strict";
t.d(s, {
  Z: function() {
    return E
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(727843),
  a = t(944537),
  r = t(290348),
  o = t(91354),
  c = t(662961),
  d = t(689938),
  u = t(169769);

function E(e) {
  let {
    "aria-labelledby": s,
    disabled: t = !1
  } = e, {
    editStateId: E,
    guildId: _
  } = (0, l.N)(), [I, T] = r.GP(E, _);
  return (0, n.jsx)(i.RadioGroup, {
    className: u.__invalid_channelAccessSelect,
    radioItemClassName: u.__invalid_channelAccessSelectRadioButton,
    withTransparentBackground: !0,
    size: i.RadioGroup.Sizes.NOT_SET,
    onChange: e => {
      let {
        value: s
      } = e;
      return T(s)
    },
    options: [{
      name: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_BENEFITS_SELECT_CHANNELS_MANUALLY_LABEL,
      value: a.I.SOME_CHANNELS_ACCESS,
      icon: c.Z,
      radioBarClassName: u.__invalid_channelAccessSelectRadioBar
    }, {
      name: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_BENEFITS_INCLUDE_ALL_CHANNELS_LABEL,
      value: a.I.ALL_CHANNELS_ACCESS,
      icon: o.Z,
      radioBarClassName: u.__invalid_channelAccessSelectRadioBar
    }],
    value: I,
    "aria-labelledby": s,
    disabled: t
  })
}
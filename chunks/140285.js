n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(727843),
  r = n(944537),
  l = n(290348),
  o = n(91354),
  c = n(662961),
  d = n(689938),
  u = n(325850);

function _(e) {
  let {
'aria-labelledby': t,
disabled: n = !1
  } = e, {
editStateId: _,
guildId: I
  } = (0, i.N)(), [E, T] = l.GP(_, I);
  return (0, s.jsx)(a.RadioGroup, {
className: u.__invalid_channelAccessSelect,
radioItemClassName: u.__invalid_channelAccessSelectRadioButton,
withTransparentBackground: !0,
size: a.RadioGroup.Sizes.NOT_SET,
onChange: e => {
  let {
    value: t
  } = e;
  return T(t);
},
options: [{
    name: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_BENEFITS_SELECT_CHANNELS_MANUALLY_LABEL,
    value: r.I.SOME_CHANNELS_ACCESS,
    icon: (0, a.makeIconCompat)(c.Z),
    radioBarClassName: u.__invalid_channelAccessSelectRadioBar
  },
  {
    name: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_BENEFITS_INCLUDE_ALL_CHANNELS_LABEL,
    value: r.I.ALL_CHANNELS_ACCESS,
    icon: (0, a.makeIconCompat)(o.Z),
    radioBarClassName: u.__invalid_channelAccessSelectRadioBar
  }
],
value: E,
'aria-labelledby': t,
disabled: n
  });
}
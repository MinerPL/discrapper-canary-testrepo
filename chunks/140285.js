"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120");
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("727843"),
  i = s("944537"),
  r = s("290348"),
  o = s("91354"),
  d = s("662961"),
  u = s("689938"),
  c = s("606353");

function E(e) {
  let {
    "aria-labelledby": t,
    disabled: s = !1
  } = e, {
    editStateId: E,
    guildId: _
  } = (0, n.useEditStateContext)(), [I, T] = r.useChannelAccessFormat(E, _);
  return (0, a.jsx)(l.RadioGroup, {
    className: c.__invalid_channelAccessSelect,
    radioItemClassName: c.__invalid_channelAccessSelectRadioButton,
    withTransparentBackground: !0,
    size: l.RadioGroup.Sizes.NOT_SET,
    onChange: e => {
      let {
        value: t
      } = e;
      return T(t)
    },
    options: [{
      name: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_BENEFITS_SELECT_CHANNELS_MANUALLY_LABEL,
      value: i.AllChannelAccessOptions.SOME_CHANNELS_ACCESS,
      icon: d.default,
      radioBarClassName: c.__invalid_channelAccessSelectRadioBar
    }, {
      name: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_BENEFITS_INCLUDE_ALL_CHANNELS_LABEL,
      value: i.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
      icon: o.default,
      radioBarClassName: c.__invalid_channelAccessSelectRadioBar
    }],
    value: I,
    "aria-labelledby": t,
    disabled: s
  })
}
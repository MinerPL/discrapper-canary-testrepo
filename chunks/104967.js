"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983");
s("884691");
var l = s("77078"),
  n = s("406876"),
  i = s("971150"),
  r = s("167109"),
  o = s("894429"),
  d = s("981737"),
  u = s("782340"),
  c = s("325224");

function E(e) {
  let {
    "aria-labelledby": t,
    disabled: s = !1
  } = e, {
    editStateId: E,
    guildId: _
  } = (0, n.useEditStateContext)(), [I, T] = r.useChannelAccessFormat(E, _);
  return (0, a.jsx)(l.RadioGroup, {
    className: c.channelAccessSelect,
    radioItemClassName: c.channelAccessSelectRadioButton,
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
      radioBarClassName: c.channelAccessSelectRadioBar
    }, {
      name: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_BENEFITS_INCLUDE_ALL_CHANNELS_LABEL,
      value: i.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
      icon: o.default,
      radioBarClassName: c.channelAccessSelectRadioBar
    }],
    value: I,
    "aria-labelledby": t,
    disabled: s
  })
}
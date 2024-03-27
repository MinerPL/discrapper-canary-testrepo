"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("79112"),
  i = n("963662"),
  r = n("49111"),
  o = n("782340"),
  u = n("37476");
class d extends s.PureComponent {
  render() {
    return (0, a.jsx)(i.default, {
      guild: this.props.guild,
      onClick: () => l.default.open(r.UserSettingsSections.ACCOUNT),
      message: o.default.Messages.TWO_FA_GUILD_MFA_WARNING_MESSAGE_WITH_SPACING.format(),
      cta: o.default.Messages.TWO_FA_GUILD_MFA_WARNING_RESOLVE_BUTTON,
      trackingSource: r.ChannelNoticeCtaSources.GUILD_MFA_WARNING,
      type: r.ChannelNoticeTypes.MFA_WARNING,
      image: u,
      imageMarginX: 54,
      undismissable: !0
    })
  }
}
var c = d
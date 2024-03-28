"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("230711"),
  i = n("82950"),
  r = n("981631"),
  o = n("689938"),
  u = n("510342");
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
t.default = d
"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("82950"),
  r = n("623624"),
  o = n("650774"),
  u = n("981631"),
  d = n("921944"),
  c = n("689938"),
  f = n("241626");
class E extends s.PureComponent {
  render() {
    let {
      guild: e,
      memberCount: t,
      markAsDismissed: n
    } = this.props;
    return (0, a.jsx)(i.default, {
      guild: e,
      onDismissed: () => n(d.ContentDismissActionType.UNKNOWN),
      onClick: this.handleButtonClick,
      message: null == t || t < 30 ? c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_SMALL_GUILD : c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE,
      cta: c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_BUTTON,
      trackingSource: u.ChannelNoticeCtaSources.GUILD_SUBSCRIPTION_NOTICE,
      type: u.ChannelNoticeTypes.GUILD_BOOSTING,
      image: f,
      imageMarginX: 26
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "handleButtonClick", a = () => {
      let {
        guild: e
      } = this.props;
      (0, r.openGuildBoostingMarketingModal)({
        guildId: e.id,
        location: {
          section: u.AnalyticsSections.CHANNEL_NOTICE,
          object: u.AnalyticsObjects.SERVER_STATUS_CTA
        }
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}
t.default = l.default.connectStores([o.default], e => {
  let {
    guild: t
  } = e;
  return {
    memberCount: o.default.getMemberCount(t.id)
  }
})(E)
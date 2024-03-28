"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("949389"),
  i = n("82950"),
  r = n("434404"),
  o = n("981631"),
  u = n("689938"),
  d = n("438825");
t.default = e => {
  let {
    guild: t
  } = e, n = s.useCallback(() => {
    (0, l.hideEnablePublicGuildUpsellNotice)(t.id)
  }, [t.id]);
  return (0, a.jsx)(i.default, {
    guild: t,
    onDismissed: n,
    onClick: () => r.default.open(t.id, o.GuildSettingsSections.COMMUNITY),
    message: u.default.Messages.NOTICE_ENABLE_PUBLIC_GUILD_UPSELL_MESSAGE,
    trackingSource: o.ChannelNoticeCtaSources.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
    type: o.ChannelNoticeTypes.PUBLIC_UPSELL,
    image: d,
    cta: u.default.Messages.LEARN_MORE
  })
}
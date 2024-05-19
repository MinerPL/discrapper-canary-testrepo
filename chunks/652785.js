"use strict";
n.r(t), n.d(t, {
  CHANNEL_NOTICES: function() {
    return E
  },
  CHANNEL_NOTICE_STORES: function() {
    return h
  },
  LAST_HIDDEN_CHANNEL_NOTICE: function() {
    return f
  }
});
var a = n("524437"),
  s = n("823385"),
  l = n("327689"),
  i = n("421176"),
  r = n("989695"),
  o = n("456065"),
  u = n("683743"),
  d = n("823379"),
  c = n("981631");
let f = "lastHiddenChannelNotice",
  E = [{
    type: c.ChannelNoticeTypes.CLAN_ADMIN_UPSELL,
    dismissibleContentType: a.DismissibleContent.CHANNEL_LIST_CLAN_ADMIN_UPSELL
  }, {
    type: c.ChannelNoticeTypes.GUILD_BOOSTING,
    store: i.default,
    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
  }, {
    type: c.ChannelNoticeTypes.GUILD_BANNER,
    store: l.default,
    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER
  }, {
    type: c.ChannelNoticeTypes.INVITE,
    store: u.default,
    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_INVITE
  }, {
    type: c.ChannelNoticeTypes.HUB_LINK,
    store: o.default,
    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_HUBLINK
  }, {
    type: c.ChannelNoticeTypes.QUICKSWITCHER,
    store: s.default,
    dismissibleContentType: a.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER
  }, {
    type: c.ChannelNoticeTypes.GUILD_ONBOARDING_UPSELL,
    store: r.default,
    dismissibleContentType: a.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE
  }, {
    type: c.ChannelNoticeTypes.LINKED_ROLES_ADMIN,
    dismissibleContentType: a.DismissibleContent.LINKED_ROLE_ADMIN_GUILD
  }],
  h = E.map(e => e.store).filter(d.isNotNullish)
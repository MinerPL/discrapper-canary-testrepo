n.d(t, {
  $: function() {
return s;
  },
  a: function() {
return _;
  }
});
var r, i, a, s, o = n(231053),
  l = n(689938);
(r = a || (a = {})).DEFAULT = 'Custom Emoji Popout', r.CROSS_SERVER = 'Custom Emoji Popout (Cross-Server)', r.UPSELL_CURRENT_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Current-Server)', r.UPSELL_CROSS_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Cross-Server)', r.UPSELL_CROSS_SERVER_JOINABLE = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)', r.UPSELL_CROSS_SERVER_UNJOINABLE = 'Custom Emoji Popout (Soft Upsell)', (i = s || (s = {})).GET_PREMIUM = 'GET_PREMIUM', i.JOIN_GUILD = 'JOIN_GUILD', i.UNAVAILABLE = 'UNAVAILABLE';
let u = e => {
let {
  isPremium: t,
  hasJoinedEmojiSourceGuild: n,
  isUnusableRoleSubscriptionEmoji: r,
  emojiComesFromCurrentGuild: i,
  isDiscoverable: a
} = e, s = 'Custom Emoji Popout';
return t && !n && a ? s = 'Custom Emoji Popout (Cross-Server)' : t || !n || r ? !t && !n && (s = a ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : s = i ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)', s;
  },
  c = e => {
let {
  sourceType: t,
  expressionSourceApplication: n,
  isPremium: r,
  hasJoinedEmojiSourceGuild: i,
  isUnusableRoleSubscriptionEmoji: a,
  isDiscoverable: s,
  emojiComesFromCurrentGuild: u,
  userIsRoleSubscriber: c,
  isRoleSubscriptionEmoji: d,
  shouldHideRoleSubscriptionCTA: _,
  onOpenPremiumSettings: E
} = e, f = null;
return f = t === o.w6.APPLICATION && null != n ? l.Z.Messages.EMOJI_POPOUT_APPLICATION_DESCRIPTION.format({
  appName: n.name
}) : r ? i ? d ? _ && a ? l.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : a ? c ? l.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : l.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : l.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : u ? l.Z.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : l.Z.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : s ? l.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : l.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : i ? _ && a ? l.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : a ? c ? l.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : l.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : u ? l.Z.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : l.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : s ? l.Z.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : l.Z.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
  openPremiumSettings: E
});
  },
  d = e => {
let {
  isPremium: t,
  hasJoinedEmojiSourceGuild: n,
  isUnusableRoleSubscriptionEmoji: r,
  isDiscoverable: i
} = e, a = !n && i;
return t && a ? {
  type: 'JOIN_GUILD',
  text: l.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
  description: null
} : !t && (n && !r || a) ? {
  type: 'GET_PREMIUM',
  text: l.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
  description: null
} : {
  type: 'UNAVAILABLE',
  text: null,
  description: null
};
  },
  _ = e => {
let t = c(e),
  n = u(e);
return {
  ...d(e),
  emojiDescription: t,
  analyticsType: n
};
  };
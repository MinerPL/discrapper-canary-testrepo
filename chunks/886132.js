n.d(t, {
  $: function() {
return o;
  },
  a: function() {
return d;
  }
});
var r, i, a, o, s = n(689938);
(r = a || (a = {})).DEFAULT = 'Custom Emoji Popout', r.CROSS_SERVER = 'Custom Emoji Popout (Cross-Server)', r.UPSELL_CURRENT_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Current-Server)', r.UPSELL_CROSS_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Cross-Server)', r.UPSELL_CROSS_SERVER_JOINABLE = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)', r.UPSELL_CROSS_SERVER_UNJOINABLE = 'Custom Emoji Popout (Soft Upsell)', (i = o || (o = {})).GET_PREMIUM = 'GET_PREMIUM', i.JOIN_GUILD = 'JOIN_GUILD', i.UNAVAILABLE = 'UNAVAILABLE';
let l = e => {
let {
  isPremium: t,
  hasJoinedEmojiSourceGuild: n,
  isUnusableRoleSubscriptionEmoji: r,
  emojiComesFromCurrentGuild: i,
  isDiscoverable: a
} = e, o = 'Custom Emoji Popout';
return t && !n && a ? o = 'Custom Emoji Popout (Cross-Server)' : t || !n || r ? !t && !n && (o = a ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : o = i ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)', o;
  },
  u = e => {
let {
  isPremium: t,
  hasJoinedEmojiSourceGuild: n,
  isUnusableRoleSubscriptionEmoji: r,
  isDiscoverable: i,
  emojiComesFromCurrentGuild: a,
  userIsRoleSubscriber: o,
  isRoleSubscriptionEmoji: l,
  shouldHideRoleSubscriptionCTA: u,
  onOpenPremiumSettings: c
} = e, d = null;
return d = t ? n ? l ? u && r ? s.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : r ? o ? s.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : s.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : s.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : a ? s.Z.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : s.Z.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : i ? s.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : s.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? u && r ? s.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : r ? o ? s.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : s.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : a ? s.Z.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : s.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : i ? s.Z.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : s.Z.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
  openPremiumSettings: c
});
  },
  c = e => {
let {
  isPremium: t,
  hasJoinedEmojiSourceGuild: n,
  isUnusableRoleSubscriptionEmoji: r,
  isDiscoverable: i
} = e, a = !n && i;
return t && a ? {
  type: 'JOIN_GUILD',
  text: s.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
  description: null
} : !t && (n && !r || a) ? {
  type: 'GET_PREMIUM',
  text: s.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
  description: null
} : {
  type: 'UNAVAILABLE',
  text: null,
  description: null
};
  },
  d = e => {
let t = u(e),
  n = l(e);
return {
  ...c(e),
  emojiDescription: t,
  analyticsType: n
};
  };
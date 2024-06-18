"use strict";
n.d(t, {
  $: function() {
    return o
  },
  a: function() {
    return d
  }
});
var i, r, s, o, a = n(689938);
(i = s || (s = {})).DEFAULT = "Custom Emoji Popout", i.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", i.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", i.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", i.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", i.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (r = o || (o = {})).GET_PREMIUM = "GET_PREMIUM", r.JOIN_GUILD = "JOIN_GUILD", r.UNAVAILABLE = "UNAVAILABLE";
let l = e => {
    let {
      isPremium: t,
      hasJoinedEmojiSourceGuild: n,
      isUnusableRoleSubscriptionEmoji: i,
      emojiComesFromCurrentGuild: r,
      isDiscoverable: s
    } = e, o = "Custom Emoji Popout";
    return t && !n && s ? o = "Custom Emoji Popout (Cross-Server)" : t || !n || i ? !t && !n && (o = s ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : o = r ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", o
  },
  u = e => {
    let {
      isPremium: t,
      hasJoinedEmojiSourceGuild: n,
      isUnusableRoleSubscriptionEmoji: i,
      isDiscoverable: r,
      emojiComesFromCurrentGuild: s,
      userIsRoleSubscriber: o,
      isRoleSubscriptionEmoji: l,
      shouldHideRoleSubscriptionCTA: u,
      onOpenPremiumSettings: _
    } = e, d = null;
    return d = t ? n ? l ? u && i ? a.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : i ? o ? a.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : a.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : a.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : s ? a.Z.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : a.Z.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : r ? a.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : a.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? u && i ? a.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : i ? o ? a.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : a.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : s ? a.Z.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : a.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : r ? a.Z.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : a.Z.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: _
    })
  },
  _ = e => {
    let {
      isPremium: t,
      hasJoinedEmojiSourceGuild: n,
      isUnusableRoleSubscriptionEmoji: i,
      isDiscoverable: r
    } = e, s = !n && r;
    return t && s ? {
      type: "JOIN_GUILD",
      text: a.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
      description: null
    } : !t && (n && !i || s) ? {
      type: "GET_PREMIUM",
      text: a.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
      description: null
    } : {
      type: "UNAVAILABLE",
      text: null,
      description: null
    }
  },
  d = e => {
    let t = u(e),
      n = l(e);
    return {
      ..._(e),
      emojiDescription: t,
      analyticsType: n
    }
  }
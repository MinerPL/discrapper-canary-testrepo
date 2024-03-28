"use strict";
n.r(t), n.d(t, {
  hideEnablePublicGuildUpsellNotice: function() {
    return l
  },
  hideMaxMemberCountChannelNotice: function() {
    return i
  },
  hidePremiumGuildGracePeriodNotice: function() {
    return s
  }
});
var a = n("570140");

function s(e) {
  a.default.dispatch({
    type: "BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS",
    guildId: e
  })
}

function l(e) {
  a.default.dispatch({
    type: "PUBLIC_UPSELL_NOTICE_DISMISS",
    guildId: e
  })
}

function i(e) {
  a.default.dispatch({
    type: "MAX_MEMBER_COUNT_NOTICE_DISMISS",
    guildId: e
  })
}
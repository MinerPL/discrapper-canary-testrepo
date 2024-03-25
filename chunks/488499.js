"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("397056"),
  l = s("782340"),
  n = {
    getStatusErrorText: function(e) {
      switch (e) {
        case a.PayoutStatuses.CANCELED:
        case a.PayoutStatuses.DEFERRED:
          return l.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED;
        case a.PayoutStatuses.DEFERRED_INTERNAL:
          return l.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED;
        case a.PayoutStatuses.ERROR:
          return l.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_ERROR;
        case a.PayoutStatuses.REJECTED:
          return l.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_REJECTED;
        case a.PayoutStatuses.RISK_REVIEW:
          return l.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_RISK_REVIEW
      }
    }
  }
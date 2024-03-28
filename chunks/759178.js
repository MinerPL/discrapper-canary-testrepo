"use strict";
s.r(t);
var a = s("198139"),
  l = s("689938");
t.default = {
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
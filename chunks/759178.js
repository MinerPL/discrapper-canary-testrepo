"use strict";
var n = t(198139),
  i = t(689938);
s.Z = {
  getStatusErrorText: function(e) {
    switch (e) {
      case n.jw.CANCELED:
      case n.jw.DEFERRED:
        return i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED;
      case n.jw.DEFERRED_INTERNAL:
        return i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED;
      case n.jw.ERROR:
        return i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_ERROR;
      case n.jw.REJECTED:
        return i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_REJECTED;
      case n.jw.RISK_REVIEW:
        return i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_RISK_REVIEW
    }
  }
}
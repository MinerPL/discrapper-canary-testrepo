var s = n(198139),
  a = n(689938);
t.Z = {
  getStatusErrorText: function(e) {
switch (e) {
  case s.jw.CANCELED:
  case s.jw.DEFERRED:
    return a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED;
  case s.jw.DEFERRED_INTERNAL:
    return a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED;
  case s.jw.ERROR:
    return a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_ERROR;
  case s.jw.REJECTED:
    return a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_REJECTED;
  case s.jw.RISK_REVIEW:
    return a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_RISK_REVIEW;
}
  }
};
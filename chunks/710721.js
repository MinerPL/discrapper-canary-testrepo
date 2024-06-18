"use strict";
var i = n(55935),
  r = n(70956),
  s = n(34756),
  o = n(689938);
class a extends s.Z {
  _getMessageFromRateLimit(e) {
    let t = e.body.retry_after,
      n = (0, i.TD)(0, t * r.Z.Millis.SECOND);
    return (0, i.QX)(n, {
      days: o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
      hours: o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
      minutes: o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
    })
  }
  constructor(e, t) {
    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
  }
}
t.Z = a
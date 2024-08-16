var r = n(55935),
    i = n(70956),
    a = n(34756),
    s = n(689938);
class o extends a.Z {
    _getMessageFromRateLimit(e) {
        let t = e.body.retry_after,
            n = (0, r.TD)(0, t * i.Z.Millis.SECOND);
        return (0, r.QX)(n, {
            days: s.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
            hours: s.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
            minutes: s.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
        });
    }
    constructor(e, t) {
        super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e));
    }
}
t.Z = o;

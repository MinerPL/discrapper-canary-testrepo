var r = n(55935), i = n(70956), a = n(34756), o = n(689938);
class s extends a.Z {
    _getMessageFromRateLimit(e) {
        let t = e.body.retry_after, n = (0, r.TD)(0, t * i.Z.Millis.SECOND);
        return (0, r.QX)(n, {
            days: o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
            hours: o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
            minutes: o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
        });
    }
    constructor(e, t) {
        super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e));
    }
}
t.Z = s;

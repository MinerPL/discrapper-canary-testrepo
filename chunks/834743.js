n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(82950),
    l = n(623624),
    o = n(650774),
    c = n(981631),
    d = n(921944),
    u = n(689938),
    _ = n(241626);
class E extends a.PureComponent {
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, i.jsx)(r.Z, {
            guild: e,
            onDismissed: () => n(d.L.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_SMALL_GUILD : u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE,
            cta: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_BUTTON,
            trackingSource: c.PsQ.GUILD_SUBSCRIPTION_NOTICE,
            type: c.vID.GUILD_BOOSTING,
            image: _,
            imageMarginX: 26
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleButtonClick'),
            (i = () => {
                let { guild: e } = this.props;
                (0, l.f)({
                    guildId: e.id,
                    location: {
                        section: c.jXE.CHANNEL_NOTICE,
                        object: c.qAy.SERVER_STATUS_CTA
                    }
                });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = s.ZP.connectStores([o.Z], (e) => {
    let { guild: t } = e;
    return { memberCount: o.Z.getMemberCount(t.id) };
})(E);

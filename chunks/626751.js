n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(987909),
    l = n(430824),
    o = n(630388),
    c = n(35125),
    u = n(523361),
    d = n(981631);
function _(e) {
    var t, n;
    let { channel: _, message: E } = e,
        I = null !== (n = null === (t = E.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n ? (0, u.Md)() : (0, u.Q8)(),
        m = _.guild_id,
        T = (0, s.e7)(
            [l.Z],
            () => {
                var e;
                return null === (e = l.Z.getGuild(m)) || void 0 === e ? void 0 : e.systemChannelFlags;
            },
            [m]
        ),
        h = null != T && (0, o.yE)(T, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        N = a.useMemo(() => (0, c._i)(_, E), [_, E]);
    return h
        ? null
        : (0, i.jsx)(r.Z, {
              channel: _,
              message: E,
              buttonLabels: I,
              stickers: u.HG,
              event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: N
          });
}

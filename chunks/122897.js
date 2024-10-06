t.d(s, {
    Z: function () {
        return S;
    }
});
var n = t(735250);
t(470079);
var a = t(524437),
    i = t(481060),
    r = t(63063),
    o = t(78451),
    l = t(695346),
    c = t(838436),
    d = t(973005),
    _ = t(726985),
    u = t(981631),
    E = t(689938),
    T = t(477060);
function S() {
    var e, s, t;
    let S = l.Xr.useSetting(),
        I = l.UP.useSetting();
    let N = ((e = S), (s = I), e !== a.Xr.DEFAULT_UNSET ? e : null !== (t = d.O7.get(s)) && void 0 !== t ? t : a.Xr.NON_FRIENDS);
    return (0, n.jsxs)(c.U, {
        setting: _.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, n.jsx)(c.H, {
                header: E.Z.Messages.USER_DM_SPAM_FILTER,
                description: E.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({ appealLink: r.Z.getArticleURL(u.BhN.SAFE_DIRECT_MESSAGING) })
            }),
            (0, n.jsx)(i.RadioGroup, {
                className: T.radioGroup,
                radioItemClassName: T.radioGroupItem,
                value: N,
                options: (0, o.c7)(),
                onChange: (e) => {
                    let { value: s } = e;
                    return l.Xr.updateSetting(s);
                }
            })
        ]
    });
}

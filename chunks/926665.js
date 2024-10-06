n.r(s),
    n.d(s, {
        default: function () {
            return m;
        }
    });
var r = n(735250),
    t = n(470079),
    o = n(120356),
    a = n.n(o),
    c = n(266067),
    l = n(873546),
    i = n(481060),
    u = n(169382),
    d = n(726542),
    f = n(656649),
    g = n(981631),
    C = n(689938),
    _ = n(280532);
let N = 'https://dis.gd/Amazon-Music-Connection',
    E = null != window.opener;
function m() {
    let { type: e } = (0, c.UO)(),
        s = (0, f.vJ)(e),
        n = (0, u.l)().get('error-code'),
        o = t.useCallback(() => {
            window.close();
        }, []),
        m = t.useMemo(() => {
            switch (s) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, r.jsx)('div', {
                        className: a()(_.message, _.details),
                        children: l.tq
                            ? C.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format({
                                  link: () =>
                                      (0, r.jsx)(i.Anchor, {
                                          href: N,
                                          children: N
                                      })
                              })
                            : C.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format({
                                  link: () =>
                                      (0, r.jsx)(i.Anchor, {
                                          href: N,
                                          children: N
                                      })
                              })
                    });
                case g.ABu.YOUTUBE:
                    if (n === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, r.jsx)('div', {
                            className: a()(_.message, _.details),
                            children: C.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_YOUTUBE_PROFILE.format({ link: 'https://support.google.com/youtube/answer/1646861' })
                        });
                    return null;
                default:
                    return null;
            }
        }, [n, s]);
    if (null == s) return null;
    let h = d.Z.get(s);
    return (0, r.jsxs)(f.UV, {
        platformType: s,
        children: [
            (0, r.jsx)('div', {
                className: a()(_.message, _.error),
                children: C.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({ name: h.name })
            }),
            (0, r.jsx)('div', {
                className: a()(_.message, _.details),
                children: C.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
            }),
            m,
            E
                ? (0, r.jsx)(i.Button, {
                      className: _.btn,
                      onClick: o,
                      children: C.Z.Messages.DONE
                  })
                : null
        ]
    });
}

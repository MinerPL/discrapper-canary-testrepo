n.r(s),
    n.d(s, {
        default: function () {
            return m;
        }
    });
var o = n(735250),
    t = n(470079),
    r = n(120356),
    c = n.n(r),
    l = n(266067),
    i = n(873546),
    a = n(481060),
    u = n(726542),
    d = n(656649),
    f = n(981631),
    g = n(689938),
    C = n(376789);
let _ = 'https://dis.gd/Amazon-Music-Connection',
    N = null != window.opener;
function m() {
    let { type: e } = (0, l.UO)(),
        s = (0, d.vJ)(e),
        n = t.useCallback(() => {
            window.close();
        }, []);
    if (null == s) return null;
    let r = u.Z.get(s);
    return (0, o.jsxs)(d.UV, {
        platformType: s,
        children: [
            (0, o.jsx)('div', {
                className: c()(C.message, C.error),
                children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({ name: r.name })
            }),
            (0, o.jsx)('div', {
                className: c()(C.message, C.details),
                children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
            }),
            s !== f.ABu.AMAZON_MUSIC
                ? null
                : (0, o.jsx)('div', {
                      className: c()(C.message, C.details),
                      children: i.tq
                          ? g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format({
                                link: () =>
                                    (0, o.jsx)(a.Anchor, {
                                        href: _,
                                        children: _
                                    })
                            })
                          : g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format({
                                link: () =>
                                    (0, o.jsx)(a.Anchor, {
                                        href: _,
                                        children: _
                                    })
                            })
                  }),
            N
                ? (0, o.jsx)(a.Button, {
                      className: C.btn,
                      onClick: n,
                      children: g.Z.Messages.DONE
                  })
                : null
        ]
    });
}

n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(924628),
    a = n(480294),
    o = n(63063),
    c = n(838436),
    d = n(51331),
    u = n(922628),
    m = n(726985),
    h = n(981631),
    g = n(388032);
function p() {
    let e = (0, r.cj)([a.Z], () => a.Z.hasConsented(h.pjP.PERSONALIZATION)),
        [t, n] = s.useState(e);
    return (0, i.jsx)(c.U, {
        setting: m.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, i.jsx)(d.Z, {
            title: g.intl.string(g.t.MNKzys),
            note: g.intl.format(g.t['eQL/Mj'], { helpdeskArticle: o.Z.getArticleURL(h.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: t,
            onChange: (e) => {
                e
                    ? (0, l.g)([h.pjP.PERSONALIZATION], [])
                          .catch(u.S)
                          .then(() => n(!0))
                    : (0, u.V)({
                          header: g.intl.string(g.t['9SNpzs']),
                          confirmText: g.intl.string(g.t['9g5UGx']),
                          cancelText: g.intl.string(g.t['+ZLPw8']),
                          onConfirm: () => {
                              (0, l.g)([], [h.pjP.PERSONALIZATION])
                                  .catch(u.S)
                                  .then(() => n(!1));
                          },
                          body: g.intl.string(g.t.gJvDDg)
                      });
            }
        })
    });
}

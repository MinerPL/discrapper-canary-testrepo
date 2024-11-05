n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var o = n(13245),
    r = n(145597),
    l = n(380736),
    s = n(620954),
    a = n(987650),
    u = n(388032),
    c = n(213973);
let d = () => ({
        icon: n(328756),
        title: u.intl.string(u.t.pkXAeH),
        body: null,
        hint: h,
        notifType: a.n0.WelcomeNudge
    }),
    h = () => (0, l.Q)((0, s.P)(), u.t['z8/sgI']);
function f(e) {
    let { type: t } = e,
        {
            icon: n,
            title: l,
            body: u,
            hint: h,
            notifType: f
        } = (function (e, t) {
            if (t.type === a.nc.NEWS) {
                var n, i, o, r, l, s, u, c;
                return {
                    icon: null !== (l = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== l ? l : e.icon,
                    title: null !== (s = null === (i = t.news) || void 0 === i ? void 0 : i.title) && void 0 !== s ? s : e.title,
                    body: null !== (u = null === (o = t.news) || void 0 === o ? void 0 : o.body) && void 0 !== u ? u : e.body,
                    hint: null !== (c = null === (r = t.news) || void 0 === r ? void 0 : r.hint) && void 0 !== c ? c : e.hint,
                    notifType: null != t.news ? a.n0.NewsNudge : e.notifType
                };
            }
            return e;
        })(d(), e),
        { trackView: p, trackClick: m } = (0, s.R)(f, { notif_type: f });
    return {
        icon:
            null != n
                ? (0, i.jsx)('img', {
                      src: n,
                      className: c.icon,
                      alt: ''
                  })
                : null,
        title: l,
        body: u,
        hint: h,
        onNotificationShow: () => {
            p();
        },
        onNotificationClick: (e, n) => {
            m('unlock'), t === a.nc.NEWS && o.Z.updateNotificationStatus(n), o.Z.setInputLocked(!1, (0, r.QF)());
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}

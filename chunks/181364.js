n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(593481),
    a = n(237997),
    l = n(312839),
    o = n(987650),
    c = n(388032);
let d = () => ({
        icon: n(328756),
        title: c.intl.string(c.t.pkXAeH),
        body: null,
        hint: u,
        notifType: o.n0.WelcomeNudge
    }),
    u = (e) => (0, s.QR)(e, (0, l.P)(), c.t['z8/sgI']);
function h(e) {
    let { type: t } = e,
        {
            icon: n,
            title: s,
            body: u,
            hint: h,
            notifType: p
        } = (function (e, t) {
            if (t.type === o.nc.NEWS) {
                var n, i, r, s, a, l, c, d;
                return {
                    icon: null !== (a = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== a ? a : e.icon,
                    title: null !== (l = null === (i = t.news) || void 0 === i ? void 0 : i.title) && void 0 !== l ? l : e.title,
                    body: null !== (c = null === (r = t.news) || void 0 === r ? void 0 : r.body) && void 0 !== c ? c : e.body,
                    hint: null !== (d = null === (s = t.news) || void 0 === s ? void 0 : s.hint) && void 0 !== d ? d : e.hint,
                    notifType: null != t.news ? o.n0.NewsNudge : e.notifType
                };
            }
            return e;
        })(d(), e),
        { trackView: f, trackClick: g } = (0, l.R)(p, { notif_type: p });
    return {
        icon: n,
        title: s,
        body: u,
        hint: h,
        renderFooter: () =>
            (0, i.jsx)('div', {
                style: {
                    textAlign: 'center',
                    padding: 2
                },
                children: c.intl.string(c.t['9MyuT0'])
            }),
        onNotificationShow: () => {
            f();
        },
        onNotificationClick: (e, n) => {
            g('unlock'), t === o.nc.NEWS && r.Z.updateNotificationStatus(n), a.Z.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            g('dismiss');
        }
    };
}

n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(259443),
    r = n(81897),
    s = n(911284),
    o = n(369566),
    c = n(502762),
    d = n(527790),
    u = n(638785),
    h = n(388032);
let p = new a.Y('UserProfilePanelRecentActivity');
function m(e) {
    let { user: t } = e,
        { recent: n } = (0, o.Z)(t.id),
        a = (0, r.Z)();
    return (l.useEffect(() => {
        (async () => {
            try {
                await (0, s.Z)(t.id, a);
            } catch (e) {
                p.log('Failed to fetch content inventory outbox for '.concat(t.id, ':'), e);
            }
        })();
    }, [t.id, a]),
    0 === n.length)
        ? null
        : (0, i.jsx)(c.Z.Overlay, {
              children: (0, i.jsx)(u.Z, {
                  section: 'ACTIVITY',
                  header: h.intl.string(h.t.M0zgnZ),
                  minItems: 3,
                  items: n.map((e) =>
                      (0, i.jsx)(
                          d.Z,
                          {
                              user: t,
                              entry: e,
                              hideHeader: !0
                          },
                          e.id
                      )
                  )
              })
          });
}

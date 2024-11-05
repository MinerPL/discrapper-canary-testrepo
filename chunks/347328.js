n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(726542),
    l = n(394821),
    u = n(740605),
    c = n(180335),
    d = n(553795),
    f = n(981631),
    _ = n(388032);
function h(e) {
    let { activity: t, entry: n, display: h, onAction: p, onClose: m } = e,
        g = (0, i.e7)([d.Z], () => null != d.Z.getAccount(null, f.ABu.CRUNCHYROLL));
    if (!(0, l.Z)(t) && !(0, c.gr)(n)) return null;
    if (!g)
        return (0, r.jsx)(a.MenuItem, {
            id: 'connect-crunchyroll',
            label: _.intl.formatToPlainString(_.t.XWSHTU, { platform: o.Z.get(f.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == p || p({ action: 'PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM' }), s.Z.open(f.oAB.CONNECTIONS), null == m || m();
            }
        });
    if ('live' === h || !(0, c.gr)(n)) return null;
    let E = n.extra.url;
    return null == E || '' === E
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'watch-on-crunchyroll',
              label: _.intl.string(_.t.OpxQVF),
              action: () => {
                  null == p || p({ action: 'PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM' }), (0, u.Y)(E);
              }
          });
}

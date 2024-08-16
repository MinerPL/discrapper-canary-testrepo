n.r(t),
    n.d(t, {
        default: function () {
            return I;
        },
        extractAnnouncementModalContent: function () {
            return m;
        }
    });
var i = n(735250);
n(470079);
var a = n(581282),
    s = n(8853),
    r = n(663002),
    l = n(2052),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(605236),
    _ = n(960048),
    E = n(276792),
    h = n(290347);
function m(e) {
    let { content: t, isPreview: n } = e,
        i = s.t.fromBinary((0, a.c)(t));
    return 'announcementModalVariant1' !== i.properties.oneofKind ? null : !n && (0 === i.properties.announcementModalVariant1.dismissKey.trim().length || (0, u.un)(Number(i.properties.announcementModalVariant1.dismissKey))) ? null : (n && (i.properties.announcementModalVariant1.dismissKey = ''), i);
}
function I(e) {
    let { renderModalProps: t, properties: n } = e,
        { location: a } = (0, l.O)(),
        { analyticsLocations: s } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        u = (0, o.ZP)(),
        m = (0, r.a)(u);
    if ('announcementModalVariant1' === n.properties.oneofKind) {
        let e = (0, E.N)({
            content: n.properties.announcementModalVariant1,
            renderModalProps: t,
            analyticsLocations: s,
            analyticsLocation: a,
            isLightTheme: m
        });
        return (0, i.jsx)(h.Z, { ...e });
    }
    return _.Z.captureMessage('Property type '.concat(n.properties.oneofKind, ' is not supported to render ServerDriveAnnouncementModal')), null;
}

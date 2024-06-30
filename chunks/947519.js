n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250), i = n(470079), a = n(608787), o = n(442837), s = n(906467), l = n(358085), u = n(31336), c = n(19759);
let d = (0, a.Un)({
    createPromise: () => Promise.all([
        n.e('96427'),
        n.e('77298'),
        n.e('23357'),
        n.e('23755'),
        n.e('19503'),
        n.e('89350'),
        n.e('80451'),
        n.e('39709'),
        n.e('3336'),
        n.e('15972'),
        n.e('12013'),
        n.e('6416'),
        n.e('39612'),
        n.e('29549'),
        n.e('32776'),
        n.e('95900'),
        n.e('33053'),
        n.e('8016'),
        n.e('50654'),
        n.e('76540'),
        n.e('68136'),
        n.e('6380'),
        n.e('31605'),
        n.e('87624'),
        n.e('22646'),
        n.e('77287'),
        n.e('5528'),
        n.e('33352'),
        n.e('18101'),
        n.e('65840'),
        n.e('30419'),
        n.e('77172'),
        n.e('18824'),
        n.e('95854'),
        n.e('95393'),
        n.e('86977'),
        n.e('44371'),
        n.e('48486'),
        n.e('81539'),
        n.e('25788'),
        n.e('90508'),
        n.e('49508'),
        n.e('8739'),
        n.e('58286'),
        n.e('22173'),
        n.e('54535'),
        n.e('30243'),
        n.e('53917'),
        n.e('3084'),
        n.e('68241'),
        n.e('52190'),
        n.e('69737'),
        n.e('13296'),
        n.e('58002'),
        n.e('30676'),
        n.e('36439'),
        n.e('30634'),
        n.e('98941')
    ]).then(n.bind(n, 678717)),
    webpackId: 678717
});
function _(e) {
    let {mobile: t} = e, n = (0, o.e7)([s.Z], () => s.Z.isDeveloper), a = (0, o.e7)([c.Z], () => c.Z.displayTools), _ = i.useCallback(e => {
            ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && 'KeyO' === e.code && (0, u.SO)();
        }, []);
    return (i.useLayoutEffect(() => (window.addEventListener('keydown', _), () => {
        window.removeEventListener('keydown', _);
    }), [_]), t ? n : a) ? (0, r.jsx)(d, { mobile: t }) : null;
}

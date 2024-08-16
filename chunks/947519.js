n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(608787),
    s = n(442837),
    o = n(906467),
    l = n(358085),
    u = n(31336),
    c = n(19759);
let d = (0, a.Un)({
    createPromise: () => Promise.all([n.e('96427'), n.e('77298'), n.e('23357'), n.e('23755'), n.e('89350'), n.e('65149'), n.e('80451'), n.e('84605'), n.e('3336'), n.e('52249'), n.e('29549'), n.e('54803'), n.e('15685'), n.e('47006'), n.e('32776'), n.e('18209'), n.e('33053'), n.e('6380'), n.e('8016'), n.e('18543'), n.e('31605'), n.e('37581'), n.e('72181'), n.e('76540'), n.e('30671'), n.e('68136'), n.e('65840'), n.e('81272'), n.e('95393'), n.e('18101'), n.e('29637'), n.e('87624'), n.e('86975'), n.e('90508'), n.e('46097'), n.e('22646'), n.e('8739'), n.e('58059'), n.e('22173'), n.e('5528'), n.e('18146'), n.e('43331'), n.e('30243'), n.e('30419'), n.e('18824'), n.e('37229'), n.e('99008'), n.e('52619'), n.e('59743'), n.e('26138'), n.e('29291'), n.e('93414'), n.e('59217'), n.e('54535'), n.e('71661'), n.e('64679'), n.e('5562'), n.e('30634'), n.e('54807'), n.e('49136')]).then(n.bind(n, 678717)),
    webpackId: 678717
});
function _(e) {
    let { mobile: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.isDeveloper),
        a = (0, s.e7)([c.Z], () => c.Z.displayTools),
        _ = i.useCallback((e) => {
            ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && 'KeyO' === e.code && (0, u.SO)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener('keydown', _),
            () => {
                window.removeEventListener('keydown', _);
            }
        ),
        [_]
    ),
    t ? n : a)
        ? (0, r.jsx)(d, { mobile: t })
        : null;
}

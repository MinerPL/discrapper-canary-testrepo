n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250), a = n(470079), l = n(392711), s = n(500923), r = n.n(s), o = n(963838), c = n(353368), u = n(454190);
let d = async e => {
    var t;
    let {
            animationType: n,
            animationId: i,
            url: a,
            shouldResize: s
        } = e, r = null !== (t = o.Jw[n]) && void 0 !== t ? t : o.Jw[c.q.BASIC], u = JSON.parse(JSON.stringify(null != i && i < r.length ? r[i] : (0, l.sample)(r)));
    return u.assets[0].p = s ? await (0, o.lv)(a) : a, u;
};
function h(e) {
    let {
            containerDimensions: t,
            effect: n,
            onComplete: l
        } = e, s = a.useRef(null);
    return a.useEffect(() => {
        let e;
        return !async function () {
            if (null != s.current) {
                let t = await d(n);
                e = r().loadAnimation({
                    container: s.current,
                    renderer: 'svg',
                    loop: !1,
                    autoplay: !0,
                    animationData: t,
                    rendererSettings: { preserveAspectRatio: 'xMidYMax slice' }
                }), n.animationType === c.q.PREMIUM && e.setSpeed(0.8), e.addEventListener('complete', () => null == l ? void 0 : l(n.id));
            }
        }(), () => {
            null == e || e.destroy();
        };
    }, [
        l,
        n
    ]), (0, i.jsx)('div', {
        className: u.effect,
        style: {
            height: t.height,
            width: t.width
        },
        ref: s
    });
}

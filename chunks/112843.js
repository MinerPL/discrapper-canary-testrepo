n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(470079), i = n(399606), a = n(745510), o = n(351780);
function s() {
    let {createMultipleConfettiAt: e} = r.useContext(a.h), t = (0, i.e7)([o.Z], () => o.Z.getState()), n = r.useCallback(e => ({
            size: {
                type: 'static-random',
                minValue: e.confettiSize - 7,
                maxValue: e.confettiSize + 7
            }
        }), []);
    return r.useMemo(() => ({
        fire: (r, i, a) => {
            var o, s;
            let l = (null == a ? void 0 : a.settings) != null ? {
                ...t,
                ...a.settings
            } : t;
            e(r, i, n(l), (null !== (o = null == a ? void 0 : a.count) && void 0 !== o ? o : l.confettiCount) * (null !== (s = null == a ? void 0 : a.countMultiplier) && void 0 !== s ? s : 1), { sprite: null == a ? void 0 : a.sprite });
        }
    }), [
        e,
        n,
        t
    ]);
}

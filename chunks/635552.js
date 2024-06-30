n.d(t, {
    W: function () {
        return i;
    }
}), n(47120);
var a = n(470079), r = n(809206), o = n(350327), l = n(328456);
let i = e => {
    let {
            product: t,
            onSuccess: n,
            onError: i
        } = e, [s, c] = a.useState(!1), {
            firstAvatarDecoration: d,
            firstProfileEffect: u
        } = (0, l.R)(t);
    return {
        handleUseNow: a.useCallback(async () => {
            c(!0);
            try {
                if (null != d && await (0, r.Mn)({ avatarDecoration: d }), null != u) {
                    let e = { profile_effect_id: u.id };
                    await (0, o.Z)(e);
                }
                n();
            } catch (e) {
                i(e);
            } finally {
                c(!1);
            }
        }, [
            d,
            u,
            n,
            i
        ]),
        isApplying: s
    };
};

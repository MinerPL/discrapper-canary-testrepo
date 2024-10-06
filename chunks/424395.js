n.d(t, {
    u: function () {
        return i;
    },
    v: function () {
        return r;
    }
});
let r = n(139458).B || !1;
function i() {
    return n(515297)
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t, name: n } = e;
            return {
                value: t,
                name: n,
                localizedName: t
            };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: r } = t;
            return (n = n.toLowerCase()), n < (r = r.toLowerCase()) ? -1 : n > r ? 1 : 0;
        });
}

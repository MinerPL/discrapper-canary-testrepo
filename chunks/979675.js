n.d(t, {
    $: function () {
        return r;
    }
});
let r = (e, t) =>
    function (n, r, i) {
        return new Promise((a) => {
            var s;
            e.dispatch({
                type: t,
                event: n,
                properties: r,
                flush: null !== (s = null == i ? void 0 : i.flush) && void 0 !== s && s,
                fingerprint: null == i ? void 0 : i.fingerprint,
                resolve: a
            });
        });
    };

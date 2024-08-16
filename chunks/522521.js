r.d(t, {
    s: function () {
        return o;
    }
});
var n = r(622916),
    a = r(151122);
let o = (0, a._I)((e = {}) => {
    let t = {
        debugger: !1,
        stringify: !1,
        ...e
    };
    return {
        name: 'Debug',
        setup(e) {
            e.on('beforeSendEvent', (e, r) => {
                t.debugger,
                    (0, n.Cf)(() => {
                        t.stringify ? (console.log(JSON.stringify(e, null, 2)), r && Object.keys(r).length && console.log(JSON.stringify(r, null, 2))) : (console.log(e), r && Object.keys(r).length && console.log(r));
                    });
            });
        }
    };
});

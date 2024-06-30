n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(718922), i = n(55935), a = n(745735);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000, n = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], s = (0, i.TD)(Date.now(), e), l = (0, r.Z)();
    return (0, a.Z)(() => {
        if ((0 !== s.days || 0 !== s.hours || 0 !== s.minutes || 0 !== s.seconds) && !o)
            l(), null == n || n();
    }, o ? null : t), s;
}

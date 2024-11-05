n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(442837),
    o = n(314897),
    r = n(131951),
    l = n(979651);
function s(e) {
    return (0, i.cj)(
        [l.Z, r.Z, o.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Z,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.default,
                    a = null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
                return {
                    selfDeaf: i.isSelfDeaf(),
                    deaf: null !== (t = null == a ? void 0 : a.deaf) && void 0 !== t && t
                };
            })(e, l.Z, r.Z, o.default),
        [e]
    );
}

n.d(t, {
    i: function () {
        return o;
    }
});
var r = n(470079),
    l = n(442837),
    i = n(19780),
    u = n(959457),
    s = n(630759);
function o(e) {
    let { channelId: t, userId: n, nickname: o, onAlertOpen: a } = e,
        c = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([i.Z, u.Z], () => (0, s.UB)(t, [i.Z, u.Z]));
        })({ userId: n }),
        d = r.useRef(null);
    r.useEffect(() => {
        c && null == d.current
            ? (d.current = setTimeout(() => {
                  a(),
                      (0, s.lg)({
                          userId: n,
                          channelId: t,
                          nickname: o
                      });
              }, 1000))
            : (clearTimeout(d.current), (d.current = null));
        let e = d.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, c, o, a, n]);
}

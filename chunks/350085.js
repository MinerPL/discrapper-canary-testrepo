n.d(t, {
    M: function () {
        return d;
    }
});
var i = n(392711),
    a = n.n(i),
    s = n(283595),
    r = n(808506),
    l = n(996106),
    o = n(186901),
    c = n(981631);
let d = {
    [c.zMe.OVERLAY_UPDATE]: {
        scope: o.lH,
        handler(e) {
            let {
                args: { pid: t },
                socket: n
            } = e;
            if ('number' != typeof t || t < 10) throw new l.Z({ errorCode: c.lTL.INVALID_EVENT }, 'Invalid pid');
            return (e) => {
                let { prevState: i, dispatch: l } = e,
                    o = r.Z.enabled,
                    c = !0,
                    d = n.application.id;
                if (null != d) {
                    let e = s.Z.getActiveLibraryApplication(d);
                    null != e && (o = o && e.isOverlayEnabled()), (c = r.Z.isInputLocked(t));
                }
                let u = {
                    enabled: o,
                    locked: c
                };
                return !a().isEqual(u, i) && l(u), u;
            };
        }
    }
};

n.d(t, {
    V: function () {
        return d;
    }
});
var i = n(317381), s = n(573979), a = n(42352), r = n(886355), l = n(238679), o = n(981631), c = n(701488);
async function d(e, t, n) {
    var d, u;
    switch (t) {
    case o.zMe.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null === (d = e.application) || void 0 === d ? void 0 : d.id, n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== c.cE.FOCUSED } : null;
        }
    case o.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null === (u = e.application) || void 0 === u ? void 0 : u.id, n = null != t ? i.ZP.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
    case o.zMe.THERMAL_STATE_UPDATE: {
            let e = await (0, a.Z)();
            if (null == e)
                return null;
            return { thermal_state: (0, s.Z)(e) };
        }
    case o.zMe.ORIENTATION_UPDATE: {
            let e = r.Z.isScreenLandscape();
            if (null != e)
                return { screen_orientation: e ? c.W0.LANDSCAPE : c.W0.PORTRAIT };
            return null;
        }
    case o.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
        return (0, l.dO)();
    default:
        return null;
    }
}

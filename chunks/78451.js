e.d(n, {
    IF: function () {
        return d;
    },
    LJ: function () {
        return c;
    },
    MF: function () {
        return f;
    },
    X7: function () {
        return m;
    },
    c7: function () {
        return g;
    }
});
var r = e(524437);
e(376345);
var a = e(692547),
    i = e(2150),
    l = e(187819),
    o = e(981631),
    s = e(973005),
    u = e(388032);
function c(t) {
    return t.map((t) => ({
        title: t.name,
        description: t.desc,
        highlightColor: (function (t) {
            switch (t) {
                case E('PRIMARY_400'):
                    return i.q.ACCENT;
                case E('GREEN_360'):
                    return i.q.GREEN;
                case E('YELLOW_360'):
                    return i.q.YELLOW;
                case E('ORANGE_345'):
                    return i.q.ORANGE;
                case E('RED_400'):
                    return i.q.RED;
                default:
                    return i.q.NONE;
            }
        })(t.color),
        value: t.value,
        disabled: t.disabled
    }));
}
function d() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: u.intl.string(u.t.PEzffn),
            desc: u.intl.string(u.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: t,
            tooltipText: t ? u.intl.string(u.t.j9WtHx) : null
        },
        {
            name: u.intl.string(u.t.SsCK8P),
            desc: u.intl.string(u.t['8GCOX1']),
            value: o.sFg.LOW,
            color: n ? void 0 : E('GREEN_360')
        },
        {
            name: u.intl.string(u.t.WwNoR0),
            desc: u.intl.formatToPlainString(u.t.VS14gY, { min: o.YeM.ACCOUNT_AGE }),
            value: o.sFg.MEDIUM,
            color: n ? void 0 : E('YELLOW_360')
        },
        {
            name: u.intl.string(u.t.I2jMUF),
            desc: u.intl.formatToPlainString(u.t['r+b3Iy'], { min: o.YeM.MEMBER_AGE }),
            value: o.sFg.HIGH,
            color: n ? void 0 : E('ORANGE_345')
        },
        {
            name: u.intl.string(u.t.cJY8w8),
            desc: u.intl.string(u.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: n ? void 0 : E('RED_400')
        }
    ];
}
function f() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: u.intl.string(u.t.iHuPEx),
            desc: u.intl.string(u.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: E('RED_400')
        },
        {
            name: u.intl.string(u.t.ynfFaG),
            desc: u.intl.string(u.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: t,
            tooltipText: t ? u.intl.string(u.t.j9WtHx) : null,
            color: E('YELLOW_360')
        },
        {
            name: u.intl.string(u.t.VbSyAw),
            desc: u.intl.string(u.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: t,
            tooltipText: t ? u.intl.string(u.t.j9WtHx) : null,
            color: E('PRIMARY_400')
        }
    ];
}
function g() {
    let t = (0, l.sp)({ location: 'generate-dm-spam-options' });
    return [
        {
            name: t ? u.intl.string(u.t['4IaoCA']) : u.intl.string(u.t['DY6/Fx']),
            desc: t ? u.intl.string(u.t.TgipjI) : u.intl.string(u.t.p5t0h4),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
            color: E('GREEN_360')
        },
        {
            name: t ? u.intl.string(u.t['6NnX6O']) : u.intl.string(u.t.IUO82t),
            desc: t ? u.intl.string(u.t['+dw1qq']) : u.intl.string(u.t['Fo/jub']),
            value: r.Xr.NON_FRIENDS,
            color: E('YELLOW_360')
        },
        {
            name: t ? u.intl.string(u.t['1tiAFx']) : u.intl.string(u.t.XV5TIi),
            desc: t ? u.intl.string(u.t.LKTyeH) : u.intl.string(u.t.Ykdtoq),
            value: r.Xr.DISABLED,
            color: E('RED_400')
        }
    ];
}
function m() {
    return [
        {
            name: u.intl.string(u.t.PhNlh4),
            desc: u.intl.string(u.t['Fw+Lvr']),
            value: s.TI.FRIENDS_AND_NON_FRIENDS,
            color: E('GREEN_360')
        },
        {
            name: u.intl.string(u.t['8ioJ4e']),
            desc: u.intl.string(u.t.z4l4Cg),
            value: s.TI.NON_FRIENDS,
            color: E('YELLOW_360')
        },
        {
            name: u.intl.string(u.t.FLfuhI),
            desc: u.intl.string(u.t.MoZlaG),
            value: s.TI.DISABLED,
            color: E('RED_400')
        }
    ];
}
function E(t) {
    return a.Z.unsafe_rawColors[t].css;
}

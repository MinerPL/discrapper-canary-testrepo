t.d(n, {
    $c: function () {
        return c;
    },
    Nx: function () {
        return C;
    },
    On: function () {
        return A;
    },
    tQ: function () {
        return d;
    },
    x5: function () {
        return _;
    }
});
var i = t(140492), l = t(475468), o = t(703656), E = t(769654), r = t(944486), u = t(914010), a = t(358085), s = t(981631);
let d = {
        binds: ['alt+down'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(), !1)
    }, _ = {
        binds: ['alt+up'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(-1), !1)
    }, c = {
        binds: ['mod+alt+right'],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != u.Z.getGuildId())
                e = s.ME;
            else {
                let n = u.Z.getLastSelectedGuildId();
                null != n && (e = n, (0, l.K)(n, r.Z.getChannelId(n)));
            }
            return null != e && (0, E.X)(e), !1;
        }
    }, C = {
        binds: (0, a.isMac)() ? ['mod+['] : ['alt+left'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.op)(), !1)
    }, A = {
        binds: (0, a.isMac)() ? ['mod+]'] : ['alt+right'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.eH)(), !1)
    };

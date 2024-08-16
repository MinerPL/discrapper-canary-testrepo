t.d(n, {
    FI: function () {
        return r;
    },
    IL: function () {
        return o;
    }
});
var i = t(585483),
    l = t(981631);
let o = {
        binds: ['mod+return'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(l.CkL.CALL_ACCEPT)) return i.S.dispatch(l.CkL.CALL_ACCEPT), !1;
        }
    },
    r = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i.S.hasSubscribers(l.CkL.CALL_START)) return i.S.dispatch(l.CkL.CALL_START, e), !1;
        }
    };

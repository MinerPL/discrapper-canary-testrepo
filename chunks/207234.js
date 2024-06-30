t.d(n, {
    M: function () {
        return u;
    },
    P: function () {
        return r;
    }
});
var i = t(392711), l = t.n(i), o = t(585483), E = t(981631);
let r = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => (o.S.dispatch(E.CkL.TOGGLE_INBOX_UNREADS_TAB), !1)
    }, u = {
        binds: ['mod+shift+e'],
        comboKeysBindGlobal: !0,
        action: l().debounce(() => {
            if (o.S.hasSubscribers(E.CkL.MARK_TOP_INBOX_CHANNEL_READ))
                return o.S.dispatch(E.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
        }, 100, { leading: !0 })
    };

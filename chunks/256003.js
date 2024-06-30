l.d(t, {
    Z: function () {
        return a;
    }
}), l(47120);
let n = (0, l(652874).Z)((e, t) => ({
    selectedUserIds: {},
    addUsers: (l, n) => {
        var a;
        let {selectedUserIds: o} = t(), s = new Set([
                ...null !== (a = o[l]) && void 0 !== a ? a : new Set(),
                ...n
            ]);
        e({
            selectedUserIds: {
                ...o,
                [l]: s
            }
        });
    },
    removeUser: (l, n) => {
        let {selectedUserIds: a} = t(), o = a[l];
        if (null == o)
            return;
        let s = [...o].filter(e => e !== n);
        e({
            selectedUserIds: {
                ...a,
                [l]: new Set(s)
            }
        });
    },
    clearSelection: l => {
        let {selectedUserIds: n} = t();
        null != n && e({
            selectedUserIds: {
                ...n,
                [l]: new Set()
            }
        });
    }
}));
function a(e) {
    return n(t => {
        var l;
        return {
            selectedUserIds: null !== (l = t.selectedUserIds[e]) && void 0 !== l ? l : new Set(),
            addUsers: l => {
                t.addUsers(e, l);
            },
            removeUser: l => {
                t.removeUser(e, l);
            },
            clearSelection: () => {
                t.clearSelection(e);
            }
        };
    });
}

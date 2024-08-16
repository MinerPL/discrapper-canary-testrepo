n.d(t, {
    PE: function () {
        return c;
    },
    a5: function () {
        return u;
    },
    rb: function () {
        return l;
    }
});
var r = n(652874),
    i = n(731965),
    a = n(585483),
    s = n(981631);
let o = Object.freeze({
        hasUnsubmittedChanges: !1,
        shouldShowWarning: !1
    }),
    l = (0, r.Z)((e) => o),
    u = (e) => {
        (0, i.j)(() => l.setState({ hasUnsubmittedChanges: e }));
    },
    c = (e) => {
        (0, i.j)(() => l.setState({ shouldShowWarning: e })), e && a.S.dispatch(s.CkL.EMPHASIZE_NOTICE);
    };

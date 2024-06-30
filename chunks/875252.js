t.d(n, {
    H: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(442837), r = t(481060), l = t(378298), u = t(359119), s = t(832239), o = t(594174), d = t(689938);
function c(e) {
    let n = (0, a.e7)([o.default], () => o.default.getCurrentUser()), t = (0, a.e7)([u.ZP], () => u.ZP.getChannelSafetyWarnings(e.id));
    return (null == n ? void 0 : n.isStaff()) !== !0 || null == t || 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.MenuItem, {
                id: 'delete-safety-warnings',
                label: d.Z.Messages.SAFETY_WARNINGS_DELETE,
                action: () => (0, s.Vp)(e.id)
            }),
            (0, i.jsx)(r.MenuItem, {
                id: 'clear-safety-warnings',
                label: d.Z.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
                action: () => (0, l.wS)(e.id)
            })
        ]
    });
}

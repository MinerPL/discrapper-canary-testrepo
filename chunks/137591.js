t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(346479),
    d = t(665906),
    s = t(981631),
    o = t(689938);
function u(e) {
    var n, t;
    if (!(0, d.Xb)(e) || e.type !== s.d4z.PRIVATE_THREAD) return null;
    let u = null === (t = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.invitable) || void 0 === t || t;
    return (0, i.jsx)(a.MenuCheckboxItem, {
        id: 'toggle-thread-invitable',
        label: o.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
        checked: u,
        action: () => r.Z.setInvitable(e, !u)
    });
}

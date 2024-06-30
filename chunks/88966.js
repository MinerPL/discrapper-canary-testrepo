t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var u = t(481060), l = t(493683), r = t(37234), a = t(314897), s = t(981631), d = t(689938);
function o(n, e) {
    let t = a.default.getId(), o = e === s.IlC.POPOUT;
    return t === n || o ? null : (0, i.jsx)(u.MenuItem, {
        id: 'message-user',
        label: d.Z.Messages.USER_POPOUT_MESSAGE,
        action: () => {
            l.Z.openPrivateChannel(n), (0, r.xf)();
        }
    });
}

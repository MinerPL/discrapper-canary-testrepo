l.d(n, {
    Z: function () {
        return o;
    }
});
var t = l(735250);
l(470079);
var r = l(481060),
    i = l(493683),
    a = l(37234),
    s = l(314897),
    u = l(981631),
    d = l(689938);
function o(e, n) {
    let l = s.default.getId(),
        o = n === u.IlC.POPOUT;
    return l === e || o
        ? null
        : (0, t.jsx)(r.MenuItem, {
              id: 'message-user',
              label: d.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                  i.Z.openPrivateChannel(e), (0, a.xf)();
              }
          });
}

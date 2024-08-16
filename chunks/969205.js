n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    r = n(300284),
    l = n(314897),
    o = n(475413),
    c = n(689938);
function d(e) {
    let { userId: t, onClose: n } = e,
        d = (0, r.Z)();
    return (0, a.e7)([l.default], () => l.default.getId() === t)
        ? (0, i.jsx)(o.oY, {
              action: 'EDIT_PROFILE',
              icon: s.PencilIcon,
              tooltipText: c.Z.Messages.EDIT_PROFILE,
              onClick: () => {
                  null == n || n(), d();
              }
          })
        : null;
}

t.d(e, {
  Z: function() {
return A;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  r = t(58642),
  d = t(283595),
  s = t(417363),
  u = t(626135),
  c = t(630388),
  I = t(981631),
  o = t(689938);

function A(n, e) {
  let t = (0, a.e7)([s.Z], () => s.Z.isInstalled(n.id, n.branchId), [
  n.branchId,
  n.id
]),
A = (0, a.e7)([d.Z], () => !d.Z.hasRemovedLibraryApplicationThisSession);
  if (t && !n.isHidden())
return null;

  function _() {
let e = (0, c.x9)(n.getFlags(), I.eHb.HIDDEN);
r.h(n.id, n.branchId, e), u.default.track(I.rMx.APPLICATION_SETTINGS_UPDATED, {
  hidden_enabled: (0, c.yE)(e, I.eHb.HIDDEN),
  ...n.getAnalyticsData()
});
  }
  return (0, i.jsx)(l.MenuItem, {
id: 'in-library',
label: n.isHidden() ? o.Z.Messages.APPLICATION_CONTEXT_MENU_SHOW : o.Z.Messages.APPLICATION_CONTEXT_MENU_HIDE,
action: function() {
  null != n && null != e && (n.isHidden() || !A ? _() : (0, l.openModal)(n => (0, i.jsx)(l.ConfirmModal, {
    header: o.Z.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_HEADER,
    confirmText: o.Z.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_CONFIRM,
    cancelText: o.Z.Messages.CANCEL,
    onConfirm: () => _(),
    confirmButtonColor: l.Button.Colors.BRAND,
    ...n,
    children: (0, i.jsx)(l.Text, {
      variant: 'text-md/normal',
      children: o.Z.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_BODY.format({
        name: e.name
      })
    })
  })));
}
  });
}
n.d(t, {
  x: function() {
return o;
  },
  z: function() {
return l;
  }
});
var i = n(481060),
  a = n(192720),
  s = n(689938);

function r(e, t) {
  return t ? e ? i.ToastType.CLOCK : i.ToastType.BOOKMARK : i.ToastType.FAILURE;
}
async function l(e) {
  let {
displayToast: t = !1,
...n
  } = e, l = await (0, a.XA)(n);
  if (null == l || null != l && t) {
var o;
(0, i.showToast)((0, i.createToast)((o = null != n.dueAt, null != l ? o ? s.Z.Messages.MESSAGE_REMINDERS_CREATE_SUCCESS : s.Z.Messages.MESSAGE_BOOKMARKS_CREATE_SUCCESS : o ? s.Z.Messages.MESSAGE_REMINDERS_CREATE_FAIL : s.Z.Messages.MESSAGE_BOOKMARKS_CREATE_FAIL), r(null != n.dueAt, null != l)));
  }
}
async function o(e) {
  let {
displayToast: t = !1,
...n
  } = e, l = await (0, a.ep)(n);
  if (null == l || null != l && t) {
var o;
(0, i.showToast)((0, i.createToast)((o = null != n.dueAt, null != l ? o ? s.Z.Messages.MESSAGE_REMINDERS_DELETE_SUCCESS : s.Z.Messages.MESSAGE_BOOKMARKS_DELETE_SUCCESS : o ? s.Z.Messages.MESSAGE_REMINDERS_DELETE_FAIL : s.Z.Messages.MESSAGE_BOOKMARKS_DELETE_FAIL), r(null != n.dueAt, null != l)));
  }
}
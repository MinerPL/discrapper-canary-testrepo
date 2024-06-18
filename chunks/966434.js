"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(668781),
  r = n(624138),
  s = n(689938);

function o(e, t, n, o) {
  var a;
  i.Z.show({
    title: s.Z.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
    cancelText: s.Z.Messages.CANCEL,
    confirmText: s.Z.Messages.CONFIRM,
    onConfirm: n,
    onCancel: o,
    body: s.Z.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
      currentApplicationName: null !== (a = null == e ? void 0 : e.name) && void 0 !== a ? a : s.Z.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
      currentApplicationChannelName: (0, r.Ew)(null == t ? void 0 : t.name) ? s.Z.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT : null == t ? void 0 : t.name
    })
  })
}
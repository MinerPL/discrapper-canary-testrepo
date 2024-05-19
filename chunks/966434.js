"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("668781"),
  r = n("624138"),
  a = n("689938");

function s(e, t, n, s) {
  var o;
  i.default.show({
    title: a.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
    cancelText: a.default.Messages.CANCEL,
    confirmText: a.default.Messages.CONFIRM,
    onConfirm: n,
    onCancel: s,
    body: a.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
      currentApplicationName: null !== (o = null == e ? void 0 : e.name) && void 0 !== o ? o : a.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
      currentApplicationChannelName: (0, r.isNullOrEmpty)(null == t ? void 0 : t.name) ? a.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT : null == t ? void 0 : t.name
    })
  })
}
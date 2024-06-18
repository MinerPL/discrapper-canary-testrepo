"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(759231),
  o = n(689938);
let a = (e, t) => (0, i.jsxs)(r.Text, {
  color: "text-danger",
  style: {
    display: "flex",
    gap: "4px",
    margin: "8px 0 4px 0",
    alignItems: "center"
  },
  variant: "text-sm/normal",
  children: [(0, i.jsx)(s.Z, {
    width: 14,
    height: 14
  }), e]
}, t);
t.Z = {
  getTextInVoiceSendMessageChannelPermissionText: function(e) {
    return e ? o.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
      warningHook: a
    }) : o.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText: function(e) {
    return e ? o.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
      warningHook: a
    }) : o.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
  }
}
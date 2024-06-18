"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(63063),
  r = n(927923),
  s = n(689938);

function o(e, t, n) {
  let o = null;
  return "failed" === t ? o = function(e, t) {
    let {
      platform: n,
      name: i
    } = e;
    switch (t) {
      case r.Ry.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
        return {
          title: s.Z.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED, body: s.Z.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED_BODY.format({
            deviceType: n
          })
        };
      case r.Ry.CONSOLE_DEVICE_INVALID_POWER_MODE:
        return {
          title: s.Z.Messages.CONSOLE_DEVICE_NOT_RESPONDING.format({
            deviceType: n
          }), body: s.Z.Messages.CONSOLE_DEVICE_NOT_RESPONDING_BODY.format({
            deviceName: i
          })
        };
      case r.Ry.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
        return {
          title: s.Z.Messages.CONSOLE_DEVICE_IN_USE.format({
            deviceType: n
          }), body: s.Z.Messages.CONSOLE_DEVICE_IN_USE_BODY.format({
            deviceName: i
          })
        };
      case r.Ry.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
        return {
          title: s.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: s.Z.Messages.CONSOLE_DEVICE_RECONNECT_ACCOUNT.format({
            deviceType: n
          }), isAccountLinkError: !0
        };
      default:
        return {
          title: s.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: s.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
            deviceName: i
          })
        }
    }
  }(e, n.code) : "n/a" === t && (o = function(e, t) {
    let {
      platform: n,
      name: i
    } = e;
    if (t === r.Ry.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) return {
      title: s.Z.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE.format({
        deviceType: n
      }),
      body: s.Z.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE_BODY.format({
        deviceName: i
      })
    };
    return null
  }(e, n.code)), null != o && (o.errorCodeMessage = s.Z.Messages.CONSOLE_ERROR_CODE_SUPPORT.format({
    supportURL: i.Z.getSubmitRequestURL(),
    errorCode: n.code
  })), o
}
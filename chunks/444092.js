n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(63063),
  i = n(927923),
  a = n(689938);

function o(e, t, n) {
  let o = null;
  return 'failed' === t ? o = function(e, t) {
let {
  platform: n,
  name: r
} = e;
switch (t) {
  case i.Ry.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
    return {
      title: a.Z.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED,
        body: a.Z.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED_BODY.format({
          deviceType: n
        })
    };
  case i.Ry.CONSOLE_DEVICE_INVALID_POWER_MODE:
    return {
      title: a.Z.Messages.CONSOLE_DEVICE_NOT_RESPONDING.format({
          deviceType: n
        }),
        body: a.Z.Messages.CONSOLE_DEVICE_NOT_RESPONDING_BODY.format({
          deviceName: r
        })
    };
  case i.Ry.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
    return {
      title: a.Z.Messages.CONSOLE_DEVICE_IN_USE.format({
          deviceType: n
        }),
        body: a.Z.Messages.CONSOLE_DEVICE_IN_USE_BODY.format({
          deviceName: r
        })
    };
  case i.Ry.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
    return {
      title: a.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
        body: a.Z.Messages.CONSOLE_DEVICE_RECONNECT_ACCOUNT.format({
          deviceType: n
        }),
        isAccountLinkError: !0
    };
  default:
    return {
      title: a.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
        body: a.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
          deviceName: r
        })
    };
}
  }(e, n.code) : 'n/a' === t && (o = function(e, t) {
let {
  platform: n,
  name: r
} = e;
if (t === i.Ry.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED)
  return {
    title: a.Z.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE.format({
      deviceType: n
    }),
    body: a.Z.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE_BODY.format({
      deviceName: r
    })
  };
return null;
  }(e, n.code)), null != o && (o.errorCodeMessage = a.Z.Messages.CONSOLE_ERROR_CODE_SUPPORT.format({
supportURL: r.Z.getSubmitRequestURL(),
errorCode: n.code
  })), o;
}
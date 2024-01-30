"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var a = n("913144"),
  s = n("861309"),
  i = n("716724"),
  l = n("954016"),
  r = n("843455"),
  o = {
    [r.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
      validation: e => (0, i.default)(e).required().keys({
        lock_state: e.number().valid(l.OrientationLockState.UNLOCKED, l.OrientationLockState.PORTRAIT, l.OrientationLockState.LANDSCAPE).required(),
        picture_in_picture_lock_state: e.number().valid(l.OrientationLockState.UNLOCKED, l.OrientationLockState.PORTRAIT, l.OrientationLockState.LANDSCAPE).allow(null).optional(),
        grid_lock_state: e.number().valid(l.OrientationLockState.UNLOCKED, l.OrientationLockState.PORTRAIT, l.OrientationLockState.LANDSCAPE).allow(null).optional()
      }),
      handler(e) {
        let {
          socket: t,
          args: {
            lock_state: n,
            picture_in_picture_lock_state: i,
            grid_lock_state: l
          }
        } = e, o = t.application.id;
        if (null != o) a.default.dispatch({
          type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
          applicationId: o,
          lockState: n,
          pictureInPictureLockState: i,
          gridLockState: l
        });
        else throw new s.default({
          errorCode: r.RPCErrors.INVALID_COMMAND
        }, "No application.")
      }
    }
  }
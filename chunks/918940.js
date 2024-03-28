"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("996106"),
  l = n("452426"),
  i = n("701488"),
  r = n("231338");
t.default = {
  [r.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
    validation: e => (0, l.default)(e).required().keys({
      lock_state: e.number().valid(i.OrientationLockState.UNLOCKED, i.OrientationLockState.PORTRAIT, i.OrientationLockState.LANDSCAPE).required(),
      picture_in_picture_lock_state: e.number().valid(i.OrientationLockState.UNLOCKED, i.OrientationLockState.PORTRAIT, i.OrientationLockState.LANDSCAPE).allow(null).optional(),
      grid_lock_state: e.number().valid(i.OrientationLockState.UNLOCKED, i.OrientationLockState.PORTRAIT, i.OrientationLockState.LANDSCAPE).allow(null).optional()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          lock_state: n,
          picture_in_picture_lock_state: l,
          grid_lock_state: i
        }
      } = e, o = t.application.id;
      if (null != o) a.default.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
        applicationId: o,
        lockState: n,
        pictureInPictureLockState: l,
        gridLockState: i
      });
      else throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "No application.")
    }
  }
}
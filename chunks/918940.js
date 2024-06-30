n(47120);
var i = n(570140), s = n(996106), a = n(452426), r = n(701488), l = n(231338);
t.Z = {
    [l.Et.SET_ORIENTATION_LOCK_STATE]: {
        validation: e => (0, a.Z)(e).required().keys({
            lock_state: e.number().valid(r.xK.UNLOCKED, r.xK.PORTRAIT, r.xK.LANDSCAPE).required(),
            picture_in_picture_lock_state: e.number().valid(r.xK.UNLOCKED, r.xK.PORTRAIT, r.xK.LANDSCAPE).allow(null).optional(),
            grid_lock_state: e.number().valid(r.xK.UNLOCKED, r.xK.PORTRAIT, r.xK.LANDSCAPE).allow(null).optional()
        }),
        handler(e) {
            let {
                    socket: t,
                    args: {
                        lock_state: n,
                        picture_in_picture_lock_state: a,
                        grid_lock_state: r
                    }
                } = e, o = t.application.id;
            if (null != o)
                i.Z.dispatch({
                    type: 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE',
                    applicationId: o,
                    lockState: n,
                    pictureInPictureLockState: a,
                    gridLockState: r
                });
            else
                throw new s.Z({ errorCode: l.lT.INVALID_COMMAND }, 'No application.');
        }
    }
};

n(47120);
var i = n(570140),
	a = n(996106),
	s = n(452426),
	r = n(701488),
	l = n(231338);
t.Z = {
	[l.Et.SET_ORIENTATION_LOCK_STATE]: {
		validation: (e) =>
			(0, s.Z)(e)
				.required()
				.keys({
					lock_state: e.number().valid(r.xK.UNLOCKED, r.xK.PORTRAIT, r.xK.LANDSCAPE).required(),
					picture_in_picture_lock_state: e
						.number()
						.valid(r.xK.UNLOCKED, r.xK.PORTRAIT, r.xK.LANDSCAPE)
						.allow(null)
						.optional(),
					grid_lock_state: e.number().valid(r.xK.UNLOCKED, r.xK.PORTRAIT, r.xK.LANDSCAPE).allow(null).optional()
				}),
		handler(e) {
			let {
					socket: t,
					args: { lock_state: n, picture_in_picture_lock_state: s, grid_lock_state: r }
				} = e,
				o = t.application.id;
			if (null != o)
				i.Z.dispatch({
					type: 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE',
					applicationId: o,
					lockState: n,
					pictureInPictureLockState: s,
					gridLockState: r
				});
			else throw new a.Z({ errorCode: l.lT.INVALID_COMMAND }, 'No application.');
		}
	}
};

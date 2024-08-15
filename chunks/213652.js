n.d(t, {
	Z: function () {
		return E;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(442837),
	l = n(481060),
	r = n(435064),
	o = n(39604),
	c = n(441167),
	u = n(871499),
	d = n(199902),
	h = n(314897),
	m = n(358221),
	p = n(354459),
	_ = n(689938),
	f = n(212374);
function E(e) {
	let { channel: t } = e,
		n = (0, s.e7)([m.Z], () => m.Z.getSelectedParticipant(t.id)),
		E = (null == n ? void 0 : n.type) === p.fO.STREAM,
		g = (0, s.e7)([d.Z], () => (E ? d.Z.getActiveStreamForStreamKey(n.id) : null)),
		{ ignoreSenderPreference: C } = c.Z.useExperiment({ location: 'ActionBarClipsButton' }, { autoTrackExposure: !1 }),
		{ viewerClippingAllowed: I, isAtMaxSavingClipOperations: x } = (0, s.cj)([r.Z], () => ({
			viewerClippingAllowed: null != g && (r.Z.isViewerClippingAllowedForUser(g.ownerId) || C),
			isAtMaxSavingClipOperations: r.Z.getIsAtMaxSaveClipOperations()
		})),
		T = r.Z.getSettings().clipsEnabled,
		N = (null == g ? void 0 : g.ownerId) === h.default.getId(),
		v = !T || !(N || I) || x || null == n,
		S = a.useCallback(
			(e) =>
				(0, i.jsx)(l.CameraIcon, {
					...e,
					color: 'currentColor'
				}),
			[]
		);
	return (0, i.jsx)(u.Z, {
		className: f.actionBarButton,
		onClick: () => {
			!v && (N ? (0, o.C1)() : (0, o.C1)(n.id));
		},
		disabled: v,
		iconComponent: S,
		label:
			null == g
				? _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_FOCUS_TOOLTIP
				: N || I
					? T
						? x
							? void 0
							: _.Z.Messages.CLIPS_SAVE
						: _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_ENABLE_CLIPS_TOOLTIP
					: _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_DISABLED_TOOLTIP,
		grow: !1
	});
}

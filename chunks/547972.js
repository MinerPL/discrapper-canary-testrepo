n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(230711),
	i = n(202527),
	a = n(332325),
	s = n(981631);
function o(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		{ shouldMergeGameSettings: n } = i.b.getCurrentConfig({ location: 'navigator' }, { autoTrackExposure: !1 });
	n
		? r.Z.open(s.oAB.GAMES, e, t)
		: r.Z.open(
				(function (e) {
					switch (e) {
						case a.Z.MY_GAMES:
							return s.oAB.REGISTERED_GAMES;
						case a.Z.CLIPS:
							return s.oAB.CLIPS;
						case a.Z.OVERLAY:
							return s.oAB.OVERLAY;
						case a.Z.ACTIVITY_PRIVACY:
							return s.oAB.ACTIVITY_PRIVACY;
					}
				})(e),
				null,
				t
			);
}

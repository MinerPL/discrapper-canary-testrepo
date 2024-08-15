let r;
var i,
	a,
	s,
	o,
	l = n(442837),
	u = n(570140),
	c = n(594190),
	d = n(77498);
class _ extends (o = l.ZP.Store) {
	getGameForPID(e) {
		var t;
		if (__OVERLAY__ || null == e) return null;
		let n = null === (t = c.ZP.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
		return d.Z.getGameByName(n);
	}
	getGame() {
		return __OVERLAY__ ? r : null;
	}
}
(s = 'OverlayRunningGameStore'),
	(a = 'displayName') in (i = _)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new _(u.Z, {
		OVERLAY_INITIALIZE: function (e) {
			r = e.currentGame;
		},
		OVERLAY_SET_ASSOCIATED_GAME: function (e) {
			r = e.associatedGame;
		}
	}));

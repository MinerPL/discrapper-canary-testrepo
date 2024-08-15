let i, s, a;
n(47120);
var o,
	l,
	r,
	c,
	d = n(442837),
	u = n(570140),
	p = n(372123),
	h = n(594190),
	C = n(283595),
	f = n(780570),
	A = n(358085),
	O = n(209492),
	N = n(981631);
class _ extends (o = d.ZP.Store) {
	initialize() {
		A.isPlatformEmbedded && O.S(), (i = {}), (s = new Set()), (a = []);
	}
	getState(t, e) {
		return i[(0, f.Tu)(t, e)];
	}
	isSyncing(t, e) {
		let n = (0, f.Tu)(t, e);
		return s.has(n);
	}
}
(c = 'CloudSyncStore'),
	(r = 'displayName') in (l = _)
		? Object.defineProperty(l, r, {
				value: c,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[r] = c),
	(e.Z = new _(u.Z, {
		GAME_CLOUD_SYNC_START: function (t) {
			let { applicationId: e, branchId: n } = t,
				i = (0, f.Tu)(e, n);
			s.add(i);
		},
		GAME_CLOUD_SYNC_UPDATE: function (t) {
			let { state: e } = t;
			for (let t of Object.keys(e)) i[t] = e[t];
		},
		GAME_CLOUD_SYNC_COMPLETE: function (t) {
			let { applicationId: e, branchId: n } = t,
				a = (0, f.Tu)(e, n);
			return (
				s.delete(a),
				(i[a] = {
					type: N.TzF.DONE,
					timestamp: Date.now()
				}),
				!0
			);
		},
		GAME_CLOUD_SYNC_CONFLICT: function (t) {
			let { applicationId: e, branchId: n, next: a, remote: o } = t,
				l = (0, f.Tu)(e, n);
			(i[l] = {
				type: N.TzF.CONFLICT,
				next: a,
				remote: o
			}),
				s.delete(l);
		},
		GAME_CLOUD_SYNC_ERROR: function (t) {
			let { applicationId: e, branchId: n } = t,
				a = (0, f.Tu)(e, n);
			(i[a] = { type: N.TzF.ERROR }), s.delete(a);
		},
		RUNNING_GAMES_CHANGE: function () {
			let t = h.ZP.getRunningDiscordApplicationIds();
			for (let e of a.filter((e) => !t.includes(e))) {
				let t = C.Z.getActiveLibraryApplication(e);
				if (null != t)
					u.Z.wait(() => {
						try {
							p.Z(t.id, t.branchId);
						} catch (t) {}
					});
			}
			return (a = t), !1;
		}
	}));

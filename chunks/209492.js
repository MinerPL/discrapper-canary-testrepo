let i;
n.d(e, {
	S: function () {
		return C;
	},
	j: function () {
		return f;
	}
}),
	n(411104);
var s = n(544891),
	a = n(570140),
	o = n(710845),
	l = n(893988),
	r = n(314897),
	c = n(417363),
	d = n(780570),
	u = n(358085),
	p = n(998502),
	h = n(981631);
async function C() {
	if (null == i) {
		if (!(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)()))) {
			new o.Z('CloudSyncUtils').warn('CloudSync is not supported on this platform');
			return;
		}
		await p.ZP.ensureModule('discord_cloudsync'),
			(i = new (p.ZP.getCloudSync())()).on('state', (t) =>
				a.Z.dispatch({
					type: 'GAME_CLOUD_SYNC_UPDATE',
					state: t
				})
			);
	}
}
function f(t, e) {
	var n;
	let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
	if (!c.Z.supportsCloudSync(t, e)) return Promise.resolve({ type: h.QCD.NONE });
	let o = (function () {
			if (null == i) throw Error('Initialize cloud sync module before syncing.');
			return i;
		})(),
		u = c.Z.getState(t, e);
	if (null == u) throw Error('No dispatch state for '.concat(t, ':').concat(e));
	let p = null !== (n = u.storage) && void 0 !== n ? n : {},
		C = (0, d.Tu)(t, e),
		f = r.default.getToken();
	if (null == f) throw Error('Cannot use cloud sync when not authenticated.');
	let A = null != u.installPath ? (0, l.Z)(u.installPath) : null;
	if (null == A) throw Error('No install path for '.concat(t, ':').concat(e));
	let O = r.default.getId(),
		N = {
			forceHash: a,
			manifestPath: h.SRg.STORAGE_MANIFEST(A, O),
			roots:
				null != p.roots
					? p.roots
					: [
							{
								id: h.SRg.ROOT_ID,
								paths: Object.keys(h.SRg.ROOT_PLATFORMS).map((t) => ({
									platform: t,
									path: h.SRg.ROOT_STORAGE_PATH(A, O)
								})),
								patterns: h.SRg.ROOT_PATTERN
							}
						],
			storage: {
				baseURL: ''.concat((0, s.K0)()).concat(h.ANM.APPLICATION_STORAGE(t, e)),
				token: f
			},
			replacements: {
				INSTALLDIR: h.SRg.INSTALL_DIR(A),
				USERID: O,
				BRANCHID: e
			}
		};
	return o.sync(C, N);
}

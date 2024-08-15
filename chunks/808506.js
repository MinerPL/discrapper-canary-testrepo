let r, i;
n.d(t, {
	Y: function () {
		return el;
	}
}),
	n(47120),
	n(411104),
	n(518263),
	n(970173),
	n(520712),
	n(268111),
	n(941497),
	n(32026),
	n(480839),
	n(744285),
	n(492257),
	n(873817),
	n(642549),
	n(610138),
	n(216116),
	n(78328),
	n(815648),
	n(177593);
var a,
	s,
	o,
	l,
	u,
	c,
	d = n(807864),
	_ = n(442837),
	E = n(570140),
	f = n(26151),
	h = n(224706),
	p = n(765250),
	m = n(13245),
	I = n(287734),
	T = n(579806),
	g = n(887278),
	S = n(490029),
	A = n(710845),
	N = n(594190),
	v = n(454991),
	O = n(633565),
	R = n(48481),
	C = n(314897),
	y = n(77498),
	D = n(355863),
	L = n(449224),
	b = n(626135),
	M = n(866119),
	P = n(671999),
	U = n(998502),
	w = n(145597),
	x = n(981631),
	G = n(987650);
((o = a || (a = {})).ATTACHING = 'ATTACHING'), (o.CONNECTING = 'CONNECTING'), (o.CONNECTED = 'CONNECTED'), (o.READY = 'READY'), (o.CRASHED = 'CRASHED'), (o.CONNECT_FAILED = 'CONNECT_FAILED'), (o.HOOK_FAILED = 'HOOK_FAILED');
let k = {},
	B = new Map(),
	F = !1,
	V = new Set(),
	H = !1,
	Z = !1,
	Y = !1,
	j = null,
	W = null,
	K = '',
	z = new Set(),
	q = !1,
	Q = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_MFA_FAILURE', 'LOGIN_MFA_SMS', 'LOGIN_MFA_SMS_REQUEST_SUCCESS', 'LOGIN_MFA_SMS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'REGISTER_FAILURE', 'VERIFY_FAILURE', 'VERIFY_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'MENTION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'SEARCH_MODAL_OPEN', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'MENTION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'SEARCH_MODAL_CLOSE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
	X = new Set(),
	$ = new A.Z('OverlayBridgeStore'),
	J = 'none',
	ee = (0, d.H)({
		onContention: (e, t) => $.verbose('overlayLock contention: lastMutexCall '.concat(J)),
		onContentionResolved: () => $.verbose('overlayLock contention: resolved.'),
		onTimeout: (e, t) => {
			let n = 'overlayLock: lastMutexCall '.concat(J, '}');
			$.error(n),
				b.default.track(x.rMx.OVERLAY_HOOK_RESULT, {
					success: !1,
					error_description: n
				});
		},
		timeoutMs: 180000
	});
function et(e, t) {
	return function () {
		for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
		ee(() => t(...r), e);
	};
}
function en(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
		r = B.get(e);
	if ((null === n || r === n) && r !== t) {
		if ((null == t ? B.delete(e) : B.set(e, t), null == t || 'CRASHED' === t)) {
			var i;
			j = null;
			let e = null === T.Z || void 0 === T.Z ? void 0 : null === (i = T.Z.fileManager) || void 0 === i ? void 0 : i.uploadDiscordHookCrashes;
			null != e &&
				e().then((e) => {
					if (!!Array.isArray(e) && 0 !== e.length)
						for (let l of ($.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
							var t, n, r, i, a, s, o;
							if (null == l) continue;
							let e = null != l.processName ? y.Z.getGameByExecutable(l.processName) : null;
							b.default.track(x.rMx.OVERLAY_HOOK_CRASHED, {
								process_name: null == l ? void 0 : l.processName,
								game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
								game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
								minidump_exception_type: null !== (r = l.exceptionString) && void 0 !== r ? r : null,
								minidump_exception_module_name: null !== (i = l.exceptionModuleName) && void 0 !== i ? i : null,
								minidump_relative_crash_address: null !== (a = l.relativeCrashAddress) && void 0 !== a ? a : null,
								minidump_exception_module_version: null !== (s = l.exceptionModuleVersion) && void 0 !== s ? s : null,
								minidump_exception_module_code_id: null !== (o = l.exceptionModuleCodeId) && void 0 !== o ? o : null
							});
						}
				});
		}
		z.delete(e),
			$.info(
				'pid='
					.concat(e, ' status transition ')
					.concat(null != r ? r : 'DISCONNECTED', ' -> ')
					.concat(null != t ? t : 'DISCONNECTED'),
				B
			),
			(F = Array.from(B.values()).some((e) => 'READY' === e));
	}
}
async function er(e) {
	if (U.ZP.supportsFeature(x.eRX.CREATE_HOST_ON_ATTACH)) {
		if (B.size > 0) {
			J = 'reconcile.getOverlayURL';
			let t = await el();
			(J = 'reconcile.createHostProcess'), e.createHostProcess(t, eT, ep);
		} else (J = 'reconcile.destroyHostProcess'), e.destroyHostProcess();
	} else if (H) {
		let t = await el();
		e.createHostProcess(t, eT, ep);
	} else e.destroyHostProcess();
}
async function ei(e) {
	!ee.isMutexHeld() && $.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
	let t = B.get(e);
	if (null != t) {
		$.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(t));
		return;
	}
	J = 'attach.getOverlayModule';
	let n = await eu();
	(J = 'attach.transitionOverlayPIDStatus'), en(e, 'ATTACHING'), (J = 'attach.attachToProcess');
	let r = await g.YT(e);
	null == r ? ((J = 'attach.transitionOverlayPIDStatus (CONNECTING)'), en(e, 'CONNECTING', 'ATTACHING'), (J = 'attach.reconcileHostProcess'), await er(n), n.connectProcess(e)) : ((J = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), en(e, 'HOOK_FAILED', 'ATTACHING'), $.warn('Could not hook to pid='.concat(e, ', error=').concat(r)));
}
async function ea(e) {
	if ((!ee.isMutexHeld() && $.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !B.has(e))) {
		$.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
		return;
	}
	J = 'detach.getOverlayModule';
	let t = await eu();
	(J = 'detach.transitionOverlayPIDStatus'), en(e, null), e !== w.Js && ((J = 'detach.cancelAttachToProcess'), g.pn(e), (J = 'detach.disconnectProcess'), t.disconnectProcess(e)), (J = 'detach.reconcileHostProcess'), await er(t);
}
async function es(e) {
	var t;
	if (
		($.verbose('updateIntendedOverlayPIDs', {
			isConnectionOpened: Y,
			action: e
		}),
		!ee.isMutexHeld() && $.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
		!Y && null != e)
	) {
		$.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
		return;
	}
	async function n(t) {
		if (!(t in k)) {
			$.error('Unexpected. '.concat(t, ' is not a tracked game?'), k, e);
			return;
		}
		let n = k[t];
		delete k[t];
		try {
			await n.deconstructor();
		} catch (e) {
			$.error('Failed to deconstruct tracked game '.concat(t), e);
		}
	}
	if (null == e || !H) {
		for (let t of ($.verbose('updateIntendedOverlayPIDs: Removing all.', k, e), Object.keys(k))) await n(Number(t));
		return;
	}
	for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
		let t = N.ZP.getGameOverlayStatus(n);
		if (($.verbose('updateIntendedOverlayPIDs: newGame', n, t), null != t && t.enabled))
			switch ((n.pid in k && $.error('Unexpected. '.concat(n.pid, ' is being added twice?'), k, e), t.overlayMethod)) {
				case G.gl.OutOfProcess:
					let r = await eE();
					await r.trackGame(n.pid),
						(k[n.pid] = {
							method: t.overlayMethod,
							deconstructor: async () => {
								let e = await eE();
								await e.untrackGame(n.pid);
							}
						});
					break;
				case G.gl.Hook:
					!B.has(n.pid) && (await ei(n.pid)),
						(k[n.pid] = {
							method: t.overlayMethod,
							deconstructor: async () => {
								await ea(n.pid);
							}
						});
					break;
				case G.gl.Disabled:
					$.verbose('updateIntendedOverlayPIDs: disabled', n);
					break;
				default:
					$.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(t.overlayMethod));
			}
	}
	for (let t of e.removed) $.verbose('updateIntendedOverlayPIDs: removedGame', t), await n(t.pid);
}
let eo = et('updateIntendedOverlayPIDs', (e) => es(e));
function el() {
	return new Promise((e) => {
		eb.addConditionalChangeListener(() => {
			if (null != r) return e(r), !1;
		});
	});
}
let eu = (() => {
	let e = null;
	async function t() {
		if (!G.iP) throw ($.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
		try {
			return (
				await U.ZP.ensureModule('discord_overlay2'),
				(function (e) {
					for (let t of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[t] && ($.info('polyfilling OverlayModule.'.concat(t, '(); Overlay module is probably out of date.')), (e[t] = () => void 0));
					return e;
				})(U.ZP.requireModule('discord_overlay2'))
			);
		} catch (e) {
			throw ($.error('failed ensuring discord_overlay2', e), e);
		}
	}
	return () => (null == e && (e = t()), e);
})();
async function ec(e) {
	var t, n, r, i, a, s, o;
	try {
		let t = (await el()) + '&oop=true&pid='.concat(e);
		await (null === T.Z || void 0 === T.Z ? void 0 : null === (i = T.Z.globalOverlay) || void 0 === i ? void 0 : null === (r = i.openWindow) || void 0 === r ? void 0 : r.call(i, t));
	} catch (e) {
		$.log('globalOverlay: Failed to open overlay: '.concat(e), e), null === T.Z || void 0 === T.Z || null === (s = T.Z.window) || void 0 === s || s.close(null === T.Z || void 0 === T.Z ? void 0 : null === (a = T.Z.globalOverlay) || void 0 === a ? void 0 : a.WINDOW_KEY);
	}
	return (W = e), null !== (o = await (null === T.Z || void 0 === T.Z ? void 0 : null === (n = T.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(null === T.Z || void 0 === T.Z ? void 0 : null === (t = T.Z.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== o ? o : '';
}
function ed() {
	var e, t;
	null === T.Z || void 0 === T.Z || null === (t = T.Z.window) || void 0 === t || t.close(null === T.Z || void 0 === T.Z ? void 0 : null === (e = T.Z.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), (W = null);
}
function e_(e) {
	let t = L.Z.getGameForPID(e);
	m.Z.setAssociatedGame(null != W ? W : -1, e, t);
}
let eE = (() => {
	let e = null;
	async function t() {
		if (!G.iP || !(0, w.VS)()) throw ($.error('Attempted to load out of process overlay on an unsupported platform.'), Error('Out of Process Overlay is not supported on this platform.'));
		try {
			var e, t, n;
			let { OutOfProcess: r } = await eu();
			return null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setClickZoneCallback(ev), r.setHostWindowCallbacks(ec, ed, e_), r.setFocusCallback(ep), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, em), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, eI), r;
		} catch (e) {
			throw ($.error('failed loading out of process overlay', e), e);
		}
	}
	return () => (null == e && (e = t()), e);
})();
function ef() {
	return eo({
		added: N.ZP.getRunningGames(),
		removed: []
	});
}
let eh = et('setOverlayEnabled', async (e, t) => {
	if (!G.iP || (H === e && Z === t)) return;
	(H = e),
		(Z = t),
		v.v.update({
			enabled: e,
			legacyEnabled: t
		}),
		eb.emitChange();
	let n = await eu(),
		{ OutOfProcess: r } = n;
	(0, w.vR)(null != r), await es(void 0), await er(n), H && ef();
});
function ep(e) {
	if (0 === e) {
		var t, n;
		if ((null !== (n = null === (t = k[null != j ? j : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : G.gl.Disabled) === G.gl.OutOfProcess) return;
	}
	m.Z.setFocusedPID(0 === e ? null : e);
}
function em(e) {
	j = null;
}
function eI(e) {
	m.Z.successfullyShown(e);
}
function eT(e, t, n) {
	var r;
	let i = null === (r = N.ZP.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
		a = y.Z.getGameByName(i),
		s = {
			game_name: i,
			game_id: null == a ? null : a.id,
			success: t,
			...n
		};
	(0, p.te)(w.qU, D.Z.getDefaultLayout(w.qU), {
		width: n.graphics_width,
		height: n.graphics_height
	}),
		b.default.track(x.rMx.OVERLAY_HOOK_RESULT, s),
		$.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s),
		t ? en(e, 'CONNECTED', 'CONNECTING') : en(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eg() {
	let e = C.default.getToken(),
		t = C.default.getId();
	if (null != e)
		S.lW({
			type: x.BmY.DISPATCH,
			pid: null,
			token: null,
			payloads: [
				{
					type: 'UPDATE_TOKEN',
					token: e,
					userId: t
				}
			]
		});
}
async function eS(e) {
	let t = await eu();
	null != j &&
		j !== w.Js &&
		t.sendCommand(j, {
			message: 'intercept_input',
			intercept: !e
		}),
		(0, w.VS)() && (await eE()).setInteractionEnabled(!e);
}
function eA(e) {
	if (e) {
		let t = N.ZP.getVisibleGame(),
			n = null == t ? null : N.ZP.getGameOverlayStatus(t);
		(null == n ? void 0 : n.overlayMethod) === G.gl.OutOfProcess ? eS(e) : setTimeout(() => eS(e), 200);
	} else eS(e);
}
let eN = null;
function ev(e, t, n) {
	m.Z.relayClickZoneClicked(e, t, n);
}
async function eO(e) {
	if (!!(0, w.VS)())
		(await eE()).setClickZones(
			e.map((e) => ({
				name: e.name,
				left: e.left,
				top: e.top,
				right: e.right,
				bottom: e.bottom
			}))
		);
}
function eR(e) {
	return (
		!(q || !F || Q.has(e.type)) &&
		('USER_SETTINGS_PROTO_UPDATE' === e.type &&
			(e = {
				...e,
				settings: {
					type: e.settings.type,
					proto: (0, R.cv)(e.settings.type, e.settings.proto)
				}
			}),
		V.add(e),
		null == i && (i = setTimeout(eC, 1)),
		!1)
	);
}
function eC() {
	if ((null != i && (clearTimeout(i), (i = null)), !F)) {
		V.clear();
		return;
	}
	V.size > 0 &&
		(S.lW({
			type: x.BmY.DISPATCH,
			pid: null,
			token: null,
			payloads: Array.from(V)
		}),
		V.clear());
}
function ey(e) {
	return null != e && (0, M.y)(e, K);
}
function eD(e) {
	switch ((0, e.type)) {
		case x.BmY.CONNECT:
			let t = C.default.getToken();
			if (null == t) break;
			(0, p.te)(w.qU, D.Z.getDefaultLayout(w.qU)),
				Promise.all([(0, O.Z)(t, e.pid), _.ZP.PersistedStore.getAllStates()]).then((t) => {
					let [n, r] = t,
						{ pid: i, token: a } = e;
					S.lW({
						type: x.BmY.STORAGE_SYNC,
						pid: i,
						token: a,
						states: r
					}),
						S.lW({
							type: x.BmY.DISPATCH,
							pid: i,
							token: a,
							payloads: [n]
						}),
						en(i, 'READY'),
						m.Z.overlayReady(i);
				});
			break;
		case x.BmY.DISPATCH:
			if (null != e.payloads) {
				var n;
				(n = e.payloads), (q = !0), n.forEach((e) => E.Z.dispatch(e)), (q = !1);
			}
			break;
		case x.BmY.LOG_MESSAGES:
			$.info('[overlay data received]', e.payload);
	}
}
class eL extends (s = _.ZP.Store) {
	initialize() {
		if (!(!G.iP || __OVERLAY__)) this.waitFor(N.ZP, C.default), S.sr(eD, ey), C.default.addChangeListener(eg), eh(v.v.enabled, v.v.legacyEnabled), E.Z.addInterceptor(eR);
	}
	isInputLocked(e) {
		return !z.has(e);
	}
	isSupported() {
		return G.iP;
	}
	get enabled() {
		return H;
	}
	get legacyEnabled() {
		return Z;
	}
	getFocusedPID() {
		return j;
	}
	isReady(e) {
		return 'READY' === B.get(e);
	}
	isCrashed(e) {
		return 'CRASHED' === B.get(e);
	}
}
(c = 'OverlayBridgeStore'),
	(u = 'displayName') in (l = eL)
		? Object.defineProperty(l, u, {
				value: c,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[u] = c);
let eb = new eL(
	E.Z,
	__OVERLAY__
		? {
				OVERLAY_RELAY_CLICK_ZONE_CLICKED: function (e) {
					let { normalizedMouseX: t, normalizedMouseY: n } = e;
					setTimeout(() => {
						let e = Math.ceil(t * window.innerWidth),
							r = Math.ceil(n * window.innerHeight),
							i = (0, P.B)('click', e, r);
						(0, P.J)(i, e, r);
					}, 50);
				},
				OVERLAY_SET_ASSOCIATED_GAME: function (e) {
					if (!(0, w.W2)()) return;
					(0, w.tB)(e.associatedGamePID);
					let t = () =>
							new Promise((e) => {
								requestAnimationFrame(() => {
									let t = new MessageChannel();
									(t.port1.onmessage = () => {
										e();
									}),
										t.port2.postMessage(void 0);
								});
							}),
						n = 0,
						r = () => {
							15 === n ? m.Z.notifyReadyToShow(e.associatedGamePID) : ((n += 1), t().then(r));
						};
					r();
				}
			}
		: {
				CONNECTION_OPEN: function () {
					(Y = !0), ef();
				},
				CONNECTION_CLOSED: function () {
					(Y = !1), (j = null), eo(void 0);
				},
				OVERLAY_SET_ENABLED: function (e) {
					let { enabled: t, legacyEnabled: n } = e;
					return eh(t, n), !1;
				},
				OVERLAY_FOCUSED: function (e) {
					let { pid: t } = e;
					j = t;
				},
				RUNNING_GAMES_CHANGE: function (e) {
					eo(e);
				},
				OVERLAY_SET_INPUT_LOCKED: function (e) {
					let { locked: t, pid: n } = e,
						r = B.get(n);
					if (!t && !('READY' === r || 'CRASHED' === r)) return;
					if ((t ? z.delete(n) : z.add(n), X.clear(), null == eN || (clearTimeout(eN), (eN = null), !t)))
						t
							? eA(t)
							: (eN = setTimeout(() => {
									eA(t), (eN = null);
								}, 100));
				},
				OVERLAY_ACTIVATE_REGION: function (e) {
					let { region: t } = e;
					X.add(t), eA(!1);
				},
				OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
					X.clear(), eA(!0);
				},
				RPC_SERVER_READY: function (e) {
					let { port: t } = e;
					K = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
					let n = new URLSearchParams();
					n.append('build_id', '3e7a1435dd444a83b7febd5d2bc4015d99cd3342'), n.append('rpc', String(t)), n.append('rpc_auth_token', K), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
				},
				OVERLAY_CALL_PRIVATE_CHANNEL: function (e) {
					let { channelId: t, ring: n } = e;
					setImmediate(() => {
						I.default.selectPrivateChannel(t), f.Z.call(t, !1, !!n);
					});
				},
				OVERLAY_JOIN_GAME: function (e) {
					let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
					setImmediate(() => {
						h.Z.join({
							userId: t,
							sessionId: n,
							applicationId: r,
							channelId: i,
							messageId: a
						}),
							null != j && m.Z.setLocked(!0, j);
					});
				},
				OVERLAY_CRASHED: function (e) {
					let { pid: t } = e;
					en(t, 'CRASHED');
				},
				RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
					if (($.verbose('handleGameToggleOverlay', e), !('pid' in e.game))) {
						$.verbose('handleGameToggleOverlay: Game was not a RunningGame.', e);
						return;
					}
					let t = [e.game];
					eo({
						added: e.newEnabledValue ? t : [],
						removed: e.newEnabledValue ? [] : t
					});
				},
				OVERLAY_SET_CLICK_ZONES: function (e) {
					let { zones: t } = e;
					eO(t);
				},
				OVERLAY_SET_ASSOCIATED_GAME: function (e) {
					var t, n;
					if ((null !== (n = null === (t = k[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : G.gl.Disabled) !== G.gl.OutOfProcess) return;
					let r = B.get(e.previousAssociatedGamePID);
					null != r && (B.delete(e.previousAssociatedGamePID), B.set(e.associatedGamePID, r)), z.delete(e.previousAssociatedGamePID), (W = e.associatedGamePID);
				},
				OVERLAY_NOTIFY_READY_TO_SHOW: function (e) {
					eE().then((t) => {
						null == t || t.readyToShow(e.pid);
					});
				}
			}
);
t.Z = eb;

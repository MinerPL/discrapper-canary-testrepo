n.r(t);
var r = n(570140);
t.default = {
	setDesktopType(e) {
		r.Z.dispatch({
			type: 'NOTIFICATIONS_SET_DESKTOP_TYPE',
			desktopType: e
		});
	},
	setTTSType(e) {
		r.Z.dispatch({
			type: 'NOTIFICATIONS_SET_TTS_TYPE',
			ttsType: e
		});
	},
	setDisabledSounds(e) {
		r.Z.dispatch({
			type: 'NOTIFICATIONS_SET_DISABLED_SOUNDS',
			sounds: e
		});
	},
	toggleDisableAllSounds() {
		r.Z.dispatch({ type: 'NOTIFICATIONS_TOGGLE_ALL_DISABLED' });
	},
	setDisableUnreadBadge(e) {
		r.Z.dispatch({
			type: 'NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE',
			disableUnreadBadge: e
		});
	},
	setTaskbarFlash(e) {
		r.Z.dispatch({
			type: 'NOTIFICATIONS_SET_TASKBAR_FLASH',
			taskbarFlash: e
		});
	},
	setNotifyMessagesInSelectedChannel(e) {
		r.Z.dispatch({
			type: 'NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL',
			notify: e
		});
	},
	setPermissionsState(e, t) {
		r.Z.dispatch({
			type: 'NOTIFICATIONS_SET_PERMISSION_STATE',
			enabled: e,
			source: t
		});
	},
	showNotification(e, t, n, i) {
		let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
		r.Z.dispatch({
			type: 'NOTIFICATION_CREATE',
			icon: e,
			title: t,
			body: n,
			trackingProps: i,
			options: {
				...a,
				onClick() {
					var e;
					null === (e = a.onClick) || void 0 === e || e.call(a), r.Z.dispatch({ type: 'NOTIFICATION_CLICK' });
				}
			}
		});
	},
	clickedNotification() {
		r.Z.dispatch({ type: 'NOTIFICATION_CLICK' });
	}
};

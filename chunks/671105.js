n.d(t, {
	OR: function () {
		return a;
	},
	_c: function () {
		return o;
	},
	bb: function () {
		return r;
	},
	iD: function () {
		return s;
	}
});
var i = n(442837),
	l = n(581883),
	u = n(871465);
function a(e) {
	return d(
		e,
		void 0,
		(0, i.e7)([l.Z], () => {
			var e;
			return null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds;
		})
	);
}
function s(e) {
	var t, n;
	return d(e, void 0, null !== (n = null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
}
function o(e, t) {
	let n = (0, i.e7)([l.Z], () => {
		var e;
		return null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds;
	});
	return null != t ? d(e, t, n) : void 0;
}
function r(e, t) {
	var n, i;
	let u = null !== (i = null === (n = l.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== i ? i : {};
	return null != t ? d(e, t, u) : void 0;
}
function d(e, t, n) {
	var i, l;
	if (null == n) return;
	let a = null != t ? (null === (i = n[e]) || void 0 === i ? void 0 : i.channels[t]) : n[e],
		s = null == a ? void 0 : a.customNotificationSoundConfig;
	return null != s
		? (function (e) {
				return null != e ? Object.values(u.YC).find((t) => t === e) : void 0;
			})(null == s ? void 0 : null === (l = s.notificationSoundPackId) || void 0 === l ? void 0 : l.value)
		: void 0;
}

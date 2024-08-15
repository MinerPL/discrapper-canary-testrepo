var r, i;
n.r(t),
	n.d(t, {
		PlatformTypes: function () {
			return r;
		},
		getNativePlatform: function () {
			return T;
		},
		getOS: function () {
			return g;
		},
		getPlatform: function () {
			return I;
		},
		getPlatformName: function () {
			return m;
		},
		isAndroid: function () {
			return h;
		},
		isAndroidChrome: function () {
			return E;
		},
		isAndroidWeb: function () {
			return f;
		},
		isDesktop: function () {
			return d;
		},
		isIOS: function () {
			return p;
		},
		isLinux: function () {
			return c;
		},
		isMac: function () {
			return u;
		},
		isPlatformEmbedded: function () {
			return s;
		},
		isWeb: function () {
			return _;
		},
		isWindows: function () {
			return l;
		}
	}),
	((i = r || (r = {})).WINDOWS = 'WINDOWS'),
	(i.OSX = 'OSX'),
	(i.LINUX = 'LINUX'),
	(i.WEB = 'WEB');
let a = window.DiscordNative,
	s = null != a,
	o = null != a ? a.process.platform : '';
function l() {
	return /^win/.test(o);
}
function u() {
	return 'darwin' === o;
}
function c() {
	return 'linux' === o;
}
function d() {
	return l() || u() || c();
}
function _() {
	return 'WEB' === I();
}
function E() {
	return (
		null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match('(android ).+chrome/[.0-9]* mobile')
	);
}
function f() {
	var e;
	return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null;
}
function h() {
	return 'android' === o;
}
function p() {
	return 'ios' === o;
}
function I() {
	return l() ? 'WINDOWS' : u() ? 'OSX' : c() ? 'LINUX' : 'WEB';
}
function m() {
	return o;
}
function T() {
	switch (o) {
		case 'ios':
		case 'android':
			return o;
		default:
			return 'web';
	}
}
function g() {
	let { userAgent: e } = window.navigator;
	if (/Windows/i.test(e)) return /Phone/.test(e) ? 'windows mobile' : 'windows';
	if (/(iPhone|iPad|iPod)/.test(e)) return 'ios';
	if (/Android/.test(e)) return 'android';
	else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'blackberry';
	else if (/Mac/i.test(e))
		return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'ios' : 'macos';
	else if (/Linux/i.test(e)) return 'linux';
}

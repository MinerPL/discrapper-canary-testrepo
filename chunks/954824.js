var r = n(525654),
	i = n.n(r),
	a = n(444675);
function s(e, t) {
	if (!e.startsWith('discord:')) return (location.href = e), a.nextTick(() => t(!0));
	let { body: n } = document;
	if (null == n) return a.nextTick(() => t(!1));
	let r = document.createElement('iframe');
	n.appendChild(r);
	try {
		null != r.contentWindow && (r.contentWindow.location.href = e), a.nextTick(() => t(!0));
	} catch (e) {
		'NS_ERROR_UNKNOWN_PROTOCOL' === e.name && a.nextTick(() => t(!1));
	}
	window.setTimeout(() => {
		var e;
		(null !== (e = null == r ? void 0 : r.parentElement) && void 0 !== e ? e : null) !== null && n.removeChild(r);
	}, 1000);
}
function o(e, t) {
	let n = !1;
	function r() {
		n = !0;
	}
	window.addEventListener('blur', r),
		(location.href = e),
		setTimeout(() => {
			window.removeEventListener('blur', r), t(n);
		}, 1000);
}
function l(e, t) {
	t(!1);
}
function u(e, t) {
	(location.href = e), a.nextTick(() => t(!0));
}
t.Z = {
	launch: (function () {
		var e, t;
		if (
			(null === (e = i().os) || void 0 === e ? void 0 : e.family) === 'Android' ||
			(null === (t = i().os) || void 0 === t ? void 0 : t.family) === 'iOS'
		)
			return u;
		if ('Gecko' === i().layout) return s;
		if (null != i().ua && -1 !== i().ua.indexOf('Valve Steam GameOverlay')) return l;
		return o;
	})()
};

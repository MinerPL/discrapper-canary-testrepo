r.d(t, {
	U0: function () {
		return e5;
	},
	fA: function () {
		return g;
	},
	gS: function () {
		return eZ;
	},
	qm: function () {
		return B;
	},
	rp: function () {
		return b;
	}
});
var n = r(263449),
	a = r(425930),
	o = r(899517),
	i = r(467510),
	_ = r(622916),
	E = r(26506);
let s = o.n,
	c = s.document,
	I = s.navigator,
	u = 'Report a Bug',
	l = 'Cancel',
	R = 'Send Bug Report',
	A = 'Confirm',
	T = 'Report a Bug',
	d = 'your.email@example.org',
	N = 'Email',
	p = "What's the bug? What did you expect?",
	O = 'Description',
	f = 'Your Name',
	S = 'Name',
	D = 'Thank you for your report!',
	L = '(required)',
	h = 'Add a screenshot',
	C = 'Remove screenshot',
	g = (e, t = { includeReplay: !0 }) => {
		if (!e.message) throw Error('Unable to submit feedback with empty message');
		let r = (0, n.s3)();
		if (!r) throw Error('No client setup, cannot send feedback.');
		e.tags && Object.keys(e.tags).length && (0, n.nZ)().setTags(e.tags);
		let o = (0, a.N)(
			{
				source: 'api',
				url: (0, i.l4)(),
				...e
			},
			t
		);
		return new Promise((e, t) => {
			let n = setTimeout(() => t('Unable to determine if Feedback was correctly sent.'), 5000),
				a = r.on('afterSendEvent', (r, i) =>
					r.event_id !== o
						? void 0
						: (clearTimeout(n),
							  a(),
							  i && 'number' == typeof i.statusCode && i.statusCode >= 200 && i.statusCode < 300 && e(o),
							  i && 'number' == typeof i.statusCode && 0 === i.statusCode)
							? t('Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.')
							: t(
									'Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker'
								)
				);
		});
	},
	M = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function P(e, t) {
	return {
		...e,
		...t,
		tags: {
			...e.tags,
			...t.tags
		},
		onFormOpen: () => {
			t.onFormOpen && t.onFormOpen(), e.onFormOpen && e.onFormOpen();
		},
		onFormClose: () => {
			t.onFormClose && t.onFormClose(), e.onFormClose && e.onFormClose();
		},
		onSubmitSuccess: (r) => {
			t.onSubmitSuccess && t.onSubmitSuccess(r), e.onSubmitSuccess && e.onSubmitSuccess(r);
		},
		onSubmitError: (r) => {
			t.onSubmitError && t.onSubmitError(r), e.onSubmitError && e.onSubmitError(r);
		},
		onFormSubmitted: () => {
			t.onFormSubmitted && t.onFormSubmitted(), e.onFormSubmitted && e.onFormSubmitted();
		},
		themeDark: {
			...e.themeDark,
			...t.themeDark
		},
		themeLight: {
			...e.themeLight,
			...t.themeLight
		}
	};
}
function m(e, t) {
	return (
		Object.entries(t).forEach(([t, r]) => {
			e.setAttributeNS(null, t, r);
		}),
		e
	);
}
let U = 'rgba(88, 74, 192, 1)',
	G = {
		foreground: '#2b2233',
		background: '#ffffff',
		accentForeground: 'white',
		accentBackground: U,
		successColor: '#268d75',
		errorColor: '#df3338',
		border: '1.5px solid rgba(41, 35, 47, 0.13)',
		boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
		outline: '1px auto var(--accent-background)',
		interactiveFilter: 'brightness(95%)'
	},
	y = {
		foreground: '#ebe6ef',
		background: '#29232f',
		accentForeground: 'white',
		accentBackground: U,
		successColor: '#2da98c',
		errorColor: '#f55459',
		border: '1.5px solid rgba(235, 230, 239, 0.15)',
		boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
		outline: '1px auto var(--accent-background)',
		interactiveFilter: 'brightness(150%)'
	};
function v(e) {
	return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `;
}
let b =
	({ lazyLoadIntegration: e, getModalIntegration: t, getScreenshotIntegration: r }) =>
	({
		id: a = 'sentry-feedback',
		autoInject: o = !0,
		showBranding: i = !0,
		isEmailRequired: U = !1,
		isNameRequired: b = !1,
		showEmail: B = !0,
		showName: w = !0,
		enableScreenshot: H = !0,
		useSentryUser: Y = {
			email: 'email',
			name: 'username'
		},
		tags: K,
		colorScheme: k = 'system',
		themeLight: V = {},
		themeDark: x = {},
		addScreenshotButtonLabel: F = h,
		cancelButtonLabel: W = l,
		confirmButtonLabel: X = A,
		emailLabel: j = N,
		emailPlaceholder: $ = d,
		formTitle: q = T,
		isRequiredLabel: z = L,
		messageLabel: J = O,
		messagePlaceholder: Q = p,
		nameLabel: Z = S,
		namePlaceholder: ee = f,
		removeScreenshotButtonLabel: et = C,
		submitButtonLabel: er = R,
		successMessageText: en = D,
		triggerLabel: ea = u,
		triggerAriaLabel: eo = '',
		onFormOpen: ei,
		onFormClose: e_,
		onSubmitSuccess: eE,
		onSubmitError: es,
		onFormSubmitted: ec
	} = {}) => {
		let eI = {
				id: a,
				autoInject: o,
				showBranding: i,
				isEmailRequired: U,
				isNameRequired: b,
				showEmail: B,
				showName: w,
				enableScreenshot: H,
				useSentryUser: Y,
				tags: K,
				colorScheme: k,
				themeDark: x,
				themeLight: V,
				triggerLabel: ea,
				triggerAriaLabel: eo,
				cancelButtonLabel: W,
				submitButtonLabel: er,
				confirmButtonLabel: X,
				formTitle: q,
				emailLabel: j,
				emailPlaceholder: $,
				messageLabel: J,
				messagePlaceholder: Q,
				nameLabel: Z,
				namePlaceholder: ee,
				successMessageText: en,
				isRequiredLabel: z,
				addScreenshotButtonLabel: F,
				removeScreenshotButtonLabel: et,
				onFormClose: e_,
				onFormOpen: ei,
				onSubmitError: es,
				onSubmitSuccess: eE,
				onFormSubmitted: ec
			},
			eu = null,
			el = [],
			eR = (e) => {
				if (!eu) {
					let t = c.createElement('div');
					(t.id = String(e.id)),
						c.body.appendChild(t),
						(eu = t.attachShadow({ mode: 'open' })).appendChild(
							(function ({ colorScheme: e, themeDark: t, themeLight: r }) {
								let n = c.createElement('style');
								return (
									(n.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${'system' !== e ? 'color-scheme: only light;' : ''}

  ${v(
		'dark' === e
			? {
					...y,
					...t
				}
			: {
					...G,
					...r
				}
	)}
}

${
	'system' === e
		? `
@media (prefers-color-scheme: dark) {
  :host {
    ${v({
			...y,
			...t
		})}
  }
}`
		: ''
}
}
`),
									n
								);
							})(e)
						);
				}
				return eu;
			},
			eA = async (t, r, a) => {
				let o = (0, n.s3)(),
					i = o && o.getIntegrationByName(t);
				if (i) return i;
				let _ = ((r && r()) || (await e(a)))();
				return o && o.addIntegration(_), _;
			},
			eT = async (e) => {
				let n =
						e.enableScreenshot &&
						!(
							/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(I.userAgent) ||
							(/Macintosh/i.test(I.userAgent) && I.maxTouchPoints && I.maxTouchPoints > 1)
						) &&
						!!isSecureContext &&
						!0,
					[a, o] = await Promise.all([
						eA('FeedbackModal', t, 'feedbackModalIntegration'),
						n ? eA('FeedbackScreenshot', r, 'feedbackScreenshotIntegration') : void 0
					]);
				if (!a)
					throw (
						(M &&
							_.kg.error(
								'[Feedback] Missing feedback modal integration. Try using `feedbackSyncIntegration` in your `Sentry.init`.'
							),
						Error('[Feedback] Missing feedback modal integration!'))
					);
				return (
					n &&
						!o &&
						M &&
						_.kg.error('[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.'),
					a.createDialog({
						options: e,
						screenshotIntegration: n ? o : void 0,
						sendFeedback: g,
						shadow: eR(e)
					})
				);
			},
			ed = (e, t = {}) => {
				let r = P(eI, t),
					n = 'string' == typeof e ? c.querySelector(e) : 'function' == typeof e.addEventListener ? e : null;
				if (!n)
					throw (
						(M && _.kg.error('[Feedback] Unable to attach to target element'),
						Error('Unable to attach to target element'))
					);
				let a = null,
					o = async () => {
						!a &&
							(a = await eT({
								...r,
								onFormClose: () => {
									a && a.close(), r.onFormClose && r.onFormClose();
								},
								onFormSubmitted: () => {
									a && a.removeFromDom(), r.onFormSubmitted && r.onFormSubmitted();
								}
							})),
							a.appendToDom(),
							a.open();
					};
				n.addEventListener('click', o);
				let i = () => {
					(el = el.filter((e) => e !== i)), a && a.removeFromDom(), (a = null), n.removeEventListener('click', o);
				};
				return el.push(i), i;
			},
			eN = (e = {}) => {
				let t = P(eI, e),
					r = eR(t),
					n = (function ({ triggerLabel: e, triggerAriaLabel: t, shadow: r }) {
						let n = c.createElement('button');
						if (
							((n.type = 'button'),
							(n.className = 'widget__actor'),
							(n.ariaHidden = 'false'),
							(n.ariaLabel = t || e || u),
							n.appendChild(
								(function () {
									let e = (e) => s.document.createElementNS('http://www.w3.org/2000/svg', e),
										t = m(e('svg'), {
											width: '20',
											height: '20',
											viewBox: '0 0 20 20',
											fill: 'var(--foreground)'
										}),
										r = m(e('g'), { clipPath: 'url(#clip0_57_80)' }),
										n = m(e('path'), {
											'fill-rule': 'evenodd',
											'clip-rule': 'evenodd',
											d: 'M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z'
										});
									t.appendChild(r).appendChild(n);
									let a = e('defs'),
										o = m(e('clipPath'), { id: 'clip0_57_80' }),
										i = m(e('rect'), {
											width: '20',
											height: '20',
											fill: 'white'
										});
									return o.appendChild(i), a.appendChild(o), t.appendChild(a).appendChild(o).appendChild(i), t;
								})()
							),
							e)
						) {
							let t = c.createElement('span');
							t.appendChild(c.createTextNode(e)), n.appendChild(t);
						}
						let a = (function () {
							let e = c.createElement('style');
							return (
								(e.textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`),
								e
							);
						})();
						return {
							el: n,
							appendToDom() {
								r.appendChild(a), r.appendChild(n);
							},
							removeFromDom() {
								r.removeChild(n), r.removeChild(a);
							},
							show() {
								n.ariaHidden = 'false';
							},
							hide() {
								n.ariaHidden = 'true';
							}
						};
					})({
						triggerLabel: t.triggerLabel,
						triggerAriaLabel: t.triggerAriaLabel,
						shadow: r
					});
				return (
					ed(n.el, {
						...t,
						onFormOpen() {
							n.hide();
						},
						onFormClose() {
							n.show();
						},
						onFormSubmitted() {
							n.show();
						}
					}),
					n
				);
			};
		return {
			name: 'Feedback',
			setupOnce() {
				if (!!(0, E.j)() && !!eI.autoInject)
					'loading' === c.readyState
						? c.addEventListener('DOMContentLoaded', () => eN().appendToDom())
						: eN().appendToDom();
			},
			attachTo: ed,
			createWidget(e = {}) {
				let t = eN(P(eI, e));
				return t.appendToDom(), t;
			},
			createForm: async (e = {}) => eT(P(eI, e)),
			remove() {
				eu && (eu.parentElement && eu.parentElement.remove(), (eu = null)), el.forEach((e) => e()), (el = []);
			}
		};
	};
function B() {
	let e = (0, n.s3)();
	return e && e.getIntegrationByName('Feedback');
}
var w,
	H,
	Y,
	K,
	k,
	V,
	x,
	F = {},
	W = [],
	X = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	j = Array.isArray;
function $(e, t) {
	for (var r in t) e[r] = t[r];
	return e;
}
function q(e) {
	var t = e.parentNode;
	t && t.removeChild(e);
}
function z(e, t, r) {
	var n,
		a,
		o,
		i = {};
	for (o in t) 'key' == o ? (n = t[o]) : 'ref' == o ? (a = t[o]) : (i[o] = t[o]);
	if (
		(arguments.length > 2 && (i.children = arguments.length > 3 ? w.call(arguments, 2) : r),
		'function' == typeof e && null != e.defaultProps)
	)
		for (o in e.defaultProps) void 0 === i[o] && (i[o] = e.defaultProps[o]);
	return J(e, i, n, a, null);
}
function J(e, t, r, n, a) {
	var o = {
		type: e,
		props: t,
		key: r,
		ref: n,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		constructor: void 0,
		__v: null == a ? ++Y : a,
		__i: -1,
		__u: 0
	};
	return null == a && null != H.vnode && H.vnode(o), o;
}
function Q(e) {
	return e.children;
}
function Z(e, t) {
	(this.props = e), (this.context = t);
}
function ee(e, t) {
	if (null == t) return e.__ ? ee(e.__, e.__i + 1) : null;
	for (var r; t < e.__k.length; t++) if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
	return 'function' == typeof e.type ? ee(e) : null;
}
function et(e) {
	((!e.__d && (e.__d = !0) && K.push(e) && !er.__r++) || k !== H.debounceRendering) &&
		((k = H.debounceRendering) || V)(er);
}
function er() {
	var e,
		t,
		r,
		n = [],
		a = [];
	for (K.sort(x); (e = K.shift()); )
		e.__d &&
			((r = K.length),
			(t =
				(function (e, t, r) {
					var n,
						a = e.__v,
						o = a.__e,
						i = e.__P;
					if (i)
						return (
							((n = $({}, a)).__v = a.__v + 1),
							H.vnode && H.vnode(n),
							eE(
								i,
								n,
								a,
								e.__n,
								void 0 !== i.ownerSVGElement,
								32 & a.__u ? [o] : null,
								t,
								null == o ? ee(a) : o,
								!!(32 & a.__u),
								r
							),
							(n.__.__k[n.__i] = n),
							(n.__d = void 0),
							n.__e != o &&
								(function e(t) {
									var r, n;
									if (null != (t = t.__) && null != t.__c) {
										for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
											if (null != (n = t.__k[r]) && null != n.__e) {
												t.__e = t.__c.base = n.__e;
												break;
											}
										return e(t);
									}
								})(n),
							n
						);
				})(e, n, a) || t),
			0 === r || K.length > r
				? (es(n, t, a), (a.length = n.length = 0), (t = void 0), K.sort(x))
				: t && H.__c && H.__c(t, W));
	t && es(n, t, a), (er.__r = 0);
}
function en(e, t, r, n, a, o, i, _, E, s, c) {
	var I,
		u,
		l,
		R,
		A,
		T = (n && n.__k) || W,
		d = t.length;
	for (
		r.__d = E,
			(function (e, t, r) {
				var n,
					a,
					o,
					i,
					_,
					E = t.length,
					s = r.length,
					c = s,
					I = 0;
				for (e.__k = [], n = 0; n < E; n++)
					null !=
					(a = e.__k[n] =
						null == (a = t[n]) || 'boolean' == typeof a || 'function' == typeof a
							? null
							: 'string' == typeof a || 'number' == typeof a || 'bigint' == typeof a || a.constructor == String
								? J(null, a, null, null, a)
								: j(a)
									? J(Q, { children: a }, null, null, null)
									: void 0 === a.constructor && a.__b > 0
										? J(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
										: a)
						? ((a.__ = e),
							(a.__b = e.__b + 1),
							(_ = (function (e, t, r, n) {
								var a = e.key,
									o = e.type,
									i = r - 1,
									_ = r + 1,
									E = t[r];
								if (null === E || (E && a == E.key && o === E.type)) return r;
								if (n > (null != E && 0 == (131072 & E.__u) ? 1 : 0))
									for (; i >= 0 || _ < t.length; ) {
										if (i >= 0) {
											if ((E = t[i]) && 0 == (131072 & E.__u) && a == E.key && o === E.type) return i;
											i--;
										}
										if (_ < t.length) {
											if ((E = t[_]) && 0 == (131072 & E.__u) && a == E.key && o === E.type) return _;
											_++;
										}
									}
								return -1;
							})(a, r, (i = n + I), c)),
							(a.__i = _),
							(o = null),
							-1 !== _ && (c--, (o = r[_]) && (o.__u |= 131072)),
							null == o || null === o.__v
								? (-1 == _ && I--, 'function' != typeof a.type && (a.__u |= 65536))
								: _ !== i &&
									(_ === i + 1 ? I++ : _ > i ? (c > E - i ? (I += _ - i) : I--) : (I = _ < i && _ == i - 1 ? _ - i : 0),
									_ !== n + I && (a.__u |= 65536)))
						: (o = r[n]) &&
							null == o.key &&
							o.__e &&
							(o.__e == e.__d && (e.__d = ee(o)), eI(o, o, !1), (r[n] = null), c--);
				if (c)
					for (n = 0; n < s; n++)
						null != (o = r[n]) && 0 == (131072 & o.__u) && (o.__e == e.__d && (e.__d = ee(o)), eI(o, o));
			})(r, t, T),
			E = r.__d,
			I = 0;
		I < d;
		I++
	)
		null != (l = r.__k[I]) &&
			'boolean' != typeof l &&
			'function' != typeof l &&
			((u = -1 === l.__i ? F : T[l.__i] || F),
			(l.__i = I),
			eE(e, l, u, a, o, i, _, E, s, c),
			(R = l.__e),
			l.ref && u.ref != l.ref && (u.ref && ec(u.ref, null, l), c.push(l.ref, l.__c || R, l)),
			null == A && null != R && (A = R),
			65536 & l.__u || u.__k === l.__k
				? (E = (function e(t, r, n) {
						var a, o;
						if ('function' == typeof t.type) {
							for (a = t.__k, o = 0; a && o < a.length; o++) a[o] && ((a[o].__ = t), (r = e(a[o], r, n)));
							return r;
						}
						t.__e != r && (n.insertBefore(t.__e, r || null), (r = t.__e));
						do r = r && r.nextSibling;
						while (null != r && 8 === r.nodeType);
						return r;
					})(l, E, e))
				: 'function' == typeof l.type && void 0 !== l.__d
					? (E = l.__d)
					: R && (E = R.nextSibling),
			(l.__d = void 0),
			(l.__u &= -196609));
	(r.__d = E), (r.__e = A);
}
function ea(e, t, r) {
	'-' === t[0]
		? e.setProperty(t, null == r ? '' : r)
		: (e[t] = null == r ? '' : 'number' != typeof r || X.test(t) ? r : r + 'px');
}
function eo(e, t, r, n, a) {
	var o;
	t: if ('style' === t) {
		if ('string' == typeof r) e.style.cssText = r;
		else {
			if (('string' == typeof n && (e.style.cssText = n = ''), n)) for (t in n) (r && t in r) || ea(e.style, t, '');
			if (r) for (t in r) (n && r[t] === n[t]) || ea(e.style, t, r[t]);
		}
	} else if ('o' === t[0] && 'n' === t[1])
		(o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, '$1'))),
			(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
			e.l || (e.l = {}),
			(e.l[t + o] = r),
			r
				? n
					? (r.u = n.u)
					: ((r.u = Date.now()), e.addEventListener(t, o ? e_ : ei, o))
				: e.removeEventListener(t, o ? e_ : ei, o);
	else {
		if (a) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
		else if (
			'width' !== t &&
			'height' !== t &&
			'href' !== t &&
			'list' !== t &&
			'form' !== t &&
			'tabIndex' !== t &&
			'download' !== t &&
			'rowSpan' !== t &&
			'colSpan' !== t &&
			'role' !== t &&
			t in e
		)
			try {
				e[t] = null == r ? '' : r;
				break t;
			} catch (e) {}
		'function' == typeof r || (null == r || (!1 === r && '-' !== t[4]) ? e.removeAttribute(t) : e.setAttribute(t, r));
	}
}
function ei(e) {
	if (this.l) {
		var t = this.l[e.type + !1];
		if (e.t) {
			if (e.t <= t.u) return;
		} else e.t = Date.now();
		return t(H.event ? H.event(e) : e);
	}
}
function e_(e) {
	if (this.l) return this.l[e.type + !0](H.event ? H.event(e) : e);
}
function eE(e, t, r, n, a, o, i, _, E, s) {
	var c,
		I,
		u,
		l,
		R,
		A,
		T,
		d,
		N,
		p,
		O,
		f,
		S,
		D,
		L,
		h = t.type;
	if (void 0 !== t.constructor) return null;
	128 & r.__u && ((E = !!(32 & r.__u)), (o = [(_ = t.__e = r.__e)])), (c = H.__b) && c(t);
	t: if ('function' == typeof h)
		try {
			if (
				((d = t.props),
				(N = (c = h.contextType) && n[c.__c]),
				(p = c ? (N ? N.props.value : c.__) : n),
				r.__c
					? (T = (I = t.__c = r.__c).__ = I.__E)
					: ('prototype' in h && h.prototype.render
							? (t.__c = I = new h(d, p))
							: ((t.__c = I = new Z(d, p)), (I.constructor = h), (I.render = eu)),
						N && N.sub(I),
						(I.props = d),
						I.state || (I.state = {}),
						(I.context = p),
						(I.__n = n),
						(u = I.__d = !0),
						(I.__h = []),
						(I._sb = [])),
				null == I.__s && (I.__s = I.state),
				null != h.getDerivedStateFromProps &&
					(I.__s == I.state && (I.__s = $({}, I.__s)), $(I.__s, h.getDerivedStateFromProps(d, I.__s))),
				(l = I.props),
				(R = I.state),
				(I.__v = t),
				u)
			)
				null == h.getDerivedStateFromProps && null != I.componentWillMount && I.componentWillMount(),
					null != I.componentDidMount && I.__h.push(I.componentDidMount);
			else {
				if (
					(null == h.getDerivedStateFromProps &&
						d !== l &&
						null != I.componentWillReceiveProps &&
						I.componentWillReceiveProps(d, p),
					!I.__e &&
						((null != I.shouldComponentUpdate && !1 === I.shouldComponentUpdate(d, I.__s, p)) || t.__v === r.__v))
				) {
					for (
						t.__v !== r.__v && ((I.props = d), (I.state = I.__s), (I.__d = !1)),
							t.__e = r.__e,
							t.__k = r.__k,
							t.__k.forEach(function (e) {
								e && (e.__ = t);
							}),
							O = 0;
						O < I._sb.length;
						O++
					)
						I.__h.push(I._sb[O]);
					(I._sb = []), I.__h.length && i.push(I);
					break t;
				}
				null != I.componentWillUpdate && I.componentWillUpdate(d, I.__s, p),
					null != I.componentDidUpdate &&
						I.__h.push(function () {
							I.componentDidUpdate(l, R, A);
						});
			}
			if (
				((I.context = p),
				(I.props = d),
				(I.__P = e),
				(I.__e = !1),
				(f = H.__r),
				(S = 0),
				'prototype' in h && h.prototype.render)
			) {
				for (
					I.state = I.__s, I.__d = !1, f && f(t), c = I.render(I.props, I.state, I.context), D = 0;
					D < I._sb.length;
					D++
				)
					I.__h.push(I._sb[D]);
				I._sb = [];
			} else
				do (I.__d = !1), f && f(t), (c = I.render(I.props, I.state, I.context)), (I.state = I.__s);
				while (I.__d && ++S < 25);
			(I.state = I.__s),
				null != I.getChildContext && (n = $($({}, n), I.getChildContext())),
				u || null == I.getSnapshotBeforeUpdate || (A = I.getSnapshotBeforeUpdate(l, R)),
				en(
					e,
					j((L = null != c && c.type === Q && null == c.key ? c.props.children : c)) ? L : [L],
					t,
					r,
					n,
					a,
					o,
					i,
					_,
					E,
					s
				),
				(I.base = t.__e),
				(t.__u &= -161),
				I.__h.length && i.push(I),
				T && (I.__E = I.__ = null);
		} catch (e) {
			(t.__v = null),
				E || null != o
					? ((t.__e = _), (t.__u |= E ? 160 : 32), (o[o.indexOf(_)] = null))
					: ((t.__e = r.__e), (t.__k = r.__k)),
				H.__e(e, t, r);
		}
	else
		null == o && t.__v === r.__v
			? ((t.__k = r.__k), (t.__e = r.__e))
			: (t.__e = (function (e, t, r, n, a, o, i, _, E) {
					var s,
						c,
						I,
						u,
						l,
						R,
						A,
						T = r.props,
						d = t.props,
						N = t.type;
					if (('svg' === N && (a = !0), null != o)) {
						for (s = 0; s < o.length; s++)
							if ((l = o[s]) && 'setAttribute' in l == !!N && (N ? l.localName === N : 3 === l.nodeType)) {
								(e = l), (o[s] = null);
								break;
							}
					}
					if (null == e) {
						if (null === N) return document.createTextNode(d);
						(e = a ? document.createElementNS('http://www.w3.org/2000/svg', N) : document.createElement(N, d.is && d)),
							(o = null),
							(_ = !1);
					}
					if (null === N) T === d || (_ && e.data === d) || (e.data = d);
					else {
						if (((o = o && w.call(e.childNodes)), (T = r.props || F), !_ && null != o))
							for (T = {}, s = 0; s < e.attributes.length; s++) T[(l = e.attributes[s]).name] = l.value;
						for (s in T)
							(l = T[s]),
								'children' == s ||
									('dangerouslySetInnerHTML' == s ? (I = l) : 'key' === s || s in d || eo(e, s, null, l, a));
						for (s in d)
							(l = d[s]),
								'children' == s
									? (u = l)
									: 'dangerouslySetInnerHTML' == s
										? (c = l)
										: 'value' == s
											? (R = l)
											: 'checked' == s
												? (A = l)
												: 'key' === s || (_ && 'function' != typeof l) || T[s] === l || eo(e, s, l, T[s], a);
						if (c)
							_ || (I && (c.__html === I.__html || c.__html === e.innerHTML)) || (e.innerHTML = c.__html), (t.__k = []);
						else if (
							(I && (e.innerHTML = ''),
							en(e, j(u) ? u : [u], t, r, n, a && 'foreignObject' !== N, o, i, o ? o[0] : r.__k && ee(r, 0), _, E),
							null != o)
						)
							for (s = o.length; s--; ) null != o[s] && q(o[s]);
						_ ||
							((s = 'value'),
							void 0 === R ||
								(R === e[s] && ('progress' !== N || R) && ('option' !== N || R === T[s])) ||
								eo(e, s, R, T[s], !1),
							(s = 'checked'),
							void 0 !== A && A !== e[s] && eo(e, s, A, T[s], !1));
					}
					return e;
				})(r.__e, t, r, n, a, o, i, E, s));
	(c = H.diffed) && c(t);
}
function es(e, t, r) {
	for (var n = 0; n < r.length; n++) ec(r[n], r[++n], r[++n]);
	H.__c && H.__c(t, e),
		e.some(function (t) {
			try {
				(e = t.__h),
					(t.__h = []),
					e.some(function (e) {
						e.call(t);
					});
			} catch (e) {
				H.__e(e, t.__v);
			}
		});
}
function ec(e, t, r) {
	try {
		'function' == typeof e ? e(t) : (e.current = t);
	} catch (e) {
		H.__e(e, r);
	}
}
function eI(e, t, r) {
	var n, a;
	if (
		(H.unmount && H.unmount(e),
		(n = e.ref) && ((n.current && n.current !== e.__e) || ec(n, null, t)),
		null != (n = e.__c))
	) {
		if (n.componentWillUnmount)
			try {
				n.componentWillUnmount();
			} catch (e) {
				H.__e(e, t);
			}
		(n.base = n.__P = null), (e.__c = void 0);
	}
	if ((n = e.__k)) for (a = 0; a < n.length; a++) n[a] && eI(n[a], t, r || 'function' != typeof e.type);
	r || null == e.__e || q(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function eu(e, t, r) {
	return this.constructor(e, r);
}
(w = W.slice),
	(H = {
		__e: function (e, t, r, n) {
			for (var a, o, i; (t = t.__); )
				if ((a = t.__c) && !a.__)
					try {
						if (
							((o = a.constructor) &&
								null != o.getDerivedStateFromError &&
								(a.setState(o.getDerivedStateFromError(e)), (i = a.__d)),
							null != a.componentDidCatch && (a.componentDidCatch(e, n || {}), (i = a.__d)),
							i)
						)
							return (a.__E = a);
					} catch (t) {
						e = t;
					}
			throw e;
		}
	}),
	(Y = 0),
	(Z.prototype.setState = function (e, t) {
		var r;
		(r = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = $({}, this.state))),
			'function' == typeof e && (e = e($({}, r), this.props)),
			e && $(r, e),
			null != e && this.__v && (t && this._sb.push(t), et(this));
	}),
	(Z.prototype.forceUpdate = function (e) {
		this.__v && ((this.__e = !0), e && this.__h.push(e), et(this));
	}),
	(Z.prototype.render = Q),
	(K = []),
	(V = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
	(x = function (e, t) {
		return e.__v.__b - t.__v.__b;
	}),
	(er.__r = 0);
var el,
	eR,
	eA,
	eT,
	ed = 0,
	eN = [],
	ep = [],
	eO = H,
	ef = eO.__b,
	eS = eO.__r,
	eD = eO.diffed,
	eL = eO.__c,
	eh = eO.unmount,
	eC = eO.__;
function eg(e, t) {
	eO.__h && eO.__h(eR, e, ed || t), (ed = 0);
	var r =
		eR.__H ||
		(eR.__H = {
			__: [],
			__h: []
		});
	return e >= r.__.length && r.__.push({ __V: ep }), r.__[e];
}
function eM(e) {
	return (ed = 1), eP(eH, e);
}
function eP(e, t, r) {
	var n = eg(el++, 2);
	if (
		((n.t = e),
		!n.__c &&
			((n.__ = [
				r ? r(t) : eH(void 0, t),
				function (e) {
					var t = n.__N ? n.__N[0] : n.__[0],
						r = n.t(t, e);
					t !== r && ((n.__N = [r, n.__[1]]), n.__c.setState({}));
				}
			]),
			(n.__c = eR),
			!eR.u))
	) {
		var a = function (e, t, r) {
			if (!n.__c.__H) return !0;
			var a = n.__c.__H.__.filter(function (e) {
				return !!e.__c;
			});
			if (
				a.every(function (e) {
					return !e.__N;
				})
			)
				return !o || o.call(this, e, t, r);
			var i = !1;
			return (
				a.forEach(function (e) {
					if (e.__N) {
						var t = e.__[0];
						(e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (i = !0);
					}
				}),
				!(!i && n.__c.props === e) && (!o || o.call(this, e, t, r))
			);
		};
		eR.u = !0;
		var o = eR.shouldComponentUpdate,
			i = eR.componentWillUpdate;
		(eR.componentWillUpdate = function (e, t, r) {
			if (this.__e) {
				var n = o;
				(o = void 0), a(e, t, r), (o = n);
			}
			i && i.call(this, e, t, r);
		}),
			(eR.shouldComponentUpdate = a);
	}
	return n.__N || n.__;
}
function em(e, t) {
	var r = eg(el++, 4);
	!eO.__s && ew(r.__H, t) && ((r.__ = e), (r.i = t), eR.__h.push(r));
}
function eU(e, t) {
	var r = eg(el++, 7);
	return ew(r.__H, t) ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V) : r.__;
}
function eG(e, t) {
	return (
		(ed = 8),
		eU(function () {
			return e;
		}, t)
	);
}
function ey() {
	for (var e; (e = eN.shift()); )
		if (e.__P && e.__H)
			try {
				e.__H.__h.forEach(eb), e.__H.__h.forEach(eB), (e.__H.__h = []);
			} catch (t) {
				(e.__H.__h = []), eO.__e(t, e.__v);
			}
}
(eO.__b = function (e) {
	(eR = null), ef && ef(e);
}),
	(eO.__ = function (e, t) {
		t.__k && t.__k.__m && (e.__m = t.__k.__m), eC && eC(e, t);
	}),
	(eO.__r = function (e) {
		eS && eS(e), (el = 0);
		var t = (eR = e.__c).__H;
		t &&
			(eA === eR
				? ((t.__h = []),
					(eR.__h = []),
					t.__.forEach(function (e) {
						e.__N && (e.__ = e.__N), (e.__V = ep), (e.__N = e.i = void 0);
					}))
				: (t.__h.forEach(eb), t.__h.forEach(eB), (t.__h = []), (el = 0))),
			(eA = eR);
	}),
	(eO.diffed = function (e) {
		eD && eD(e);
		var t = e.__c;
		t &&
			t.__H &&
			(t.__H.__h.length &&
				((1 !== eN.push(t) && eT === eO.requestAnimationFrame) ||
					(
						(eT = eO.requestAnimationFrame) ||
						function (e) {
							var t,
								r = function () {
									clearTimeout(n), ev && cancelAnimationFrame(t), setTimeout(e);
								},
								n = setTimeout(r, 100);
							ev && (t = requestAnimationFrame(r));
						}
					)(ey)),
			t.__H.__.forEach(function (e) {
				e.i && (e.__H = e.i), e.__V !== ep && (e.__ = e.__V), (e.i = void 0), (e.__V = ep);
			})),
			(eA = eR = null);
	}),
	(eO.__c = function (e, t) {
		t.some(function (e) {
			try {
				e.__h.forEach(eb),
					(e.__h = e.__h.filter(function (e) {
						return !e.__ || eB(e);
					}));
			} catch (r) {
				t.some(function (e) {
					e.__h && (e.__h = []);
				}),
					(t = []),
					eO.__e(r, e.__v);
			}
		}),
			eL && eL(e, t);
	}),
	(eO.unmount = function (e) {
		eh && eh(e);
		var t,
			r = e.__c;
		r &&
			r.__H &&
			(r.__H.__.forEach(function (e) {
				try {
					eb(e);
				} catch (e) {
					t = e;
				}
			}),
			(r.__H = void 0),
			t && eO.__e(t, r.__v));
	});
var ev = 'function' == typeof requestAnimationFrame;
function eb(e) {
	var t = eR,
		r = e.__c;
	'function' == typeof r && ((e.__c = void 0), r()), (eR = t);
}
function eB(e) {
	var t = eR;
	(e.__c = e.__()), (eR = t);
}
function ew(e, t) {
	return (
		!e ||
		e.length !== t.length ||
		t.some(function (t, r) {
			return t !== e[r];
		})
	);
}
function eH(e, t) {
	return 'function' == typeof t ? t(e) : t;
}
let eY = {
		__proto__: null,
		useCallback: eG,
		useContext: function (e) {
			var t = eR.context[e.__c],
				r = eg(el++, 9);
			return (r.c = e), t ? (null == r.__ && ((r.__ = !0), t.sub(eR)), t.props.value) : e.__;
		},
		useDebugValue: function (e, t) {
			eO.useDebugValue && eO.useDebugValue(t ? t(e) : e);
		},
		useEffect: function (e, t) {
			var r = eg(el++, 3);
			!eO.__s && ew(r.__H, t) && ((r.__ = e), (r.i = t), eR.__H.__h.push(r));
		},
		useErrorBoundary: function (e) {
			var t = eg(el++, 10),
				r = eM();
			return (
				(t.__ = e),
				eR.componentDidCatch ||
					(eR.componentDidCatch = function (e, n) {
						t.__ && t.__(e, n), r[1](e);
					}),
				[
					r[0],
					function () {
						r[1](void 0);
					}
				]
			);
		},
		useId: function () {
			var e = eg(el++, 11);
			if (!e.__) {
				for (var t = eR.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
				var r = t.__m || (t.__m = [0, 0]);
				e.__ = 'P' + r[0] + '-' + r[1]++;
			}
			return e.__;
		},
		useImperativeHandle: function (e, t, r) {
			(ed = 6),
				em(
					function () {
						return 'function' == typeof e
							? (e(t()),
								function () {
									return e(null);
								})
							: e
								? ((e.current = t()),
									function () {
										return (e.current = null);
									})
								: void 0;
					},
					null == r ? r : r.concat(e)
				);
		},
		useLayoutEffect: em,
		useMemo: eU,
		useReducer: eP,
		useRef: function (e) {
			return (
				(ed = 5),
				eU(function () {
					return { current: e };
				}, [])
			);
		},
		useState: eM
	},
	eK = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/DialogHeader.tsx';
function ek({ options: e }) {
	let t = eU(
		() => ({
			__html: (function () {
				let e = (e) => c.createElementNS('http://www.w3.org/2000/svg', e),
					t = m(e('svg'), {
						width: '32',
						height: '30',
						viewBox: '0 0 72 66',
						fill: 'inherit'
					}),
					r = m(e('path'), {
						transform: 'translate(11, 11)',
						d: 'M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z'
					});
				return t.appendChild(r), t;
			})().outerHTML
		}),
		[]
	);
	return z(
		'h2',
		{
			class: 'dialog__header',
			__self: this,
			__source: {
				fileName: eK,
				lineNumber: 16
			}
		},
		e.formTitle,
		e.showBranding
			? z('a', {
					class: 'brand-link',
					target: '_blank',
					href: 'https://sentry.io/welcome/',
					title: 'Powered by Sentry',
					rel: 'noopener noreferrer',
					dangerouslySetInnerHTML: t,
					__self: this,
					__source: {
						fileName: eK,
						lineNumber: 19
					}
				})
			: null
	);
}
let eV = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Form.tsx';
function ex(e, t) {
	let r = e.get(t);
	return 'string' == typeof r ? r.trim() : '';
}
function eF({
	options: e,
	defaultEmail: t,
	defaultName: r,
	onFormClose: n,
	onSubmit: a,
	onSubmitSuccess: o,
	onSubmitError: i,
	showEmail: E,
	showName: s,
	screenshotInput: c
}) {
	let {
			tags: I,
			addScreenshotButtonLabel: u,
			removeScreenshotButtonLabel: l,
			cancelButtonLabel: R,
			emailLabel: A,
			emailPlaceholder: T,
			isEmailRequired: d,
			isNameRequired: N,
			messageLabel: p,
			messagePlaceholder: O,
			nameLabel: f,
			namePlaceholder: S,
			submitButtonLabel: D,
			isRequiredLabel: L
		} = e,
		[h, C] = eM(null),
		[g, P] = eM(!1),
		m = c && c.input,
		[U, G] = eM(null),
		y = eG((e) => {
			G(e), P(!1);
		}, []),
		v = eG(
			(e) => {
				let t = (function (e, t) {
					let r = [];
					return (
						t.isNameRequired && !e.name && r.push(t.nameLabel),
						t.isEmailRequired && !e.email && r.push(t.emailLabel),
						!e.message && r.push(t.messageLabel),
						r
					);
				})(e, {
					emailLabel: A,
					isEmailRequired: d,
					isNameRequired: N,
					messageLabel: p,
					nameLabel: f
				});
				return (
					t.length > 0 ? C(`Please enter in the following required fields: ${t.join(', ')}`) : C(null), 0 === t.length
				);
			},
			[A, d, N, p, f]
		);
	return z(
		'form',
		{
			class: 'form',
			onSubmit: eG(
				async (e) => {
					try {
						if ((e.preventDefault(), !(e.target instanceof HTMLFormElement))) return;
						let t = new FormData(e.target),
							r = await (c && g ? c.value() : void 0),
							n = {
								name: ex(t, 'name'),
								email: ex(t, 'email'),
								message: ex(t, 'message'),
								attachments: r ? [r] : void 0
							};
						if (!v(n)) return;
						try {
							await a(
								{
									name: n.name,
									email: n.email,
									message: n.message,
									source: 'widget',
									tags: I
								},
								{ attachments: n.attachments }
							),
								o(n);
						} catch (e) {
							M && _.kg.error(e), C(e), i(e);
						}
					} catch (e) {}
				},
				[c && g, o, i]
			),
			__self: this,
			__source: {
				fileName: eV,
				lineNumber: 144
			}
		},
		m && g
			? z(m, {
					onError: y,
					__self: this,
					__source: {
						fileName: eV,
						lineNumber: 146
					}
				})
			: null,
		z(
			'div',
			{
				class: 'form__right',
				'data-sentry-feedback': !0,
				__self: this,
				__source: {
					fileName: eV,
					lineNumber: 149
				}
			},
			z(
				'div',
				{
					class: 'form__top',
					__self: this,
					__source: {
						fileName: eV,
						lineNumber: 150
					}
				},
				h
					? z(
							'div',
							{
								class: 'form__error-container',
								__self: this,
								__source: {
									fileName: eV,
									lineNumber: 151
								}
							},
							h
						)
					: null,
				s
					? z(
							'label',
							{
								for: 'name',
								class: 'form__label',
								__self: this,
								__source: {
									fileName: eV,
									lineNumber: 154
								}
							},
							z(eW, {
								label: f,
								isRequiredLabel: L,
								isRequired: N,
								__self: this,
								__source: {
									fileName: eV,
									lineNumber: 155
								}
							}),
							z('input', {
								class: 'form__input',
								defaultValue: r,
								id: 'name',
								name: 'name',
								placeholder: S,
								required: N,
								type: 'text',
								__self: this,
								__source: {
									fileName: eV,
									lineNumber: 156
								}
							})
						)
					: z('input', {
							'aria-hidden': !0,
							value: r,
							name: 'name',
							type: 'hidden',
							__self: this,
							__source: {
								fileName: eV,
								lineNumber: 167
							}
						}),
				E
					? z(
							'label',
							{
								for: 'email',
								class: 'form__label',
								__self: this,
								__source: {
									fileName: eV,
									lineNumber: 171
								}
							},
							z(eW, {
								label: A,
								isRequiredLabel: L,
								isRequired: d,
								__self: this,
								__source: {
									fileName: eV,
									lineNumber: 172
								}
							}),
							z('input', {
								class: 'form__input',
								defaultValue: t,
								id: 'email',
								name: 'email',
								placeholder: T,
								required: d,
								type: 'email',
								__self: this,
								__source: {
									fileName: eV,
									lineNumber: 173
								}
							})
						)
					: z('input', {
							'aria-hidden': !0,
							value: t,
							name: 'email',
							type: 'hidden',
							__self: this,
							__source: {
								fileName: eV,
								lineNumber: 184
							}
						}),
				z(
					'label',
					{
						for: 'message',
						class: 'form__label',
						__self: this,
						__source: {
							fileName: eV,
							lineNumber: 187
						}
					},
					z(eW, {
						label: p,
						isRequiredLabel: L,
						isRequired: !0,
						__self: this,
						__source: {
							fileName: eV,
							lineNumber: 188
						}
					}),
					z('textarea', {
						autoFocus: !0,
						class: 'form__input form__input--textarea',
						id: 'message',
						name: 'message',
						placeholder: O,
						required: !0,
						rows: 5,
						__self: this,
						__source: {
							fileName: eV,
							lineNumber: 189
						}
					})
				),
				m
					? z(
							'label',
							{
								for: 'screenshot',
								class: 'form__label',
								__self: this,
								__source: {
									fileName: eV,
									lineNumber: 201
								}
							},
							z(
								'button',
								{
									class: 'btn btn--default',
									type: 'button',
									onClick: () => {
										G(null), P((e) => !e);
									},
									__self: this,
									__source: {
										fileName: eV,
										lineNumber: 202
									}
								},
								g ? l : u
							),
							U
								? z(
										'div',
										{
											class: 'form__error-container',
											__self: this,
											__source: {
												fileName: eV,
												lineNumber: 212
											}
										},
										U.message
									)
								: null
						)
					: null
			),
			z(
				'div',
				{
					class: 'btn-group',
					__self: this,
					__source: {
						fileName: eV,
						lineNumber: 216
					}
				},
				z(
					'button',
					{
						class: 'btn btn--primary',
						type: 'submit',
						__self: this,
						__source: {
							fileName: eV,
							lineNumber: 217
						}
					},
					D
				),
				z(
					'button',
					{
						class: 'btn btn--default',
						type: 'button',
						onClick: n,
						__self: this,
						__source: {
							fileName: eV,
							lineNumber: 220
						}
					},
					R
				)
			)
		)
	);
}
function eW({ label: e, isRequired: t, isRequiredLabel: r }) {
	return z(
		'span',
		{
			class: 'form__label__text',
			__self: this,
			__source: {
				fileName: eV,
				lineNumber: 239
			}
		},
		e,
		t &&
			z(
				'span',
				{
					class: 'form__label__text--required',
					__self: this,
					__source: {
						fileName: eV,
						lineNumber: 241
					}
				},
				r
			)
	);
}
let eX = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Dialog.tsx';
function ej({ open: e, onFormSubmitted: t, ...r }) {
	let n = r.options,
		a = eU(
			() => ({
				__html: (function () {
					let e = (e) => s.document.createElementNS('http://www.w3.org/2000/svg', e),
						t = m(e('svg'), {
							width: '16',
							height: '17',
							viewBox: '0 0 16 17',
							fill: 'inherit'
						}),
						r = m(e('g'), { clipPath: 'url(#clip0_57_156)' }),
						n = m(e('path'), {
							'fill-rule': 'evenodd',
							'clip-rule': 'evenodd',
							d: 'M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z'
						}),
						a = m(e('path'), {
							d: 'M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z'
						});
					t.appendChild(r).append(a, n);
					let o = e('defs'),
						i = m(e('clipPath'), { id: 'clip0_57_156' }),
						_ = m(e('rect'), {
							width: '16',
							height: '16',
							fill: 'white',
							transform: 'translate(0 0.5)'
						});
					return i.appendChild(_), o.appendChild(i), t.appendChild(o).appendChild(i).appendChild(_), t;
				})().outerHTML
			}),
			[]
		),
		[o, i] = eM(null),
		_ = eG(() => {
			o && (clearTimeout(o), i(null)), t();
		}, [o]),
		E = eG(
			(e) => {
				r.onSubmitSuccess(e),
					i(
						setTimeout(() => {
							t(), i(null);
						}, 5000)
					);
			},
			[t]
		);
	return z(
		Q,
		{
			__self: this,
			__source: {
				fileName: eX,
				lineNumber: 48
			}
		},
		o
			? z(
					'div',
					{
						class: 'success__position',
						onClick: _,
						__self: this,
						__source: {
							fileName: eX,
							lineNumber: 50
						}
					},
					z(
						'div',
						{
							class: 'success__content',
							__self: this,
							__source: {
								fileName: eX,
								lineNumber: 51
							}
						},
						n.successMessageText,
						z('span', {
							class: 'success__icon',
							dangerouslySetInnerHTML: a,
							__self: this,
							__source: {
								fileName: eX,
								lineNumber: 53
							}
						})
					)
				)
			: z(
					'dialog',
					{
						class: 'dialog',
						onClick: n.onFormClose,
						open: e,
						__self: this,
						__source: {
							fileName: eX,
							lineNumber: 57
						}
					},
					z(
						'div',
						{
							class: 'dialog__position',
							__self: this,
							__source: {
								fileName: eX,
								lineNumber: 58
							}
						},
						z(
							'div',
							{
								class: 'dialog__content',
								onClick: (e) => {
									e.stopPropagation();
								},
								__self: this,
								__source: {
									fileName: eX,
									lineNumber: 59
								}
							},
							z(ek, {
								options: n,
								__self: this,
								__source: {
									fileName: eX,
									lineNumber: 66
								}
							}),
							z(eF, {
								...r,
								onSubmitSuccess: E,
								__self: this,
								__source: {
									fileName: eX,
									lineNumber: 67
								}
							})
						)
					)
				)
	);
}
let e$ = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}
`,
	eq = `
.dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}

.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,
	ez = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form__right {
  flex: 0 0 var(--form-width, 272px);
  width: var(--form-width, 272px);
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 600px) {
  .form__right {
    width: auto;
  }
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,
	eJ = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,
	eQ = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`,
	eZ = () => ({
		name: 'FeedbackModal',
		setupOnce() {},
		createDialog: ({ options: e, screenshotIntegration: t, sendFeedback: r, shadow: a }) => {
			let o = e.useSentryUser,
				i = (function () {
					let e = (0, n.nZ)().getUser(),
						t = (0, n.aF)().getUser(),
						r = (0, n.lW)().getUser();
					return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : r;
				})(),
				_ = c.createElement('div'),
				E = (function () {
					let e = c.createElement('style');
					return (
						(e.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${e$}
${eq}
${ez}
${eJ}
${eQ}
`),
						e
					);
				})(),
				s = '',
				I = {
					get el() {
						return _;
					},
					appendToDom() {
						!a.contains(E) && !a.contains(_) && (a.appendChild(E), a.appendChild(_));
					},
					removeFromDom() {
						a.removeChild(_), a.removeChild(E), (c.body.style.overflow = s);
					},
					open() {
						l(!0), e.onFormOpen && e.onFormOpen(), (s = c.body.style.overflow), (c.body.style.overflow = 'hidden');
					},
					close() {
						l(!1), (c.body.style.overflow = s);
					}
				},
				u =
					t &&
					t.createInput({
						h: z,
						hooks: eY,
						dialog: I,
						options: e
					}),
				l = (t) => {
					var n, a, E, s, c, I, R;
					(n = z(ej, {
						options: e,
						screenshotInput: u,
						showName: e.showName || e.isNameRequired,
						showEmail: e.showEmail || e.isEmailRequired,
						defaultName: (o && i && i[o.name]) || '',
						defaultEmail: (o && i && i[o.email]) || '',
						onFormClose: () => {
							l(!1), e.onFormClose && e.onFormClose();
						},
						onSubmit: r,
						onSubmitSuccess: (t) => {
							l(!1), e.onSubmitSuccess && e.onSubmitSuccess(t);
						},
						onSubmitError: (t) => {
							e.onSubmitError && e.onSubmitError(t);
						},
						onFormSubmitted: () => {
							e.onFormSubmitted && e.onFormSubmitted();
						},
						open: t,
						__self: void 0,
						__source: {
							fileName:
								'/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/integration.tsx',
							lineNumber: 67
						}
					})),
						(a = _),
						H.__ && H.__(n, a),
						(c = ((s = false), (E && E.__k) || a.__k)),
						(I = []),
						(R = []),
						eE(
							a,
							(n = ((!s && E) || a).__k = z(Q, null, [n])),
							c || F,
							F,
							void 0 !== a.ownerSVGElement,
							!s && E ? [E] : c ? null : a.firstChild ? w.call(a.childNodes) : null,
							I,
							!s && E ? E : c ? c.__e : a.firstChild,
							s,
							R
						),
						(n.__d = void 0),
						es(I, n, R);
				};
			return I;
		}
	}),
	e0 =
		'/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/ScreenshotEditor.tsx',
	e1 = 33,
	e3 = s.devicePixelRatio,
	e2 = (e) => ({
		x: Math.min(e.startX, e.endX),
		y: Math.min(e.startY, e.endY),
		width: Math.abs(e.startX - e.endX),
		height: Math.abs(e.startY - e.endY)
	}),
	e6 = (e) => {
		let t = e.clientHeight,
			r = e.clientWidth,
			n = e.width / e.height,
			a = t * n,
			o = t;
		a > r && ((a = r), (o = r / n));
		let i = (r - a) / 2,
			_ = (t - o) / 2;
		return {
			startX: i,
			startY: _,
			endX: a + i,
			endY: o + _
		};
	},
	e5 = () => ({
		name: 'FeedbackScreenshot',
		setupOnce() {},
		createInput: ({ h: e, hooks: t, dialog: r, options: n }) => {
			let a = c.createElement('canvas');
			return {
				input: (function ({ h: e, hooks: t, imageBuffer: r, dialog: n, options: a }) {
					let o = (function ({ hooks: e }) {
						return function ({ onBeforeScreenshot: t, onScreenshot: r, onAfterScreenshot: n, onError: a }) {
							e.useEffect(() => {
								(async () => {
									t();
									let e = await I.mediaDevices.getDisplayMedia({
											video: {
												width: s.innerWidth * s.devicePixelRatio,
												height: s.innerHeight * s.devicePixelRatio
											},
											audio: !1,
											monitorTypeSurfaces: 'exclude',
											preferCurrentTab: !0,
											selfBrowserSurface: 'include',
											surfaceSwitching: 'exclude'
										}),
										a = c.createElement('video');
									await new Promise((t, n) => {
										(a.srcObject = e),
											(a.onloadedmetadata = () => {
												r(a), e.getTracks().forEach((e) => e.stop()), t();
											}),
											a.play().catch(n);
									}),
										n();
								})().catch(a);
							}, []);
						};
					})({ hooks: t });
					return function ({ onError: i }) {
						let _ = t.useMemo(
								() => ({
									__html: (function () {
										let e = c.createElement('style'),
											t = '#1A141F',
											r = '#302735';
										return (
											(e.textContent = `
.editor {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  flex-grow: 1;

  background-color: ${t};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${t} 8px,
      ${t} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${r} 15px,
      ${r} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container canvas {
  object-fit: contain;
  position: relative;
}

.editor__crop-btn-group {
  padding: 8px;
  gap: 8px;
  border-radius: var(--menu-border-radius, 6px);
  background: var(--button-primary-background, var(--background));
  width: 175px;
  position: absolute;
}

.editor__crop-corner {
  width: 30px;
  height: 30px;
  position: absolute;
  background: none;
  border: 3px solid #ffffff;
}

.editor__crop-corner--top-left {
  cursor: nwse-resize;
  border-right: none;
  border-bottom: none;
}
.editor__crop-corner--top-right {
  cursor: nesw-resize;
  border-left: none;
  border-bottom: none;
}
.editor__crop-corner--bottom-left {
  cursor: nesw-resize;
  border-right: none;
  border-top: none;
}
.editor__crop-corner--bottom-right {
  cursor: nwse-resize;
  border-left: none;
  border-top: none;
}
`),
											e
										);
									})().innerText
								}),
								[]
							),
							E = (function ({ h: e }) {
								return function ({ top: t, left: r, corner: n, onGrabButton: a }) {
									return e('button', {
										class: `editor__crop-corner editor__crop-corner--${n} `,
										style: {
											top: t,
											left: r
										},
										onMouseDown: (e) => {
											e.preventDefault(), a(e, n);
										},
										onClick: (e) => {
											e.preventDefault();
										},
										__self: this,
										__source: {
											fileName:
												'/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/CropCorner.tsx',
											lineNumber: 22
										}
									});
								};
							})({ h: e }),
							I = t.useRef(null),
							u = t.useRef(null),
							l = t.useRef(null),
							[R, A] = t.useState({
								startX: 0,
								startY: 0,
								endX: 0,
								endY: 0
							}),
							[T, d] = t.useState(!1),
							[N, p] = t.useState(!1);
						function O() {
							let e = l.current,
								t = e2(e6(r));
							if (e) {
								(e.width = t.width * e3),
									(e.height = t.height * e3),
									(e.style.width = `${t.width}px`),
									(e.style.height = `${t.height}px`);
								let r = e.getContext('2d');
								r && r.scale(e3, e3);
							}
							let n = u.current;
							n && ((n.style.width = `${t.width}px`), (n.style.height = `${t.height}px`)),
								A({
									startX: 0,
									startY: 0,
									endX: t.width,
									endY: t.height
								});
						}
						function f(e, t) {
							d(!1), p(!0);
							let r = S(t),
								n = () => {
									c.removeEventListener('mousemove', r), c.removeEventListener('mouseup', n), d(!0), p(!1);
								};
							c.addEventListener('mouseup', n), c.addEventListener('mousemove', r);
						}
						t.useEffect(() => {
							s.addEventListener('resize', O, !1);
						}, []),
							t.useEffect(() => {
								let e = l.current;
								if (!e) return;
								let t = e.getContext('2d');
								if (!t) return;
								let n = e2(e6(r)),
									a = e2(R);
								t.clearRect(0, 0, n.width, n.height),
									(t.fillStyle = 'rgba(0, 0, 0, 0.5)'),
									t.fillRect(0, 0, n.width, n.height),
									t.clearRect(a.x, a.y, a.width, a.height),
									(t.strokeStyle = '#ffffff'),
									(t.lineWidth = 3),
									t.strokeRect(a.x + 1, a.y + 1, a.width - 2, a.height - 2),
									(t.strokeStyle = '#000000'),
									(t.lineWidth = 1),
									t.strokeRect(a.x + 3, a.y + 3, a.width - 6, a.height - 6);
							}, [R]);
						let S = t.useCallback(
								(e) =>
									function (t) {
										if (!l.current) return;
										let r = l.current,
											n = r.getBoundingClientRect(),
											a = t.clientX - n.x,
											o = t.clientY - n.y;
										switch (e) {
											case 'top-left':
												A((e) => ({
													...e,
													startX: Math.min(Math.max(0, a), e.endX - e1),
													startY: Math.min(Math.max(0, o), e.endY - e1)
												}));
												break;
											case 'top-right':
												A((e) => ({
													...e,
													endX: Math.max(Math.min(a, r.width / e3), e.startX + e1),
													startY: Math.min(Math.max(0, o), e.endY - e1)
												}));
												break;
											case 'bottom-left':
												A((e) => ({
													...e,
													startX: Math.min(Math.max(0, a), e.endX - e1),
													endY: Math.max(Math.min(o, r.height / e3), e.startY + e1)
												}));
												break;
											case 'bottom-right':
												A((e) => ({
													...e,
													endX: Math.max(Math.min(a, r.width / e3), e.startX + e1),
													endY: Math.max(Math.min(o, r.height / e3), e.startY + e1)
												}));
										}
									},
								[]
							),
							D = t.useRef({
								initialX: 0,
								initialY: 0
							});
						return (
							o({
								onBeforeScreenshot: t.useCallback(() => {
									n.el.style.display = 'none';
								}, []),
								onScreenshot: t.useCallback(
									(e) => {
										let t = r.getContext('2d');
										if (!t) throw Error('Could not get canvas context');
										(r.width = e.videoWidth),
											(r.height = e.videoHeight),
											(r.style.width = '100%'),
											(r.style.height = '100%'),
											t.drawImage(e, 0, 0);
									},
									[r]
								),
								onAfterScreenshot: t.useCallback(() => {
									n.el.style.display = 'block';
									let e = I.current;
									e && e.appendChild(r), O();
								}, []),
								onError: t.useCallback((e) => {
									(n.el.style.display = 'block'), i(e);
								}, [])
							}),
							e(
								'div',
								{
									class: 'editor',
									__self: this,
									__source: {
										fileName: e0,
										lineNumber: 315
									}
								},
								e('style', {
									dangerouslySetInnerHTML: _,
									__self: this,
									__source: {
										fileName: e0,
										lineNumber: 316
									}
								}),
								e(
									'div',
									{
										class: 'editor__canvas-container',
										ref: I,
										__self: this,
										__source: {
											fileName: e0,
											lineNumber: 317
										}
									},
									e(
										'div',
										{
											class: 'editor__crop-container',
											style: {
												position: 'absolute',
												zIndex: 1
											},
											ref: u,
											__self: this,
											__source: {
												fileName: e0,
												lineNumber: 318
											}
										},
										e('canvas', {
											onMouseDown: function (e) {
												if (N) return;
												D.current = {
													initialX: e.clientX,
													initialY: e.clientY
												};
												let t = (e) => {
														let t = l.current;
														if (!t) return;
														let r = e.clientX - D.current.initialX,
															n = e.clientY - D.current.initialY;
														A((a) => {
															let o = Math.max(0, Math.min(a.startX + r, t.width / e3 - (a.endX - a.startX))),
																i = Math.max(0, Math.min(a.startY + n, t.height / e3 - (a.endY - a.startY))),
																_ = o + (a.endX - a.startX),
																E = i + (a.endY - a.startY);
															return (
																(D.current.initialX = e.clientX),
																(D.current.initialY = e.clientY),
																{
																	startX: o,
																	startY: i,
																	endX: _,
																	endY: E
																}
															);
														});
													},
													r = () => {
														c.removeEventListener('mousemove', t), c.removeEventListener('mouseup', r);
													};
												c.addEventListener('mousemove', t), c.addEventListener('mouseup', r);
											},
											style: {
												position: 'absolute',
												cursor: T ? 'move' : 'auto'
											},
											ref: l,
											__self: this,
											__source: {
												fileName: e0,
												lineNumber: 319
											}
										}),
										e(E, {
											left: R.startX - 3,
											top: R.startY - 3,
											onGrabButton: f,
											corner: 'top-left',
											__self: this,
											__source: {
												fileName: e0,
												lineNumber: 324
											}
										}),
										e(E, {
											left: R.endX - 30 + 3,
											top: R.startY - 3,
											onGrabButton: f,
											corner: 'top-right',
											__self: this,
											__source: {
												fileName: e0,
												lineNumber: 330
											}
										}),
										e(E, {
											left: R.startX - 3,
											top: R.endY - 30 + 3,
											onGrabButton: f,
											corner: 'bottom-left',
											__self: this,
											__source: {
												fileName: e0,
												lineNumber: 336
											}
										}),
										e(E, {
											left: R.endX - 30 + 3,
											top: R.endY - 30 + 3,
											onGrabButton: f,
											corner: 'bottom-right',
											__self: this,
											__source: {
												fileName: e0,
												lineNumber: 342
											}
										}),
										e(
											'div',
											{
												style: {
													left: Math.max(0, R.endX - 191),
													top: Math.max(0, R.endY + 8),
													display: T ? 'flex' : 'none'
												},
												class: 'editor__crop-btn-group',
												__self: this,
												__source: {
													fileName: e0,
													lineNumber: 348
												}
											},
											e(
												'button',
												{
													onClick: (e) => {
														e.preventDefault(),
															l.current &&
																A({
																	startX: 0,
																	startY: 0,
																	endX: l.current.width / e3,
																	endY: l.current.height / e3
																}),
															d(!1);
													},
													class: 'btn btn--default',
													__self: this,
													__source: {
														fileName: e0,
														lineNumber: 356
													}
												},
												a.cancelButtonLabel
											),
											e(
												'button',
												{
													onClick: (e) => {
														e.preventDefault(),
															!(function () {
																let e = c.createElement('canvas'),
																	t = e2(e6(r)),
																	n = e2(R);
																(e.width = n.width * e3), (e.height = n.height * e3);
																let a = e.getContext('2d');
																a &&
																	r &&
																	a.drawImage(
																		r,
																		(n.x / t.width) * r.width,
																		(n.y / t.height) * r.height,
																		(n.width / t.width) * r.width,
																		(n.height / t.height) * r.height,
																		0,
																		0,
																		e.width,
																		e.height
																	);
																let o = r.getContext('2d');
																o &&
																	(o.clearRect(0, 0, r.width, r.height),
																	(r.width = e.width),
																	(r.height = e.height),
																	(r.style.width = `${n.width}px`),
																	(r.style.height = `${n.height}px`),
																	o.drawImage(e, 0, 0),
																	O());
															})(),
															d(!1);
													},
													class: 'btn btn--primary',
													__self: this,
													__source: {
														fileName: e0,
														lineNumber: 373
													}
												},
												a.confirmButtonLabel
											)
										)
									)
								)
							)
						);
					};
				})({
					h: e,
					hooks: t,
					imageBuffer: a,
					dialog: r,
					options: n
				}),
				value: async () => {
					let e = await new Promise((e) => {
						a.toBlob(e, 'image/png');
					});
					if (e) {
						let t = new Uint8Array(await e.arrayBuffer());
						return {
							data: t,
							filename: 'screenshot.png',
							contentType: 'application/png'
						};
					}
				}
			};
		}
	});

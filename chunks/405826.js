n.d(t, {
	N: function () {
		return T;
	}
}),
	n(757143),
	n(47120);
var r = n(623279),
	i = n(392711),
	a = n.n(i),
	s = n(374470),
	o = n(579806),
	l = n(710845),
	u = n(706454),
	c = n(823379),
	d = n(598105),
	_ = n(643413);
function E(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let f = new l.Z('Spellchecker'),
	h = null === o.Z || void 0 === o.Z ? void 0 : o.Z.spellCheck;
function p(e) {
	var t;
	e = null !== (t = _.Z[e]) && void 0 !== t ? t : e;
	let n = (0, r.parse)(e.replace(/[_-]/g, '-'));
	if (null == n || null == n.langtag.language || null == n.langtag.region) {
		f.error(''.concat(e, ' is not a valid locale.'));
		return;
	}
	let { language: i, region: a } = n.langtag;
	return ''.concat(i.language.toLowerCase(), '-').concat(a.toUpperCase());
}
class I {
	get enabled() {
		return this._enabled;
	}
	set enabled(e) {
		this._enabled = e;
	}
	setLearnedWords(e) {
		h.setLearnedWords(e);
	}
	setLocale(e) {
		var t;
		null === (t = h.setLocale(e)) ||
			void 0 === t ||
			t.then((t) => {
				f.info('Switching to '.concat(e), t ? '(available)' : '(unavailable)');
			});
	}
	setAppLocale(e) {
		this.regionPreference = e.split('-')[1];
	}
	detectLanguage(e) {
		if (!!this.enabled) this.languageDetector.process(e);
	}
	getAvailableLanguages(e) {
		let t = {};
		return (
			e.forEach((e) => {
				var n;
				let [r] = e.split('-');
				t[r] = null !== (n = t[r]) && void 0 !== n ? n : e;
			}),
			t
		);
	}
	isMisspelled(e, t) {
		return '' !== this.misspelledWord && e === this.misspelledWord;
	}
	getCorrectionsForMisspelling(e, t) {
		return this.isMisspelled(e, t) ? this.corrections : [];
	}
	replaceMisspelling(e) {
		h.replaceMisspelling(e);
	}
	constructor(e) {
		E(this, 'languageDetector', void 0),
			E(this, 'regionPreference', void 0),
			E(this, '_enabled', !0),
			E(this, 'misspelledWord', ''),
			E(this, 'corrections', []);
		let [t, n] = u.default.locale.split('-');
		this.regionPreference = n;
		let r = this.getAvailableLanguages(e);
		(this.languageDetector = new d.Z(t, (n) => {
			let i = ''.concat(n, '-').concat(this.regionPreference);
			if (-1 !== e.indexOf(i)) this.setLocale(i);
			else {
				var a;
				let e = null !== (a = r[n]) && void 0 !== a ? a : _.Z[t];
				null != e && this.setLocale(e);
			}
		})),
			h.on('spellcheck-result', (e, t) => {
				(this.misspelledWord = null != e ? e : ''), (this.corrections = null != t ? t : []);
			});
	}
}
let m = a().debounce((e, t) => {
	let n = (function (e) {
		return null == e
			? null
			: (0, s.k)(e, HTMLInputElement) || (0, s.k)(e, HTMLTextAreaElement)
				? e.value
				: (0, s.k)(e) && e.hasAttribute('contenteditable')
					? e.textContent
					: void 0;
	})(t);
	null != n && e.detectLanguage(n);
}, 250);
async function T() {
	var e, t;
	let n = new I((null !== (e = await h.getAvailableDictionaries()) && void 0 !== e ? e : []).map(p).filter(c.lm));
	return (t = n), null != document.body && document.body.addEventListener('beforeinput', (e) => m(t, e.target), !0), n;
}

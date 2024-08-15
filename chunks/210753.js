n.d(t, {
	$: function () {
		return _;
	}
}),
	n(653041),
	n(47120);
var r = n(470079),
	i = n(392711),
	a = n.n(i),
	s = n(442837),
	o = n(846519),
	l = n(224706),
	u = n(669764);
function c(e, t, n) {
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
let d = new (class e {
	request(e) {
		!(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1));
	}
	_flush() {
		let e = [];
		this._pending.forEach((t) => {
			this._fetched.add(t), e.push(t);
		}),
			a()
				.chunk(e, 20)
				.forEach((e) => {
					l.Z.getDetectableGamesSupplemental(e);
				});
	}
	constructor() {
		c(this, '_fetched', new Set()),
			c(this, '_pending', new Set()),
			c(this, '_flushHandler', new o.sW(0, () => this._flush()));
	}
})();
function _(e, t) {
	r.useEffect(() => {
		null != e && d.request(e);
	}, [e]);
	let n = r.useMemo(
		() =>
			null != t
				? {
						width: t.coverImageWidth,
						height: t.coverImageHeight
					}
				: void 0,
		[t]
	);
	return (0, s.cj)([u.Z], () =>
		null == e
			? {
					isFetching: !1,
					localizedName: void 0,
					themes: void 0,
					coverImageUrl: void 0
				}
			: {
					isFetching: u.Z.isFetching(e),
					localizedName: u.Z.getLocalizedName(e),
					themes: u.Z.getThemes(e),
					coverImageUrl: u.Z.getCoverImageUrl(e, n)
				}
	);
}

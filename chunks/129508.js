n(47120);
var r = n(512722),
	i = n.n(r),
	a = n(921608),
	s = n(693824);
function o(e, t, n) {
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
t.Z = class e {
	getCanvas() {
		return this.canvas;
	}
	setColor(e) {
		this.color = e;
	}
	setFont(e) {
		var t, n, r, i, a;
		(this.font.style = null !== (t = e.style) && void 0 !== t ? t : this.font.style),
			(this.font.size = null !== (n = e.size) && void 0 !== n ? n : this.font.size),
			(this.font.weight = null !== (r = e.weight) && void 0 !== r ? r : this.font.weight),
			(this.font.family = null !== (i = e.family) && void 0 !== i ? i : this.font.family),
			(this.font.truncate = null !== (a = e.truncate) && void 0 !== a ? a : this.font.truncate);
	}
	getLoadedImage(e) {
		i()(null != this.assetMap, 'DiscordCanvas: An AssetStore has not been initialized.');
		let t = this.assetMap.get(e);
		if (void 0 === t) {
			console.error(
				"DiscordCanvas: AssetMap hasn't loaded ".concat(e, '.  Make sure to load it before trying to render.')
			);
			return;
		}
		return t;
	}
	drawRoundedImageWithFallbacks(e, t, n, r, i) {
		for (let a of e) {
			let e = this.drawRoundedImage(a, t, n, r, i);
			if (e !== s.vP.Failure) return e;
		}
		return s.vP.Failure;
	}
	constructor(e, t) {
		o(this, 'color', 'black'),
			o(this, 'font', {
				style: 'normal',
				weight: 300,
				size: a.n,
				family: ['serif'],
				truncate: s.GX.None
			}),
			o(this, 'assetMap', void 0),
			o(this, 'canvas', void 0),
			(this.canvas = e),
			(this.assetMap = t);
	}
};

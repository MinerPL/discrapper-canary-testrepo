n(653041);
var r = n(956843),
	i = n(722734);
function a(e, t, n) {
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
	initialize() {
		(this.particles = []),
			this.wind.initialize(),
			(this.loadInTimer = setTimeout(() => {
				for (let e = 0; e < 75; e++) this.particles.push(new r.Z());
			}, 250));
	}
	terminate() {
		(this.particles = []), this.wind.terminate(), null != this.loadInTimer && clearTimeout(this.loadInTimer);
	}
	update(e) {
		if (0 !== this.particles.length) !this.isFilled && this.alpha < 1 ? (this.alpha = Math.min(1, this.alpha + e)) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e)), this.wind.update(), this.particles.forEach((t) => t.update(10 * this.wind.forceX * e, 10 * Math.min(this.wind.forceY, -0.001) * e + -0.1));
	}
	render(e) {
		if (0 !== this.particles.length) e.save(), (e.globalCompositeOperation = 'source-atop'), this.particles.forEach((t) => t.render(e, this.alpha)), e.restore();
	}
	fill() {
		this.isFilled = !0;
	}
	constructor() {
		a(this, 'particles', []), a(this, 'wind', new i.Z()), a(this, 'alpha', 0), a(this, 'isFilled', !1), a(this, 'loadInTimer', null);
	}
};

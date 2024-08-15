n(47120), n(653041);
var r = n(954955),
	i = n.n(r),
	a = n(477690),
	s = n(624138),
	o = n(50516),
	l = n(684827),
	u = n(898625);
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
let d = 7.5,
	_ = (0, s.Mg)(a.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
	E = 1 / 60;
function f(e, t, n, r) {
	return (n / r) * t + e;
}
function h() {
	return Math.min(Math.max(Math.min(0.8 * window.innerWidth, 0.8 * window.innerHeight), u.LE), u.pg);
}
t.Z = class e {
	initialize() {
		this._resizeWave();
	}
	emphasize() {
		this.points.forEach((e) => (e.speedUp = 1));
	}
	terminate() {
		this.points = [];
	}
	update(e) {
		if (0 !== this.points.length) this.points.forEach((t) => t.update(Math.min(e, E))), !this.hasEntered && this.points[0].x > _ && ((this.hasEntered = !0), this.updateWaveState(u.hO.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && ((this.isFilling = !1), this.updateWaveState(u.hO.FILLED));
	}
	render(e) {
		if (0 === this.points.length) return;
		let [t, ...n] = this.points;
		e.save(),
			e.beginPath(),
			e.moveTo(t.x, t.y),
			n.forEach((t, r) => {
				if (null == n[r + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
				else {
					let i = (t.x + n[r + 1].x) / 2,
						a = (t.y + n[r + 1].y) / 2;
					e.quadraticCurveTo(t.x, t.y, i, a);
				}
			}),
			e.lineTo(0, 0),
			e.closePath(),
			(e.fillStyle = '#000'),
			(e.globalCompositeOperation = 'destination-in'),
			e.fill(),
			e.restore();
	}
	fill() {
		let e = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
			t = h() - 140,
			n = (e, t, n, r) => {
				(e.targetX = -40 + t * Math.cos(u.uo * ((n / 15) * 0.25 + 0))), (e.targetY = -40 + t * Math.sin(u.uo * ((n / 15) * 0.25 + 0))), r && ((e.targetX += (0, l.M)(0, 30) - 15), (e.targetY += (0, l.M)(0, 30) - 15), (e.speedUp = 3), (e.spring.tension = u.O1 * Math.random() * 0.5 + u.O1));
			};
		this.points.forEach((e, r) => n(e, t, r, !0)),
			setTimeout(() => {
				this.points.forEach((t, r) => {
					n(t, e, r, !1);
					let i = 1 - t.index / 7.5;
					(t.spring.friction += t.spring.friction + t.spring.friction * i), (t.spring.tension = 0.7 * u.O1 + 80 * Math.random()), (t.waveRange = 2 * t.waveRange);
				}),
					(this.isFilling = !0),
					this.updateWaveState(u.hO.FILLING);
			}, 250);
	}
	constructor(e) {
		c(this, 'points', []),
			c(this, 'hasEntered', !1),
			c(this, 'isFilling', !1),
			c(this, 'updateWaveState', void 0),
			c(this, '_resizeWave', () => {
				let e = h();
				this.points.forEach((t, n) => {
					let r = -40 + e * Math.cos(u.uo * ((n / 15) * 0.25 + 0)),
						i = -40 + e * Math.sin(u.uo * ((n / 15) * 0.25 + 0));
					0 !== n ? (i += (0, l.M)(0, 30) - 15) : (r += (0, l.M)(0, 30) - 15), (t.targetX = r), (t.targetY = i), (t.angle = Math.atan2(i, r));
				});
			}),
			c(this, 'resizeWave', i()(this._resizeWave, 200)),
			(this.updateWaveState = e),
			(this.hasEntered = !1);
		for (let e = 0; e <= 15; e++) this.points.push(new o.Z(Math.floor(d - Math.floor(Math.abs(e - d)))));
	}
};

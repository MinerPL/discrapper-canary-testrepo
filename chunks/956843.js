var r = n(684827),
	i = n(898625);
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
let s = ['#7d8187', '#18191c', '#8fa2df', '#4f545c'];
t.Z = class e {
	checkBounds() {
		this.x > this.offscreenX ? (this.x = -this.size) : this.y > this.offscreenY ? (this.y = -this.size) : this.x < -this.size ? (this.x = this.offscreenX) : this.y < -this.size && (this.y = this.offscreenY);
	}
	update(e, t) {
		this.checkBounds(), (this.y += t * this.positionMultiplier), (this.x += e * this.positionMultiplier);
	}
	render(e, t) {
		e.beginPath(), (e.globalAlpha = (t * this.depth) / 4), e.arc(this.x, this.y, this.size, 0, i.uo, !0), (e.fillStyle = this.color), e.fill(), (e.globalAlpha = 1);
	}
	constructor() {
		a(this, 'size', (0, r.M)(2, 3)), a(this, 'depth', (0, r.M)(1, 4)), a(this, 'positionMultiplier', this.depth / 4), a(this, 'color', s[4 - this.depth]), a(this, 'offscreenX', i.pg + this.size), a(this, 'offscreenY', i.pg + this.size), a(this, 'x', (0, r.M)(-this.size, this.offscreenX)), a(this, 'y', (0, r.M)(-this.size, this.offscreenY));
	}
};

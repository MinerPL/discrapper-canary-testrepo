function n(e, t, n) {
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
function r(e, t) {
    return Math.max(Math.min((e - t) / 30, 1), -1);
}
t.Z = class e {
    initialize() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }
    terminate() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }
    update() {
        this.x !== this.px && this.y !== this.py && ((this.forceX += r(this.x, this.px)), (this.forceY += r(this.y, this.py)), (this.px = this.x), (this.py = this.y)), 0 !== this.forceX && (this.forceX = this.forceX * this.resistance), 0 !== this.forceY && (this.forceY = this.forceY * this.resistance);
    }
    render() {}
    constructor() {
        n(this, 'resistance', 0.98),
            n(this, 'px', 0),
            n(this, 'py', 0),
            n(this, 'x', 0),
            n(this, 'y', 0),
            n(this, 'forceX', 0),
            n(this, 'forceY', 0),
            n(this, 'handleMouseMove', (e) => {
                let { clientX: t, clientY: n } = e;
                (this.x = t), (this.y = n);
            });
    }
};

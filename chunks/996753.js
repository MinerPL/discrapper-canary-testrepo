var o, r, i, s, a = n(735250), l = n(470079), c = n(120356), u = n.n(c), p = n(481060), h = n(67095);
let d = {
        UP: 'up',
        RIGHT: 'right',
        DOWN: 'down',
        LEFT: 'left'
    }, g = {
        [d.UP]: h.up,
        [d.RIGHT]: h.right,
        [d.DOWN]: h.down,
        [d.LEFT]: h.left
    };
class f extends (s = l.PureComponent) {
    render() {
        let {
            direction: t,
            className: e
        } = this.props;
        return (0, a.jsx)(p.ArrowSmallUpIcon, {
            size: 'md',
            color: 'currentColor',
            className: u()(h.__invalid_arrow, e, { [g[t]]: !0 })
        });
    }
}
o = f, r = 'Directions', i = d, r in o ? Object.defineProperty(o, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[r] = i, e.Z = f;

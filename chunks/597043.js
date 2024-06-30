var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(920906), o = n(643422);
class c extends a.Component {
    render() {
        let {
            icon: e,
            ...t
        } = this.props;
        return (0, s.jsx)(e, {
            size: 'md',
            ...t,
            color: 'currentColor'
        });
    }
}
let d = (0, l.animated)(c);
t.Z = function (e) {
    let {
            className: t,
            name: n,
            icon: a,
            iconClassName: i
        } = e, c = (0, l.useTransition)({
            name: n,
            icon: a,
            iconClassName: i
        }, {
            key: e => e.name,
            initial: null,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 }
        });
    return (0, s.jsx)('div', {
        className: r()(o.crossfade, t),
        children: c((e, t) => {
            let {
                icon: n,
                iconClassName: a
            } = t;
            return (0, s.jsx)(d, {
                icon: n,
                className: r()(o.icon, a),
                style: e
            });
        })
    });
};

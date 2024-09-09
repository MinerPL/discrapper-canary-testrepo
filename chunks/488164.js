n.d(t, {
    E: function () {
        return c;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var r = n(735250),
    i = n(470079),
    a = n(658722),
    s = n.n(a),
    o = n(481060),
    l = n(683976);
function u(e, t, n) {
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
class c extends i.PureComponent {
    render() {
        let { label: e, value: t, popoutProps: n, renderValue: i, className: a } = this.props;
        return (0, r.jsx)(o.Popout, {
            ...n,
            renderPopout: this.renderPopout,
            children: (n) =>
                (0, r.jsx)(o.Clickable, {
                    ...n,
                    className: a,
                    children: (0, r.jsx)(l.F, {
                        label: e,
                        value: t,
                        renderValue: i
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'renderItems', (e) => {
                let { items: t, renderItem: n } = this.props;
                return t.reduce((t, r, i) => (s()(e.toLowerCase(), r.label.toLowerCase()) && t.push(n(r, i)), t), []);
            }),
            u(this, 'renderPopout', (e) => {
                let { closePopout: t } = e,
                    { placeholder: n, popoutClassName: i, onChange: a, value: s } = this.props;
                return (0, r.jsx)(o.ComboboxPopout, {
                    className: i,
                    placeholder: n,
                    value: new Set([s.value]),
                    onChange: a,
                    onClose: t,
                    showScrollbar: !0,
                    children: (e) => this.renderItems(e)
                });
            });
    }
}

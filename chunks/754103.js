t(47120);
var s = t(735250),
    n = t(470079),
    l = t(120356),
    r = t.n(l),
    o = t(481060),
    i = t(600164),
    c = t(702512);
function u(e, a, t) {
    return (
        a in e
            ? Object.defineProperty(e, a, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[a] = t),
        e
    );
}
class d extends n.PureComponent {
    componentDidUpdate(e) {
        if (this.props.formError !== e.formError) this.setState({ changedSinceError: new Set() });
        else if (null != this.props.formError) {
            let { changedSinceError: a } = this.state;
            this.getChangedValues(e).forEach((e) => a.add(e)), this.setState({ changedSinceError: a });
        }
    }
    getChangedValues(e) {
        let { values: a } = this.props,
            { values: t } = e;
        return Object.keys(a).filter((e) => a[e] !== t[e]);
    }
    getError(e) {
        let { errors: a, formError: t } = this.props;
        return null != a[e] ? a[e] : null == t || this.state.changedSinceError.has(e) ? null : t.getFieldMessage(e);
    }
    render() {
        let { form: e, className: a } = this.props,
            t = e.map(this.renderFormRow);
        return (0, s.jsx)('div', {
            className: a,
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'state', { changedSinceError: new Set() }),
            u(this, 'renderFormSection', (e) => {
                let { values: a, onFieldChange: t, onFieldFocus: n, onFieldBlur: l, layout: i, ...c } = this.props,
                    { getClassNameForLayout: u, renderInput: d, title: E, name: A, id: N, placeholder: m, ..._ } = e,
                    p = {
                        ..._,
                        placeholder: null == m ? void 0 : m(),
                        layout: i,
                        error: this.getError(A),
                        value: a[A],
                        name: A,
                        'aria-labelledby': N,
                        onChange: t,
                        onFocus: n,
                        onBlur: l
                    };
                return (0, s.jsx)(
                    o.FormSection,
                    {
                        className: r()(null == u ? void 0 : u(i)),
                        title: E(),
                        titleId: N,
                        children: d(p, c)
                    },
                    A
                );
            }),
            u(this, 'renderFormRow', (e) => {
                let a = e.fields.map(this.renderFormSection);
                return (0, s.jsx)(
                    i.Z,
                    {
                        className: r()(c.row, e.className),
                        children: a
                    },
                    e.fields.map((e) => e.name).join('')
                );
            });
    }
}
a.Z = d;

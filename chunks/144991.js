t(411104);
var i = t(735250), a = t(470079), s = t(120356), l = t.n(s), o = t(149765), r = t(253923), c = t(481060), d = t(901524), u = t(291913), I = t(185402), m = t(331651);
class _ extends a.PureComponent {
    getOverwriteValue(e) {
        let {
            allow: n,
            deny: t
        } = this.props;
        if (null == n || null == t)
            throw Error('PermissionsForm.getOverwriteValue: Invalid allow or deny props');
        return o.e$(n, e) ? d.y.ALLOW : o.e$(t, e) ? d.y.DENY : d.y.PASSTHROUGH;
    }
    getPermissionValue(e, n) {
        return o.e$(n, e);
    }
    handleChange(e, n) {
        let {onChange: t} = this.props;
        t(e, n);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(c.Tooltip, {
            text: e,
            position: 'top',
            color: c.Tooltip.Colors.RED,
            children: e => (0, i.jsx)('span', {
                ...e,
                children: (0, i.jsx)(c.DenyIcon, {
                    size: 'sm',
                    color: 'currentColor',
                    className: I.icon
                })
            })
        });
    }
    renderComponent(e) {
        let {
                title: n,
                description: t,
                helpdeskArticleId: a,
                flag: s
            } = e, {
                permissions: o,
                locked: d,
                permissionRender: m
            } = this.props, _ = null == m ? void 0 : m(s), N = !!(d || _), E = 'string' == typeof _ ? this.renderDisabledIndicator(_) : null, T = l()({ [I.title]: null != E });
        return null == o ? (0, i.jsxs)(u.Z, {
            disabled: N,
            value: this.getOverwriteValue(s),
            onChange: e => this.handleChange(s, e),
            note: (0, r._u)(t),
            helpdeskArticleId: a,
            children: [
                E,
                (0, i.jsx)('span', {
                    className: T,
                    children: n
                })
            ]
        }, String(s)) : (0, i.jsxs)(c.FormSwitch, {
            disabled: N,
            value: this.getPermissionValue(s, o),
            onChange: e => this.handleChange(s, e),
            note: (0, r._u)(t),
            children: [
                E,
                (0, i.jsx)('span', {
                    className: T,
                    children: n
                })
            ]
        }, String(s));
    }
    render() {
        let {
            spec: e,
            className: n
        } = this.props;
        return (0, i.jsx)(c.FormSection, {
            className: n,
            children: (0, i.jsxs)(c.HeadingLevel, {
                component: (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    className: null != e.description ? m.marginBottom8 : m.marginBottom20,
                    children: e.title
                }),
                children: [
                    null != e.description && (0, i.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: m.marginBottom20,
                        children: e.description
                    }),
                    e.permissions.map(this.renderComponent, this)
                ]
            })
        });
    }
}
n.Z = _;

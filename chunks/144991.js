t(411104);
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  r = t(149765),
  o = t(253923),
  d = t(481060),
  c = t(453628),
  u = t(996987),
  I = t(262401),
  m = t(224499);
class _ extends a.PureComponent {
  getOverwriteValue(e) {
let {
  allow: n,
  deny: t
} = this.props;
if (null == n || null == t)
  throw Error('PermissionsForm.getOverwriteValue: Invalid allow or deny props');
return r.e$(n, e) ? c.y.ALLOW : r.e$(t, e) ? c.y.DENY : c.y.PASSTHROUGH;
  }
  getPermissionValue(e, n) {
return r.e$(n, e);
  }
  handleChange(e, n) {
let {
  onChange: t
} = this.props;
t(e, n);
  }
  renderDisabledIndicator(e) {
return (0, i.jsx)(d.Tooltip, {
  text: e,
  position: 'top',
  color: d.Tooltip.Colors.RED,
  children: e => (0, i.jsx)('span', {
    ...e,
    children: (0, i.jsx)(d.DenyIcon, {
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
  permissions: r,
  locked: c,
  permissionRender: m
} = this.props, _ = null == m ? void 0 : m(s), N = !!(c || _), E = 'string' == typeof _ ? this.renderDisabledIndicator(_) : null, T = l()({
  [I.title]: null != E
});
return null == r ? (0, i.jsxs)(u.Z, {
  disabled: N,
  value: this.getOverwriteValue(s),
  onChange: e => this.handleChange(s, e),
  note: (0, o._u)(t),
  helpdeskArticleId: a,
  children: [
    E,
    (0, i.jsx)('span', {
      className: T,
      children: n
    })
  ]
}, String(s)) : (0, i.jsxs)(d.FormSwitch, {
  disabled: N,
  value: this.getPermissionValue(s, r),
  onChange: e => this.handleChange(s, e),
  note: (0, o._u)(t),
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
return (0, i.jsx)(d.FormSection, {
  className: n,
  children: (0, i.jsxs)(d.HeadingLevel, {
    component: (0, i.jsx)(d.FormTitle, {
      tag: d.FormTitleTags.H5,
      className: null != e.description ? m.marginBottom8 : m.marginBottom20,
      children: e.title
    }),
    children: [
      null != e.description && (0, i.jsx)(d.Text, {
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
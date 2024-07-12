var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(239091),
  l = n(129861),
  o = n(285952),
  c = n(145075);
class d extends s.PureComponent {
  handleContextMenu(e, t) {
(0, r.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('79695'),
    n.e('17400'),
    n.e('13806')
  ]).then(n.bind(n, 881351));
  return n => (0, i.jsx)(e, {
    ...n,
    user: t
  });
});
  }
  renderUser(e) {
return null == e ? null : (0, i.jsxs)(o.Z, {
  className: c.user,
  align: o.Z.Align.CENTER,
  onContextMenu: t => {
    null != e && this.handleContextMenu(t, e);
  },
  children: [
    (0, i.jsx)(a.Avatar, {
      src: e.getAvatarURL(void 0, 24),
      'aria-label': e.username,
      size: a.AvatarSizes.SIZE_24,
      className: c.avatar
    }),
    (0, i.jsx)(l.Z, {
      user: e,
      className: c.tag,
      usernameClass: c.username,
      discriminatorClass: c.discriminator
    })
  ]
}, e.id);
  }
  render() {
let {
  party: e,
  header: t
} = this.props, n = e.map(e => this.renderUser(e));
return (0, i.jsxs)('div', {
  className: c.userList,
  children: [
    (0, i.jsx)('div', {
      className: c.header,
      children: t
    }),
    (0, i.jsx)(a.ScrollerThin, {
      className: c.content,
      fade: !0,
      children: n
    })
  ]
});
  }
}
t.Z = d;
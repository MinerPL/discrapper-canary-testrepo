n(47120);
var s, r = n(735250),
  i = n(470079),
  a = n(593473),
  l = n(442837),
  o = n(544891),
  c = n(108427),
  u = n(601964),
  d = n(896797),
  _ = n(129293),
  h = n(388905),
  E = n(981631),
  g = n(689938),
  p = n(224499);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
l.ZP.initialize();
class m extends(s = i.PureComponent) {
  componentDidMount() {
let e = (0, _.Z)(this.props.location),
  t = (0, a.parse)(this.props.location.search);
o.tn.post({
  url: E.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
  body: {
    token: e,
    pixel_uuid: t.hash,
    guild_id: t.guild_id
  },
  oldFormErrors: !0
}).then(e => {
  let {
    body: {
      guild: t
    }
  } = e, n = new u.ZP(t);
  this.setState({
    success: !0,
    busy: !1,
    guild: n
  });
}, () => this.setState({
  success: !1,
  busy: !1
})), (0, c.e)('disable_server_highlight_notifications');
  }
  renderBusy() {
return (0, r.jsx)(h.ZP, {
  children: (0, r.jsx)(h.Hh, {})
});
  }
  renderSuccess() {
let {
  defaultRoute: e,
  transitionTo: t
} = this.props, {
  guild: n
} = this.state;
return (0, r.jsxs)(h.ZP, {
  children: [
    (0, r.jsx)(h.Dx, {
      className: p.marginBottom8,
      children: g.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER
    }),
    (0, r.jsx)(h.DK, {
      children: g.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({
        guildName: n.name
      })
    }),
    (0, r.jsx)(h.zx, {
      className: p.marginTop40,
      onClick: () => t(e),
      children: g.Z.Messages.CONTINUE_TO_WEBAPP
    }),
    (0, r.jsx)(h.zx, {
      className: p.marginTop8,
      color: h.zx.Colors.LINK,
      look: h.zx.Looks.LINK,
      onClick: () => {
        t(E.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
      },
      children: g.Z.Messages.SERVER_HIGHLIGHT_MANAGE_SETTINGS
    })
  ]
});
  }
  renderError() {
let {
  defaultRoute: e,
  transitionTo: t
} = this.props;
return (0, r.jsxs)(h.ZP, {
  children: [
    (0, r.jsx)(h.Ee, {
      src: n(105020),
      className: p.marginBottom20
    }),
    (0, r.jsx)(h.Dx, {
      className: p.marginBottom8,
      children: g.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
    }),
    (0, r.jsx)(h.DK, {
      children: g.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
    }),
    (0, r.jsx)(h.zx, {
      className: p.marginTop40,
      onClick: () => t(e),
      children: g.Z.Messages.CONTINUE_TO_WEBAPP
    })
  ]
});
  }
  render() {
let {
  busy: e,
  success: t
} = this.state;
return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
  }
  constructor(...e) {
super(...e), I(this, 'state', {
  busy: !0,
  success: !1,
  guild: null
});
  }
}
I(m, 'defaultProps', {
  transitionTo: e => n.g.location.assign(e)
}), t.Z = l.ZP.connectStores([d.Z], () => ({
  defaultRoute: d.Z.defaultRoute
}))(m);
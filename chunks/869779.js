s.r(t), s.d(t, {
  default: function() {
return P;
  }
});
var n = s(735250),
  l = s(470079),
  a = s(442837),
  i = s(481060),
  r = s(570140),
  o = s(787014),
  d = s(37234),
  c = s(503089),
  u = s(493544),
  h = s(367907),
  m = s(933557),
  g = s(471445),
  E = s(351123),
  T = s(665906),
  p = s(210887),
  N = s(131704),
  _ = s(533947),
  S = s(277053),
  x = s(388610),
  f = s(592125),
  C = s(496675),
  I = s(699516),
  M = s(594174),
  R = s(585483),
  Z = s(787263),
  v = s(975316),
  O = s(428813),
  A = s(2147),
  L = s(856606),
  b = s(981631),
  j = s(689938),
  D = s(742199);

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
s = arguments.length > 2 ? arguments[2] : void 0;
  h.ZP.trackWithMetadata(b.rMx.SETTINGS_PANE_VIEWED, {
settings_type: 'channel',
origin_pane: t,
destination_pane: e,
location: s
  });
}
class w extends l.PureComponent {
  componentDidMount() {
y(this.props.section, null, this.props.analyticsLocation);
  }
  componentWillUnmount() {
r.Z.wait(() => (0, o.xv)());
  }
  componentDidUpdate(e) {
let {
  formState: t,
  section: s
} = e, {
  formState: n,
  section: l,
  canManageRoles: a,
  canManageChannels: i,
  canManageWebhooks: r
} = this.props;
(i || a || r) && (n !== b.QZA.CLOSED || n === t) && (a || l !== b.CoT.PERMISSIONS) && (r || l !== b.CoT.INTEGRATIONS) ? l !== s && y(l, s): (0, d.xf)();
  }
  render() {
let {
  theme: e,
  sidebarTheme: t,
  section: s,
  channel: l,
  category: a,
  canManageRoles: r,
  canManageChannels: h,
  canDeleteChannels: T,
  canManageWebhooks: p
} = this.props;
return null == l ? null : (0, n.jsx)(c.ZP, {
  theme: e,
  sidebarTheme: t,
  section: null != s ? s : b.CoT.OVERVIEW,
  onSetSection: o.zc,
  onClose: d.xf,
  sections: function(e) {
    let {
      channel: t,
      category: s,
      canManageRoles: l,
      canManageChannels: a,
      canDeleteChannels: r,
      canManageWebhooks: c
    } = e, h = (0, g.KS)(t), {
      GUILD_CATEGORY: T
    } = b.d4z, p = N.Ec.has(t.type), f = t.type === T ? j.Z.Messages.DELETE_CATEGORY : p ? t.isForumPost() ? j.Z.Messages.DELETE_FORUM_POST : j.Z.Messages.DELETE_THREAD : j.Z.Messages.DELETE_CHANNEL;
    return [{
        section: u.ID.HEADER,
        label: null != t ? (0, n.jsxs)(n.Fragment, {
          children: [
            null != h ? (0, n.jsx)(h, {
              size: 'xxs',
              color: 'currentColor',
              className: D.channelIcon
            }) : null,
            (0, m.F6)(t, M.default, I.Z),
            null != s ? (0, n.jsx)(i.Text, {
              tag: 'span',
              variant: 'text-xs/semibold',
              color: 'header-secondary',
              lineClamp: 1,
              className: D.category,
              children: (0, m.F6)(s, M.default, I.Z)
            }) : null
          ]
        }) : j.Z.Messages.CHANNEL_SETTINGS
      },
      {
        section: b.CoT.OVERVIEW,
        label: j.Z.Messages.OVERVIEW,
        ariaLabel: j.Z.Messages.OVERVIEW,
        element: A.Z,
        notice: {
          element: A.G,
          stores: [x.Z]
        }
      },
      {
        section: b.CoT.PERMISSIONS,
        label: j.Z.Messages.PERMISSIONS,
        element: E.Z,
        notice: {
          element: L.n,
          stores: [S.Z]
        },
        predicate: () => l && !p
      },
      {
        section: b.CoT.INSTANT_INVITES,
        label: j.Z.Messages.INVITES,
        element: O.Z,
        type: u.bT.CUSTOM,
        predicate: () => t.type !== T && a && !p
      },
      {
        section: b.CoT.INTEGRATIONS,
        label: j.Z.Messages.INTEGRATIONS_OVERVIEW,
        ariaLabel: j.Z.Messages.INTEGRATIONS_OVERVIEW,
        element: v.Z,
        notice: {
          stores: [_.Z],
          element: v.B
        },
        predicate: () => !!c && N.Ti.has(t.type)
      },
      {
        section: u.ID.DIVIDER
      },
      {
        section: b.CoT.DELETE,
        onClick() {
          (0, Z.w)(t, function() {
            R.S.subscribeOnce(b.CkL.LAYER_POP_COMPLETE, () => {
              (0, o.zz)(t.id);
            }), (0, d.xf)();
          });
        },
        label: f,
        ariaLabel: f,
        icon: (0, n.jsx)(i.TrashIcon, {
          size: 'xs',
          color: 'currentColor'
        }),
        predicate: () => r
      }
    ];
  }({
    channel: l,
    category: a,
    canManageRoles: r,
    canManageChannels: h,
    canDeleteChannels: T,
    canManageWebhooks: p
  })
});
  }
}

function P() {
  let {
channel: e,
analyticsLocation: t
  } = (0, a.cj)([x.Z], () => x.Z.getProps()), s = (0, a.e7)([x.Z], () => x.Z.getFormState()), l = (0, a.e7)([x.Z], () => x.Z.getSection()), i = (0, a.e7)([p.Z], () => p.Z.theme), r = (0, a.e7)([p.Z], () => p.Z.darkSidebar ? b.BRd.DARK : void 0), o = (0, T.C7)(e), d = (0, T.Xb)(e), {
canManageChannels: c,
canManageRoles: u,
canManageWebhooks: h
  } = (0, a.cj)([C.Z], () => ({
canManageChannels: C.Z.can(b.Plq.MANAGE_CHANNELS, e),
canManageRoles: null != e && C.Z.can(b.Plq.MANAGE_ROLES, e),
canManageWebhooks: null != e && C.Z.can(b.Plq.MANAGE_WEBHOOKS, e)
  })), m = (0, a.e7)([f.Z], () => f.Z.getChannel(null == e ? void 0 : e.parent_id));
  return (0, n.jsx)(w, {
channel: e,
category: m,
canManageChannels: (null == e ? void 0 : e.isThread()) ? o : c,
canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : c,
canManageRoles: u,
canManageWebhooks: h,
formState: s,
theme: i,
sidebarTheme: r,
section: l,
analyticsLocation: t
  });
}
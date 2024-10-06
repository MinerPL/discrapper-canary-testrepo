s.r(t),
    s.d(t, {
        default: function () {
            return F;
        }
    });
var n = s(735250),
    l = s(470079),
    i = s(442837),
    a = s(481060),
    r = s(570140),
    o = s(787014),
    c = s(37234),
    d = s(503089),
    u = s(493544),
    h = s(367907),
    m = s(933557),
    g = s(471445),
    E = s(351123),
    T = s(685929),
    p = s(665906),
    N = s(210887),
    _ = s(131704),
    S = s(533947),
    x = s(277053),
    f = s(388610),
    C = s(592125),
    M = s(496675),
    I = s(699516),
    R = s(594174),
    Z = s(585483),
    v = s(787263),
    A = s(975316),
    O = s(428813),
    L = s(2147),
    j = s(856606),
    b = s(981631),
    D = s(689938),
    y = s(8677);
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        s = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(b.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'channel',
        origin_pane: t,
        destination_pane: e,
        location: s
    });
}
class P extends l.PureComponent {
    componentDidMount() {
        w(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        r.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: s } = e,
            { formState: n, section: l, canManageRoles: i, canManageChannels: a, canManageWebhooks: r } = this.props;
        (a || i || r) && (n !== b.QZA.CLOSED || n === t) && (i || l !== b.CoT.PERMISSIONS) && (r || l !== b.CoT.INTEGRATIONS) ? l !== s && w(l, s) : (0, c.xf)();
    }
    render() {
        let { theme: e, sidebarTheme: t, section: s, channel: l, category: i, canManageRoles: r, canManageChannels: h, canDeleteChannels: T, canManageWebhooks: p, canUnlinkChannel: N } = this.props;
        return null == l
            ? null
            : (0, n.jsx)(d.ZP, {
                  theme: e,
                  sidebarTheme: t,
                  section: null != s ? s : b.CoT.OVERVIEW,
                  onSetSection: o.zc,
                  onClose: c.xf,
                  sections: (function (e) {
                      let { channel: t, category: s, canManageRoles: l, canManageChannels: i, canDeleteChannels: r, canManageWebhooks: d, canUnlinkChannel: h } = e,
                          T = (0, g.KS)(t),
                          { GUILD_CATEGORY: p } = b.d4z,
                          N = _.Ec.has(t.type),
                          C = t.type === p ? D.Z.Messages.DELETE_CATEGORY : N ? (t.isForumPost() ? D.Z.Messages.DELETE_FORUM_POST : D.Z.Messages.DELETE_THREAD) : D.Z.Messages.DELETE_CHANNEL;
                      return [
                          {
                              section: u.ID.HEADER,
                              label:
                                  null != t
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                null != T
                                                    ? (0, n.jsx)(T, {
                                                          size: 'xxs',
                                                          color: 'currentColor',
                                                          className: y.channelIcon
                                                      })
                                                    : null,
                                                (0, m.F6)(t, R.default, I.Z),
                                                null != s
                                                    ? (0, n.jsx)(a.Text, {
                                                          tag: 'span',
                                                          variant: 'text-xs/semibold',
                                                          color: 'header-secondary',
                                                          lineClamp: 1,
                                                          className: y.category,
                                                          children: (0, m.F6)(s, R.default, I.Z)
                                                      })
                                                    : null
                                            ]
                                        })
                                      : D.Z.Messages.CHANNEL_SETTINGS
                          },
                          {
                              section: b.CoT.OVERVIEW,
                              label: D.Z.Messages.OVERVIEW,
                              ariaLabel: D.Z.Messages.OVERVIEW,
                              element: L.Z,
                              notice: {
                                  element: L.G,
                                  stores: [f.Z]
                              }
                          },
                          {
                              section: b.CoT.PERMISSIONS,
                              label: D.Z.Messages.PERMISSIONS,
                              element: E.Z,
                              notice: {
                                  element: j.n,
                                  stores: [x.Z]
                              },
                              predicate: () => l && !N
                          },
                          {
                              section: b.CoT.INSTANT_INVITES,
                              label: D.Z.Messages.INVITES,
                              element: O.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== p && i && !N
                          },
                          {
                              section: b.CoT.INTEGRATIONS,
                              label: D.Z.Messages.INTEGRATIONS_OVERVIEW,
                              ariaLabel: D.Z.Messages.INTEGRATIONS_OVERVIEW,
                              element: A.Z,
                              notice: {
                                  stores: [S.Z],
                                  element: A.B
                              },
                              predicate: () => (!!d || !!h) && _.Ti.has(t.type)
                          },
                          { section: u.ID.DIVIDER },
                          {
                              section: b.CoT.DELETE,
                              onClick() {
                                  (0, v.w)(t, function () {
                                      Z.S.subscribeOnce(b.CkL.LAYER_POP_COMPLETE, () => {
                                          (0, o.zz)(t.id);
                                      }),
                                          (0, c.xf)();
                                  });
                              },
                              label: C,
                              ariaLabel: C,
                              icon: (0, n.jsx)(a.TrashIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              predicate: () => r
                          }
                      ];
                  })({
                      channel: l,
                      category: i,
                      canManageRoles: r,
                      canManageChannels: h,
                      canDeleteChannels: T,
                      canManageWebhooks: p,
                      canUnlinkChannel: N
                  })
              });
    }
}
function F() {
    let { channel: e, analyticsLocation: t } = (0, i.cj)([f.Z], () => f.Z.getProps()),
        s = (0, i.e7)([f.Z], () => f.Z.getFormState()),
        l = (0, i.e7)([f.Z], () => f.Z.getSection()),
        a = (0, i.e7)([N.Z], () => N.Z.theme),
        r = (0, i.e7)([N.Z], () => (N.Z.darkSidebar ? b.BRd.DARK : void 0)),
        o = (0, p.C7)(e),
        c = (0, T.Y)(e),
        d = (0, p.Xb)(e),
        {
            canManageChannels: u,
            canManageRoles: h,
            canManageWebhooks: m
        } = (0, i.cj)([M.Z], () => ({
            canManageChannels: M.Z.can(b.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && M.Z.can(b.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && M.Z.can(b.Plq.MANAGE_WEBHOOKS, e)
        })),
        g = (0, i.e7)([C.Z], () => C.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, n.jsx)(P, {
        channel: e,
        category: g,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : u,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : u,
        canManageRoles: h,
        canManageWebhooks: m,
        canUnlinkChannel: c,
        formState: s,
        theme: a,
        sidebarTheme: r,
        section: l,
        analyticsLocation: t
    });
}

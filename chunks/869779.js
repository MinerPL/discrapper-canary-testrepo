"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
});
var l = s("735250"),
  a = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("570140"),
  o = s("787014"),
  d = s("37234"),
  u = s("503089"),
  c = s("493544"),
  h = s("427218"),
  m = s("367907"),
  E = s("933557"),
  f = s("471445"),
  g = s("351123"),
  S = s("665906"),
  T = s("210887"),
  N = s("131704"),
  _ = s("533947"),
  p = s("277053"),
  C = s("388610"),
  x = s("592125"),
  M = s("496675"),
  I = s("699516"),
  R = s("594174"),
  A = s("740727"),
  O = s("585483"),
  L = s("975316"),
  v = s("428813"),
  j = s("2147"),
  D = s("856606"),
  y = s("981631"),
  F = s("689938"),
  b = s("881948");

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    s = arguments.length > 2 ? arguments[2] : void 0;
  m.default.trackWithMetadata(y.AnalyticEvents.SETTINGS_PANE_VIEWED, {
    settings_type: "channel",
    origin_pane: t,
    destination_pane: e,
    location: s
  })
}
class w extends a.PureComponent {
  componentDidMount() {
    P(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    r.default.wait(() => (0, o.close)())
  }
  componentDidUpdate(e) {
    let {
      formState: t,
      section: s
    } = e, {
      formState: l,
      section: a,
      canManageRoles: n,
      canManageChannels: i,
      canManageWebhooks: r
    } = this.props;
    (i || n || r) && (l !== y.FormStates.CLOSED || l === t) && (n || a !== y.ChannelSettingsSections.PERMISSIONS) && (r || a !== y.ChannelSettingsSections.INTEGRATIONS) ? a !== s && P(a, s): (0, d.popLayer)()
  }
  render() {
    let {
      theme: e,
      sidebarTheme: t,
      section: s,
      channel: a,
      category: n,
      canManageRoles: r,
      canManageChannels: m,
      canDeleteChannels: S,
      canManageWebhooks: T
    } = this.props;
    return null == a ? null : (0, l.jsx)(u.default, {
      theme: e,
      sidebarTheme: t,
      section: null != s ? s : y.ChannelSettingsSections.OVERVIEW,
      onSetSection: o.setSection,
      onClose: d.popLayer,
      sections: function(e) {
        let {
          channel: t,
          category: s,
          canManageRoles: a,
          canManageChannels: n,
          canDeleteChannels: r,
          canManageWebhooks: u
        } = e, m = (0, f.getChannelIconComponent)(t), {
          GUILD_CATEGORY: S
        } = y.ChannelTypes, T = N.THREAD_CHANNEL_TYPES.has(t.type), x = t.type === S ? F.default.Messages.DELETE_CATEGORY : T ? t.isForumPost() ? F.default.Messages.DELETE_FORUM_POST : F.default.Messages.DELETE_THREAD : F.default.Messages.DELETE_CHANNEL;
        return [{
          section: c.SectionTypes.HEADER,
          label: null != t ? (0, l.jsxs)(l.Fragment, {
            children: [null != m ? (0, l.jsx)(m, {
              width: 12,
              height: 12,
              className: b.channelIcon
            }) : null, (0, E.computeChannelName)(t, R.default, I.default), null != s ? (0, l.jsx)(i.Text, {
              tag: "span",
              variant: "text-xs/semibold",
              color: "header-secondary",
              lineClamp: 1,
              className: b.category,
              children: (0, E.computeChannelName)(s, R.default, I.default)
            }) : null]
          }) : F.default.Messages.CHANNEL_SETTINGS
        }, {
          section: y.ChannelSettingsSections.OVERVIEW,
          label: F.default.Messages.OVERVIEW,
          ariaLabel: F.default.Messages.OVERVIEW,
          element: j.default,
          notice: {
            element: j.ChannelSettingsOverviewNotice,
            stores: [C.default]
          }
        }, {
          section: y.ChannelSettingsSections.PERMISSIONS,
          label: F.default.Messages.PERMISSIONS,
          element: g.default,
          notice: {
            element: D.ChannelSettingsPermissionsNotice,
            stores: [p.default]
          },
          predicate: () => a && !T
        }, {
          section: y.ChannelSettingsSections.INSTANT_INVITES,
          label: F.default.Messages.INVITES,
          element: v.default,
          type: c.ContentTypes.CUSTOM,
          predicate: () => t.type !== S && n && !T
        }, {
          section: y.ChannelSettingsSections.INTEGRATIONS,
          label: F.default.Messages.INTEGRATIONS_OVERVIEW,
          ariaLabel: F.default.Messages.INTEGRATIONS_OVERVIEW,
          element: L.default,
          notice: {
            stores: [_.default],
            element: L.ChannelSettingsIntegrationsNotice
          },
          predicate: () => !!u && N.GUILD_WEBHOOK_CHANNEL_TYPES.has(t.type)
        }, {
          section: c.SectionTypes.DIVIDER
        }, {
          section: y.ChannelSettingsSections.DELETE,
          onClick() {
            (0, i.openModal)(e => (0, l.jsx)(h.default, {
              ...e,
              onConfirm: () => {
                e.onClose(), O.ComponentDispatch.subscribeOnce(y.ComponentActions.LAYER_POP_COMPLETE, () => {
                  (0, o.deleteChannel)(t.id)
                }), (0, d.popLayer)()
              },
              channel: t
            }))
          },
          label: x,
          ariaLabel: x,
          icon: (0, l.jsx)(A.default, {
            width: 16,
            height: 16
          }),
          predicate: () => r
        }]
      }({
        channel: a,
        category: n,
        canManageRoles: r,
        canManageChannels: m,
        canDeleteChannels: S,
        canManageWebhooks: T
      })
    })
  }
}

function U() {
  let {
    channel: e,
    analyticsLocation: t
  } = (0, n.useStateFromStoresObject)([C.default], () => C.default.getProps()), s = (0, n.useStateFromStores)([C.default], () => C.default.getFormState()), a = (0, n.useStateFromStores)([C.default], () => C.default.getSection()), i = (0, n.useStateFromStores)([T.default], () => T.default.theme), r = (0, n.useStateFromStores)([T.default], () => T.default.darkSidebar ? y.ThemeTypes.DARK : void 0), o = (0, S.useCanManageThread)(e), d = (0, S.useIsThreadModerator)(e), {
    canManageChannels: u,
    canManageRoles: c,
    canManageWebhooks: h
  } = (0, n.useStateFromStoresObject)([M.default], () => ({
    canManageChannels: M.default.can(y.Permissions.MANAGE_CHANNELS, e),
    canManageRoles: null != e && M.default.can(y.Permissions.MANAGE_ROLES, e),
    canManageWebhooks: null != e && M.default.can(y.Permissions.MANAGE_WEBHOOKS, e)
  })), m = (0, n.useStateFromStores)([x.default], () => x.default.getChannel(null == e ? void 0 : e.parent_id));
  return (0, l.jsx)(w, {
    channel: e,
    category: m,
    canManageChannels: (null == e ? void 0 : e.isThread()) ? o : u,
    canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : u,
    canManageRoles: c,
    canManageWebhooks: h,
    formState: s,
    theme: i,
    sidebarTheme: r,
    section: a,
    analyticsLocation: t
  })
}
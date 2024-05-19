"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var i = n("735250");
n("470079");
var r = n("243814"),
  a = n("481060"),
  s = n("239091"),
  o = n("311819"),
  l = n("69580"),
  u = n("556084"),
  d = n("592125"),
  _ = n("944486"),
  c = n("682864"),
  E = n("441957"),
  I = n("151785"),
  T = n("572004"),
  f = n("591759"),
  S = n("135431"),
  h = n("981631"),
  A = n("689938"),
  m = n("731208");

function N(e) {
  var t;
  let {
    application: n,
    className: N
  } = e, p = d.default.getChannel(_.default.getChannelId()), {
    appsInGDMEnabled: O,
    availableApplications: C
  } = (0, u.usePrivateChannelIntegrationState)({
    channelId: null !== (t = null == p ? void 0 : p.id) && void 0 !== t ? t : h.EMPTY_STRING_SNOWFLAKE_ID
  });
  if (!(0, S.canInstallApplication)({
      customInstallUrl: n.customInstallUrl,
      installParams: n.installParams,
      integrationTypesConfig: n.integrationTypesConfig
    })) return null;
  let R = O && null != C.find(e => e.id === (null == n ? void 0 : n.id)),
    g = null != n.customInstallUrl && !f.default.isDiscordUrl(n.customInstallUrl);
  return (0, i.jsx)(a.Button, {
    color: a.Button.Colors.PRIMARY,
    look: a.Button.Looks.FILLED,
    size: a.Button.Sizes.SMALL,
    onContextMenu: T.SUPPORTS_COPY ? e => {
      (0, s.openContextMenu)(e, e => (0, i.jsx)(a.Menu, {
        navId: "component-button",
        onClose: s.closeContextMenu,
        "aria-label": A.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, i.jsx)(a.MenuGroup, {
          children: (0, i.jsx)(a.MenuItem, {
            id: "copy",
            label: A.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
            action: () => (0, T.copy)((0, o.getApplicationInstallURL)(n))
          })
        })
      }))
    } : void 0,
    onClick: () => {
      R ? (0, l.openOAuth2Modal)({
        clientId: n.id,
        scopes: [r.OAuth2Scopes.APPLICATIONS_COMMANDS],
        channelId: p.id,
        disableGuildSelect: !0
      }) : (0, S.installApplication)({
        applicationId: n.id,
        customInstallUrl: n.customInstallUrl,
        installParams: n.installParams,
        integrationTypesConfig: n.integrationTypesConfig
      })
    },
    className: N,
    children: (0, i.jsxs)("div", {
      className: m.applicationInstallButtonContent,
      children: [!g && (0, i.jsx)(I.default, {
        width: 16,
        height: 16
      }), (0, i.jsx)(c.default, {
        size: 4,
        horizontal: !0
      }), (0, i.jsx)("span", {
        className: m.applicationInstallButtonText,
        children: R ? A.default.Messages.ADD : A.default.Messages.APPLICATION_ADD_BUTTON
      }), g && (0, i.jsx)(E.default, {
        className: m.launchIcon,
        width: 16,
        height: 16
      })]
    })
  })
}
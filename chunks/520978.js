"use strict";
n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250);
n(470079);
var r = n(243814),
  s = n(481060),
  o = n(239091),
  a = n(311819),
  l = n(69580),
  u = n(556084),
  _ = n(592125),
  d = n(944486),
  c = n(441957),
  E = n(151785),
  I = n(572004),
  T = n(591759),
  h = n(135431),
  S = n(981631),
  f = n(689938),
  N = n(731208);

function A(e) {
  var t;
  let {
    application: n,
    className: A
  } = e, m = _.Z.getChannel(d.Z.getChannelId()), {
    appsInGDMEnabled: O,
    availableApplications: R
  } = (0, u.j)({
    channelId: null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : S.lds
  });
  if (!(0, h.E)({
      customInstallUrl: n.customInstallUrl,
      installParams: n.installParams,
      integrationTypesConfig: n.integrationTypesConfig
    })) return null;
  let C = O && null != R.find(e => e.id === (null == n ? void 0 : n.id)),
    p = null != n.customInstallUrl && !T.Z.isDiscordUrl(n.customInstallUrl);
  return (0, i.jsx)(s.Button, {
    color: s.Button.Colors.PRIMARY,
    look: s.Button.Looks.FILLED,
    size: s.Button.Sizes.SMALL,
    onContextMenu: I.wS ? e => {
      (0, o.vq)(e, e => (0, i.jsx)(s.Menu, {
        navId: "component-button",
        onClose: o.Zy,
        "aria-label": f.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
        onSelect: void 0,
        ...e,
        children: (0, i.jsx)(s.MenuGroup, {
          children: (0, i.jsx)(s.MenuItem, {
            id: "copy",
            label: f.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
            action: () => (0, I.JG)((0, a.J)(n))
          })
        })
      }))
    } : void 0,
    onClick: () => {
      C ? (0, l.openOAuth2Modal)({
        clientId: n.id,
        scopes: [r.x.APPLICATIONS_COMMANDS],
        channelId: m.id,
        disableGuildSelect: !0
      }) : (0, h.L)({
        applicationId: n.id,
        customInstallUrl: n.customInstallUrl,
        installParams: n.installParams,
        integrationTypesConfig: n.integrationTypesConfig
      })
    },
    className: A,
    children: (0, i.jsxs)("div", {
      className: N.applicationInstallButtonContent,
      children: [!p && (0, i.jsx)(E.Z, {
        width: 16,
        height: 16
      }), (0, i.jsx)(s.Spacer, {
        size: 4,
        horizontal: !0
      }), (0, i.jsx)("span", {
        className: N.applicationInstallButtonText,
        children: C ? f.Z.Messages.ADD : f.Z.Messages.APPLICATION_ADD_BUTTON
      }), p && (0, i.jsx)(c.Z, {
        className: N.launchIcon,
        width: 16,
        height: 16
      })]
    })
  })
}
t.d(n, {
  Z: function() {
return M;
  }
});
var s = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(92114),
  u = t(778123),
  o = t(122074),
  r = t(9156),
  d = t(621600),
  c = t(981631),
  E = t(689938);

function _() {
  return [{
  setting: c.bL.ALL_MESSAGES,
  label: E.Z.Messages.FORM_LABEL_ALL_MESSAGES
},
{
  setting: c.bL.ONLY_MENTIONS,
  label: E.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
},
{
  setting: c.bL.NO_MESSAGES,
  label: E.Z.Messages.FORM_LABEL_NOTHING
}
  ];
}

function M(e) {
  var n, M;
  let N = function(e) {
  let {
    suppressEveryone: n,
    suppressRoles: t,
    mobilePush: M,
    messageNotifications: N,
    notifyHighlights: I
  } = (0, i.cj)([r.ZP], () => ({
    suppressEveryone: r.ZP.isSuppressEveryoneEnabled(e.id),
    suppressRoles: r.ZP.isSuppressRolesEnabled(e.id),
    mobilePush: r.ZP.isMobilePushEnabled(e.id),
    messageNotifications: r.ZP.getMessageNotifications(e.id),
    notifyHighlights: r.ZP.getNotifyHighlights(e.id)
  }), [e.id]), S = I === c.gLR.DISABLED, g = (0, u.Z)(e.id);

  function L(n, t) {
    l.Z.updateGuildNotificationSettings(e.id, n, t);
  }
  let T = (0, o.ng)(e.id, !0);
  return (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(a.MenuGroup, {
        children: _().map(e => {
          let {
            setting: n,
            label: t
          } = e;
          return (0, s.jsx)(a.MenuRadioItem, {
            group: 'guild-notifications',
            id: ''.concat(n),
            label: t,
            action: () => L({
              message_notifications: n
            }, d.UE.notifications(n)),
            checked: n === N
          }, n);
        })
      }),
      null != T && (0, s.jsx)(a.MenuGroup, {
        children: T
      }),
      (0, s.jsxs)(a.MenuGroup, {
        children: [
          (0, s.jsx)(a.MenuCheckboxItem, {
            id: 'suppress-everyone',
            label: E.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
            action: () => L({
              suppress_everyone: !n
            }, d.UE.suppressEveryone(!n)),
            checked: n
          }),
          (0, s.jsx)(a.MenuCheckboxItem, {
            id: 'suppress-roles',
            label: E.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
            action: () => L({
              suppress_roles: !t
            }, d.UE.suppressRoles(!t)),
            checked: t
          }),
          (0, s.jsx)(a.MenuCheckboxItem, {
            id: 'suppress-highlights',
            label: E.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
            action: () => {
              L({
                notify_highlights: S ? c.gLR.ENABLED : c.gLR.DISABLED
              }, d.UE.highlights(S));
            },
            checked: S
          }),
          g
        ]
      }),
      (0, s.jsx)(a.MenuGroup, {
        children: (0, s.jsx)(a.MenuCheckboxItem, {
          id: 'mobile-push',
          label: E.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
          action: () => L({
            mobile_push: !M
          }, d.UE.mobilePush(!M)),
          checked: M
        })
      })
    ]
  });
}(e),
I = (0, i.e7)([r.ZP], () => r.ZP.getMessageNotifications(e.id), [e.id]),
S = null === (M = _()) || void 0 === M ? void 0 : null === (n = M.find(e => {
  let {
    setting: n
  } = e;
  return n === I;
})) || void 0 === n ? void 0 : n.label,
g = (0, o.U)();
  return null != N ? (0, s.jsx)(a.MenuItem, {
id: 'guild-notifications',
label: (0, s.jsxs)(s.Fragment, {
  children: [
    g,
    E.Z.Messages.NOTIFICATION_SETTINGS
  ]
}),
subtext: S,
action: () => (0, a.openModalLazy)(async () => {
  let {
    default: n
  } = await Promise.all([
    t.e('5863'),
    t.e('70192')
  ]).then(t.bind(t, 751212));
  return t => (0, s.jsx)(n, {
    ...t,
    guildId: e.id
  });
}),
children: N
  }) : null;
}
n.r(t), n.d(t, {
  GuildDiscoveryMenuPopout: function() {
return m;
  },
  default: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(239091),
  l = n(299206),
  o = n(726521),
  c = n(430824),
  d = n(496675),
  u = n(556017),
  _ = n(981631),
  E = n(689938);

function h(e) {
  let {
guild: t,
shiftId: n,
onSelect: h,
closePopout: m,
'aria-label': I
  } = e, g = (0, l.Z)({
id: t.id,
label: E.Z.Messages.COPY_ID_GUILD,
shiftId: n,
onSuccess: m
  }), p = (0, a.e7)([c.Z], () => c.Z.getGuild(t.id), [t.id]), T = (0, a.e7)([d.Z], () => d.Z.can(_.Plq.ADMINISTRATOR, p)), {
canSeeInAppReportingButtons: S
  } = u.N.useExperiment({
location: '0e35b9_1'
  }, {
autoTrackExposure: !1
  }), f = () => {
(0, r.Zy)(), null == m || m();
  };
  return (0, i.jsxs)(s.Menu, {
onSelect: h,
navId: 'guild-discovery-context-menu',
'aria-label': null != I ? I : E.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: r.Zy,
children: [
  (0, i.jsx)(s.MenuGroup, {
    children: !T && S ? (0, i.jsx)(s.MenuItem, {
      id: 'report-guild-discovery-listing',
      label: E.Z.Messages.REPORT_SERVER_NO_NAME,
      action: () => {
        (0, o.lt)(t), f();
      },
      icon: s.FlagIcon,
      color: 'danger'
    }) : null
  }),
  (0, i.jsx)(s.MenuGroup, {
    children: g
  })
]
  });
}
let m = e => {
  let {
guild: t,
children: n,
onRequestOpen: a,
onRequestClose: r
  } = e;
  return (0, i.jsx)(s.Popout, {
onRequestOpen: a,
onRequestClose: r,
animation: s.Popout.Animation.NONE,
position: 'bottom',
spacing: 4,
align: 'right',
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(h, {
    guild: t,
    closePopout: n
  });
},
children: n
  });
};
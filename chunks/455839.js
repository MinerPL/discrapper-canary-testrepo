n.r(t), n.d(t, {
  GuildDiscoveryMenuPopout: function() {
return I;
  },
  default: function() {
return E;
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
  h = n(689938);

function E(e) {
  let {
guild: t,
shiftId: n,
onSelect: E,
closePopout: I,
'aria-label': m
  } = e, g = (0, l.Z)({
id: t.id,
label: h.Z.Messages.COPY_ID_GUILD,
shiftId: n,
onSuccess: I
  }), p = (0, a.e7)([c.Z], () => c.Z.getGuild(t.id), [t.id]), T = (0, a.e7)([d.Z], () => d.Z.can(_.Plq.ADMINISTRATOR, p)), {
canSeeInAppReportingButtons: S
  } = u.N.useExperiment({
location: '0e35b9_1'
  }, {
autoTrackExposure: !1
  }), f = () => {
(0, r.Zy)(), null == I || I();
  };
  return (0, i.jsxs)(s.Menu, {
onSelect: E,
navId: 'guild-discovery-context-menu',
'aria-label': null != m ? m : h.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: r.Zy,
children: [
  (0, i.jsx)(s.MenuGroup, {
    children: !T && S ? (0, i.jsx)(s.MenuItem, {
      id: 'report-guild-discovery-listing',
      label: h.Z.Messages.REPORT_SERVER_NO_NAME,
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
let I = e => {
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
  return (0, i.jsx)(E, {
    guild: t,
    closePopout: n
  });
},
children: n
  });
};
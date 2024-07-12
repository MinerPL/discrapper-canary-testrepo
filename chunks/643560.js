n.r(t), n.d(t, {
  default: function() {
return h;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(481060),
  s = n(239091),
  r = n(299206),
  o = n(726521),
  c = n(99325),
  d = n(683818),
  u = n(689938);

function h(e) {
  let {
entry: t,
onSelect: h,
closePopout: p,
hideEditButton: m = !1
  } = e, {
isEntryAdmin: _,
canEdit: f,
canRemove: E
  } = (0, d.Z)(t), C = (0, r.Z)({
id: t.guildId,
label: u.Z.Messages.COPY_ID_GUILD,
onSuccess: p
  });
  a.useEffect(() => {
!f && !E && null == C && (0, s.Zy)();
  });
  let g = () => {
c.kx(t.channelId, t.guildId);
  };

  function I() {
(0, s.Zy)(), null == p || p();
  }
  return (0, i.jsxs)(l.Menu, {
navId: 'guild-entry-context',
onClose: I,
'aria-label': u.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
onSelect: h,
children: [
  (0, i.jsxs)(l.MenuGroup, {
    children: [
      f && !m ? (0, i.jsx)(l.MenuItem, {
        id: 'update-entry',
        label: u.Z.Messages.HUB_ENTRY_UPDATE,
        action: function() {
          (0, l.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e('34191').then(n.bind(n, 303647));
            return n => (0, i.jsx)(e, {
              ...n,
              entry: t
            });
          }), I();
        }
      }) : null,
      E ? (0, i.jsx)(l.MenuItem, {
        id: 'remove-from-hub',
        label: u.Z.Messages.HUB_ENTRY_REMOVE,
        action: function() {
          (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
            header: u.Z.Messages.HUB_ENTRY_REMOVE,
            confirmText: u.Z.Messages.REMOVE,
            cancelText: u.Z.Messages.CANCEL,
            onConfirm: g,
            ...e,
            children: (0, i.jsx)(l.Text, {
              variant: 'text-md/normal',
              children: u.Z.Messages.HUB_ENTRY_REMOVE_BODY.format({
                guildName: t.name
              })
            })
          })), I();
        },
        color: 'danger'
      }) : null,
      _ ? null : (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(l.MenuItem, {
          id: 'report-server-listing',
          label: u.Z.Messages.REPORT_SERVER_NO_NAME,
          action: function() {
            null != t && ((0, o.sq)(t), I());
          },
          icon: l.FlagIcon,
          color: 'danger'
        })
      })
    ]
  }),
  (0, i.jsx)(l.MenuGroup, {
    children: C
  })
]
  });
}
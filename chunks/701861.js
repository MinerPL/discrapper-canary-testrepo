n(47120);
var i = n(735250),
  s = n(470079),
  a = n(392711),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(493683),
  d = n(239091),
  u = n(194359),
  _ = n(703656),
  h = n(592125),
  E = n(131951),
  I = n(51144),
  m = n(321488),
  g = n(417183),
  p = n(825682),
  T = n(170245),
  S = n(981631),
  C = n(65154),
  f = n(689938),
  N = n(920175);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function Z(e) {
  let {
user: t,
onSelect: n
  } = e, s = () => {
u.Z.removeFriend(t.id, {
  location: 'Friends'
});
  }, a = (0, l.e7)([E.Z], () => E.Z.supports(C.AN.VIDEO));
  return (0, i.jsxs)(o.Menu, {
navId: 'friend-row',
'aria-label': f.Z.Messages.USER_ACTIONS_MENU_LABEL,
onClose: d.Zy,
onSelect: n,
children: [
  a ? (0, i.jsx)(o.MenuItem, {
    id: 'start-video-call',
    label: f.Z.Messages.START_VIDEO_CALL,
    action: function() {
      c.Z.openPrivateChannel(t.id, !0, !0);
    }
  }) : null,
  (0, i.jsx)(o.MenuItem, {
    id: 'start-voice-call',
    label: f.Z.Messages.START_VOICE_CALL,
    action: () => {
      c.Z.openPrivateChannel(t.id, !0);
    }
  }),
  (0, i.jsx)(o.MenuItem, {
    id: 'remove-friend',
    label: f.Z.Messages.REMOVE_FRIEND,
    action: () => {
      (0, o.openModal)(e => (0, i.jsx)(o.ConfirmModal, {
        header: f.Z.Messages.REMOVE_FRIEND_TITLE.format({
          name: I.ZP.getName(t)
        }),
        confirmText: f.Z.Messages.REMOVE_FRIEND,
        cancelText: f.Z.Messages.CANCEL,
        onConfirm: s,
        ...e,
        children: (0, i.jsx)(o.Text, {
          variant: 'text-md/normal',
          children: f.Z.Messages.REMOVE_FRIEND_BODY.format({
            name: I.ZP.getName(t)
          })
        })
      }));
    },
    color: 'danger'
  })
]
  });
}
class L extends s.PureComponent {
  componentWillLeave(e) {
null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
  }
  componentWillEnter(e) {
null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
  }
  render() {
let {
  user: e,
  isFocused: t,
  activities: n,
  applicationStream: s,
  status: a,
  isMobile: r
} = this.props, {
  isActiveRow: l
} = this.state;
return (0, i.jsx)(g.Z, {
  ref: this.peopleListItemRef,
  isFocused: t,
  isActive: l,
  user: e,
  onOtherHover: () => l ? null : (0, d.Zy)(),
  onClick: this.handleOpenPrivateChannel,
  children: t => (0, i.jsxs)('div', {
    className: N.listItemContents,
    children: [
      (0, i.jsx)(T.Z, {
        user: e,
        status: a,
        isMobile: r,
        subText: (0, i.jsx)(p.Z, {
          hovered: t,
          activities: n,
          applicationStream: s,
          status: a,
          user: e
        }),
        hovered: t,
        showAccountIdentifier: !0
      }),
      (0, i.jsxs)('div', {
        className: N.actions,
        children: [
          (0, i.jsx)(m.Z, {
            icon: o.ChatIcon,
            tooltip: f.Z.Messages.SEND_DM,
            onClick: this.handleOpenPrivateChannel,
            shouldHighlight: t
          }),
          (0, i.jsx)(m.Z, {
            icon: o.MoreVerticalIcon,
            tooltip: f.Z.Messages.MORE,
            onClick: this.handleOpenActionsMenu,
            shouldHighlight: t
          })
        ]
      })
    ]
  })
});
  }
  constructor(...e) {
super(...e), A(this, 'peopleListItemRef', s.createRef()), A(this, 'state', {
  isActiveRow: !1
}), A(this, 'handleOpenPrivateChannel', e => {
  let {
    user: t
  } = this.props;
  e.stopPropagation();
  let n = r().find(h.Z.getMutablePrivateChannels(), e => e.type === S.d4z.DM && e.getRecipientId() === t.id);
  null != n ? (0, _.uL)(S.Z5c.CHANNEL(S.ME, n.id)) : c.Z.openPrivateChannel(t.id);
}), A(this, 'handleOpenActionsMenu', e => {
  let {
    user: t
  } = this.props;
  (0, d.vq)(e, e => (0, i.jsx)(Z, {
    ...e,
    user: t
  }), {
    onClose: () => {
      this.setState({
        isActiveRow: !1
      });
    }
  }), this.setState({
    isActiveRow: !0
  });
});
  }
}
t.Z = L;
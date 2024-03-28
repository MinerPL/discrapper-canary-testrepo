"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("493683"),
  d = n("239091"),
  c = n("194359"),
  f = n("703656"),
  E = n("592125"),
  h = n("131951"),
  _ = n("974029"),
  C = n("621113"),
  m = n("51144"),
  S = n("321488"),
  I = n("417183"),
  p = n("825682"),
  T = n("170245"),
  g = n("981631"),
  A = n("65154"),
  N = n("689938"),
  v = n("432182");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
  let {
    user: t,
    onSelect: n
  } = e, s = () => {
    c.default.removeFriend(t.id, {
      location: "Friends"
    })
  }, l = (0, r.useStateFromStores)([h.default], () => h.default.supports(A.Features.VIDEO));
  return (0, a.jsxs)(o.Menu, {
    navId: "friend-row",
    "aria-label": N.default.Messages.USER_ACTIONS_MENU_LABEL,
    onClose: d.closeContextMenu,
    onSelect: n,
    children: [l ? (0, a.jsx)(o.MenuItem, {
      id: "start-video-call",
      label: N.default.Messages.START_VIDEO_CALL,
      action: function() {
        u.default.openPrivateChannel(t.id, !0, !0)
      }
    }) : null, (0, a.jsx)(o.MenuItem, {
      id: "start-voice-call",
      label: N.default.Messages.START_VOICE_CALL,
      action: () => {
        u.default.openPrivateChannel(t.id, !0)
      }
    }), (0, a.jsx)(o.MenuItem, {
      id: "remove-friend",
      label: N.default.Messages.REMOVE_FRIEND,
      action: () => {
        (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
          header: N.default.Messages.REMOVE_FRIEND_TITLE.format({
            name: m.default.getName(t)
          }),
          confirmText: N.default.Messages.REMOVE_FRIEND,
          cancelText: N.default.Messages.CANCEL,
          onConfirm: s,
          ...e,
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/normal",
            children: N.default.Messages.REMOVE_FRIEND_BODY.format({
              name: m.default.getName(t)
            })
          })
        }))
      },
      color: "danger"
    })]
  })
}
class L extends s.PureComponent {
  componentWillLeave(e) {
    null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e)
  }
  componentWillEnter(e) {
    null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e)
  }
  render() {
    let {
      user: e,
      isFocused: t,
      activities: n,
      applicationStream: s,
      status: l,
      isMobile: i
    } = this.props, {
      isActiveRow: r
    } = this.state;
    return (0, a.jsx)(I.default, {
      ref: this.peopleListItemRef,
      isFocused: t,
      isActive: r,
      user: e,
      onOtherHover: () => r ? null : (0, d.closeContextMenu)(),
      onClick: this.handleOpenPrivateChannel,
      children: t => (0, a.jsxs)("div", {
        className: v.listItemContents,
        children: [(0, a.jsx)(T.default, {
          user: e,
          status: l,
          isMobile: i,
          subText: (0, a.jsx)(p.default, {
            hovered: t,
            activities: n,
            applicationStream: s,
            status: l,
            user: e
          }),
          hovered: t,
          showAccountIdentifier: !0
        }), (0, a.jsxs)("div", {
          className: v.actions,
          children: [(0, a.jsx)(S.default, {
            icon: _.default,
            tooltip: N.default.Messages.SEND_DM,
            onClick: this.handleOpenPrivateChannel,
            shouldHighlight: t
          }), (0, a.jsx)(S.default, {
            icon: C.default,
            tooltip: N.default.Messages.MORE,
            onClick: this.handleOpenActionsMenu,
            shouldHighlight: t
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), O(this, "peopleListItemRef", s.createRef()), O(this, "state", {
      isActiveRow: !1
    }), O(this, "handleOpenPrivateChannel", e => {
      let {
        user: t
      } = this.props;
      e.stopPropagation();
      let n = i().find(E.default.getMutablePrivateChannels(), e => e.type === g.ChannelTypes.DM && e.getRecipientId() === t.id);
      null != n ? (0, f.transitionTo)(g.Routes.CHANNEL(g.ME, n.id)) : u.default.openPrivateChannel(t.id)
    }), O(this, "handleOpenActionsMenu", e => {
      let {
        user: t
      } = this.props;
      (0, d.openContextMenu)(e, e => (0, a.jsx)(R, {
        ...e,
        user: t
      }), {
        onClose: () => {
          this.setState({
            isActiveRow: !1
          })
        }
      }), this.setState({
        isActiveRow: !0
      })
    })
  }
}
t.default = L
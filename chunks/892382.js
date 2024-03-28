"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  r = s("803997"),
  i = s.n(r),
  l = s("392711"),
  d = s.n(l),
  o = s("442837"),
  u = s("544891"),
  c = s("481060"),
  h = s("447543"),
  f = s("225433"),
  m = s("129861"),
  p = s("700582"),
  I = s("367907"),
  x = s("210887"),
  T = s("758449"),
  E = s("598077"),
  N = s("592125"),
  g = s("246946"),
  v = s("373791"),
  C = s("186095"),
  j = s("285952"),
  S = s("626135"),
  b = s("981631"),
  M = s("689938"),
  k = s("887009"),
  _ = s("850169"),
  A = s("794711");

function y(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class R extends n.PureComponent {
  render() {
    let {
      invite: e,
      hideDiscriminator: t,
      hideInviteCode: s
    } = this.props, n = new E.default(e.inviter);
    return (0, a.jsxs)(j.default, {
      className: i()(k.row, _.card),
      children: [(0, a.jsxs)(j.default, {
        align: j.default.Align.CENTER,
        className: k.userColumn,
        children: [(0, a.jsx)(p.default, {
          user: n,
          size: c.AvatarSizes.SIZE_24,
          className: k.avatar
        }), (0, a.jsx)(m.default, {
          user: n,
          hideDiscriminator: t,
          usernameClass: k.username,
          discriminatorClass: k.discrimClass
        })]
      }), (0, a.jsx)(j.default, {
        align: j.default.Align.CENTER,
        grow: 0,
        shrink: 0,
        basis: 100,
        className: k.boostZIndex,
        children: (0, a.jsx)(c.Text, {
          className: k.code,
          variant: "text-sm/normal",
          children: s ? "..." : e.code
        })
      }), (0, a.jsxs)(j.default, {
        basis: 100,
        grow: 0,
        shrink: 0,
        align: j.default.Align.CENTER,
        justify: j.default.Justify.END,
        className: k.boostZIndex,
        children: [(0, a.jsx)(c.Text, {
          className: k.countdown,
          variant: "text-sm/normal",
          children: (0, a.jsx)(v.default, {
            deadline: e.getExpiresAt(),
            showDays: !1
          })
        }), (0, a.jsx)(f.default, {
          className: k.revokeInvite,
          onClick: this.handleRevokeInvite
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "handleRevokeInvite", () => {
      let {
        onRevoke: e,
        invite: t
      } = this.props;
      null != e && e(t)
    })
  }
}
class w extends n.PureComponent {
  componentDidMount() {
    let {
      channelId: e
    } = this.props;
    u.HTTP.get({
      url: b.Endpoints.INSTANT_INVITES(e),
      retries: 3,
      oldFormErrors: !0
    }).then(e => {
      let t = e.body.map(e => new T.default({
        ...e,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: e.created_at
      }));
      this.setState({
        loading: !1,
        invites: t
      })
    }), S.default.track(b.AnalyticEvents.OPEN_MODAL, {
      ...(0, I.collectChannelAnalyticsMetadata)(N.default.getChannel(e)),
      type: "Group DM Invites",
      source: "Group DM Menu"
    })
  }
  renderContent() {
    let {
      loading: e,
      invites: t
    } = this.state;
    return e || null == t ? (0, a.jsx)(c.Spinner, {
      className: A.marginTop20,
      type: c.Spinner.Type.SPINNING_CIRCLE
    }) : d().isEmpty(t) ? this.renderEmpty() : (0, a.jsxs)("div", {
      className: k.container,
      children: [this.renderHeader(), this.renderInvites()]
    })
  }
  renderEmpty() {
    return (0, a.jsxs)(C.default, {
      theme: this.props.theme,
      children: [(0, a.jsx)(C.EmptyStateImage, {
        darkSrc: s("914814"),
        lightSrc: s("370392"),
        width: 256,
        height: 130,
        style: {
          marginBottom: 0
        }
      }), (0, a.jsx)(C.EmptyStateText, {
        className: A.marginTop20,
        children: M.default.Messages.NO_INVITES_CAPTION
      })]
    })
  }
  renderHeader() {
    return (0, a.jsxs)(j.default, {
      children: [(0, a.jsx)(j.default.Child, {
        wrap: !0,
        children: (0, a.jsx)(c.FormTitle, {
          children: M.default.Messages.INSTANT_INVITE_INVITER
        })
      }), (0, a.jsx)(j.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        basis: 100,
        children: (0, a.jsx)(c.FormTitle, {
          children: M.default.Messages.INSTANT_INVITE_INVITE_CODE
        })
      }), (0, a.jsx)(j.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        basis: 100,
        children: (0, a.jsx)(c.FormTitle, {
          className: k.alignRight,
          children: M.default.Messages.INSTANT_INVITE_EXPIRES
        })
      })]
    })
  }
  renderInvites() {
    let {
      hideDiscriminators: e,
      hideInviteCodes: t
    } = this.props;
    return d()(this.state.invites).sortBy(e => {
      var t;
      return (null !== (t = e.inviter.username) && void 0 !== t ? t : "").toLocaleLowerCase()
    }).map(s => (0, a.jsx)(R, {
      invite: s,
      hideDiscriminator: e,
      hideInviteCode: t,
      onRevoke: this.handleRevoke
    }, s.code)).value()
  }
  render() {
    return (0, a.jsxs)(c.ModalRoot, {
      transitionState: this.props.transitionState,
      "aria-label": M.default.Messages.INVITES,
      size: c.ModalSize.MEDIUM,
      children: [(0, a.jsxs)(c.ModalHeader, {
        direction: j.default.Direction.VERTICAL,
        align: j.default.Align.START,
        separator: !1,
        children: [(0, a.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H1,
          children: M.default.Messages.INVITES
        }), (0, a.jsx)(c.FormText, {
          type: c.FormTextTypes.DESCRIPTION,
          children: M.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
        })]
      }), (0, a.jsx)(c.ModalContent, {
        children: this.renderContent()
      }), (0, a.jsx)(c.ModalFooter, {
        children: (0, a.jsx)(c.Button, {
          onClick: this.handleClose,
          children: M.default.Messages.DONE
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      loading: !0,
      invites: null
    }), y(this, "handleRevoke", e => {
      h.default.revokeInvite(e), this.setState({
        invites: this.state.invites.filter(t => t !== e)
      })
    }), y(this, "handleClose", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    })
  }
}
t.default = o.default.connectStores([g.default, x.default], () => ({
  hideDiscriminators: g.default.hidePersonalInformation,
  hideInviteCodes: g.default.hideInstantInvites,
  theme: x.default.theme
}))(w)
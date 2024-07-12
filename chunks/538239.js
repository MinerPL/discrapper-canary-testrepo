n.r(t), n.d(t, {
  activityInviteKey: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(512722),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(904245),
  d = n(654030),
  u = n(744061),
  h = n(367907),
  p = n(728345),
  m = n(812206),
  _ = n(541716),
  f = n(752305),
  E = n(893718),
  C = n(957730),
  g = n(789407),
  I = n(300429),
  x = n(838440),
  T = n(981631),
  v = n(689938),
  N = n(811082);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let Z = 'ActivityInvite';
class A extends a.PureComponent {
  componentDidMount() {
this.fetchApplication();
  }
  componentDidUpdate(e) {
let {
  activity: t
} = this.props;
t.application_id !== e.activity.application_id && this.fetchApplication();
  }
  fetchApplication() {
let {
  activity: e,
  application: t
} = this.props;
null != e.application_id && null == t && p.Z.fetchApplication(e.application_id);
  }
  renderTitle() {
let {
  activity: e
} = this.props;
switch (e.type) {
  case T.IIU.LISTENING:
    return v.Z.Messages.INVITE_EMBED_LISTENING_INVITE;
  case T.IIU.PLAYING:
  case T.IIU.STREAMING:
  default:
    return v.Z.Messages.INVITE_EMBED_GAME_INVITE;
}
  }
  render() {
let {
  textValue: e,
  richValue: t,
  textFocused: n,
  contentWarningProps: a
} = this.state, {
  activity: l,
  analyticsLocations: r,
  channel: c,
  activityActionType: h,
  cooldown: p,
  application: m,
  transitionState: f,
  onClose: C
} = this.props, g = p > 0, I = g ? v.Z.Messages.CHANNEL_SLOWMODE_COOLDOWN.format({
  seconds: Math.round((p + 1000) / 1000)
}) : null;
return (0, i.jsxs)(o.ModalRoot, {
  size: o.ModalSize.SMALL,
  transitionState: f,
  'aria-label': this.renderTitle(),
  children: [
    (0, i.jsx)(o.ModalHeader, {
      separator: !1,
      children: (0, i.jsx)(o.Heading, {
        variant: 'heading-lg/semibold',
        children: this.renderTitle()
      })
    }),
    (0, i.jsxs)(o.ModalContent, {
      children: [
        (0, i.jsx)('div', {
          className: N.subHeader,
          children: v.Z.Messages.MESSAGE_PREVIEW
        }),
        (0, i.jsx)(d.Z, {
          activityActionType: h,
          activity: l,
          className: N.preview,
          application: m,
          partyId: null != l.party ? l.party.id : null,
          isPreview: !0,
          analyticsLocations: r
        }),
        (0, i.jsx)('div', {
          className: N.subHeader,
          children: v.Z.Messages.ADD_A_COMMENT_OPTIONAL
        }),
        (0, i.jsx)(o.Popout, {
          position: 'top',
          onRequestClose: () => {
            var e;
            null == a || null === (e = a.onCancel) || void 0 === e || e.call(a), this.setState({
              contentWarningProps: null
            });
          },
          shouldShow: null != a,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return s()(null != a, 'ActivityInvite.render - renderPopout: contentWarningProps cannot be null'), (0, i.jsx)(u.Z, {
              onClose: t,
              ...a
            });
          },
          children: () => (0, i.jsx)(E.Z, {
            className: N.textArea,
            textValue: e,
            richValue: t,
            focused: n,
            channel: c,
            onChange: this.handleTextChange,
            onSubmit: this.handleShare,
            type: _.I.FORM,
            parentModalKey: Z,
            disableThemedBackground: !0
          })
        })
      ]
    }),
    (0, i.jsxs)(o.ModalFooter, {
      children: [
        (0, i.jsx)(o.Tooltip, {
          text: I,
          children: e => (0, i.jsx)('div', {
            ...e,
            children: (0, i.jsx)(o.Button, {
              disabled: g,
              onClick: this.handleShare,
              children: v.Z.Messages.INVITE_EMBED_SEND_INVITE
            })
          })
        }),
        (0, i.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: C,
          children: v.Z.Messages.CANCEL
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), S(this, 'state', {
  ...(0, f.H2)(),
  textFocused: !0,
  contentWarningProps: null
}), S(this, 'trackInvite', e => {
  if (null != e && e.ok) {
    let {
      activity: t,
      channel: n,
      activityActionType: i
    } = this.props, a = '';
    switch (i) {
      case T.mFx.JOIN:
        a = 'Invite to Join';
        break;
      case T.mFx.LISTEN:
        a = 'Invite to Listen';
        break;
      case T.mFx.WATCH:
        a = 'Invite to Watch';
    }
    return h.ZP.trackWithMetadata(T.rMx.INVITE_SENT, {
      location: 'Channel Text Area - '.concat(a),
      invite_type: t.type === T.IIU.LISTENING ? T.dAT.SPOTIFY : T.dAT.APPLICATION,
      application_id: t.application_id,
      guild_id: n.getGuildId(),
      channel_id: n.id,
      message_id: null != e ? e.body.id : null
    }), Promise.resolve();
  }
}), S(this, 'handleTextChange', (e, t, n) => {
  this.setState({
    textValue: t,
    richValue: n
  });
}), S(this, 'handleShare', () => {
  let {
    channel: e,
    activity: t,
    activityActionType: n,
    cooldown: i,
    onClose: a
  } = this.props, {
    textValue: l,
    contentWarningProps: s
  } = this.state;
  if (i > 0)
    return Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    });
  let r = C.ZP.parse(e, l),
    o = {
      activity: t,
      type: n
    };
  return null != s ? (this.setState({
    contentWarningProps: null
  }), c.Z.sendMessage(e.id, r, !0, {
    activityAction: o
  }).then(e => this.trackInvite(e)), a(), Promise.resolve({
    shouldClear: !0,
    shouldRefocus: !0
  })) : (0, x.v)({
    openWarningPopout: e => this.setState({
      contentWarningProps: e
    }),
    type: _.I.FORM,
    content: l,
    channel: e
  }).then(t => {
    let {
      valid: n
    } = t;
    return n ? (c.Z.sendMessage(e.id, r, !0, {
      activityAction: o
    }).then(e => this.trackInvite(e)), a(), {
      shouldClear: !1,
      shouldRefocus: !1
    }) : {
      shouldClear: !1,
      shouldRefocus: !1
    };
  });
});
  }
}
t.default = r.ZP.connectStores([
  I.Z,
  m.Z
], e => {
  let {
channel: t,
activity: n
  } = e;
  return {
cooldown: I.Z.getSlowmodeCooldownGuess(t.id),
application: null != n.application_id ? m.Z.getApplication(n.application_id) : g.r9
  };
})(A);
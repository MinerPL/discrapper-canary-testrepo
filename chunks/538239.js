"use strict";
n.r(t), n.d(t, {
  activityInviteKey: function() {
    return x
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("904245"),
  d = n("851021"),
  c = n("744061"),
  f = n("367907"),
  h = n("728345"),
  m = n("812206"),
  p = n("541716"),
  E = n("752305"),
  C = n("893718"),
  g = n("957730"),
  S = n("789407"),
  _ = n("300429"),
  T = n("838440"),
  I = n("981631"),
  A = n("689938"),
  N = n("38208");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let x = "ActivityInvite";
class M extends l.PureComponent {
  componentDidMount() {
    this.fetchApplication()
  }
  componentDidUpdate(e) {
    let {
      activity: t
    } = this.props;
    t.application_id !== e.activity.application_id && this.fetchApplication()
  }
  fetchApplication() {
    let {
      activity: e,
      application: t
    } = this.props;
    null != e.application_id && null == t && h.default.fetchApplication(e.application_id)
  }
  renderTitle() {
    let {
      activity: e
    } = this.props;
    switch (e.type) {
      case I.ActivityTypes.LISTENING:
        return A.default.Messages.INVITE_EMBED_LISTENING_INVITE;
      case I.ActivityTypes.PLAYING:
      case I.ActivityTypes.STREAMING:
      default:
        return A.default.Messages.INVITE_EMBED_GAME_INVITE
    }
  }
  render() {
    let {
      textValue: e,
      richValue: t,
      textFocused: n,
      contentWarningProps: l
    } = this.state, {
      activity: s,
      analyticsLocations: r,
      channel: u,
      activityActionType: f,
      cooldown: h,
      application: m,
      transitionState: E,
      onClose: g
    } = this.props, S = h > 0, _ = S ? A.default.Messages.CHANNEL_SLOWMODE_COOLDOWN.format({
      seconds: Math.round((h + 1e3) / 1e3)
    }) : null;
    return (0, a.jsxs)(o.ModalRoot, {
      size: o.ModalSize.SMALL,
      transitionState: E,
      "aria-label": this.renderTitle(),
      children: [(0, a.jsx)(o.ModalHeader, {
        separator: !1,
        children: (0, a.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: this.renderTitle()
        })
      }), (0, a.jsxs)(o.ModalContent, {
        children: [(0, a.jsx)("div", {
          className: N.subHeader,
          children: A.default.Messages.MESSAGE_PREVIEW
        }), (0, a.jsx)(d.default, {
          activityActionType: f,
          activity: s,
          className: N.preview,
          application: m,
          partyId: null != s.party ? s.party.id : null,
          isPreview: !0,
          analyticsLocations: r
        }), (0, a.jsx)("div", {
          className: N.subHeader,
          children: A.default.Messages.ADD_A_COMMENT_OPTIONAL
        }), (0, a.jsx)(o.Popout, {
          position: "top",
          onRequestClose: () => {
            var e;
            null == l || null === (e = l.onCancel) || void 0 === e || e.call(l), this.setState({
              contentWarningProps: null
            })
          },
          shouldShow: null != l,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return i()(null != l, "ActivityInvite.render - renderPopout: contentWarningProps cannot be null"), (0, a.jsx)(c.default, {
              onClose: t,
              ...l
            })
          },
          children: () => (0, a.jsx)(C.default, {
            className: N.textArea,
            textValue: e,
            richValue: t,
            focused: n,
            channel: u,
            onChange: this.handleTextChange,
            onSubmit: this.handleShare,
            type: p.ChatInputTypes.FORM,
            parentModalKey: x,
            disableThemedBackground: !0
          })
        })]
      }), (0, a.jsxs)(o.ModalFooter, {
        children: [(0, a.jsx)(o.Tooltip, {
          text: _,
          children: e => (0, a.jsx)("div", {
            ...e,
            children: (0, a.jsx)(o.Button, {
              disabled: S,
              onClick: this.handleShare,
              children: A.default.Messages.INVITE_EMBED_SEND_INVITE
            })
          })
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: g,
          children: A.default.Messages.CANCEL
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      ...(0, E.createEmptyState)(),
      textFocused: !0,
      contentWarningProps: null
    }), v(this, "trackInvite", e => {
      if (null != e && e.ok) {
        let {
          activity: t,
          channel: n,
          activityActionType: a
        } = this.props, l = "";
        switch (a) {
          case I.ActivityActionTypes.JOIN:
            l = "Invite to Join";
            break;
          case I.ActivityActionTypes.LISTEN:
            l = "Invite to Listen";
            break;
          case I.ActivityActionTypes.WATCH:
            l = "Invite to Watch"
        }
        return f.default.trackWithMetadata(I.AnalyticEvents.INVITE_SENT, {
          location: "Channel Text Area - ".concat(l),
          invite_type: t.type === I.ActivityTypes.LISTENING ? I.LoggingInviteTypes.SPOTIFY : I.LoggingInviteTypes.APPLICATION,
          application_id: t.application_id,
          guild_id: n.getGuildId(),
          channel_id: n.id,
          message_id: null != e ? e.body.id : null
        }), Promise.resolve()
      }
    }), v(this, "handleTextChange", (e, t, n) => {
      this.setState({
        textValue: t,
        richValue: n
      })
    }), v(this, "handleShare", () => {
      let {
        channel: e,
        activity: t,
        activityActionType: n,
        cooldown: a,
        onClose: l
      } = this.props, {
        textValue: s,
        contentWarningProps: i
      } = this.state;
      if (a > 0) return Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      });
      let r = g.default.parse(e, s),
        o = {
          activity: t,
          type: n
        };
      return null != i ? (this.setState({
        contentWarningProps: null
      }), u.default.sendMessage(e.id, r, !0, {
        activityAction: o
      }).then(e => this.trackInvite(e)), l(), Promise.resolve({
        shouldClear: !0,
        shouldRefocus: !0
      })) : (0, T.applyChatRestrictions)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: p.ChatInputTypes.FORM,
        content: s,
        channel: e
      }).then(t => {
        let {
          valid: n
        } = t;
        return n ? (u.default.sendMessage(e.id, r, !0, {
          activityAction: o
        }).then(e => this.trackInvite(e)), l(), {
          shouldClear: !1,
          shouldRefocus: !1
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        }
      })
    })
  }
}
t.default = r.default.connectStores([_.default, m.default], e => {
  let {
    channel: t,
    activity: n
  } = e;
  return {
    cooldown: _.default.getSlowmodeCooldownGuess(t.id),
    application: null != n.application_id ? m.default.getApplication(n.application_id) : S.SpotifyApplication
  }
})(M)
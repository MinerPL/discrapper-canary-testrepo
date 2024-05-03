"use strict";
l.r(t), l("47120"), l("724458");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  r = l.n(s),
  i = l("442837"),
  d = l("481060"),
  o = l("570140"),
  u = l("528963"),
  h = l("933557"),
  c = l("471445"),
  g = l("592125"),
  m = l("984933"),
  f = l("430824"),
  p = l("496675"),
  O = l("699516"),
  L = l("944486"),
  M = l("594174"),
  x = l("346656"),
  C = l("153124"),
  _ = l("316949"),
  b = l("626135"),
  N = l("709054"),
  F = l("981631"),
  j = l("689938"),
  I = l("533159");

function A(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
class S extends a.PureComponent {
  componentDidMount() {
    b.default.track(F.AnalyticEvents.OPEN_MODAL, {
      type: "Follow Channel Modal",
      num_guild_permissions: Object.keys(this.props.guilds).length,
      location: "Chat Input Blocker - Follow Channel"
    })
  }
  getDefaultChannelId(e) {
    let t = e.find(e => {
        let {
          channel: t
        } = e;
        return "general" === (0, h.computeChannelName)(t, M.default, O.default)
      }),
      l = null != t ? t : e[0];
    return null != l ? l.channel.id : null
  }
  renderFooter() {
    let {
      selectedGuildId: e,
      selectedChannelId: t,
      submitting: l
    } = this.state, {
      onClose: s
    } = this.props;
    return (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(d.Button, {
        submitting: l,
        onClick: this.handleFollow,
        disabled: null == e || null == t,
        children: j.default.Messages.FOLLOW
      }), (0, n.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.PRIMARY,
        onClick: s,
        children: j.default.Messages.CANCEL
      })]
    })
  }
  renderForm() {
    let {
      guilds: e
    } = this.props, {
      channels: t,
      selectedGuildId: l,
      selectedChannelId: s,
      errorMessage: r
    } = this.state, i = N.default.keys(e).map(t => {
      let {
        guild: l
      } = e[t];
      return {
        value: t,
        label: l.toString(),
        guild: l
      }
    }), o = t.map(e => {
      let {
        channel: t,
        category: l
      } = e;
      return {
        value: t.id,
        label: (0, h.computeChannelName)(t, M.default, O.default),
        channel: t,
        category: l
      }
    }), u = 0 === i.length, g = u ? j.default.Messages.FOLLOW_MODAL_HINT_NO_PERMS : j.default.Messages.FOLLOW_MODAL_HINT;
    return (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(d.FormItem, {
        className: I.bottomMargin,
        title: j.default.Messages.FORM_LABEL_SEND_TO,
        children: (0, n.jsx)(d.SearchableSelect, {
          value: l,
          options: i,
          isDisabled: u,
          onChange: this.handleGuildSelect,
          renderOptionPrefix: e => (function(e) {
            if (null == e) return null;
            let {
              guild: t
            } = e;
            return (0, n.jsx)(x.default, {
              guild: t,
              size: x.default.Sizes.MINI
            })
          })(e)
        })
      }), (0, n.jsx)(d.FormItem, {
        className: I.bottomMargin,
        title: j.default.Messages.FORM_LABEL_SELECT_CHANNEL,
        children: (0, n.jsx)(d.SearchableSelect, {
          value: s,
          options: o,
          isDisabled: 0 === o.length,
          onChange: this.handleChannelSelect,
          renderOptionPrefix: e => (function(e) {
            if (null == e) return null;
            let {
              channel: t
            } = e, l = (0, c.getChannelIconComponent)(t);
            return null != l && (0, n.jsx)(l, {
              width: 16,
              height: 16,
              className: I.icon
            })
          })(e)
        })
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: u || null != r ? "text-danger" : "text-muted",
        className: I.bottomMargin,
        children: null != r ? r : g
      })]
    })
  }
  renderBody() {
    let {
      channel: {
        nsfw: e
      }
    } = this.props;
    return (0, n.jsxs)("div", {
      className: I.body,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        id: this.state.headerId,
        children: j.default.Messages.FOLLOW_MODAL_TITLE
      }), (0, n.jsx)(d.Text, {
        color: "text-muted",
        className: r()(I.topMargin, {
          [I.formMargin]: !e
        }),
        variant: "text-sm/normal",
        children: j.default.Messages.FOLLOW_MODAL_BODY
      }), e ? (0, n.jsx)(d.Text, {
        className: r()(I.formMargin, I.topMargin),
        color: "text-danger",
        variant: "text-sm/normal",
        children: j.default.Messages.FOLLOW_MODAL_WARNING
      }) : null]
    })
  }
  renderHeader() {
    var e;
    let {
      guildToFollow: t,
      channelNameToFollow: l,
      channel: a
    } = this.props, s = null !== (e = (0, c.getChannelIconComponent)(a)) && void 0 !== e ? e : _.default;
    return (0, n.jsxs)(d.ModalHeader, {
      className: I.header,
      children: [(0, n.jsx)(x.default, {
        guild: t,
        size: x.default.Sizes.LARGE
      }), (0, n.jsx)("div", {
        className: I.channelContainer,
        children: (0, n.jsxs)("div", {
          className: I.channel,
          children: [(0, n.jsx)(s, {
            width: 20,
            height: 20,
            className: I.channelIcon
          }), (0, n.jsx)(d.Text, {
            variant: "text-md/medium",
            className: I.channelName,
            children: l
          })]
        })
      })]
    })
  }
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, n.jsxs)(d.ModalRoot, {
      transitionState: e,
      "aria-labelledby": this.state.headerId,
      children: [this.renderHeader(), (0, n.jsxs)(d.ModalContent, {
        className: I.content,
        children: [this.renderBody(), this.renderForm()]
      }), (0, n.jsx)(d.ModalFooter, {
        children: this.renderFooter()
      })]
    })
  }
  constructor(e) {
    super(e), A(this, "handleGuildSelect", e => {
      let {
        guilds: t
      } = this.props, {
        selectedGuildId: l
      } = this.state, n = t[e].channels, a = this.getDefaultChannelId(n);
      l !== e && this.setState({
        selectedGuildId: e,
        selectedChannelId: a,
        channels: n
      })
    }), A(this, "handleChannelSelect", e => {
      this.setState({
        selectedChannelId: e
      })
    }), A(this, "handleFollow", () => {
      let {
        channel: e,
        onClose: t
      } = this.props, {
        selectedChannelId: a,
        selectedGuildId: s
      } = this.state;
      null != a && (this.setState({
        submitting: !0
      }), u.default.createChannelFollower(a, e.id).then(() => {
        o.default.dispatch({
          type: "CHANNEL_FOLLOWER_CREATED",
          channelId: a,
          guildId: s
        }), t(), (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([l.e("99387"), l.e("14760")]).then(l.bind(l, "897140"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      }).catch(e => {
        e.body.code === F.AbortCodes.TOO_MANY_WEBHOOKS ? this.setState({
          errorMessage: j.default.Messages.FOLLOW_MODAL_TOO_MANY_WEBHOOKS,
          submitting: !1
        }) : this.setState({
          errorMessage: j.default.Messages.FOLLOW_MODAL_FAIL,
          submitting: !1
        })
      }))
    });
    let {
      guilds: t,
      lastChannelFollowingDestination: a
    } = e, {
      guildId: s,
      channelId: r
    } = a;
    this.state = {
      selectedGuildId: s,
      selectedChannelId: r,
      channels: null != s && null != t[s] ? t[s].channels : [],
      errorMessage: null,
      submitting: !1,
      headerId: (0, C.uid)("modal")
    }
  }
}
t.default = i.default.connectStores([f.default, g.default, m.default, p.default, L.default], e => {
  let {
    channel: t
  } = e, l = f.default.getGuild(t.guild_id), n = Object.values(f.default.getGuilds()).reduce((e, t) => {
    let l = m.default.getChannels(t.id).SELECTABLE.map(e => e.channel).filter(e => e.type === F.ChannelTypes.GUILD_TEXT && p.default.can(F.Permissions.MANAGE_WEBHOOKS, e)).map(e => {
      let t = g.default.getChannel(e.parent_id);
      return {
        channel: e,
        category: null != t ? t.name : null
      }
    });
    return l.length > 0 && (e[t.id] = {
      guild: t,
      channels: l
    }), e
  }, {}), a = L.default.getLastChannelFollowingDestination();
  return {
    guildToFollow: l,
    channelNameToFollow: t.name,
    guilds: n,
    lastChannelFollowingDestination: null != a ? a : {}
  }
}, {
  forwardRef: !0
})(S)
t.r(n), t(47120), t(724458);
var l = t(735250),
  a = t(470079),
  s = t(120356),
  r = t.n(s),
  i = t(442837),
  o = t(481060),
  d = t(570140),
  c = t(528963),
  h = t(933557),
  u = t(471445),
  g = t(592125),
  m = t(984933),
  p = t(430824),
  M = t(496675),
  _ = t(699516),
  O = t(944486),
  x = t(594174),
  L = t(346656),
  b = t(153124),
  C = t(626135),
  N = t(709054),
  F = t(981631),
  Z = t(689938),
  f = t(431697);

function j(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
class I extends a.PureComponent {
  componentDidMount() {
C.default.track(F.rMx.OPEN_MODAL, {
  type: 'Follow Channel Modal',
  num_guild_permissions: Object.keys(this.props.guilds).length,
  location: 'Chat Input Blocker - Follow Channel'
});
  }
  getDefaultChannelId(e) {
let n = e.find(e => {
    let {
      channel: n
    } = e;
    return 'general' === (0, h.F6)(n, x.default, _.Z);
  }),
  t = null != n ? n : e[0];
return null != t ? t.channel.id : null;
  }
  renderFooter() {
let {
  selectedGuildId: e,
  selectedChannelId: n,
  submitting: t
} = this.state, {
  onClose: s
} = this.props;
return (0, l.jsxs)(a.Fragment, {
  children: [
    (0, l.jsx)(o.Button, {
      submitting: t,
      onClick: this.handleFollow,
      disabled: null == e || null == n,
      children: Z.Z.Messages.FOLLOW
    }),
    (0, l.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      color: o.Button.Colors.PRIMARY,
      onClick: s,
      children: Z.Z.Messages.CANCEL
    })
  ]
});
  }
  renderForm() {
let {
  guilds: e
} = this.props, {
  channels: n,
  selectedGuildId: t,
  selectedChannelId: s,
  errorMessage: r
} = this.state, i = N.default.keys(e).map(n => {
  let {
    guild: t
  } = e[n];
  return {
    value: n,
    label: t.toString(),
    guild: t
  };
}), d = n.map(e => {
  let {
    channel: n,
    category: t
  } = e;
  return {
    value: n.id,
    label: (0, h.F6)(n, x.default, _.Z),
    channel: n,
    category: t
  };
}), c = 0 === i.length, g = c ? Z.Z.Messages.FOLLOW_MODAL_HINT_NO_PERMS : Z.Z.Messages.FOLLOW_MODAL_HINT;
return (0, l.jsxs)(a.Fragment, {
  children: [
    (0, l.jsx)(o.FormItem, {
      className: f.bottomMargin,
      title: Z.Z.Messages.FORM_LABEL_SEND_TO,
      children: (0, l.jsx)(o.SearchableSelect, {
        value: t,
        options: i,
        isDisabled: c,
        onChange: this.handleGuildSelect,
        renderOptionPrefix: e => function(e) {
          if (null == e)
            return null;
          let {
            guild: n
          } = e;
          return (0, l.jsx)(L.Z, {
            guild: n,
            size: L.Z.Sizes.MINI
          });
        }(e)
      })
    }),
    (0, l.jsx)(o.FormItem, {
      className: f.bottomMargin,
      title: Z.Z.Messages.FORM_LABEL_SELECT_CHANNEL,
      children: (0, l.jsx)(o.SearchableSelect, {
        value: s,
        options: d,
        isDisabled: 0 === d.length,
        onChange: this.handleChannelSelect,
        renderOptionPrefix: e => function(e) {
          if (null == e)
            return null;
          let {
            channel: n
          } = e, t = (0, u.KS)(n);
          return null != t && (0, l.jsx)(t, {
            size: 'xs',
            color: 'currentColor',
            className: f.icon
          });
        }(e)
      })
    }),
    (0, l.jsx)(o.Text, {
      variant: 'text-sm/normal',
      color: c || null != r ? 'text-danger' : 'text-muted',
      className: f.bottomMargin,
      children: null != r ? r : g
    })
  ]
});
  }
  renderBody() {
let {
  channel: {
    nsfw: e
  }
} = this.props;
return (0, l.jsxs)('div', {
  className: f.body,
  children: [
    (0, l.jsx)(o.Heading, {
      variant: 'heading-lg/semibold',
      id: this.state.headerId,
      children: Z.Z.Messages.FOLLOW_MODAL_TITLE
    }),
    (0, l.jsx)(o.Text, {
      color: 'text-muted',
      className: r()(f.topMargin, {
        [f.formMargin]: !e
      }),
      variant: 'text-sm/normal',
      children: Z.Z.Messages.FOLLOW_MODAL_BODY
    }),
    e ? (0, l.jsx)(o.Text, {
      className: r()(f.formMargin, f.topMargin),
      color: 'text-danger',
      variant: 'text-sm/normal',
      children: Z.Z.Messages.FOLLOW_MODAL_WARNING
    }) : null
  ]
});
  }
  renderHeader() {
var e;
let {
  guildToFollow: n,
  channelNameToFollow: t,
  channel: a
} = this.props, s = null !== (e = (0, u.KS)(a)) && void 0 !== e ? e : o.AnnouncementsIcon;
return (0, l.jsxs)(o.ModalHeader, {
  className: f.header,
  children: [
    (0, l.jsx)(L.Z, {
      guild: n,
      size: L.Z.Sizes.LARGE
    }),
    (0, l.jsx)('div', {
      className: f.channelContainer,
      children: (0, l.jsxs)('div', {
        className: f.channel,
        children: [
          (0, l.jsx)(s, {
            size: 'custom',
            color: 'currentColor',
            width: 20,
            height: 20,
            className: f.channelIcon
          }),
          (0, l.jsx)(o.Text, {
            variant: 'text-md/medium',
            className: f.channelName,
            children: t
          })
        ]
      })
    })
  ]
});
  }
  render() {
let {
  transitionState: e
} = this.props;
return (0, l.jsxs)(o.ModalRoot, {
  transitionState: e,
  'aria-labelledby': this.state.headerId,
  children: [
    this.renderHeader(),
    (0, l.jsxs)(o.ModalContent, {
      className: f.content,
      children: [
        this.renderBody(),
        this.renderForm()
      ]
    }),
    (0, l.jsx)(o.ModalFooter, {
      children: this.renderFooter()
    })
  ]
});
  }
  constructor(e) {
super(e), j(this, 'handleGuildSelect', e => {
  let {
    guilds: n
  } = this.props, {
    selectedGuildId: t
  } = this.state, l = n[e].channels, a = this.getDefaultChannelId(l);
  t !== e && this.setState({
    selectedGuildId: e,
    selectedChannelId: a,
    channels: l
  });
}), j(this, 'handleChannelSelect', e => {
  this.setState({
    selectedChannelId: e
  });
}), j(this, 'handleFollow', () => {
  let {
    channel: e,
    onClose: n
  } = this.props, {
    selectedChannelId: a,
    selectedGuildId: s
  } = this.state;
  null != a && (this.setState({
    submitting: !0
  }), c.Z.createChannelFollower(a, e.id).then(() => {
    d.Z.dispatch({
      type: 'CHANNEL_FOLLOWER_CREATED',
      channelId: a,
      guildId: s
    }), n(), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await t.e('14760').then(t.bind(t, 897140));
      return n => (0, l.jsx)(e, {
        ...n
      });
    });
  }).catch(e => {
    e.body.code === F.evJ.TOO_MANY_WEBHOOKS ? this.setState({
      errorMessage: Z.Z.Messages.FOLLOW_MODAL_TOO_MANY_WEBHOOKS,
      submitting: !1
    }) : this.setState({
      errorMessage: Z.Z.Messages.FOLLOW_MODAL_FAIL,
      submitting: !1
    });
  }));
});
let {
  guilds: n,
  lastChannelFollowingDestination: a
} = e, {
  guildId: s,
  channelId: r
} = a;
this.state = {
  selectedGuildId: s,
  selectedChannelId: r,
  channels: null != s && null != n[s] ? n[s].channels : [],
  errorMessage: null,
  submitting: !1,
  headerId: (0, b.hQ)('modal')
};
  }
}
n.default = i.ZP.connectStores([
  p.Z,
  g.Z,
  m.ZP,
  M.Z,
  O.Z
], e => {
  let {
channel: n
  } = e, t = p.Z.getGuild(n.guild_id), l = Object.values(p.Z.getGuilds()).reduce((e, n) => {
let t = m.ZP.getChannels(n.id).SELECTABLE.map(e => e.channel).filter(e => e.type === F.d4z.GUILD_TEXT && M.Z.can(F.Plq.MANAGE_WEBHOOKS, e)).map(e => {
  let n = g.Z.getChannel(e.parent_id);
  return {
    channel: e,
    category: null != n ? n.name : null
  };
});
return t.length > 0 && (e[n.id] = {
  guild: n,
  channels: t
}), e;
  }, {}), a = O.Z.getLastChannelFollowingDestination();
  return {
guildToFollow: t,
channelNameToFollow: n.name,
guilds: l,
lastChannelFollowingDestination: null != a ? a : {}
  };
}, {
  forwardRef: !0
})(I);
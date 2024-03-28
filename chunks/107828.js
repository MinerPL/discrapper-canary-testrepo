"use strict";
n.r(t), n.d(t, {
  Application: function() {
    return y
  },
  Channel: function() {
    return R
  },
  GroupDM: function() {
    return M
  },
  Guild: function() {
    return x
  },
  Header: function() {
    return D
  },
  Link: function() {
    return b
  },
  User: function() {
    return O
  }
}), n("47120");
var l, a = n("735250"),
  s = n("470079"),
  i = n("481060"),
  r = n("43267"),
  o = n("933557"),
  u = n("471445"),
  d = n("16206"),
  c = n("754688"),
  f = n("430824"),
  h = n("699516"),
  C = n("594174"),
  p = n("51144"),
  m = n("2093"),
  g = n("366695"),
  E = n("346656"),
  S = n("409216"),
  _ = n("136033"),
  I = n("757698"),
  N = n("630641"),
  T = n("689938"),
  A = n("539814");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class v extends s.PureComponent {
  componentDidMount() {
    let {
      focused: e,
      onFocus: t
    } = this.props, {
      node: n
    } = this;
    e && null != n && t(n)
  }
  componentDidUpdate(e) {
    let {
      focused: t,
      onFocus: n
    } = this.props, {
      node: l
    } = this;
    null != l && t && !e.focused && n(l)
  }
  render() {
    let {
      focused: e,
      children: t,
      score: n,
      onContextMenu: l,
      id: s,
      "aria-label": r
    } = this.props;
    return (0, a.jsxs)(i.Clickable, {
      role: "option",
      id: s,
      "aria-label": r,
      "aria-selected": e,
      focusProps: {
        enabled: !1
      },
      tabIndex: -1,
      innerRef: this.setRef,
      className: A.result,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onContextMenu: l,
      children: [t, null != n ? (0, a.jsx)("div", {
        className: A.score,
        children: n >> 0
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), L(this, "node", void 0), L(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }), L(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }), L(this, "setRef", e => {
      this.node = e
    })
  }
}
class x extends s.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: A.guildIconContainer,
      children: (0, a.jsx)(E.default, {
        tabIndex: -1,
        guild: e,
        size: E.default.Sizes.MINI,
        className: A.guildIcon
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: A.name,
      children: (0, a.jsx)("span", {
        className: A.match,
        children: e.name
      })
    })
  }
  renderContent() {
    let {
      unread: e,
      children: t
    } = this.props;
    return (0, a.jsxs)("div", {
      className: e ? A.contentUnread : A.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, a.jsx)("div", {
        className: A.misc,
        children: t
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      guild: e
    } = this.props;
    return T.default.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
      name: e.name
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, a.jsx)(v, {
      id: r,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
class R extends(l = s.Component) {
  renderIcon() {
    var e;
    let {
      channel: t
    } = this.props, n = (0, u.getChannelIconComponent)(t);
    if (null == n) return null;
    let l = null !== (e = (0, d.default)(t)) && void 0 !== e ? e : "";
    return (0, a.jsx)("div", {
      className: A.iconContainer,
      role: "img",
      "aria-label": l,
      children: (0, a.jsx)(n, {
        className: A.icon,
        width: 16,
        height: 16
      })
    })
  }
  renderName() {
    let e, t;
    let {
      mentions: n,
      category: l,
      channel: s
    } = this.props;
    return null != n && n > 0 && (e = (0, a.jsx)(m.default, {
      className: A.badge,
      value: n
    })), null != l && (t = (0, a.jsx)("span", {
      className: A.note,
      children: (0, o.computeChannelName)(l, C.default, h.default)
    })), (0, a.jsxs)("div", {
      className: A.name,
      children: [(0, a.jsx)("span", {
        className: A.match,
        children: (0, o.computeChannelName)(s, C.default, h.default)
      }), e, this.renderVoiceStates(), t]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: t
    } = this.props;
    return null == e ? null : (0, a.jsx)(S.default, {
      className: A.voiceSummaryContainer,
      guildId: t.guild_id,
      users: e.map(e => {
        let {
          user: t
        } = e;
        return {
          user: t
        }
      }),
      max: 4
    })
  }
  renderContent() {
    let {
      unread: e,
      mentions: t,
      children: n
    } = this.props;
    return (0, a.jsxs)("div", {
      "aria-hidden": !0,
      className: e || null != t && t > 0 ? A.contentUnread : A.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, a.jsx)("div", {
        className: A.misc,
        children: n
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: t
    } = this.props, n = null === (e = f.default.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, l = (0, o.computeChannelName)(t, C.default, h.default), a = (0, d.default)(t);
    return T.default.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
      name: l,
      type: a,
      guild: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, a.jsx)(v, {
      id: r,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
L(R, "defaultProps", {
  unread: !1
});
class M extends s.Component {
  renderIcon() {
    let {
      channel: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: A.dmIconContainer,
      children: (0, a.jsx)(i.Avatar, {
        src: (0, r.getChannelIconURL)(e),
        size: i.AvatarSizes.SIZE_20,
        "aria-hidden": !0
      })
    })
  }
  renderName() {
    let e;
    let {
      mentions: t,
      channel: n
    } = this.props;
    return null != t && t > 0 && (e = (0, a.jsx)(m.default, {
      className: A.badge,
      value: t
    })), (0, a.jsxs)("div", {
      className: A.name,
      children: [(0, a.jsx)("span", {
        className: A.match,
        children: (0, o.computeChannelName)(n, C.default, h.default)
      }), e]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: t
    } = this.props;
    return (0, a.jsxs)("div", {
      className: null != e && e > 0 ? A.contentUnread : A.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, a.jsx)("div", {
        className: A.misc,
        children: t
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: t
    } = this.props, n = (0, o.computeChannelName)(e, C.default, h.default);
    return null != t && t > 0 ? T.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
      name: n,
      mentions: t
    }) : T.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
      name: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, a.jsx)(v, {
      id: r,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
class O extends s.Component {
  renderIcon() {
    let {
      user: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: A.iconContainer,
      children: (0, a.jsx)(i.Avatar, {
        src: e.getAvatarURL(void 0, 20),
        "aria-hidden": !0,
        size: i.AvatarSizes.SIZE_20
      })
    })
  }
  getDisplayNickname() {
    let e;
    let {
      user: t,
      comparator: n
    } = this.props, l = h.default.getNickname(t.id);
    return ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) && (e = null != l ? l : p.default.getName(t)), e
  }
  renderName() {
    let e;
    let {
      user: t,
      mentions: n
    } = this.props, l = this.getDisplayNickname();
    return null != n && n > 0 && (e = (0, a.jsx)(m.default, {
      className: A.badge,
      value: n
    })), (0, a.jsxs)("div", {
      className: A.name,
      children: [(0, a.jsx)("span", {
        className: A.match,
        children: l
      }), e, (0, a.jsx)("span", {
        className: A.username,
        children: p.default.getUserTag(t)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: t
    } = this.props;
    return (0, a.jsxs)("div", {
      className: null != t && t > 0 ? A.contentUnread : A.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, a.jsx)("div", {
        className: A.misc,
        children: e
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: t
    } = this.props, n = this.getDisplayNickname(), l = p.default.getUserTag(t);
    return null != e && e > 0 ? T.default.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
      name: n,
      id: l,
      mentions: e
    }) : T.default.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
      name: n,
      id: l
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, a.jsx)(v, {
      id: r,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
class y extends s.Component {
  renderContent() {
    let {
      children: e,
      application: t
    } = this.props;
    return (0, a.jsxs)("div", {
      className: A.contentDefault,
      children: [(0, a.jsx)("div", {
        className: A.iconContainer,
        children: (0, a.jsx)(g.default, {
          tabIndex: -1,
          className: A.gameIcon,
          game: t,
          size: A.gameIconSize
        })
      }), t.name, (0, a.jsx)("div", {
        className: A.misc,
        children: e
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      focused: l,
      id: s
    } = this.props;
    return (0, a.jsx)(v, {
      id: s,
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      focused: l,
      children: this.renderContent()
    })
  }
}
class D extends s.Component {
  render() {
    return (0, a.jsx)("div", {
      className: A.__invalid_resultDefault,
      children: (0, a.jsx)("div", {
        className: A.contentDefault,
        children: (0, a.jsx)("div", {
          className: A.header,
          children: this.props.children
        })
      })
    })
  }
}
class b extends s.Component {
  renderContent() {
    let e, t;
    let {
      link: n,
      children: l
    } = this.props, s = (0, c.tryParseChannelPath)(n.path);
    return null == s || void 0 === s.messageId ? (e = T.default.Messages.QUICKSWITCHER_LINK_UNKNOWN, t = (0, a.jsx)(I.default, {
      width: 16,
      height: 16
    })) : (0, c.isAccessibleChannelPath)(s) ? (e = T.default.Messages.QUICKSWITCHER_LINK_MESSAGE, t = (0, a.jsx)(_.default, {
      width: 16,
      height: 16
    })) : (e = T.default.Messages.QUICKSWITCHER_LINK_NO_ACCESS, t = (0, a.jsx)(N.default, {
      width: 16,
      height: 16
    })), (0, a.jsxs)("div", {
      className: A.contentDefault,
      children: [(0, a.jsx)("div", {
        className: A.iconContainer,
        children: t
      }), e, (0, a.jsx)("div", {
        className: A.misc,
        children: l
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, a.jsx)(v, {
      id: r,
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: l,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
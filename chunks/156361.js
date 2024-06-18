"use strict";
n.d(t, {
  DJ: function() {
    return b
  },
  rp: function() {
    return G
  }
}), n(411104), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(392711),
  u = n.n(l),
  _ = n(91192),
  d = n(481060),
  c = n(607070),
  E = n(895924),
  I = n(237375),
  T = n(342687),
  h = n(933557),
  S = n(471445),
  f = n(511618),
  N = n(926491),
  A = n(378233),
  m = n(430824),
  O = n(699516),
  R = n(594174),
  C = n(768581),
  p = n(51144),
  g = n(508688),
  L = n(286908),
  v = n(377087),
  D = n(981631),
  M = n(185923),
  P = n(689938),
  y = n(157709);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  return null != e ? "autocomplete-".concat(e) : null
}

function G(e) {
  return "autocomplete-".concat(e, "-title")
}
let w = s.createContext(null);
class k extends s.PureComponent {
  isSelectable() {
    return this.selectable
  }
  renderContent() {
    throw Error("AutocompleteRow: renderContent must be extended")
  }
  renderClickable(e) {
    var t;
    let {
      layoutClass: n,
      props: {
        className: i,
        index: s,
        selected: o
      }
    } = this, l = this.isSelectable();
    return (0, r.jsx)(d.Clickable, {
      ...e,
      className: a()(y.clickable, i, n),
      id: null !== (t = b(s)) && void 0 !== t ? t : void 0,
      onClick: l ? this.handleClick : void 0,
      onMouseMove: l ? () => {
        this.setState({
          hovered: !0
        }), this.handleMouseEnter()
      } : void 0,
      onMouseLeave: l ? () => this.setState({
        hovered: !1
      }) : void 0,
      role: "option",
      "aria-disabled": !l,
      "aria-selected": l && o,
      children: (0, r.jsx)("div", {
        className: y.base,
        children: this.renderContent()
      })
    })
  }
  render() {
    let {
      index: e
    } = this.props;
    return this.isSelectable() ? (0, r.jsx)(_.mh, {
      id: "".concat(e),
      children: e => this.renderClickable(e)
    }) : this.renderClickable()
  }
  constructor(e) {
    super(e), U(this, "selectable", !0), U(this, "layoutClass", y.autocompleteRowVertical), U(this, "handleMouseEnter", () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }), U(this, "handleClick", e => {
      let {
        onClick: t,
        index: n
      } = this.props;
      null != t && "number" == typeof n && t(n, e)
    }), this.state = {
      hovered: !1
    }
  }
}
class B extends(i = s.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      innerClassName: n,
      id: i,
      ...o
    } = this.props;
    return s.Children.count(e) > 0 ? (0, r.jsx)(w.Provider, {
      value: {
        id: null != i ? i : ""
      },
      children: (0, r.jsx)("div", {
        className: a()(y.autocomplete, t),
        children: (0, r.jsx)("div", {
          className: a()(y.autocompleteInner, n),
          ...o,
          children: e
        })
      })
    }) : null
  }
}
U(B, "Generic", class e extends k {
  renderContent() {
    let {
      text: e,
      description: t
    } = this.props;
    return (0, r.jsxs)(g.RX, {
      children: [(0, r.jsx)(g.z5, {
        children: (0, r.jsx)(g.BR, {
          children: e
        })
      }), null != t ? (0, r.jsx)(g.dY, {
        children: t
      }) : null]
    })
  }
}), U(B, "Loading", function(e) {
  let t = s.useMemo(() => u().random(60, 120), []);
  return (0, r.jsx)("div", {
    className: y.base,
    "aria-busy": !0,
    children: (0, r.jsx)(g.RX, {
      children: (0, r.jsx)(g.z5, {
        children: (0, r.jsx)(g.BR, {
          children: (0, r.jsx)("div", {
            className: y.autocompletePlaceholder,
            style: {
              width: t
            }
          })
        })
      })
    })
  })
}), U(B, "Title", function(e) {
  let {
    title: t,
    className: n,
    children: i
  } = e, o = s.useContext(w);
  return (0, r.jsx)("div", {
    className: y.base,
    children: (0, r.jsxs)(d.Heading, {
      id: G(o.id),
      className: a()(y.contentTitle, n),
      variant: "heading-deprecated-12/semibold",
      children: [t, i]
    })
  })
}), U(B, "Divider", class e extends k {
  renderContent() {
    let {
      className: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: a()(e, y.divider)
    })
  }
  constructor(...e) {
    super(...e), U(this, "layoutClass", y.dividerContainer), U(this, "selectable", !1)
  }
}), U(B, "User", class e extends k {
  renderContent() {
    let {
      user: e,
      nick: t,
      status: n,
      hidePersonalInformation: i,
      guildId: s
    } = this.props;
    return (0, r.jsxs)(g.RX, {
      children: [(0, r.jsx)(g.Tw, {
        children: (0, r.jsx)(d.Avatar, {
          size: d.AvatarSizes.SIZE_24,
          src: e.getAvatarURL(s, 24),
          "aria-hidden": !0,
          status: n
        })
      }), (0, r.jsx)(g.z5, {
        children: (0, r.jsx)(g.BR, {
          children: null != t ? t : p.ZP.getName(e)
        })
      }), (0, r.jsxs)(g.dY, {
        children: [(0, r.jsx)("span", {
          className: y.__invalid_descriptionUsername,
          children: p.ZP.getUserTag(e, {
            mode: "username",
            identifiable: i ? "never" : "always"
          })
        }), i || e.isPomelo() ? null : (0, r.jsxs)("span", {
          className: y.descriptionDiscriminator,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
}), U(B, "Role", class e extends k {
  renderContent() {
    let {
      role: e,
      hideDescription: t
    } = this.props, {
      colorString: n
    } = e, i = "dot" === c.Z.roleStyle, s = "username" === c.Z.roleStyle && null != n ? {
      color: n
    } : void 0;
    return (0, r.jsxs)(g.RX, {
      children: [(0, r.jsx)(g.z5, {
        children: (0, r.jsxs)(g.BR, {
          children: [i && (0, r.jsx)(d.RoleDot, {
            className: y.roleDot,
            color: n,
            tooltip: !1
          }), (0, r.jsxs)("span", {
            style: s,
            children: ["@", e.name]
          })]
        })
      }), t ? null : (0, r.jsx)(g.dY, {
        children: P.Z.Messages.MENTION_USERS_WITH_ROLE
      })]
    })
  }
}), U(B, "Channel", class e extends k {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = e.type === D.d4z.GUILD_CATEGORY ? L.Z : (0, S.KS)(e);
    return (0, r.jsxs)(g.RX, {
      children: [null != n && (0, r.jsx)(g.Tw, {
        children: (0, r.jsx)(n, {
          className: y.icon
        })
      }), (0, r.jsx)(g.z5, {
        children: (0, r.jsx)(g.BR, {
          children: (0, h.F6)(e, R.default, O.Z)
        })
      }), null != t ? (0, r.jsx)(g.dY, {
        children: t.name
      }) : null]
    })
  }
}), U(B, "Command", class e extends k {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, r.jsxs)(g.RX, {
      children: [(0, r.jsx)(g.Tw, {
        children: (0, r.jsx)(v.Z, {
          className: y.icon,
          foreground: y.iconForeground
        })
      }), (0, r.jsx)(g.z5, {
        children: (0, r.jsx)(g.BR, {
          children: e.name
        })
      }), (0, r.jsx)(g.dY, {
        children: e.description
      })]
    })
  }
}), U(B, "NewCommand", class e extends k {
  isSelectable() {
    return this.props.command.inputType !== E.iw.PLACEHOLDER
  }
  renderContent() {
    let {
      command: e,
      channel: t,
      showImage: n,
      section: i,
      selected: s
    } = this.props, {
      hovered: o
    } = this.state, a = this.isSelectable();
    return e.inputType === E.iw.PLACEHOLDER ? (0, r.jsx)(T.Z, {}) : (0, r.jsx)(I.Z, {
      command: e,
      channel: t,
      showImage: n,
      showOptions: o || a && s,
      section: i,
      isSelectable: a
    })
  }
}), U(B, "Emoji", class e extends k {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n
    } = this.props, i = null != e.id || "" !== e.url ? (0, r.jsx)("img", {
      alt: "",
      className: y.emojiImage,
      src: null != e.id ? C.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: M.$U
      }) : e.url
    }) : (0, r.jsx)("span", {
      className: y.emojiRaw,
      children: e.surrogates
    }), s = null != n ? (0, r.jsx)(g.dY, {
      children: n.name
    }) : null;
    return (0, r.jsxs)(g.RX, {
      children: [(0, r.jsx)(g.Tw, {
        children: i
      }), (0, r.jsx)(g.z5, {
        children: (0, r.jsxs)(g.BR, {
          children: [t, e.name, t]
        })
      }), s]
    })
  }
  constructor(...e) {
    super(...e), U(this, "layoutClass", a()(y.autocompleteRowVertical, y.autocompleteRowVerticalSmall))
  }
}), U(B, "GIFIntegration", class e extends k {
  renderContent() {
    let {
      width: e,
      height: t,
      src: n
    } = this.props;
    return (0, r.jsx)("img", {
      alt: "",
      src: n,
      width: e,
      height: t
    })
  }
  constructor(...e) {
    super(...e), U(this, "layoutClass", y.autocompleteRowHorizontal)
  }
}), U(B, "Sticker", class e extends k {
  renderContent() {
    var e, t;
    let n;
    let {
      queryMatch: i,
      renderSticker: s,
      selected: o,
      sticker: a
    } = this.props, {
      hovered: l
    } = this.state;
    return (0, A.jl)(a) ? n = null === (e = N.Z.getStickerPack(a.pack_id)) || void 0 === e ? void 0 : e.name : (0, A.J8)(a) && (n = null === (t = m.Z.getGuild(a.guild_id)) || void 0 === t ? void 0 : t.name), (0, r.jsxs)(g.RX, {
      children: [(0, r.jsx)(g.Tw, {
        children: s(a, l || !0 === o)
      }), (0, r.jsxs)(g.z5, {
        children: [(0, r.jsx)(g.BR, {
          className: y.__invalid_stickerName,
          children: a.name
        }), null != i && (0, r.jsx)(g.wL, {
          children: P.Z.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
            queryMatch: i
          })
        })]
      }), null != n && (0, r.jsx)(g.dY, {
        children: n
      })]
    })
  }
  constructor(...e) {
    super(...e), U(this, "layoutClass", a()(y.autocompleteRowVertical, y.autocompleteRowVerticalSmall))
  }
}), U(B, "EmojiUpsell", class e extends k {
  renderContent() {
    return (0, r.jsx)(f.Z, {
      emojis: this.props.emojis
    })
  }
}), t.ZP = B
n.d(t, {
  DJ: function() {
return P;
  },
  rp: function() {
return U;
  }
}), n(411104), n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(392711),
  u = n.n(l),
  c = n(91192),
  d = n(481060),
  _ = n(607070),
  E = n(895924),
  f = n(237375),
  h = n(342687),
  p = n(933557),
  m = n(471445),
  I = n(511618),
  T = n(926491),
  g = n(378233),
  S = n(695346),
  A = n(430824),
  N = n(699516),
  v = n(594174),
  O = n(768581),
  R = n(51144),
  C = n(965386),
  y = n(981631),
  D = n(185923),
  L = n(689938),
  b = n(609013);

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function P(e) {
  return null != e ? 'autocomplete-'.concat(e) : null;
}

function U(e) {
  return 'autocomplete-'.concat(e, '-title');
}
let w = a.createContext(null);
class x extends a.PureComponent {
  isSelectable() {
return this.selectable;
  }
  renderContent() {
throw Error('AutocompleteRow: renderContent must be extended');
  }
  renderClickable(e) {
var t;
let {
  layoutClass: n,
  props: {
    className: r,
    index: a,
    selected: s
  }
} = this, l = this.isSelectable();
return (0, i.jsx)(d.Clickable, {
  ...e,
  className: o()(b.clickable, r, n),
  id: null !== (t = P(a)) && void 0 !== t ? t : void 0,
  onClick: l ? this.handleClick : void 0,
  onMouseMove: l ? () => {
    this.setState({
      hovered: !0
    }), this.handleMouseEnter();
  } : void 0,
  onMouseLeave: l ? () => this.setState({
    hovered: !1
  }) : void 0,
  role: 'option',
  'aria-disabled': !l,
  'aria-selected': l && s,
  children: (0, i.jsx)('div', {
    className: b.base,
    children: this.renderContent()
  })
});
  }
  render() {
let {
  index: e
} = this.props;
return this.isSelectable() ? (0, i.jsx)(c.mh, {
  id: ''.concat(e),
  children: e => this.renderClickable(e)
}) : this.renderClickable();
  }
  constructor(e) {
super(e), M(this, 'selectable', !0), M(this, 'layoutClass', b.autocompleteRowVertical), M(this, 'handleMouseEnter', () => {
  let {
    onHover: e,
    index: t,
    selected: n
  } = this.props;
  null == e || n || 'number' != typeof t || e(t);
}), M(this, 'handleClick', e => {
  let {
    onClick: t,
    index: n
  } = this.props;
  null != t && 'number' == typeof n && t(n, e);
}), this.state = {
  hovered: !1
};
  }
}
class G extends(r = a.PureComponent) {
  render() {
let {
  children: e,
  className: t,
  innerClassName: n,
  id: r,
  ...s
} = this.props;
return a.Children.count(e) > 0 ? (0, i.jsx)(w.Provider, {
  value: {
    id: null != r ? r : ''
  },
  children: (0, i.jsx)('div', {
    className: o()(b.autocomplete, t),
    children: (0, i.jsx)('div', {
      className: o()(b.autocompleteInner, n),
      ...s,
      children: e
    })
  })
}) : null;
  }
}
M(G, 'Generic', class e extends x {
  renderContent() {
let {
  text: e,
  description: t
} = this.props;
return (0, i.jsxs)(C.RX, {
  children: [
    (0, i.jsx)(C.z5, {
      children: (0, i.jsx)(C.BR, {
        children: e
      })
    }),
    null != t ? (0, i.jsx)(C.dY, {
      children: t
    }) : null
  ]
});
  }
}), M(G, 'Loading', function(e) {
  let t = a.useMemo(() => u().random(60, 120), []);
  return (0, i.jsx)('div', {
className: b.base,
'aria-busy': !0,
children: (0, i.jsx)(C.RX, {
  children: (0, i.jsx)(C.z5, {
    children: (0, i.jsx)(C.BR, {
      children: (0, i.jsx)('div', {
        className: b.autocompletePlaceholder,
        style: {
          width: t
        }
      })
    })
  })
})
  });
}), M(G, 'Title', function(e) {
  let {
title: t,
className: n,
children: r
  } = e, s = a.useContext(w);
  return (0, i.jsx)('div', {
className: b.base,
children: (0, i.jsxs)(d.Heading, {
  id: U(s.id),
  className: o()(b.contentTitle, n),
  variant: 'heading-deprecated-12/semibold',
  children: [
    t,
    r
  ]
})
  });
}), M(G, 'Divider', class e extends x {
  renderContent() {
let {
  className: e
} = this.props;
return (0, i.jsx)('div', {
  className: o()(e, b.divider)
});
  }
  constructor(...e) {
super(...e), M(this, 'layoutClass', b.dividerContainer), M(this, 'selectable', !1);
  }
}), M(G, 'User', class e extends x {
  renderContent() {
let {
  user: e,
  nick: t,
  status: n,
  hidePersonalInformation: r,
  guildId: a
} = this.props;
return (0, i.jsxs)(C.RX, {
  children: [
    (0, i.jsx)(C.Tw, {
      children: (0, i.jsx)(d.Avatar, {
        size: d.AvatarSizes.SIZE_24,
        src: e.getAvatarURL(a, 24),
        'aria-hidden': !0,
        status: n
      })
    }),
    (0, i.jsx)(C.z5, {
      children: (0, i.jsx)(C.BR, {
        children: null != t ? t : R.ZP.getName(e)
      })
    }),
    (0, i.jsxs)(C.dY, {
      children: [
        (0, i.jsx)('span', {
          className: b.__invalid_descriptionUsername,
          children: R.ZP.getUserTag(e, {
            mode: 'username',
            identifiable: r ? 'never' : 'always'
          })
        }),
        r || e.isPomelo() ? null : (0, i.jsxs)('span', {
          className: b.descriptionDiscriminator,
          children: [
            '#',
            e.discriminator
          ]
        })
      ]
    })
  ]
});
  }
}), M(G, 'Role', class e extends x {
  renderContent() {
let {
  role: e,
  hideDescription: t
} = this.props, {
  colorString: n
} = e, r = 'dot' === _.Z.roleStyle, a = 'username' === _.Z.roleStyle && null != n ? {
  color: n
} : void 0;
return (0, i.jsxs)(C.RX, {
  children: [
    (0, i.jsx)(C.z5, {
      children: (0, i.jsxs)(C.BR, {
        children: [
          r && (0, i.jsx)(d.RoleDot, {
            className: b.roleDot,
            color: n,
            tooltip: !1
          }),
          (0, i.jsxs)('span', {
            style: a,
            children: [
              '@',
              e.name
            ]
          })
        ]
      })
    }),
    t ? null : (0, i.jsx)(C.dY, {
      children: L.Z.Messages.MENTION_USERS_WITH_ROLE
    })
  ]
});
  }
}), M(G, 'Channel', class e extends x {
  renderContent() {
let {
  channel: e,
  category: t
} = this.props, n = e.type === y.d4z.GUILD_CATEGORY ? d.FolderIcon : (0, m.KS)(e);
return (0, i.jsxs)(C.RX, {
  children: [
    null != n && (0, i.jsx)(C.Tw, {
      children: (0, i.jsx)(n, {
        className: b.icon
      })
    }),
    (0, i.jsx)(C.z5, {
      children: (0, i.jsx)(C.BR, {
        children: (0, p.F6)(e, v.default, N.Z)
      })
    }),
    null != t ? (0, i.jsx)(C.dY, {
      children: t.name
    }) : null
  ]
});
  }
}), M(G, 'Command', class e extends x {
  renderContent() {
let {
  command: e
} = this.props;
return (0, i.jsxs)(C.RX, {
  children: [
    (0, i.jsx)(C.Tw, {
      children: (0, i.jsx)(d.SlashIcon, {
        size: 'xs',
        color: 'currentColor',
        className: b.icon,
        colorClass: b.iconForeground
      })
    }),
    (0, i.jsx)(C.z5, {
      children: (0, i.jsx)(C.BR, {
        children: e.name
      })
    }),
    (0, i.jsx)(C.dY, {
      children: e.description
    })
  ]
});
  }
}), M(G, 'NewCommand', class e extends x {
  isSelectable() {
return this.props.command.inputType !== E.iw.PLACEHOLDER;
  }
  renderContent() {
let {
  command: e,
  channel: t,
  showImage: n,
  section: r,
  selected: a
} = this.props, {
  hovered: s
} = this.state, o = this.isSelectable();
return e.inputType === E.iw.PLACEHOLDER ? (0, i.jsx)(h.Z, {}) : (0, i.jsx)(f.Z, {
  command: e,
  channel: t,
  showImage: n,
  showOptions: s || o && a,
  section: r,
  isSelectable: o
});
  }
}), M(G, 'Emoji', class e extends x {
  renderContent() {
let {
  emoji: e,
  sentinel: t,
  guild: n
} = this.props, r = S.Yk.getSetting(), a = null != e.id || '' !== e.url ? (0, i.jsx)('img', {
  alt: '',
  className: b.emojiImage,
  src: null != e.id ? O.ZP.getEmojiURL({
    id: e.id,
    animated: e.animated && r,
    size: D.$U
  }) : e.url
}) : (0, i.jsx)('span', {
  className: b.emojiRaw,
  children: e.surrogates
}), s = null != n ? (0, i.jsx)(C.dY, {
  children: n.name
}) : null;
return (0, i.jsxs)(C.RX, {
  children: [
    (0, i.jsx)(C.Tw, {
      children: a
    }),
    (0, i.jsx)(C.z5, {
      children: (0, i.jsxs)(C.BR, {
        children: [
          t,
          e.name,
          t
        ]
      })
    }),
    s
  ]
});
  }
  constructor(...e) {
super(...e), M(this, 'layoutClass', o()(b.autocompleteRowVertical, b.autocompleteRowVerticalSmall));
  }
}), M(G, 'GIFIntegration', class e extends x {
  renderContent() {
let {
  width: e,
  height: t,
  src: n
} = this.props;
return (0, i.jsx)('img', {
  alt: '',
  src: n,
  width: e,
  height: t
});
  }
  constructor(...e) {
super(...e), M(this, 'layoutClass', b.autocompleteRowHorizontal);
  }
}), M(G, 'Sticker', class e extends x {
  renderContent() {
var e, t;
let n;
let {
  queryMatch: r,
  renderSticker: a,
  selected: s,
  sticker: o
} = this.props, {
  hovered: l
} = this.state;
return (0, g.jl)(o) ? n = null === (e = T.Z.getStickerPack(o.pack_id)) || void 0 === e ? void 0 : e.name : (0, g.J8)(o) && (n = null === (t = A.Z.getGuild(o.guild_id)) || void 0 === t ? void 0 : t.name), (0, i.jsxs)(C.RX, {
  children: [
    (0, i.jsx)(C.Tw, {
      children: a(o, l || !0 === s)
    }),
    (0, i.jsxs)(C.z5, {
      children: [
        (0, i.jsx)(C.BR, {
          className: b.__invalid_stickerName,
          children: o.name
        }),
        null != r && (0, i.jsx)(C.wL, {
          children: L.Z.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
            queryMatch: r
          })
        })
      ]
    }),
    null != n && (0, i.jsx)(C.dY, {
      children: n
    })
  ]
});
  }
  constructor(...e) {
super(...e), M(this, 'layoutClass', o()(b.autocompleteRowVertical, b.autocompleteRowVerticalSmall));
  }
}), M(G, 'EmojiUpsell', class e extends x {
  renderContent() {
return (0, i.jsx)(I.Z, {
  emojis: this.props.emojis
});
  }
}), t.ZP = G;
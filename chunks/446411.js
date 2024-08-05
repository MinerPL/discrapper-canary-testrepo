n.d(t, {
  BC: function() {
return F;
  },
  ZP: function() {
return V;
  }
}), n(47120), n(653041);
var l, r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(481060),
  d = n(44824),
  u = n(124347),
  m = n(283756),
  h = n(169525),
  c = n(785992),
  p = n(156054),
  b = n(68588),
  g = n(268642),
  f = n(941797),
  x = n(278297),
  v = n(52824),
  y = n(592256),
  C = n(585483),
  _ = n(55935),
  w = n(408433),
  I = n(956664),
  E = n(468846),
  j = n(401419),
  S = n(981631),
  T = n(689938),
  N = n(108558),
  M = n(153521),
  A = n(738779);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function F(e) {
  let {
className: t,
iframeWrapperClassName: n,
maxWidth: l,
maxHeight: a,
thumbnail: s,
video: d,
provider: u,
allowFullScreen: h = !0,
responsive: c = !1,
renderImageComponent: p,
renderVideoComponent: b,
renderLinkComponent: g,
renderForwardComponent: f = S.VqG,
playable: x = !0,
autoPlay: y = !1,
autoMute: _,
volume: w,
onPlay: j,
onPause: T,
onEnded: M,
onControlsHide: A,
onControlsShow: k,
onVolumeChange: F,
onMute: L,
href: V,
messageId: P,
channelId: H,
placeholder: R,
placeholderVersion: B
  } = e, [W, D] = i.useState(y), O = null != d && null == d.proxyURL, G = i.useCallback(() => D(!1), [D]), Z = e => {
e.preventDefault(), e.stopPropagation(), null == j || j(!1), D(!0), O && (C.S.dispatch(S.CkL.VIDEO_EMBED_PLAYBACK_STARTED), C.S.subscribeOnce(S.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G));
  };
  i.useEffect(() => () => {
O && C.S.unsubscribe(S.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G);
  }, [
O,
G
  ]);
  let {
width: U,
height: q
  } = s;
  null != d && (U = d.width, q = d.height);
  let z = (0, I.Tj)({
width: U,
height: q,
maxWidth: l,
maxHeight: a
  });
  U = Math.max(z.width, 150), q = Math.max(z.height, 144);
  let K = (0, v.q)(s);
  if (null != d && null != d.proxyURL)
return (0, r.jsx)('div', {
  className: o()(N.embedVideo, t),
  children: b({
    poster: K,
    src: d.proxyURL,
    placeholder: R,
    placeholderVersion: B,
    width: U,
    height: q,
    responsive: c,
    autoPlay: y,
    onEnded: M,
    naturalWidth: d.width,
    naturalHeight: d.height,
    onVolumeChange: F,
    playable: x,
    autoMute: _,
    volume: w,
    onPlay: j,
    onPause: T,
    onMute: L,
    onControlsHide: A,
    onControlsShow: k,
    renderForwardComponent: f
  })
});
  if (W && null != d) {
let e;
let i = !0 === _ || 'function' == typeof _ && _(),
  s = {
    width: U,
    height: q
  },
  m = {
    width: U,
    height: q
  };
if (c) {
  let t = 0 !== U ? q / U : 1;
  s = {
    maxWidth: l,
    maxHeight: a,
    width: void 0,
    height: void 0
  }, m = {
    paddingBottom: ''.concat(100 * t, '%'),
    maxWidth: U
  }, e = {
    position: 'absolute',
    top: 0,
    left: 0,
    maxWidth: U,
    maxHeight: q
  };
}
return (0, r.jsx)('div', {
  className: t,
  style: s,
  children: (0, r.jsx)('div', {
    className: o()(N.embedVideo, n),
    style: m,
    children: (0, r.jsx)(E.ZP, {
      provider: u,
      src: d.url,
      style: e,
      width: U,
      height: q,
      allowFullScreen: h,
      autoMute: i
    })
  })
});
  }
  return (0, r.jsxs)('div', {
className: o()(N.embedVideo, t),
style: c ? {
  maxWidth: U
} : {
  width: U,
  height: q
},
children: [
  p({
    src: K,
    width: U,
    height: q,
    maxWidth: U,
    maxHeight: q,
    responsive: c,
    containerClassName: N.embedVideoImageComponent,
    imageClassName: N.embedVideoImageComponentInner,
    placeholder: R,
    placeholderVersion: B,
    onClick: x && null != d ? Z : null,
    renderForwardComponent: f
  }),
  (0, r.jsx)('div', {
    className: N.embedVideoActions,
    children: (0, r.jsx)('div', {
      className: N.centerContent,
      children: x ? (0, r.jsx)(m.Z, {
        onPlay: null != d ? Z : null,
        externalURL: V,
        renderLinkComponent: g,
        messageId: P,
        channelId: H
      }) : null
    })
  })
]
  });
}

function L(e) {
  let {
className: t,
href: n,
autoPlay: l,
maxWidth: i,
maxHeight: a,
thumbnail: s,
video: u,
renderImageComponent: m,
renderForwardComponent: h,
responsive: c,
alt: p,
disableAltTextDisplay: b = !1,
playable: g = !0,
hiddenSpoilers: f,
placeholder: x,
placeholderVersion: y
  } = e;
  return (0, r.jsx)(d.Z, {
className: o()(N.embedVideo, t),
original: n,
poster: (0, v.q)(s),
src: (0, v.q)(u),
alt: p,
width: s.width,
height: s.height,
naturalHeight: u.height,
naturalWidth: u.width,
maxWidth: i,
maxHeight: a,
responsive: c,
autoPlay: l,
playable: g,
renderImageComponent: m,
renderForwardComponent: h,
hiddenSpoilers: f,
disableAltTextDisplay: b,
placeholder: x,
placeholderVersion: y
  });
}
class V extends(l = i.PureComponent) {
  renderProvider() {
let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
  {
    embed: {
      provider: t
    },
    renderLinkComponent: n,
    messageId: l,
    channelId: i
  } = this.props;
return null == t ? null : (0, r.jsx)('div', {
  className: o()(N.embedProvider, N.embedMargin),
  children: null != t.url ? n({
    className: N.embedLink,
    href: t.url,
    tabIndex: e ? 0 : -1,
    children: t.name,
    target: '_blank',
    rel: 'noreferrer noopener',
    messageId: l,
    channelId: i
  }) : (0, r.jsx)('span', {
    children: t.name
  })
});
  }
  renderAuthor() {
let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
  {
    embed: {
      author: t
    },
    renderLinkComponent: n,
    messageId: l,
    channelId: i
  } = this.props;
return null == t ? null : (0, r.jsxs)('div', {
  className: o()(N.embedAuthor, N.embedMargin),
  children: [
    null != t.iconProxyURL ? (0, r.jsx)('img', {
      alt: '',
      className: N.embedAuthorIcon,
      src: t.iconProxyURL
    }) : null,
    null != t.url ? n({
      className: N.embedAuthorNameLink,
      href: t.url,
      tabIndex: e ? 0 : -1,
      children: t.name,
      target: '_blank',
      rel: 'noreferrer noopener',
      messageId: l,
      channelId: i
    }) : (0, r.jsx)('span', {
      className: N.embedAuthorName,
      children: t.name
    })
  ]
});
  }
  renderTitle() {
let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
  {
    embed: t,
    renderLinkComponent: n,
    renderTitle: l,
    messageId: i,
    channelId: a
  } = this.props,
  {
    rawTitle: s,
    url: d
  } = t;
return null == s ? null : (0, r.jsx)('div', {
  className: o()(N.embedTitle, N.embedMargin),
  children: null != d ? n({
    className: N.embedTitleLink,
    href: d,
    tabIndex: e ? 0 : -1,
    children: l(t, s),
    target: '_blank',
    rel: 'noreferrer noopener',
    messageId: i,
    channelId: a
  }) : l(t, s)
});
  }
  renderDescription() {
let {
  embed: e,
  renderDescription: t
} = this.props, {
  rawDescription: n
} = e;
return null == n ? null : (0, r.jsx)('div', {
  className: o()(N.embedDescription, N.embedMargin),
  children: t(e, n, !1)
});
  }
  renderThumbnail() {
let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
  {
    embed: {
      thumbnail: t
    },
    maxThumbnailWidth: n,
    maxThumbnailHeight: l,
    renderImageComponent: i,
    renderForwardComponent: a,
    autoPlayGif: o
  } = this.props;
return null == t ? null : (0, r.jsx)(x.G.Consumer, {
  children: r => {
    let {
      disableAnimations: s
    } = r;
    return i({
      containerClassName: N.embedThumbnail,
      src: (0, v.q)(t),
      original: t.url,
      width: t.width,
      height: t.height,
      maxWidth: n,
      maxHeight: l,
      shouldLink: e,
      autoPlay: o && !s,
      renderForwardComponent: a
    });
  }
});
  }
  renderFields() {
let {
  embed: e
} = this.props, {
  fields: t
} = e;
if (null == t || 0 === t.length)
  return null;
let n = [],
  l = null;
return t.forEach(t => {
  let {
    rawName: r,
    rawValue: i,
    inline: a
  } = t;
  !a && null != l && (n.push(l), l = null), null == l && (l = []), l.push([
    this.props.renderTitle(e, r),
    this.props.renderDescription(e, i, !0)
  ]), (3 === l.length || !a) && (n.push(l), l = null);
}), null != l && n.push(l), (0, r.jsx)('div', {
  className: N.embedFields,
  children: n.map((e, t) => {
    let {
      length: n
    } = e;
    return e.map((e, l) => {
      let [i, a] = e;
      return (0, r.jsxs)('div', {
        className: N.embedField,
        style: {
          gridColumn: function(e, t) {
            let n = 12 / t,
              l = e * n;
            return ''.concat(l + 1, ' / ').concat(l + n + 1);
          }(l, n)
        },
        children: [
          (0, r.jsx)('div', {
            className: N.embedFieldName,
            children: i
          }),
          (0, r.jsx)('div', {
            className: N.embedFieldValue,
            children: a
          })
        ]
      }, ''.concat(t, '-').concat(l));
    });
  })
});
  }
  renderImages() {
let {
  hiddenSpoiler: e = !1,
  isVisible: t = !0
} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
  embed: n
} = this.props, {
  maxMediaHeight: l
} = this.state;
if (null == n.images)
  return null;
let [i, a, o, s] = n.images.map(l => this.renderImage({
  hiddenSpoiler: e,
  isVisible: t,
  image: l,
  isGalleryImage: !0,
  allImages: n.images
}));
return null == i && null == a && null == o && null == s ? null : (0, r.jsxs)('div', {
  className: N.embedGalleryImagesWrapper,
  style: {
    height: l
  },
  children: [
    (0, r.jsxs)('div', {
      className: N.embedGallerySide,
      children: [
        i,
        null != s && o
      ]
    }),
    (0, r.jsxs)('div', {
      className: N.embedGallerySide,
      children: [
        a,
        null == s && null != o && o,
        null != s && s
      ]
    })
  ]
});
  }
  renderImage() {
let {
  hiddenSpoiler: e = !1,
  isVisible: t = !0,
  image: n,
  isGalleryImage: l = !1,
  alt: i = T.Z.Messages.IMAGE,
  allImages: a = null
} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
  renderImageComponent: s,
  className: d,
  autoPlayGif: m,
  renderForwardComponent: h
} = this.props, {
  maxMediaWidth: c,
  maxMediaHeight: p
} = this.state;
if (null == n)
  return null;
let b = (0, v.q)(n),
  g = null == a ? {} : (0, y.Cx)(a.map(e => (0, y.nP)(e, h))),
  C = u.Z.isAnimated({
    src: (0, v.q)(n),
    original: n.url,
    animated: !1
  }),
  _ = {
    containerClassName: o()(d, {
      [N.embedMedia]: !l,
      [N.embedImage]: !l,
      [N.galleryImage]: l
    }),
    imageContainerClassName: l ? N.galleryImageContainer : void 0,
    imageClassName: l ? N.embedGalleryImageElement : void 0,
    src: (0, v.q)(n),
    alt: i,
    responsive: !0,
    limitResponsiveWidth: !l,
    width: n.width,
    height: n.height,
    maxWidth: c,
    maxHeight: p,
    original: n.url,
    shouldLink: t,
    disableAltTextDisplay: !0,
    hiddenSpoilers: e,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholderVersion,
    renderForwardComponent: h
  };
return b in g && (_.onClick = g[b]), (0, r.jsx)(f.h.Consumer, {
  children: t => (0, r.jsx)(x.G.Consumer, {
    children: n => {
      let {
        disableAnimations: l
      } = n;
      return s({
        ..._,
        autoPlay: m && !l && !e,
        renderAccessory: C ? t : null
      });
    }
  }, n.url)
});
  }
  renderVideo() {
let {
  gifv: e = !1,
  isVisible: t = !0,
  hiddenSpoiler: n = !1
} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
  embed: {
    url: l,
    thumbnail: i,
    video: a,
    provider: o
  },
  renderVideoComponent: s,
  renderImageComponent: d,
  renderLinkComponent: u,
  renderForwardComponent: m,
  allowFullScreen: h,
  autoPlayGif: c,
  messageId: p,
  channelId: b,
  obscureReason: g
} = this.props, {
  maxMediaWidth: f,
  maxMediaHeight: v
} = this.state;
if (null == l || null == i)
  return null;
if (e)
  return null == a ? null : (0, r.jsx)(x.G.Consumer, {
    children: e => {
      let {
        disableAnimations: o
      } = e;
      return (0, r.jsx)(L, {
        className: N.embedMedia,
        href: l,
        thumbnail: i,
        video: a,
        maxWidth: f,
        maxHeight: v,
        responsive: !0,
        autoPlay: !n && c && !o && t,
        renderImageComponent: d,
        renderForwardComponent: m,
        playable: t,
        hiddenSpoilers: n,
        disableAltTextDisplay: null != g,
        placeholder: a.placeholder,
        placeholderVersion: a.placeholderVersion
      });
    }
  });
return (0, r.jsx)(F, {
  className: N.embedMedia,
  href: l,
  allowFullScreen: h,
  thumbnail: i,
  video: a,
  provider: null == o ? void 0 : o.name,
  maxWidth: f,
  maxHeight: v,
  responsive: !0,
  renderImageComponent: d,
  renderVideoComponent: s,
  renderLinkComponent: u,
  renderForwardComponent: m,
  onControlsShow: () => {
    this.setState({
      videoControlsShown: !0
    });
  },
  onControlsHide: () => {
    this.setState({
      videoControlsShown: !1
    });
  },
  playable: t && !n,
  messageId: p,
  channelId: b,
  placeholder: null == a ? void 0 : a.placeholder,
  placeholderVersion: null == a ? void 0 : a.placeholderVersion
});
  }
  renderFooter() {
let {
  footer: e,
  timestamp: t
} = this.props.embed;
if (null != e) {
  let n = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
  return (0, r.jsxs)('div', {
    className: o()(N.embedFooter, N.embedMargin),
    children: [
      null != n ? (0, r.jsx)('img', {
        alt: '',
        className: N.embedFooterIcon,
        src: n
      }) : null,
      (0, r.jsxs)('span', {
        className: N.embedFooterText,
        children: [
          e.text,
          null != e.text && null != t ? (0, r.jsx)('span', {
            className: N.embedFooterSeparator,
            children: '\u2022'
          }) : null,
          null != t ? (0, _.Y4)(t) : null
        ]
      })
    ]
  });
}
if (null != t)
  return (0, r.jsx)('div', {
    className: o()(N.embedFooter, N.embedMargin),
    children: (0, r.jsx)('span', {
      className: N.embedFooterText,
      children: (0, _.Y4)(t)
    })
  });
  }
  renderMedia() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
  {
    embed: t
  } = this.props,
  {
    isVisible: n
  } = this.state;
switch (t.type) {
  case S.hBH.GIFV:
    return this.renderVideo({
      gifv: !0,
      hiddenSpoiler: e,
      isVisible: n
    });
  case S.hBH.VIDEO:
  default:
    if (null != t.video)
      return this.renderVideo({
        gifv: !1,
        hiddenSpoiler: e,
        isVisible: n
      });
    if (null != t.images)
      return this.renderImages({
        hiddenSpoiler: e,
        isVisible: n
      });
    return this.renderImage({
      hiddenSpoiler: e,
      isVisible: n,
      image: t.image,
      alt: t.rawTitle
    });
}
  }
  renderAll() {
let e, t;
let {
  embed: n,
  hideMedia: l
} = this.props, {
  isVisible: r
} = this.state, i = this.renderProvider(r), a = this.renderAuthor(r), o = this.renderTitle(r);
switch (n.type) {
  case S.hBH.IMAGE:
  case S.hBH.VIDEO:
  case S.hBH.GIFV:
    break;
  default:
    e = this.renderDescription();
}
let s = this.renderFields();
!l && (t = this.renderMedia(!r));
let d = this.renderFooter(),
  u = null == t;
return n.type === S.hBH.RICH && (u = null == n.video), {
  provider: i,
  author: a,
  title: o,
  description: e,
  thumbnail: !l && u ? this.renderThumbnail(r) : null,
  fields: s,
  media: t,
  footer: d
};
  }
  getMaxWidth(e) {
let {
  embed: {
    image: t,
    images: n,
    video: l,
    type: r,
    thumbnail: i
  }
} = this.props, {
  maxMediaWidth: a,
  maxMediaHeight: o
} = this.state, s = null != t ? t : l;
if (null == s)
  return;
let {
  width: d
} = (0, I.Tj)({
  width: s.width,
  height: s.height,
  maxWidth: a,
  maxHeight: o
});
if (!e && (r === S.hBH.VIDEO || d >= 300))
  return d + 32;
if (r === S.hBH.RICH && void 0 !== n)
  return 520;
if (r === S.hBH.GIFV) {
  var u, m, h, c;
  let {
    width: e
  } = (0, I.Tj)({
    width: Math.max(null !== (u = null == i ? void 0 : i.width) && void 0 !== u ? u : 0, null !== (m = null == l ? void 0 : l.width) && void 0 !== m ? m : 0),
    height: Math.max(null !== (h = null == i ? void 0 : i.height) && void 0 !== h ? h : 0, null !== (c = null == l ? void 0 : l.height) && void 0 !== c ? c : 0),
    maxWidth: a,
    maxHeight: o
  });
  return e;
}
  }
  isInline() {
let {
  hideMedia: e,
  embed: t
} = this.props;
return !e && (0, w.dY)(t);
  }
  renderSuppressButton(e) {
return (0, r.jsx)(s.Clickable, {
  focusProps: {
    offset: {
      bottom: 4
    }
  },
  className: N.embedSuppressButton,
  onClick: e,
  'aria-label': T.Z.Messages.SUPPRESS_ALL_EMBEDS,
  children: (0, r.jsx)(s.CloseSmallIcon, {
    size: 'xs',
    color: 'currentColor'
  })
});
  }
  usesJustifiedAutoStyle() {
let {
  embed: e
} = this.props;
return e.type === S.hBH.IMAGE || e.type === S.hBH.VIDEO || e.type === S.hBH.GIFV || (e.type === S.hBH.RICH || e.type === S.hBH.ARTICLE) && (null != e.video || null != e.image);
  }
  getEmbedColor(e) {
let {
  color: t
} = this.props.embed;
return null != t && '#ffffff' === t.toLowerCase() || e ? void 0 : t;
  }
  getSpoilerStyles(e) {
let {
  embed: {
    image: t,
    images: n,
    video: l,
    type: r
  }
} = this.props, {
  maxMediaWidth: i,
  maxMediaHeight: a
} = this.state;
if (!this.usesJustifiedAutoStyle())
  return;
let o = e ? void 0 : this.getMaxWidth(!1);
if (void 0 === o && void 0 === n && r !== S.hBH.RICH) {
  let e = null != t ? t : l;
  if (void 0 !== e) {
    let {
      width: t
    } = (0, I.Tj)({
      width: e.width,
      height: e.height,
      maxWidth: i,
      maxHeight: a
    });
    o = t;
  }
}
return {
  maxWidth: void 0 === o ? 'max-content' : o,
  justifySelf: 'auto'
};
  }
  render() {
var e;
let {
  embed: t,
  obscureReason: n,
  className: l
} = this.props;
return null != t.provider && j.j.includes(t.provider.name) ? (0, r.jsx)(j.Z, {
  embed: t,
  className: l
}) : (0, c.Z)(t) ? (0, r.jsx)(g.Z, {
  embed: t,
  className: l
}) : (null === (e = t.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && t.type === S.hBH.RICH ? (0, r.jsx)(p.Z, {
  embed: t,
  className: l
}) : this.isInline() ? null != n ? (0, r.jsx)(b.Z, {
  type: b.Z.Types.ATTACHMENT,
  reason: n,
  onReveal: this.onReveal,
  onToggleObscurity: this.onToggleObscurity,
  isSingleMosaicItem: !0,
  containerStyles: this.getSpoilerStyles(!0),
  obscurityControlClassName: o()({
    [N.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
  }),
  children: this.renderInlineMediaEmbed
}) : this.renderInlineMediaEmbed() : null != n ? (0, r.jsx)(b.Z, {
  type: b.Z.Types.EMBED,
  onReveal: this.onReveal,
  onToggleObscurity: this.onToggleObscurity,
  reason: n,
  isSingleMosaicItem: !0,
  containerStyles: this.getSpoilerStyles(!1),
  children: this.renderEmbedContent
}) : this.renderEmbedContent();
  }
  constructor(...e) {
var t;
super(...e), t = this, k(this, 'state', {
  isVisible: null == this.props.obscureReason,
  videoControlsShown: !1,
  ...(0, w.vP)(this.props.embed)
}), k(this, 'onReveal', () => {
  this.setState({
    isVisible: !0
  });
}), k(this, 'onToggleObscurity', () => {
  this.setState({
    isVisible: !this.state.isVisible
  });
}), k(this, 'renderInlineMediaEmbed', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    {
      obscureReason: n,
      className: l
    } = t.props,
    i = t.getMaxWidth(!0);
  return (0, r.jsx)('div', {
    'aria-hidden': e,
    className: o()(N.inlineMediaEmbed, l, {
      [N.spoilerAttachment]: n === h.wk.SPOILER,
      [N.hiddenExplicitAttachment]: null != n && [
        h.wk.EXPLICIT_CONTENT,
        h.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(n),
      [N.isHidden]: e,
      [N.justifyAuto]: t.usesJustifiedAutoStyle(),
      [A.embedFlexGrow]: null != i
    }),
    style: {
      maxWidth: i
    },
    children: t.renderMedia(e)
  });
}), k(this, 'renderEmbedContent', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    {
      className: n,
      onSuppressEmbed: l,
      obscureReason: i
    } = t.props,
    {
      provider: a,
      author: s,
      title: d,
      description: u,
      fields: m,
      thumbnail: c,
      media: p,
      footer: b
    } = t.renderAll();
  return (0, r.jsx)('article', {
    className: o()(n, A.embedFlexGrow, N.embedFull, M.markup, {
      [N.isHidden]: e,
      [N.spoilerEmbed]: i === h.wk.SPOILER,
      [N.hiddenExplicitEmbed]: null != i && [
        h.wk.EXPLICIT_CONTENT,
        h.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(i),
      [N.justifyAuto]: t.usesJustifiedAutoStyle()
    }),
    'aria-hidden': e,
    style: {
      borderColor: t.getEmbedColor(e),
      maxWidth: t.getMaxWidth(!1)
    },
    children: (0, r.jsx)('div', {
      className: N.gridContainer,
      children: (0, r.jsxs)('div', {
        className: o()({
          [N.grid]: !0,
          [N.hasThumbnail]: null != c
        }),
        children: [
          null != l ? t.renderSuppressButton(l) : null,
          a,
          s,
          d,
          u,
          m,
          p,
          c,
          b
        ]
      })
    })
  });
});
  }
}
k(V, 'defaultProps', {
  hideMedia: !1,
  allowFullScreen: !0,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80
});
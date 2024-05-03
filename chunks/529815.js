"use strict";
l.r(t), l.d(t, {
  EmbedVideo: function() {
    return _
  },
  default: function() {
    return V
  }
}), l("47120"), l("653041");
var n, r = l("735250"),
  s = l("470079"),
  i = l("120356"),
  a = l.n(i),
  o = l("481060"),
  d = l("169525"),
  u = l("585483"),
  c = l("55935"),
  h = l("408433"),
  m = l("956664"),
  p = l("156054"),
  g = l("250496"),
  f = l("351093"),
  b = l("261922"),
  x = l("68588"),
  y = l("268642"),
  v = l("259773"),
  E = l("941797"),
  I = l("278297"),
  C = l("465670"),
  w = l("52824"),
  M = l("592256"),
  T = l("981631"),
  S = l("689938"),
  j = l("990291"),
  N = l("893389");

function A(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}

function _(e) {
  let {
    className: t,
    iframeWrapperClassName: l,
    maxWidth: n,
    maxHeight: i,
    thumbnail: o,
    video: d,
    provider: c,
    allowFullScreen: h = !0,
    responsive: p = !1,
    renderImageComponent: f,
    renderVideoComponent: b,
    renderLinkComponent: x,
    playable: y = !0,
    autoPlay: E = !1,
    autoMute: I,
    volume: C,
    onPlay: M,
    onPause: S,
    onEnded: j,
    onControlsHide: A,
    onControlsShow: _,
    onVolumeChange: O,
    onMute: V,
    href: R,
    messageId: k,
    channelId: L,
    placeholder: D,
    placeholderVersion: P
  } = e, [F, H] = s.useState(E), U = null != d && null == d.proxyURL, W = s.useCallback(() => H(!1), [H]), B = e => {
    e.preventDefault(), e.stopPropagation(), null == M || M(!1), H(!0), U && (u.ComponentDispatch.dispatch(T.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED), u.ComponentDispatch.subscribeOnce(T.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, W))
  };
  s.useEffect(() => () => {
    U && u.ComponentDispatch.unsubscribe(T.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED, W)
  }, [U, W]);
  let {
    width: G,
    height: X
  } = o;
  null != d && (G = d.width, X = d.height);
  let z = (0, m.fit)({
    width: G,
    height: X,
    maxWidth: n,
    maxHeight: i
  });
  G = Math.max(z.width, 150), X = Math.max(z.height, 144);
  let Y = (0, w.getBestEffortSrcUrl)(o);
  if (null != d && null != d.proxyURL) return (0, r.jsx)("div", {
    className: a()(N.embedVideo, t),
    children: b({
      poster: Y,
      src: d.proxyURL,
      placeholder: D,
      placeholderVersion: P,
      width: G,
      height: X,
      responsive: p,
      autoPlay: E,
      onEnded: j,
      naturalWidth: d.width,
      naturalHeight: d.height,
      onVolumeChange: O,
      playable: y,
      autoMute: I,
      volume: C,
      onPlay: M,
      onPause: S,
      onMute: V,
      onControlsHide: A,
      onControlsShow: _
    })
  });
  if (F && null != d) {
    let e;
    let s = !0 === I || "function" == typeof I && I(),
      o = {
        width: G,
        height: X
      },
      u = {
        width: G,
        height: X
      };
    if (p) {
      let t = 0 !== G ? X / G : 1;
      o = {
        maxWidth: n,
        maxHeight: i,
        width: void 0,
        height: void 0
      }, u = {
        paddingBottom: "".concat(100 * t, "%"),
        maxWidth: G
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: G,
        maxHeight: X
      }
    }
    return (0, r.jsx)("div", {
      className: t,
      style: o,
      children: (0, r.jsx)("div", {
        className: a()(N.embedVideo, l),
        style: u,
        children: (0, r.jsx)(g.default, {
          provider: c,
          src: d.url,
          style: e,
          width: G,
          height: X,
          allowFullScreen: h,
          autoMute: s
        })
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: a()(N.embedVideo, t),
    style: p ? {
      maxWidth: G
    } : {
      width: G,
      height: X
    },
    children: [f({
      src: Y,
      width: G,
      height: X,
      maxWidth: G,
      maxHeight: X,
      responsive: p,
      containerClassName: N.embedVideoImageComponent,
      imageClassName: N.embedVideoImageComponentInner,
      placeholder: D,
      placeholderVersion: P,
      onClick: y && null != d ? B : null
    }), (0, r.jsx)("div", {
      className: N.embedVideoActions,
      children: (0, r.jsx)("div", {
        className: N.centerContent,
        children: y ? (0, r.jsx)(v.default, {
          onPlay: null != d ? B : null,
          externalURL: R,
          renderLinkComponent: x,
          messageId: k,
          channelId: L
        }) : null
      })
    })]
  })
}

function O(e) {
  let {
    className: t,
    href: l,
    autoPlay: n,
    maxWidth: s,
    maxHeight: i,
    thumbnail: o,
    video: d,
    renderImageComponent: u,
    responsive: c,
    alt: h,
    disableAltTextDisplay: m = !1,
    playable: p = !0,
    hiddenSpoilers: g,
    placeholder: b,
    placeholderVersion: x
  } = e;
  return (0, r.jsx)(f.default, {
    className: a()(N.embedVideo, t),
    original: l,
    poster: (0, w.getBestEffortSrcUrl)(o),
    src: (0, w.getBestEffortSrcUrl)(d),
    alt: h,
    width: o.width,
    height: o.height,
    naturalHeight: d.height,
    naturalWidth: d.width,
    maxWidth: s,
    maxHeight: i,
    responsive: c,
    autoPlay: n,
    playable: p,
    renderImageComponent: u,
    hiddenSpoilers: g,
    disableAltTextDisplay: m,
    placeholder: b,
    placeholderVersion: x
  })
}
class V extends(n = s.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          provider: t
        },
        renderLinkComponent: l,
        messageId: n,
        channelId: s
      } = this.props;
    return null == t ? null : (0, r.jsx)("div", {
      className: a()(N.embedProvider, N.embedMargin),
      children: null != t.url ? l({
        className: N.embedLink,
        href: t.url,
        tabIndex: e ? 0 : -1,
        children: t.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: n,
        channelId: s
      }) : (0, r.jsx)("span", {
        children: t.name
      })
    })
  }
  renderAuthor() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          author: t
        },
        renderLinkComponent: l,
        messageId: n,
        channelId: s
      } = this.props;
    return null == t ? null : (0, r.jsxs)("div", {
      className: a()(N.embedAuthor, N.embedMargin),
      children: [null != t.iconProxyURL ? (0, r.jsx)("img", {
        alt: "",
        className: N.embedAuthorIcon,
        src: t.iconProxyURL
      }) : null, null != t.url ? l({
        className: N.embedAuthorNameLink,
        href: t.url,
        tabIndex: e ? 0 : -1,
        children: t.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: n,
        channelId: s
      }) : (0, r.jsx)("span", {
        className: N.embedAuthorName,
        children: t.name
      })]
    })
  }
  renderTitle() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: t,
        renderLinkComponent: l,
        renderTitle: n,
        messageId: s,
        channelId: i
      } = this.props,
      {
        rawTitle: o,
        url: d
      } = t;
    return null == o ? null : (0, r.jsx)("div", {
      className: a()(N.embedTitle, N.embedMargin),
      children: null != d ? l({
        className: N.embedTitleLink,
        href: d,
        tabIndex: e ? 0 : -1,
        children: n(t, o),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: s,
        channelId: i
      }) : n(t, o)
    })
  }
  renderDescription() {
    let {
      embed: e,
      renderDescription: t
    } = this.props, {
      rawDescription: l
    } = e;
    return null == l ? null : (0, r.jsx)("div", {
      className: a()(N.embedDescription, N.embedMargin),
      children: t(e, l, !1)
    })
  }
  renderThumbnail() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          thumbnail: t
        },
        maxThumbnailWidth: l,
        maxThumbnailHeight: n,
        renderImageComponent: s,
        autoPlayGif: i
      } = this.props;
    return null == t ? null : (0, r.jsx)(I.MessagesInteractionContext.Consumer, {
      children: r => {
        let {
          disableAnimations: a
        } = r;
        return s({
          containerClassName: N.embedThumbnail,
          src: (0, w.getBestEffortSrcUrl)(t),
          original: t.url,
          width: t.width,
          height: t.height,
          maxWidth: l,
          maxHeight: n,
          shouldLink: e,
          autoPlay: i && !a
        })
      }
    })
  }
  renderFields() {
    let {
      embed: e
    } = this.props, {
      fields: t
    } = e;
    if (null == t || 0 === t.length) return null;
    let l = [],
      n = null;
    return t.forEach(t => {
      let {
        rawName: r,
        rawValue: s,
        inline: i
      } = t;
      !i && null != n && (l.push(n), n = null), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, s, !0)]), (3 === n.length || !i) && (l.push(n), n = null)
    }), null != n && l.push(n), (0, r.jsx)("div", {
      className: N.embedFields,
      children: l.map((e, t) => {
        let {
          length: l
        } = e;
        return e.map((e, n) => {
          let [s, i] = e;
          return (0, r.jsxs)("div", {
            className: N.embedField,
            style: {
              gridColumn: function(e, t) {
                let l = 12 / t,
                  n = e * l;
                return "".concat(n + 1, " / ").concat(n + l + 1)
              }(n, l)
            },
            children: [(0, r.jsx)("div", {
              className: N.embedFieldName,
              children: s
            }), (0, r.jsx)("div", {
              className: N.embedFieldValue,
              children: i
            })]
          }, "".concat(t, "-").concat(n))
        })
      })
    })
  }
  renderImages() {
    let {
      hiddenSpoiler: e = !1,
      isVisible: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: l
    } = this.props, {
      maxMediaHeight: n
    } = this.state;
    if (null == l.images) return null;
    let [s, i, a, o] = l.images.map(n => this.renderImage({
      hiddenSpoiler: e,
      isVisible: t,
      image: n,
      isGalleryImage: !0,
      allImages: l.images
    }));
    return null == s && null == i && null == a && null == o ? null : (0, r.jsxs)("div", {
      className: N.embedGalleryImagesWrapper,
      style: {
        height: n
      },
      children: [(0, r.jsxs)("div", {
        className: N.embedGallerySide,
        children: [s, null != o && a]
      }), (0, r.jsxs)("div", {
        className: N.embedGallerySide,
        children: [i, null == o && null != a && a, null != o && o]
      })]
    })
  }
  renderImage() {
    let {
      hiddenSpoiler: e = !1,
      isVisible: t = !0,
      image: l,
      isGalleryImage: n = !1,
      alt: s = S.default.Messages.IMAGE,
      allImages: i = null
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: o,
      className: d,
      autoPlayGif: u
    } = this.props, {
      maxMediaWidth: c,
      maxMediaHeight: h
    } = this.state;
    if (null == l) return null;
    let m = (0, w.getBestEffortSrcUrl)(l),
      p = null == i ? {} : (0, M.createMediaOnClickOverrides)(i.map(M.carouselAssetFromImageEmbed)),
      g = b.default.isAnimated({
        src: (0, w.getBestEffortSrcUrl)(l),
        original: l.url,
        animated: !1
      }),
      f = {
        containerClassName: a()(d, {
          [N.embedMedia]: !n,
          [N.embedImage]: !n,
          [N.galleryImage]: n
        }),
        imageContainerClassName: n ? N.galleryImageContainer : void 0,
        imageClassName: n ? N.embedGalleryImageElement : void 0,
        src: (0, w.getBestEffortSrcUrl)(l),
        alt: s,
        responsive: !0,
        limitResponsiveWidth: !n,
        width: l.width,
        height: l.height,
        maxWidth: c,
        maxHeight: h,
        original: l.url,
        shouldLink: t,
        disableAltTextDisplay: !0,
        hiddenSpoilers: e,
        placeholder: l.placeholder,
        placeholderVersion: l.placeholderVersion
      };
    return m in p && (f.onClick = p[m]), (0, r.jsx)(E.GIFAccessoryContext.Consumer, {
      children: t => (0, r.jsx)(I.MessagesInteractionContext.Consumer, {
        children: l => {
          let {
            disableAnimations: n
          } = l;
          return o({
            ...f,
            autoPlay: u && !n && !e,
            renderAccessory: g ? t : null
          })
        }
      }, l.url)
    })
  }
  renderVideo() {
    let {
      gifv: e = !1,
      isVisible: t = !0,
      hiddenSpoiler: l = !1
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: {
        url: n,
        thumbnail: s,
        video: i,
        provider: a
      },
      renderVideoComponent: o,
      renderImageComponent: d,
      renderLinkComponent: u,
      allowFullScreen: c,
      autoPlayGif: h,
      messageId: m,
      channelId: p,
      obscureReason: g
    } = this.props, {
      maxMediaWidth: f,
      maxMediaHeight: b
    } = this.state;
    if (null == n || null == s) return null;
    if (e) return null == i ? null : (0, r.jsx)(I.MessagesInteractionContext.Consumer, {
      children: e => {
        let {
          disableAnimations: a
        } = e;
        return (0, r.jsx)(O, {
          className: N.embedMedia,
          href: n,
          thumbnail: s,
          video: i,
          maxWidth: f,
          maxHeight: b,
          responsive: !0,
          autoPlay: !l && h && !a && t,
          renderImageComponent: d,
          playable: t,
          hiddenSpoilers: l,
          disableAltTextDisplay: null != g,
          placeholder: i.placeholder,
          placeholderVersion: i.placeholderVersion
        })
      }
    });
    return (0, r.jsx)(_, {
      className: N.embedMedia,
      href: n,
      allowFullScreen: c,
      thumbnail: s,
      video: i,
      provider: null == a ? void 0 : a.name,
      maxWidth: f,
      maxHeight: b,
      responsive: !0,
      renderImageComponent: d,
      renderVideoComponent: o,
      renderLinkComponent: u,
      onControlsShow: () => {
        this.setState({
          videoControlsShown: !0
        })
      },
      onControlsHide: () => {
        this.setState({
          videoControlsShown: !1
        })
      },
      playable: t && !l,
      messageId: m,
      channelId: p,
      placeholder: null == i ? void 0 : i.placeholder,
      placeholderVersion: null == i ? void 0 : i.placeholderVersion
    })
  }
  renderFooter() {
    let {
      footer: e,
      timestamp: t
    } = this.props.embed;
    if (null != e) {
      let l = null != e.iconProxyURL && "" !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
      return (0, r.jsxs)("div", {
        className: a()(N.embedFooter, N.embedMargin),
        children: [null != l ? (0, r.jsx)("img", {
          alt: "",
          className: N.embedFooterIcon,
          src: l
        }) : null, (0, r.jsxs)("span", {
          className: N.embedFooterText,
          children: [e.text, null != e.text && null != t ? (0, r.jsx)("span", {
            className: N.embedFooterSeparator,
            children: "•"
          }) : null, null != t ? (0, c.calendarFormat)(t) : null]
        })]
      })
    }
    if (null != t) return (0, r.jsx)("div", {
      className: a()(N.embedFooter, N.embedMargin),
      children: (0, r.jsx)("span", {
        className: N.embedFooterText,
        children: (0, c.calendarFormat)(t)
      })
    })
  }
  renderMedia() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        embed: t
      } = this.props,
      {
        isVisible: l
      } = this.state;
    switch (t.type) {
      case T.MessageEmbedTypes.GIFV:
        return this.renderVideo({
          gifv: !0,
          hiddenSpoiler: e,
          isVisible: l
        });
      case T.MessageEmbedTypes.VIDEO:
      default:
        if (null != t.video) return this.renderVideo({
          gifv: !1,
          hiddenSpoiler: e,
          isVisible: l
        });
        if (null != t.images) return this.renderImages({
          hiddenSpoiler: e,
          isVisible: l
        });
        return this.renderImage({
          hiddenSpoiler: e,
          isVisible: l,
          image: t.image,
          alt: t.rawTitle
        })
    }
  }
  renderAll() {
    let e, t;
    let {
      embed: l,
      hideMedia: n
    } = this.props, {
      isVisible: r
    } = this.state, s = this.renderProvider(r), i = this.renderAuthor(r), a = this.renderTitle(r);
    switch (l.type) {
      case T.MessageEmbedTypes.IMAGE:
      case T.MessageEmbedTypes.VIDEO:
      case T.MessageEmbedTypes.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let o = this.renderFields();
    !n && (t = this.renderMedia(!r));
    let d = this.renderFooter(),
      u = null == t;
    return l.type === T.MessageEmbedTypes.RICH && (u = null == l.video), {
      provider: s,
      author: i,
      title: a,
      description: e,
      thumbnail: !n && u ? this.renderThumbnail(r) : null,
      fields: o,
      media: t,
      footer: d
    }
  }
  getMaxWidth() {
    let {
      embed: {
        image: e,
        images: t,
        video: l,
        type: n
      }
    } = this.props, {
      maxMediaWidth: r,
      maxMediaHeight: s
    } = this.state, i = null != e ? e : l;
    if (null == i) return;
    let {
      width: a
    } = (0, m.fit)({
      width: i.width,
      height: i.height,
      maxWidth: r,
      maxHeight: s
    });
    return n === T.MessageEmbedTypes.VIDEO || a >= 300 ? a + 32 : n === T.MessageEmbedTypes.RICH && void 0 !== t ? 520 : void 0
  }
  isInline() {
    let {
      hideMedia: e,
      embed: t
    } = this.props;
    return !e && (0, h.isEmbedInline)(t)
  }
  renderSuppressButton(e) {
    return (0, r.jsx)(o.Clickable, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: N.embedSuppressButton,
      onClick: e,
      "aria-label": S.default.Messages.SUPPRESS_ALL_EMBEDS,
      children: (0, r.jsx)(C.default, {
        width: 16,
        height: 16
      })
    })
  }
  usesJustifiedAutoStyle() {
    let {
      embed: e
    } = this.props;
    return e.type === T.MessageEmbedTypes.IMAGE || e.type === T.MessageEmbedTypes.VIDEO || e.type === T.MessageEmbedTypes.GIFV || (e.type === T.MessageEmbedTypes.RICH || e.type === T.MessageEmbedTypes.ARTICLE) && (null != e.video || null != e.image)
  }
  getEmbedColor(e) {
    let {
      color: t
    } = this.props.embed;
    return null != t && "#ffffff" === t.toLowerCase() || e ? void 0 : t
  }
  getSpoilerStyles(e) {
    let {
      embed: {
        image: t,
        images: l,
        video: n,
        type: r
      }
    } = this.props, {
      maxMediaWidth: s,
      maxMediaHeight: i
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let a = e ? void 0 : this.getMaxWidth();
    if (void 0 === a && void 0 === l && r !== T.MessageEmbedTypes.RICH) {
      let e = null != t ? t : n;
      if (void 0 !== e) {
        let {
          width: t
        } = (0, m.fit)({
          width: e.width,
          height: e.height,
          maxWidth: s,
          maxHeight: i
        });
        a = t
      }
    }
    return {
      maxWidth: void 0 === a ? "max-content" : a,
      justifySelf: "auto"
    }
  }
  render() {
    var e, t;
    let {
      embed: l,
      obscureReason: n,
      className: s
    } = this.props;
    return (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === "Spotify" ? (0, r.jsx)(y.default, {
      embed: l,
      className: s
    }) : (null === (t = l.provider) || void 0 === t ? void 0 : t.name) === "Amazon Music" && l.type === T.MessageEmbedTypes.RICH ? (0, r.jsx)(p.default, {
      embed: l,
      className: s
    }) : this.isInline() ? null != n ? (0, r.jsx)(x.default, {
      type: x.default.Types.ATTACHMENT,
      reason: n,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!0),
      obscurityControlClassName: a()({
        [N.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != n ? (0, r.jsx)(x.default, {
      type: x.default.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: n,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!1),
      children: this.renderEmbedContent
    }) : this.renderEmbedContent()
  }
  constructor(...e) {
    var t;
    super(...e), t = this, A(this, "state", {
      isVisible: null == this.props.obscureReason,
      videoControlsShown: !1,
      ...(0, h.getMaxEmbedMediaSize)(this.props.embed)
    }), A(this, "onReveal", () => {
      this.setState({
        isVisible: !0
      })
    }), A(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), A(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          obscureReason: l,
          className: n
        } = t.props;
      return (0, r.jsx)("div", {
        "aria-hidden": e,
        className: a()(N.inlineMediaEmbed, n, {
          [N.spoilerAttachment]: l === d.ObscureReason.SPOILER,
          [N.hiddenExplicitAttachment]: null != l && [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(l),
          [N.isHidden]: e,
          [N.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        children: t.renderMedia(e)
      })
    }), A(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          className: l,
          onSuppressEmbed: n,
          obscureReason: s
        } = t.props,
        {
          provider: i,
          author: o,
          title: u,
          description: c,
          fields: h,
          thumbnail: m,
          media: p,
          footer: g
        } = t.renderAll();
      return (0, r.jsx)("article", {
        className: a()(l, N.embedFull, j.markup, {
          [N.isHidden]: e,
          [N.spoilerEmbed]: s === d.ObscureReason.SPOILER,
          [N.hiddenExplicitEmbed]: null != s && [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s),
          [N.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth()
        },
        children: (0, r.jsx)("div", {
          className: N.gridContainer,
          children: (0, r.jsxs)("div", {
            className: a()({
              [N.grid]: !0,
              [N.hasThumbnail]: null != m
            }),
            children: [null != n ? t.renderSuppressButton(n) : null, i, o, u, c, h, p, m, g]
          })
        })
      })
    })
  }
}
A(V, "defaultProps", {
  hideMedia: !1,
  allowFullScreen: !0,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80
})
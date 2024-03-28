"use strict";
a.r(t), a("47120");
var n = a("735250"),
  l = a("470079"),
  s = a("803997"),
  r = a.n(s),
  o = a("913527"),
  i = a.n(o),
  c = a("481060"),
  u = a("299379"),
  d = a("454585"),
  h = a("524444"),
  p = a("529815"),
  g = a("250496"),
  f = a("285952"),
  C = a("662435"),
  m = a("464198"),
  x = a("985806"),
  _ = a("810090"),
  v = a("55406"),
  L = a("981631"),
  k = a("689938"),
  E = a("119970"),
  R = a("609354");

function S(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let N = d.default.reactParserFor(v.default.getDefaultRules(E)),
  A = {};
class M extends l.PureComponent {
  track(e, t, a) {
    this.props.track(e, t, a)
  }
  renderFooter() {
    return (0, n.jsxs)("div", {
      className: E.footer,
      children: [(0, n.jsx)(c.Anchor, {
        "aria-label": k.default.Messages.TWITTER,
        className: E.socialLink,
        href: (0, u.default)(L.LocalizedLinks.TWITTER),
        target: "blank",
        children: (0, n.jsx)(x.default, {})
      }), (0, n.jsx)(c.Anchor, {
        "aria-label": k.default.Messages.FACEBOOK,
        className: E.socialLink,
        href: L.SOCIAL_LINKS.FACEBOOK_URL,
        target: "blank",
        children: (0, n.jsx)(C.default, {})
      }), (0, n.jsx)(c.Anchor, {
        "aria-label": k.default.Messages.INSTAGRAM,
        className: E.socialLink,
        href: L.SOCIAL_LINKS.INSTAGRAM_URL,
        target: "blank",
        children: (0, n.jsx)(m.default, {})
      }), (0, n.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: k.default.Messages.FOLLOW_US_FOR_MORE_UPDATES
      })]
    })
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = e.youtube_video_id, l = e.video, s = e.image;
    if (null != t && "" !== t) return (0, n.jsx)(p.EmbedVideo, {
      className: r()(E.video),
      allowFullScreen: !1,
      href: "https://youtu.be/".concat(t),
      thumbnail: {
        url: "https://i.ytimg.com/vi/".concat(t, "/maxresdefault.jpg"),
        width: 451,
        height: 254
      },
      video: {
        url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
        width: 451,
        height: 254
      },
      provider: g.SupportedEmbedIFrame.YOUTUBE,
      maxWidth: 451,
      maxHeight: 254,
      renderVideoComponent: h.renderVideoComponent,
      renderImageComponent: h.renderImageComponent,
      renderLinkComponent: h.renderMaskedLinkComponent,
      onPlay: () => {
        this.track(L.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
      }
    });
    if (null != l && "" !== l) {
      let e = l.startsWith("https://") ? l : a("302731")("../../images/change-log/".concat(l).replace("../../images/change-log/", "./"));
      return (0, n.jsx)(_.default, {
        src: e,
        poster: s,
        width: 451,
        height: 254,
        loop: !0,
        muted: !0,
        autoPlay: !0,
        className: E.video,
        onPlay: () => {
          this.track(L.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
        }
      })
    }
    if (null == s || "" === s) return null;
    else {
      let e = s.startsWith("https://") ? s : a("302731")("../../images/change-log/".concat(s).replace("../../images/change-log/", "./"));
      return (0, n.jsx)("img", {
        className: E.image,
        alt: "",
        src: e,
        width: 451,
        height: 254
      })
    }
  }
  render() {
    let {
      changeLog: e
    } = this.props;
    return (0, n.jsxs)(c.ModalRoot, {
      transitionState: c.ModalTransitionState.ENTERED,
      className: R.modal,
      children: [(0, n.jsxs)(c.ModalHeader, {
        align: f.default.Justify.BETWEEN,
        separator: !1,
        children: [this.renderHeader(), (0, n.jsx)(f.default.Child, {
          grow: 0,
          children: (0, n.jsx)(c.ModalCloseButton, {
            onClick: this.props.onClose
          })
        })]
      }), (0, n.jsx)(c.ModalContent, {
        className: r()(R.content, E.container, {}),
        scrollerRef: this.scrollerRef,
        onScroll: this.handleScroll,
        children: (0, n.jsxs)("div", {
          tabIndex: 0,
          role: "region",
          "aria-label": k.default.Messages.CHANGELOG_CONTENT_LABEL,
          children: [this.renderVideo(), N(e.body, !1, {
            changeLog: this,
            interpolations: A,
            onLinkClick: this.trackLinkClick
          })]
        })
      }), (0, n.jsx)(c.ModalFooter, {
        direction: f.default.Direction.HORIZONTAL,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "scrollerRef", l.createRef()), S(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, a;
        null === (t = (a = this.props).onScroll) || void 0 === t || t.call(a, e)
      }
    }), S(this, "trackLinkClick", e => {
      this.props.track(L.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, !1)
    }), S(this, "renderHeader", () => {
      let {
        changeLog: e
      } = this.props;
      return (0, n.jsxs)(f.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: k.default.Messages.WHATS_NEW
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: E.date,
          children: k.default.Messages.WHATS_NEW_DATE.format({
            date: null != e.date && "" !== e.date ? i()(e.date).toDate() : new Date
          })
        })]
      })
    })
  }
}
t.default = M
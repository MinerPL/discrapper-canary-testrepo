"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  r = n.n(s),
  o = n("866227"),
  i = n.n(o),
  c = n("77078"),
  u = n("15649"),
  d = n("367376"),
  h = n("933629"),
  p = n("560176"),
  g = n("633667"),
  f = n("145131"),
  C = n("762740"),
  m = n("369952"),
  x = n("15435"),
  _ = n("58608"),
  v = n("142367"),
  L = n("49111"),
  k = n("782340"),
  E = n("76050"),
  R = n("79571");
let S = d.default.reactParserFor(v.default.getDefaultRules(E)),
  N = {};
class A extends l.PureComponent {
  track(e, t, n) {
    this.props.track(e, t, n)
  }
  renderFooter() {
    return (0, a.jsxs)("div", {
      className: E.footer,
      children: [(0, a.jsx)(c.Anchor, {
        "aria-label": k.default.Messages.TWITTER,
        className: E.socialLink,
        href: (0, u.default)(L.LocalizedLinks.TWITTER),
        target: "blank",
        children: (0, a.jsx)(x.default, {})
      }), (0, a.jsx)(c.Anchor, {
        "aria-label": k.default.Messages.FACEBOOK,
        className: E.socialLink,
        href: L.SOCIAL_LINKS.FACEBOOK_URL,
        target: "blank",
        children: (0, a.jsx)(C.default, {})
      }), (0, a.jsx)(c.Anchor, {
        "aria-label": k.default.Messages.INSTAGRAM,
        className: E.socialLink,
        href: L.SOCIAL_LINKS.INSTAGRAM_URL,
        target: "blank",
        children: (0, a.jsx)(m.default, {})
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: k.default.Messages.FOLLOW_US_FOR_MORE_UPDATES
      })]
    })
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = e.youtube_video_id, l = e.video, s = e.image;
    if (null != t && "" !== t) return (0, a.jsx)(p.EmbedVideo, {
      className: r(E.video),
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
      let e = l.startsWith("https://") ? l : n("291802")("../../images/change-log/".concat(l).replace("../../images/change-log/", "./"));
      return (0, a.jsx)(_.default, {
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
      let e = s.startsWith("https://") ? s : n("291802")("../../images/change-log/".concat(s).replace("../../images/change-log/", "./"));
      return (0, a.jsx)("img", {
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
    return (0, a.jsxs)(c.ModalRoot, {
      transitionState: c.ModalTransitionState.ENTERED,
      className: R.modal,
      children: [(0, a.jsxs)(c.ModalHeader, {
        align: f.default.Justify.BETWEEN,
        separator: !1,
        children: [this.renderHeader(), (0, a.jsx)(f.default.Child, {
          grow: 0,
          children: (0, a.jsx)(c.ModalCloseButton, {
            onClick: this.props.onClose
          })
        })]
      }), (0, a.jsx)(c.ModalContent, {
        className: r(R.content, E.container, {}),
        scrollerRef: this.scrollerRef,
        onScroll: this.handleScroll,
        children: (0, a.jsxs)("div", {
          tabIndex: 0,
          role: "region",
          "aria-label": k.default.Messages.CHANGELOG_CONTENT_LABEL,
          children: [this.renderVideo(), S(e.body, !1, {
            changeLog: this,
            interpolations: N,
            onLinkClick: this.trackLinkClick
          })]
        })
      }), (0, a.jsx)(c.ModalFooter, {
        direction: f.default.Direction.HORIZONTAL,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), this.scrollerRef = l.createRef(), this.handleScroll = () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, n;
        null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e)
      }
    }, this.trackLinkClick = e => {
      this.props.track(L.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, !1)
    }, this.renderHeader = () => {
      let {
        changeLog: e
      } = this.props;
      return (0, a.jsxs)(f.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: k.default.Messages.WHATS_NEW
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: E.date,
          children: k.default.Messages.WHATS_NEW_DATE.format({
            date: null != e.date && "" !== e.date ? i(e.date).toDate() : new Date
          })
        })]
      })
    }
  }
}
var M = A
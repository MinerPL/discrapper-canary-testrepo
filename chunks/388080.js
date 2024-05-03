"use strict";
l.r(t), l("47120");
var a = l("735250"),
  n = l("470079"),
  r = l("120356"),
  s = l.n(r),
  o = l("913527"),
  i = l.n(o),
  c = l("481060"),
  d = l("299379"),
  u = l("454585"),
  h = l("524444"),
  C = l("529815"),
  g = l("250496"),
  f = l("285952"),
  m = l("662435"),
  p = l("464198"),
  x = l("985806"),
  L = l("810090"),
  v = l("55406"),
  E = l("981631"),
  N = l("689938"),
  j = l("126798"),
  S = l("452487");

function A(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let _ = u.default.reactParserFor(v.default.getDefaultRules(j)),
  w = {};
class O extends n.PureComponent {
  track(e, t, l) {
    this.props.track(e, t, l)
  }
  renderFooter() {
    return (0, a.jsxs)("div", {
      className: j.footer,
      children: [(0, a.jsx)(c.Anchor, {
        "aria-label": N.default.Messages.TWITTER,
        className: j.socialLink,
        href: (0, d.default)(E.LocalizedLinks.TWITTER),
        target: "blank",
        children: (0, a.jsx)(x.default, {})
      }), (0, a.jsx)(c.Anchor, {
        "aria-label": N.default.Messages.FACEBOOK,
        className: j.socialLink,
        href: E.SOCIAL_LINKS.FACEBOOK_URL,
        target: "blank",
        children: (0, a.jsx)(m.default, {})
      }), (0, a.jsx)(c.Anchor, {
        "aria-label": N.default.Messages.INSTAGRAM,
        className: j.socialLink,
        href: E.SOCIAL_LINKS.INSTAGRAM_URL,
        target: "blank",
        children: (0, a.jsx)(p.default, {})
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: N.default.Messages.FOLLOW_US_FOR_MORE_UPDATES
      })]
    })
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = e.youtube_video_id, n = e.video, r = e.image;
    if (null != t && "" !== t) return (0, a.jsx)(C.EmbedVideo, {
      className: s()(j.video),
      allowFullScreen: !1,
      href: "https://youtu.be/".concat(t),
      thumbnail: {
        url: "https://i.ytimg.com/vi/".concat(t, "/hqdefault.jpg"),
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
        this.track(E.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
      }
    });
    if (null != n && "" !== n) {
      let e = n.startsWith("https://") ? n : l("866483")("../../images/change-log/".concat(n).replace("../../images/change-log/", "./"));
      return (0, a.jsx)(L.default, {
        src: e,
        poster: r,
        width: 451,
        height: 254,
        loop: !0,
        muted: !0,
        autoPlay: !0,
        className: j.video,
        onPlay: () => {
          this.track(E.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
        }
      })
    }
    if (null == r || "" === r) return null;
    else {
      let e = r.startsWith("https://") ? r : l("866483")("../../images/change-log/".concat(r).replace("../../images/change-log/", "./"));
      return (0, a.jsx)("img", {
        className: j.image,
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
      className: S.modal,
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
        className: s()(S.content, j.container, {}),
        scrollerRef: this.scrollerRef,
        onScroll: this.handleScroll,
        children: (0, a.jsxs)("div", {
          tabIndex: 0,
          role: "region",
          "aria-label": N.default.Messages.CHANGELOG_CONTENT_LABEL,
          children: [this.renderVideo(), _(e.body, !1, {
            changeLog: this,
            interpolations: w,
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
    super(...e), A(this, "scrollerRef", n.createRef()), A(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, l;
        null === (t = (l = this.props).onScroll) || void 0 === t || t.call(l, e)
      }
    }), A(this, "trackLinkClick", e => {
      this.props.track(E.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, !1)
    }), A(this, "renderHeader", () => {
      let {
        changeLog: e
      } = this.props;
      return (0, a.jsxs)(f.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: N.default.Messages.WHATS_NEW
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: j.date,
          children: N.default.Messages.WHATS_NEW_DATE.format({
            date: null != e.date && "" !== e.date ? i()(e.date).toDate() : new Date
          })
        })]
      })
    })
  }
}
t.default = O
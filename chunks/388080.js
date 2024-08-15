n(47120);
var l = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(913527),
  i = n.n(s),
  c = n(481060),
  d = n(446411),
  h = n(468846),
  u = n(600164),
  g = n(70097),
  m = n(299379),
  p = n(454585),
  x = n(524444),
  f = n(55406),
  _ = n(981631),
  E = n(689938),
  C = n(907021),
  N = n(47964);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let S = p.Z.reactParserFor(f.Z.getDefaultRules(C)),
  j = {};
class O extends r.PureComponent {
  track(e, t, n) {
this.props.track(e, t, n);
  }
  renderFooter() {
return (0, l.jsxs)('div', {
  className: C.footer,
  children: [
    (0, l.jsx)(c.Anchor, {
      'aria-label': E.Z.Messages.TWITTER,
      className: C.socialLink,
      href: (0, m.Z)(_.RK.TWITTER),
      target: 'blank',
      children: (0, l.jsx)(c.XNeutralIcon, {
        size: 'xs',
        color: 'currentColor'
      })
    }),
    (0, l.jsx)(c.Anchor, {
      'aria-label': E.Z.Messages.FACEBOOK,
      className: C.socialLink,
      href: _.fK7.FACEBOOK_URL,
      target: 'blank',
      children: (0, l.jsx)(c.FacebookNeutralIcon, {
        size: 'xs',
        color: 'currentColor'
      })
    }),
    (0, l.jsx)(c.Anchor, {
      'aria-label': E.Z.Messages.INSTAGRAM,
      className: C.socialLink,
      href: _.fK7.INSTAGRAM_URL,
      target: 'blank',
      children: (0, l.jsx)(c.InstagramNeutralIcon, {
        size: 'xs',
        color: 'currentColor'
      })
    }),
    (0, l.jsx)(c.Text, {
      variant: 'text-xs/normal',
      children: E.Z.Messages.FOLLOW_US_FOR_MORE_UPDATES
    })
  ]
});
  }
  renderVideo() {
let {
  changeLog: e
} = this.props, t = e.youtube_video_id, r = e.video, a = e.image;
if (null != t && '' !== t)
  return (0, l.jsx)(d.BC, {
    className: o()(C.video),
    allowFullScreen: !1,
    href: 'https://youtu.be/'.concat(t),
    thumbnail: {
      url: 'https://i.ytimg.com/vi/'.concat(t, '/hqdefault.jpg'),
      width: 451,
      height: 254
    },
    video: {
      url: 'https://www.youtube.com/embed/'.concat(t, '?vq=large&rel=0&controls=0&showinfo=0'),
      width: 451,
      height: 254
    },
    provider: h.pn.YOUTUBE,
    maxWidth: 451,
    maxHeight: 254,
    renderVideoComponent: x.lV,
    renderImageComponent: x.Yi,
    renderLinkComponent: x.iT,
    onPlay: () => {
      this.track(_.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
    }
  });
if (null != r && '' !== r) {
  let e = r.startsWith('https://') ? r : n(595173)('./'.concat(r));
  return (0, l.jsx)(g.Z, {
    src: e,
    poster: a,
    width: 451,
    height: 254,
    loop: !0,
    muted: !0,
    autoPlay: !0,
    className: C.video,
    onPlay: () => {
      this.track(_.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
    }
  });
}
if (null == a || '' === a)
  return null;
else {
  let e = a.startsWith('https://') ? a : n(595173)('./'.concat(a));
  return (0, l.jsx)('img', {
    className: C.image,
    alt: '',
    src: e,
    width: 451,
    height: 254
  });
}
  }
  render() {
let {
  changeLog: e
} = this.props;
return (0, l.jsxs)(c.ModalRoot, {
  transitionState: c.ModalTransitionState.ENTERED,
  className: N.modal,
  children: [
    (0, l.jsxs)(c.ModalHeader, {
      align: u.Z.Justify.BETWEEN,
      separator: !1,
      children: [
        this.renderHeader(),
        (0, l.jsx)(u.Z.Child, {
          grow: 0,
          children: (0, l.jsx)(c.ModalCloseButton, {
            onClick: this.props.onClose
          })
        })
      ]
    }),
    (0, l.jsx)(c.ModalContent, {
      className: o()(N.content, C.container, {}),
      scrollerRef: this.scrollerRef,
      onScroll: this.handleScroll,
      children: (0, l.jsxs)('div', {
        tabIndex: 0,
        role: 'region',
        'aria-label': E.Z.Messages.CHANGELOG_CONTENT_LABEL,
        children: [
          this.renderVideo(),
          S(e.body, !1, {
            changeLog: this,
            interpolations: j,
            onLinkClick: this.trackLinkClick
          })
        ]
      })
    }),
    (0, l.jsx)(c.ModalFooter, {
      direction: u.Z.Direction.HORIZONTAL,
      children: this.renderFooter()
    })
  ]
});
  }
  constructor(...e) {
super(...e), L(this, 'scrollerRef', r.createRef()), L(this, 'handleScroll', () => {
  let {
    current: e
  } = this.scrollerRef;
  if (null != e) {
    var t, n;
    null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e);
  }
}), L(this, 'trackLinkClick', e => {
  this.props.track(_.rMx.CHANGE_LOG_CTA_CLICKED, {
    cta_type: 'inline_link',
    target: e
  }, !1);
}), L(this, 'renderHeader', () => {
  let {
    changeLog: e
  } = this.props;
  return (0, l.jsxs)(u.Z.Child, {
    grow: 1,
    shrink: 1,
    children: [
      (0, l.jsx)(c.Heading, {
        variant: 'heading-lg/semibold',
        children: E.Z.Messages.WHATS_NEW
      }),
      (0, l.jsx)(c.Text, {
        variant: 'text-xs/normal',
        className: C.date,
        children: E.Z.Messages.WHATS_NEW_DATE.format({
          date: null != e.date && '' !== e.date ? i()(e.date).toDate() : new Date()
        })
      })
    ]
  });
});
  }
}
t.Z = O;
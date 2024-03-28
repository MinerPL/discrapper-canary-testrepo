"use strict";
l.r(t), l("47120");
var a, n, s = l("735250"),
  i = l("470079"),
  o = l("803997"),
  r = l.n(o),
  d = l("913527"),
  c = l.n(d),
  u = l("442837"),
  p = l("846519"),
  f = l("212605"),
  m = l("955623"),
  v = l("481060"),
  h = l("100527"),
  C = l("906732"),
  g = l("318374"),
  x = l("717680"),
  L = l("594174"),
  E = l("863840"),
  S = l("792316"),
  N = l("161426"),
  I = l("740727"),
  _ = l("962399"),
  j = l("810090"),
  T = l("626135"),
  M = l("823379"),
  y = l("709054"),
  A = l("39604"),
  P = l("572720"),
  R = l("981631"),
  b = l("689938"),
  D = l("758697"),
  k = l("487466");
(n = a || (a = {})).DELETE = "delete", n.EDIT = "edit", n.SHARE = "share";

function H(e) {
  let {
    clip: t,
    isNew: l,
    videoRef: a
  } = e, n = 0 === t.length, [o, r] = i.useMemo(() => {
    let e = t.length,
      l = !1,
      a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
    return null != a && 1e3 * a < t.length && (e = 1e3 * a, l = !0), [l, c().duration(e)]
  }, [t.length, t.editMetadata]), d = "".concat(r.seconds()).padStart(2, "0");
  return (0, s.jsxs)("div", {
    className: D.clipThumbContainer,
    children: [(0, s.jsx)(B, {
      clip: t,
      videoRef: a
    }), (0, s.jsxs)("div", {
      className: D.clipBadges,
      children: [n && (0, s.jsx)("div", {
        className: D.clipProcessingBadge,
        children: (0, s.jsx)(v.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: b.default.Messages.CLIPS_PROCESSING_BADGE
        })
      }), !n && l && (0, s.jsxs)(v.Text, {
        className: D.clipNewBadge,
        variant: "eyebrow",
        color: "always-white",
        children: [(0, s.jsx)(N.default, {
          className: D.newIcon
        }), b.default.Messages.NEW.toUpperCase()]
      }), !n && (0, s.jsxs)("div", {
        className: D.clipDurationBadge,
        children: [o ? (0, s.jsx)(_.default, {
          className: D.clipDurationEditIcon
        }) : null, (0, s.jsx)(v.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: "".concat(r.minutes(), ":").concat(d)
        })]
      })]
    })]
  })
}

function w(e) {
  var t;
  let {
    clip: l,
    focused: a,
    onFocus: n
  } = e, [o, d] = i.useState(l.name), c = !l.name, [u, p] = i.useState(!1), [h, C] = i.useState(null !== (t = l.name) && void 0 !== t ? t : ""), [g, x] = i.useState(!1), L = async () => {
    x(!0), await (0, A.updateClipMetadata)(l.id, {
      name: "" === h ? void 0 : h
    }), x(!1), p(!1)
  };
  return (i.useEffect(() => {
    if (o !== l.name) {
      var e;
      d(l.name), C(null !== (e = l.name) && void 0 !== e ? e : "")
    }
  }, [l.name, o]), u) ? (0, s.jsx)(v.TextInput, {
    inputClassName: r()(k["heading-lg/medium"], D.clipTitleInput),
    onClick: e => e.stopPropagation(),
    value: h,
    autoFocus: !0,
    onKeyDown: e => {
      "Enter" === e.key && L()
    },
    disabled: g,
    onChange: C,
    onBlur: L
  }) : (0, s.jsxs)(v.Clickable, {
    className: D.clipTitleInputPlaceholder,
    onFocus: n,
    onClick: e => {
      e.stopPropagation(), p(!0)
    },
    children: [c ? (0, s.jsx)(v.Heading, {
      className: D.clipTitle,
      color: "text-muted",
      variant: "heading-lg/medium",
      children: b.default.Messages.CLIPS_ADD_A_TITLE
    }) : (0, s.jsx)(v.Heading, {
      className: D.clipTitle,
      color: "text-normal",
      variant: "heading-lg/medium",
      children: l.name
    }), a && (0, s.jsx)(m.PencilIcon, {
      "aria-label": b.default.Messages.EDIT,
      color: v.tokens.colors.TEXT_MUTED,
      height: f.ICON_SIZE.sm,
      width: f.ICON_SIZE.sm,
      className: D.clipTitleIcon
    })]
  })
}

function B(e) {
  let {
    clip: t,
    videoRef: l
  } = e, a = (0, P.useClipProtocolURL)(t);
  return 0 === t.length ? (0, s.jsx)(v.Spinner, {
    type: v.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
    className: D.clipThumb
  }) : null != a ? (0, s.jsx)(j.default, {
    preload: "metadata",
    muted: !0,
    poster: t.thumbnail,
    src: a,
    loop: !0,
    className: D.clipThumb,
    ref: l
  }) : (0, s.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: D.clipThumb
  })
}

function V(e) {
  let {
    clip: t,
    exporting: l,
    actionsDisabled: a,
    onBeforeDelete: n,
    onDelete: o,
    onEdit: r,
    onShare: d,
    onBlur: c
  } = e, u = (0, x.default)(), p = i.useCallback(e => {
    e.stopPropagation(), e.shiftKey ? (n(), (0, A.deleteClip)(t.filepath)) : o(t, n), T.default.track(R.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "delete"
    })
  }, [o, n, t]), f = i.useCallback(e => {
    e.stopPropagation(), r(t), T.default.track(R.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "edit"
    })
  }, [r, t]), m = i.useCallback(e => {
    e.stopPropagation(), d(t), T.default.track(R.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "share"
    })
  }, [d, t]);
  return (0, s.jsxs)("div", {
    className: D.buttonContainer,
    children: [null != o && (0, s.jsx)(v.Tooltip, {
      text: b.default.Messages.DELETE,
      children: e => (0, s.jsx)(v.Button, {
        ...e,
        disabled: a,
        color: u ? v.Button.Colors.RED : v.Button.Colors.PRIMARY,
        onClick: p,
        className: D.button,
        size: v.Button.Sizes.NONE,
        look: v.Button.Looks.FILLED,
        children: (0, s.jsx)(I.default, {
          className: D.miniIcon
        })
      })
    }), (0, s.jsx)(v.Tooltip, {
      text: b.default.Messages.EDIT,
      children: e => (0, s.jsx)(v.Button, {
        ...e,
        disabled: a,
        color: v.Button.Colors.PRIMARY,
        onClick: f,
        className: D.button,
        size: v.Button.Sizes.NONE,
        look: v.Button.Looks.FILLED,
        children: (0, s.jsx)(_.default, {
          className: D.miniIcon
        })
      })
    }), (0, s.jsx)(v.Tooltip, {
      text: b.default.Messages.SHARE,
      children: e => {
        let {
          onBlur: t,
          ...n
        } = e;
        return (0, s.jsx)(v.Button, {
          ...n,
          disabled: a && !l,
          submitting: l,
          color: v.Button.Colors.BRAND,
          onBlur: e => {
            c(e), null == t || t()
          },
          onClick: m,
          className: D.button,
          size: v.Button.Sizes.NONE,
          look: v.Button.Looks.FILLED,
          children: (0, s.jsx)(S.default, {
            className: D.miniIcon
          })
        })
      }
    })]
  })
}
t.default = function(e) {
  var t, l, a;
  let {
    clip: n,
    exporting: o,
    actionsDisabled: d,
    isNew: c,
    onDelete: f,
    onEdit: m,
    onShare: x
  } = e, S = (0, u.useStateFromStoresArray)([L.default], () => n.users.map(e => L.default.getUser(e)).filter(M.isNotNullish)), {
    analyticsLocations: N
  } = (0, C.default)(h.default.CLIPS_GALLERY_ITEM), [I, _] = i.useState(!1), j = i.useRef(null), A = (0, E.default)(null !== (a = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), P = i.useRef(new p.DelayedCall(500, () => {
    var e;
    let t = j.current;
    null != t && t.paused && (t.currentTime = A.current, null === (e = j.current) || void 0 === e || e.play())
  })), k = i.useCallback(() => {
    let e = j.current;
    null != e && (e.pause(), e.src = "")
  }, []), B = i.useCallback(() => {
    var e;
    _(!0), null === (e = P.current) || void 0 === e || e.delay()
  }, []), O = i.useCallback(() => {
    var e, t, l;
    _(!1);
    let a = j.current;
    null === (e = P.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (l = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0)
  }, [null === (l = n.editMetadata) || void 0 === l ? void 0 : l.start]), F = i.useCallback(e => {
    var t, l;
    (null === (l = e.relatedTarget) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && O()
  }, [O]), z = new Date(y.default.extractTimestamp(n.id)), G = z.toLocaleDateString(), Y = z.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }), U = "".concat(G, " • ").concat(Y);
  return (0, s.jsx)(C.AnalyticsLocationProvider, {
    value: N,
    children: (0, s.jsxs)(v.ClickableContainer, {
      "aria-disabled": d,
      "aria-label": b.default.Messages.EDIT,
      onClick: d ? void 0 : () => {
        m(n), T.default.track(R.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED)
      },
      className: r()(D.clipItem, {
        [D.disabled]: d
      }),
      onBlur: F,
      onFocus: B,
      onMouseOver: B,
      onMouseLeave: O,
      children: [(0, s.jsx)(H, {
        clip: n,
        isNew: c,
        videoRef: j
      }), (0, s.jsxs)("div", {
        className: D.clipFooter,
        children: [(0, s.jsx)(w, {
          clip: n,
          focused: I,
          onFocus: B
        }), (0, s.jsx)(v.Text, {
          className: D.clipMetadata,
          color: "text-normal",
          variant: "text-md/medium",
          children: n.applicationName
        }), (0, s.jsx)(v.Text, {
          className: D.clipMetadata,
          color: "text-normal",
          variant: "text-md/medium",
          children: U
        }), (0, s.jsxs)("div", {
          className: D.usersAndDelete,
          children: [(0, s.jsx)(g.default, {
            maxUsers: 4,
            users: S,
            onFocus: e => {
              var t, l, a, n;
              let s = e.relatedTarget,
                i = null === (l = e.currentTarget.parentElement) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement;
              if ((null == s ? void 0 : s.parentElement) !== i)(null == s ? void 0 : null === (n = s.parentElement) || void 0 === n ? void 0 : null === (a = n.parentElement) || void 0 === a ? void 0 : a.parentElement) !== i && B()
            }
          }), I && (0, s.jsx)(V, {
            clip: n,
            actionsDisabled: d,
            exporting: o,
            onBeforeDelete: k,
            onDelete: f,
            onEdit: m,
            onShare: x,
            onBlur: e => {
              var t;
              (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && O()
            }
          })]
        })]
      })]
    })
  })
}
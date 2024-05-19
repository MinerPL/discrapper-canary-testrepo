"use strict";
l.r(t), l("47120");
var a, n, s = l("735250"),
  i = l("470079"),
  o = l("120356"),
  r = l.n(o),
  u = l("913527"),
  c = l.n(u),
  d = l("442837"),
  f = l("846519"),
  m = l("212605"),
  p = l("955623"),
  C = l("481060"),
  v = l("100527"),
  h = l("906732"),
  g = l("318374"),
  S = l("717680"),
  x = l("594174"),
  E = l("863840"),
  L = l("792316"),
  I = l("161426"),
  N = l("740727"),
  T = l("962399"),
  _ = l("810090"),
  M = l("626135"),
  A = l("823379"),
  j = l("709054"),
  R = l("39604"),
  P = l("572720"),
  b = l("981631"),
  y = l("689938"),
  k = l("847547"),
  D = l("24073");
(n = a || (a = {})).DELETE = "delete", n.EDIT = "edit", n.SHARE = "share";

function w(e) {
  let {
    clip: t,
    isNew: l,
    videoRef: a
  } = e, n = 0 === t.length, [o, r] = i.useMemo(() => {
    let e = t.length,
      l = !1,
      a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
    return null != a && 1e3 * a < t.length && (e = 1e3 * a, l = !0), [l, c().duration(e)]
  }, [t.length, t.editMetadata]), u = "".concat(r.seconds()).padStart(2, "0");
  return (0, s.jsxs)("div", {
    className: k.clipThumbContainer,
    children: [(0, s.jsx)(V, {
      clip: t,
      videoRef: a
    }), (0, s.jsxs)("div", {
      className: k.clipBadges,
      children: [n && (0, s.jsx)("div", {
        className: k.clipProcessingBadge,
        children: (0, s.jsx)(C.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: y.default.Messages.CLIPS_PROCESSING_BADGE
        })
      }), !n && l && (0, s.jsxs)(C.Text, {
        className: k.clipNewBadge,
        variant: "eyebrow",
        color: "always-white",
        children: [(0, s.jsx)(I.default, {
          className: k.newIcon
        }), y.default.Messages.NEW.toUpperCase()]
      }), !n && (0, s.jsxs)("div", {
        className: k.clipDurationBadge,
        children: [o ? (0, s.jsx)(T.default, {
          className: k.clipDurationEditIcon
        }) : null, (0, s.jsx)(C.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: "".concat(r.minutes(), ":").concat(u)
        })]
      })]
    })]
  })
}

function H(e) {
  var t;
  let {
    clip: l,
    focused: a,
    onFocus: n
  } = e, [o, u] = i.useState(l.name), c = !l.name, [d, f] = i.useState(!1), [v, h] = i.useState(null !== (t = l.name) && void 0 !== t ? t : ""), [g, S] = i.useState(!1), x = async () => {
    S(!0), await (0, R.updateClipMetadata)(l.id, {
      name: "" === v ? void 0 : v
    }), S(!1), f(!1)
  };
  return (i.useEffect(() => {
    if (o !== l.name) {
      var e;
      u(l.name), h(null !== (e = l.name) && void 0 !== e ? e : "")
    }
  }, [l.name, o]), d) ? (0, s.jsx)(C.TextInput, {
    inputClassName: r()(D["heading-lg/medium"], k.clipTitleInput),
    onClick: e => e.stopPropagation(),
    value: v,
    autoFocus: !0,
    onKeyDown: e => {
      "Enter" === e.key && x()
    },
    disabled: g,
    onChange: h,
    onBlur: x
  }) : (0, s.jsxs)(C.Clickable, {
    className: k.clipTitleInputPlaceholder,
    onFocus: n,
    onClick: e => {
      e.stopPropagation(), f(!0)
    },
    children: [c ? (0, s.jsx)(C.Heading, {
      className: k.clipTitle,
      color: "text-muted",
      variant: "heading-lg/medium",
      children: y.default.Messages.CLIPS_ADD_A_TITLE
    }) : (0, s.jsx)(C.Heading, {
      className: k.clipTitle,
      color: "text-normal",
      variant: "heading-lg/medium",
      children: l.name
    }), a && (0, s.jsx)(p.PencilIcon, {
      "aria-label": y.default.Messages.EDIT,
      color: C.tokens.colors.TEXT_MUTED,
      height: m.ICON_SIZE.sm,
      width: m.ICON_SIZE.sm,
      className: k.clipTitleIcon
    })]
  })
}

function V(e) {
  let {
    clip: t,
    videoRef: l
  } = e, a = (0, P.useClipProtocolURL)(t);
  return 0 === t.length ? (0, s.jsx)(C.Spinner, {
    type: C.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
    className: k.clipThumb
  }) : null != a ? (0, s.jsx)(_.default, {
    preload: "metadata",
    muted: !0,
    poster: t.thumbnail,
    src: a,
    loop: !0,
    className: k.clipThumb,
    ref: l
  }) : (0, s.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: k.clipThumb
  })
}

function B(e) {
  let {
    clip: t,
    exporting: l,
    actionsDisabled: a,
    onBeforeDelete: n,
    onDelete: o,
    onEdit: r,
    onShare: u,
    onBlur: c
  } = e, d = (0, S.default)(), f = i.useCallback(e => {
    e.stopPropagation(), e.shiftKey ? (n(), (0, R.deleteClip)(t.filepath)) : o(t, n), M.default.track(b.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "delete"
    })
  }, [o, n, t]), m = i.useCallback(e => {
    e.stopPropagation(), r(t), M.default.track(b.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "edit"
    })
  }, [r, t]), p = i.useCallback(e => {
    e.stopPropagation(), u(t), M.default.track(b.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "share"
    })
  }, [u, t]);
  return (0, s.jsxs)("div", {
    className: k.buttonContainer,
    children: [null != o && (0, s.jsx)(C.Tooltip, {
      text: y.default.Messages.DELETE,
      children: e => (0, s.jsx)(C.Button, {
        ...e,
        disabled: a,
        color: d ? C.Button.Colors.RED : C.Button.Colors.PRIMARY,
        onClick: f,
        className: k.button,
        size: C.Button.Sizes.NONE,
        look: C.Button.Looks.FILLED,
        children: (0, s.jsx)(N.default, {
          className: k.miniIcon
        })
      })
    }), (0, s.jsx)(C.Tooltip, {
      text: y.default.Messages.EDIT,
      children: e => (0, s.jsx)(C.Button, {
        ...e,
        disabled: a,
        color: C.Button.Colors.PRIMARY,
        onClick: m,
        className: k.button,
        size: C.Button.Sizes.NONE,
        look: C.Button.Looks.FILLED,
        children: (0, s.jsx)(T.default, {
          className: k.miniIcon
        })
      })
    }), (0, s.jsx)(C.Tooltip, {
      text: y.default.Messages.SHARE,
      children: e => {
        let {
          onBlur: t,
          ...n
        } = e;
        return (0, s.jsx)(C.Button, {
          ...n,
          disabled: a && !l,
          submitting: l,
          color: C.Button.Colors.BRAND,
          onBlur: e => {
            c(e), null == t || t()
          },
          onClick: p,
          className: k.button,
          size: C.Button.Sizes.NONE,
          look: C.Button.Looks.FILLED,
          children: (0, s.jsx)(L.default, {
            className: k.miniIcon
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
    actionsDisabled: u,
    isNew: c,
    onDelete: m,
    onEdit: p,
    onShare: S
  } = e, L = (0, d.useStateFromStoresArray)([x.default], () => n.users.map(e => x.default.getUser(e)).filter(A.isNotNullish)), {
    analyticsLocations: I
  } = (0, h.default)(v.default.CLIPS_GALLERY_ITEM), [N, T] = i.useState(!1), _ = i.useRef(null), R = (0, E.default)(null !== (a = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), P = i.useRef(new f.DelayedCall(500, () => {
    var e;
    let t = _.current;
    null != t && t.paused && (t.currentTime = R.current, null === (e = _.current) || void 0 === e || e.play())
  })), D = i.useCallback(() => {
    let e = _.current;
    null != e && (e.pause(), e.src = "")
  }, []), V = i.useCallback(() => {
    var e;
    T(!0), null === (e = P.current) || void 0 === e || e.delay()
  }, []), G = i.useCallback(() => {
    var e, t, l;
    T(!1);
    let a = _.current;
    null === (e = P.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (l = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0)
  }, [null === (l = n.editMetadata) || void 0 === l ? void 0 : l.start]), Y = i.useCallback(e => {
    var t, l;
    (null === (l = e.relatedTarget) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && G()
  }, [G]), O = new Date(j.default.extractTimestamp(n.id)), F = O.toLocaleDateString(), z = O.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }), U = "".concat(F, " • ").concat(z);
  return (0, s.jsx)(h.AnalyticsLocationProvider, {
    value: I,
    children: (0, s.jsxs)(C.ClickableContainer, {
      "aria-disabled": u,
      "aria-label": y.default.Messages.EDIT,
      onClick: u ? void 0 : () => {
        p(n), M.default.track(b.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED)
      },
      className: r()(k.clipItem, {
        [k.disabled]: u
      }),
      onBlur: Y,
      onFocus: V,
      onMouseOver: V,
      onMouseLeave: G,
      children: [(0, s.jsx)(w, {
        clip: n,
        isNew: c,
        videoRef: _
      }), (0, s.jsxs)("div", {
        className: k.clipFooter,
        children: [(0, s.jsx)(H, {
          clip: n,
          focused: N,
          onFocus: V
        }), (0, s.jsx)(C.Text, {
          className: k.clipMetadata,
          color: "text-normal",
          variant: "text-md/medium",
          children: n.applicationName
        }), (0, s.jsx)(C.Text, {
          className: k.clipMetadata,
          color: "text-normal",
          variant: "text-md/medium",
          children: U
        }), (0, s.jsxs)("div", {
          className: k.usersAndDelete,
          children: [(0, s.jsx)(g.default, {
            maxUsers: 4,
            users: L,
            onFocus: e => {
              var t, l, a, n;
              let s = e.relatedTarget,
                i = null === (l = e.currentTarget.parentElement) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement;
              if ((null == s ? void 0 : s.parentElement) !== i)(null == s ? void 0 : null === (n = s.parentElement) || void 0 === n ? void 0 : null === (a = n.parentElement) || void 0 === a ? void 0 : a.parentElement) !== i && V()
            }
          }), N && (0, s.jsx)(B, {
            clip: n,
            actionsDisabled: u,
            exporting: o,
            onBeforeDelete: D,
            onDelete: m,
            onEdit: p,
            onShare: S,
            onBlur: e => {
              var t;
              (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && G()
            }
          })]
        })]
      })]
    })
  })
}
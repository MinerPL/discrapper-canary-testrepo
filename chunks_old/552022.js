"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("222007");
var a, n, i = l("37983"),
  s = l("884691"),
  r = l("414456"),
  o = l.n(r),
  u = l("866227"),
  d = l.n(u),
  c = l("446674"),
  f = l("862337"),
  p = l("185370"),
  m = l("504318"),
  h = l("77078"),
  E = l("812204"),
  v = l("685665"),
  C = l("730859"),
  _ = l("739034"),
  g = l("697218"),
  L = l("561744"),
  x = l("491920"),
  T = l("826432"),
  I = l("228220"),
  S = l("15165"),
  A = l("58608"),
  N = l("599110"),
  M = l("449008"),
  R = l("299039"),
  P = l("803725"),
  y = l("135284"),
  j = l("49111"),
  D = l("782340"),
  O = l("432261"),
  H = l("323805");
(n = a || (a = {})).DELETE = "delete", n.EDIT = "edit", n.SHARE = "share";
var b = function(e) {
  var t, l, a;
  let {
    clip: n,
    exporting: r,
    actionsDisabled: u,
    isNew: d,
    onDelete: p,
    onEdit: m,
    onShare: _
  } = e, x = (0, c.useStateFromStoresArray)([g.default], () => n.users.map(e => g.default.getUser(e)).filter(M.isNotNullish)), {
    analyticsLocations: T
  } = (0, v.default)(E.default.CLIPS_GALLERY_ITEM), [I, S] = s.useState(!1), A = s.useRef(null), P = (0, L.default)(null !== (a = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), y = s.useRef(new f.DelayedCall(500, () => {
    var e;
    let t = A.current;
    null != t && t.paused && (t.currentTime = P.current, null === (e = A.current) || void 0 === e || e.play())
  })), H = s.useCallback(() => {
    let e = A.current;
    null != e && (e.pause(), e.src = "")
  }, []), b = s.useCallback(() => {
    var e;
    S(!0), null === (e = y.current) || void 0 === e || e.delay()
  }, []), U = s.useCallback(() => {
    var e, t, l;
    S(!1);
    let a = A.current;
    null === (e = y.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (l = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0)
  }, [null === (l = n.editMetadata) || void 0 === l ? void 0 : l.start]), V = s.useCallback(e => {
    var t, l;
    (null === (l = e.relatedTarget) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && U()
  }, [U]), z = new Date(R.default.extractTimestamp(n.id)), F = z.toLocaleDateString(), G = z.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }), Y = "".concat(F, " • ").concat(G);
  return (0, i.jsx)(v.AnalyticsLocationProvider, {
    value: T,
    children: (0, i.jsxs)(h.ClickableContainer, {
      "aria-disabled": u,
      "aria-label": D.default.Messages.EDIT,
      onClick: u ? void 0 : () => {
        m(n), N.default.track(j.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED)
      },
      className: o(O.clipItem, {
        [O.disabled]: u
      }),
      onBlur: V,
      onFocus: b,
      onMouseOver: b,
      onMouseLeave: U,
      children: [(0, i.jsx)(w, {
        clip: n,
        isNew: d,
        videoRef: A
      }), (0, i.jsxs)("div", {
        className: O.clipFooter,
        children: [(0, i.jsx)(k, {
          clip: n,
          focused: I,
          onFocus: b
        }), (0, i.jsx)(h.Text, {
          className: O.clipMetadata,
          color: "text-normal",
          variant: "text-md/medium",
          children: n.applicationName
        }), (0, i.jsx)(h.Text, {
          className: O.clipMetadata,
          color: "text-normal",
          variant: "text-md/medium",
          children: Y
        }), (0, i.jsxs)("div", {
          className: O.usersAndDelete,
          children: [(0, i.jsx)(C.default, {
            maxUsers: 4,
            users: x,
            onFocus: e => {
              var t, l, a, n;
              let i = e.relatedTarget,
                s = null === (l = e.currentTarget.parentElement) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement;
              if ((null == i ? void 0 : i.parentElement) !== s)(null == i ? void 0 : null === (n = i.parentElement) || void 0 === n ? void 0 : null === (a = n.parentElement) || void 0 === a ? void 0 : a.parentElement) !== s && b()
            }
          }), I && (0, i.jsx)(B, {
            clip: n,
            actionsDisabled: u,
            exporting: r,
            onBeforeDelete: H,
            onDelete: p,
            onEdit: m,
            onShare: _,
            onBlur: e => {
              var t;
              (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && U()
            }
          })]
        })]
      })]
    })
  })
};

function w(e) {
  let {
    clip: t,
    isNew: l,
    videoRef: a
  } = e, n = 0 === t.length, [r, o] = s.useMemo(() => {
    let e = t.length,
      l = !1,
      a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
    return null != a && 1e3 * a < t.length && (e = 1e3 * a, l = !0), [l, d.duration(e)]
  }, [t.length, t.editMetadata]), u = "".concat(o.seconds()).padStart(2, "0");
  return (0, i.jsxs)("div", {
    className: O.clipThumbContainer,
    children: [(0, i.jsx)(U, {
      clip: t,
      videoRef: a
    }), (0, i.jsxs)("div", {
      className: O.clipBadges,
      children: [n && (0, i.jsx)("div", {
        className: O.clipProcessingBadge,
        children: (0, i.jsx)(h.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: D.default.Messages.CLIPS_PROCESSING_BADGE
        })
      }), !n && l && (0, i.jsxs)(h.Text, {
        className: O.clipNewBadge,
        variant: "eyebrow",
        color: "always-white",
        children: [(0, i.jsx)(T.default, {
          className: O.newIcon
        }), D.default.Messages.NEW.toUpperCase()]
      }), !n && (0, i.jsxs)("div", {
        className: O.clipDurationBadge,
        children: [r ? (0, i.jsx)(S.default, {
          className: O.clipDurationEditIcon
        }) : null, (0, i.jsx)(h.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: "".concat(o.minutes(), ":").concat(u)
        })]
      })]
    })]
  })
}

function k(e) {
  var t;
  let {
    clip: l,
    focused: a,
    onFocus: n
  } = e, [r, u] = s.useState(l.name), d = !l.name, [c, f] = s.useState(!1), [E, v] = s.useState(null !== (t = l.name) && void 0 !== t ? t : ""), [C, _] = s.useState(!1), g = async () => {
    _(!0), await (0, P.updateClipMetadata)(l.id, {
      name: "" === E ? void 0 : E
    }), _(!1), f(!1)
  };
  return (s.useEffect(() => {
    if (r !== l.name) {
      var e;
      u(l.name), v(null !== (e = l.name) && void 0 !== e ? e : "")
    }
  }, [l.name, r]), c) ? (0, i.jsx)(h.TextInput, {
    inputClassName: o(H["heading-lg/medium"], O.clipTitleInput),
    onClick: e => e.stopPropagation(),
    value: E,
    autoFocus: !0,
    onKeyDown: e => {
      "Enter" === e.key && g()
    },
    disabled: C,
    onChange: v,
    onBlur: g
  }) : (0, i.jsxs)(h.Clickable, {
    className: O.clipTitleInputPlaceholder,
    onFocus: n,
    onClick: e => {
      e.stopPropagation(), f(!0)
    },
    children: [d ? (0, i.jsx)(h.Heading, {
      className: O.clipTitle,
      color: "text-muted",
      variant: "heading-lg/medium",
      children: D.default.Messages.CLIPS_ADD_A_TITLE
    }) : (0, i.jsx)(h.Heading, {
      className: O.clipTitle,
      color: "text-normal",
      variant: "heading-lg/medium",
      children: l.name
    }), a && (0, i.jsx)(m.PencilIcon, {
      "aria-label": D.default.Messages.EDIT,
      color: h.tokens.colors.TEXT_MUTED,
      height: p.ICON_SIZE.sm,
      width: p.ICON_SIZE.sm,
      className: O.clipTitleIcon
    })]
  })
}

function U(e) {
  let {
    clip: t,
    videoRef: l
  } = e, a = (0, y.useClipProtocolURL)(t);
  return 0 === t.length ? (0, i.jsx)(h.Spinner, {
    type: h.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
    className: O.clipThumb
  }) : null != a ? (0, i.jsx)(A.default, {
    preload: "metadata",
    muted: !0,
    poster: t.thumbnail,
    src: a,
    loop: !0,
    className: O.clipThumb,
    ref: l
  }) : (0, i.jsx)("img", {
    alt: "",
    src: t.thumbnail,
    className: O.clipThumb
  })
}

function B(e) {
  let {
    clip: t,
    exporting: l,
    actionsDisabled: a,
    onBeforeDelete: n,
    onDelete: r,
    onEdit: o,
    onShare: u,
    onBlur: d
  } = e, c = (0, _.default)(), f = s.useCallback(e => {
    e.stopPropagation(), e.shiftKey ? (n(), (0, P.deleteClip)(t.filepath)) : r(t, n), N.default.track(j.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "delete"
    })
  }, [r, n, t]), p = s.useCallback(e => {
    e.stopPropagation(), o(t), N.default.track(j.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "edit"
    })
  }, [o, t]), m = s.useCallback(e => {
    e.stopPropagation(), u(t), N.default.track(j.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
      type: "share"
    })
  }, [u, t]);
  return (0, i.jsxs)("div", {
    className: O.buttonContainer,
    children: [null != r && (0, i.jsx)(h.Tooltip, {
      text: D.default.Messages.DELETE,
      children: e => (0, i.jsx)(h.Button, {
        ...e,
        disabled: a,
        color: c ? h.Button.Colors.RED : h.Button.Colors.PRIMARY,
        onClick: f,
        className: O.button,
        size: h.Button.Sizes.NONE,
        look: h.Button.Looks.FILLED,
        children: (0, i.jsx)(I.default, {
          className: O.miniIcon
        })
      })
    }), (0, i.jsx)(h.Tooltip, {
      text: D.default.Messages.EDIT,
      children: e => (0, i.jsx)(h.Button, {
        ...e,
        disabled: a,
        color: h.Button.Colors.PRIMARY,
        onClick: p,
        className: O.button,
        size: h.Button.Sizes.NONE,
        look: h.Button.Looks.FILLED,
        children: (0, i.jsx)(S.default, {
          className: O.miniIcon
        })
      })
    }), (0, i.jsx)(h.Tooltip, {
      text: D.default.Messages.SHARE,
      children: e => {
        let {
          onBlur: t,
          ...n
        } = e;
        return (0, i.jsx)(h.Button, {
          ...n,
          disabled: a && !l,
          submitting: l,
          color: h.Button.Colors.BRAND,
          onBlur: e => {
            d(e), null == t || t()
          },
          onClick: m,
          className: O.button,
          size: h.Button.Sizes.NONE,
          look: h.Button.Looks.FILLED,
          children: (0, i.jsx)(x.default, {
            className: O.miniIcon
          })
        })
      }
    })]
  })
}
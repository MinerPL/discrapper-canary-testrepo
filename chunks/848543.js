"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("399606"),
  o = n("524437"),
  u = n("923462"),
  d = n("481060"),
  c = n("239091"),
  f = n("100527"),
  E = n("906732"),
  h = n("706140"),
  _ = n("294629"),
  C = n("131951"),
  S = n("459273"),
  m = n("242291"),
  p = n("792165"),
  I = n("603074"),
  T = n("981631"),
  g = n("921944"),
  A = n("689938"),
  N = n("594078");

function v(e) {
  let {
    channel: t,
    iconClassName: l,
    className: v,
    innerClassName: R,
    ...L
  } = e, {
    mute: O,
    suppress: M
  } = (0, _.default)(t), P = (0, r.useStateFromStores)([C.default], () => C.default.isDeaf()), y = O || M || P, [x, D] = s.useState(!1), b = t.getGuildId(), U = (0, m.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: y
  }), [j, G] = (0, h.useGetDismissibleContent)(U), {
    analyticsLocations: w
  } = (0, E.default)(f.default.SOUNDBOARD_BUTTON);

  function k(e) {
    null != b && (0, c.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, "338991"));
      return t => (0, a.jsx)(e, {
        guildId: b,
        ...t
      })
    })
  }
  let {
    Component: F,
    play: B,
    events: {
      onMouseEnter: H,
      onMouseLeave: V
    }
  } = (0, u.useSoundboardLottie)(), Y = e => (0, a.jsx)(d.Popout, {
    shouldShow: x,
    position: "top",
    onRequestClose: () => D(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(I.default, {
        guildId: b,
        channel: t,
        onClose: n,
        gridNotice: j === o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(p.CustomCallSoundUpsell, {
          onClose: n,
          markAsDismissed: G
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, a.jsx)("div", {
      children: (0, a.jsx)(d.Button, {
        ...e,
        ...t,
        className: i()(v, {
          [N.buttonActive]: x,
          [N.disabled]: y
        }),
        wrapperClassName: v,
        innerClassName: R,
        disabled: y,
        onClick: () => {
          var t, n;
          null == n || n(), null != j && j !== o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && G(g.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), D(!x), B()
        },
        onMouseEnter: t => {
          var n, a;
          null === (n = L.onMouseEnter) || void 0 === n || n.call(L, t), null == e || null === (a = e.onMouseEnter) || void 0 === a || a.call(e), H()
        },
        onMouseLeave: t => {
          var n, a;
          null === (n = L.onMouseLeave) || void 0 === n || n.call(L, t), null == e || null === (a = e.onMouseLeave) || void 0 === a || a.call(e), V()
        },
        onContextMenu: k,
        fullWidth: !0,
        size: d.Button.Sizes.SMALL,
        ...L,
        children: (0, a.jsx)(F, {
          className: l,
          size: "sm",
          color: x ? "white" : d.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  }), W = s.useCallback(() => {
    !y && D(!x)
  }, [y, x]);
  return (0, S.useComponentAction)({
    event: T.ComponentActions.TOGGLE_SOUNDBOARD,
    handler: W
  }), (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: w,
    children: (0, a.jsx)(d.Tooltip, {
      text: function() {
        if (O) return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (M) return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (P) return A.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => Y(e)
    })
  })
}
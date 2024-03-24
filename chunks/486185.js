"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("65597"),
  i = n("151426"),
  r = n("204702"),
  o = n("77078"),
  u = n("272030"),
  d = n("812204"),
  c = n("685665"),
  f = n("235145"),
  E = n("244390"),
  h = n("42887"),
  _ = n("78581"),
  C = n("429829"),
  S = n("191191"),
  I = n("994428"),
  m = n("782340");

function p(e) {
  let {
    channel: t,
    iconClassName: p,
    className: T,
    innerClassName: g,
    ...A
  } = e, {
    mute: N,
    suppress: R
  } = (0, E.default)(t), O = (0, l.useStateFromStores)([h.default], () => h.default.isDeaf()), v = N || R || O, [L, M] = s.useState(!1), P = t.getGuildId(), y = (0, _.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: v
  }), [D, x] = (0, f.useGetDismissibleContent)(y), {
    AnalyticsLocationProvider: b
  } = (0, c.default)(d.default.SOUNDBOARD_BUTTON);

  function U(e) {
    null != P && (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("136137").then(n.bind(n, "136137"));
      return t => (0, a.jsx)(e, {
        guildId: P,
        ...t
      })
    })
  }
  let {
    Component: G,
    play: j,
    events: {
      onMouseEnter: w,
      onMouseLeave: k
    }
  } = (0, r.useSoundboardLottie)(), F = e => (0, a.jsx)(o.Popout, {
    shouldShow: L,
    position: "top",
    onRequestClose: () => M(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(S.default, {
        guildId: P,
        channel: t,
        onClose: n,
        gridNotice: D === i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(C.CustomCallSoundUpsell, {
          onClose: n,
          markAsDismissed: x
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, a.jsx)("div", {
      children: (0, a.jsx)(o.Button, {
        ...e,
        ...t,
        className: T,
        wrapperClassName: T,
        innerClassName: g,
        disabled: v,
        onClick: () => {
          var t, n;
          null == n || n(), null != D && D !== i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && x(I.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), M(!L), j()
        },
        onMouseEnter: e => {
          var t;
          null === (t = A.onMouseEnter) || void 0 === t || t.call(A, e), w()
        },
        onMouseLeave: e => {
          var t;
          null === (t = A.onMouseLeave) || void 0 === t || t.call(A, e), k()
        },
        onContextMenu: U,
        fullWidth: !0,
        size: o.Button.Sizes.SMALL,
        ...A,
        children: (0, a.jsx)(G, {
          className: p,
          size: "sm",
          color: o.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  });
  return (0, a.jsx)(b, {
    children: (0, a.jsx)(o.Tooltip, {
      text: function() {
        if (N) return m.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (R) return m.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (O) return m.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return m.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => F(e)
    })
  })
}
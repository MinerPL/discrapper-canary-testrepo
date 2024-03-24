"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("414456"),
  s = n.n(i),
  r = n("446674"),
  u = n("77078"),
  o = n("817963"),
  d = n("305961"),
  c = n("957255"),
  f = n("677099"),
  h = n("697218"),
  m = n("476263"),
  g = n("368121"),
  v = n("427459"),
  S = n("299039"),
  E = n("305122"),
  p = n("235004"),
  N = n("846325"),
  _ = n("49111"),
  O = n("782340"),
  A = n("216445");

function D(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, l.jsxs)(u.Text, {
    className: s(A.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, l.jsx)(g.default, {
      className: A.speakerIcon
    }), O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: t
    })]
  })
}

function b(e) {
  let {
    value: t,
    className: n,
    onChange: i
  } = e, g = (0, r.useStateFromStoresObject)([f.default, c.default, h.default, d.default], () => {
    let e = {};
    for (let t of f.default.getFlattenedGuildIds()) {
      let n = d.default.getGuild(t);
      if (null == n) continue;
      let l = (0, o.getManageResourcePermissions)(n, c.default, h.default);
      l.canCreateExpressions && (e[n.id] = n)
    }
    return e
  }), b = (0, r.useStateFromStoresObject)([p.default], () => {
    let e = {};
    for (let [n, l] of S.default.entries(g)) {
      var t;
      let a = (0, v.getAvailableSoundboardSoundCount)(null !== (t = p.default.getSoundsForGuild(n)) && void 0 !== t ? t : N.EMPTY_SOUND_LIST, l.premiumTier);
      e[n] = a
    }
    return e
  }, [g]);
  a.useEffect(() => {
    (0, E.maybeFetchSoundboardSounds)()
  }, []);
  let C = a.useMemo(() => Object.values(g).map(e => {
      let {
        name: t,
        id: n
      } = e;
      return {
        label: t,
        value: n,
        disabled: b[n] <= 0
      }
    }), [g, b]),
    x = a.useCallback(e => null == e || "" === e.value ? null : (0, l.jsx)(m.default, {
      className: s(A.guildSelectOptionIcon, {
        [A.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: m.default.Sizes.SMOL,
      active: !0
    }), [g]),
    M = a.useCallback(e => {
      let t = null == e ? void 0 : e.value;
      return null == t || "" === t ? null : (0, l.jsx)(D, {
        className: s({
          [A.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: b[t]
      })
    }, [b]),
    I = a.useCallback(e => (0, l.jsx)("div", {
      className: s({
        [A.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    y = a.useCallback(e => {
      !(b[e] <= 0) && i(e)
    }, [b, i]),
    T = (() => {
      let e = b[null != t ? t : _.EMPTY_STRING_SNOWFLAKE_ID];
      return null == e || e > 0 ? t : void 0
    })();
  return (0, l.jsx)(u.SearchableSelect, {
    className: n,
    onChange: y,
    value: T,
    multi: !1,
    options: C,
    renderOptionPrefix: x,
    renderOptionSuffix: M,
    renderOptionLabel: I,
    placeholder: 0 === C.length ? O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}
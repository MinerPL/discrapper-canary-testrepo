"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  u = n("803997"),
  i = n.n(u),
  s = n("442837"),
  r = n("481060"),
  o = n("889161"),
  d = n("430824"),
  c = n("496675"),
  f = n("771845"),
  m = n("594174"),
  h = n("346656"),
  g = n("632184"),
  S = n("267642"),
  p = n("709054"),
  N = n("208049"),
  v = n("763296"),
  _ = n("710111"),
  D = n("981631"),
  O = n("689938"),
  A = n("437066");

function x(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, a.jsxs)(r.Text, {
    className: i()(A.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, a.jsx)(g.default, {
      className: A.speakerIcon
    }), O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: t
    })]
  })
}

function E(e) {
  let {
    value: t,
    className: n,
    onChange: u
  } = e, g = (0, s.useStateFromStoresObject)([f.default, c.default, m.default, d.default], () => {
    let e = {};
    for (let t of f.default.getFlattenedGuildIds()) {
      let n = d.default.getGuild(t);
      if (null != n)(0, o.getManageResourcePermissions)(n, c.default, m.default).canCreateExpressions && (e[n.id] = n)
    }
    return e
  }), E = (0, s.useStateFromStoresObject)([v.default], () => {
    let e = {};
    for (let [n, a] of p.default.entries(g)) {
      var t;
      let l = (0, S.getAvailableSoundboardSoundCount)(null !== (t = v.default.getSoundsForGuild(n)) && void 0 !== t ? t : _.EMPTY_SOUND_LIST, a.premiumTier);
      e[n] = l
    }
    return e
  }, [g]);
  l.useEffect(() => {
    (0, N.maybeFetchSoundboardSounds)()
  }, []);
  let M = l.useMemo(() => Object.values(g).map(e => {
      let {
        name: t,
        id: n
      } = e;
      return {
        label: t,
        value: n,
        disabled: E[n] <= 0
      }
    }), [g, E]),
    C = l.useCallback(e => null == e || "" === e.value ? null : (0, a.jsx)(h.default, {
      className: i()(A.guildSelectOptionIcon, {
        [A.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: h.default.Sizes.SMOL,
      active: !0
    }), [g]),
    b = l.useCallback(e => {
      let t = null == e ? void 0 : e.value;
      return null == t || "" === t ? null : (0, a.jsx)(x, {
        className: i()({
          [A.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: E[t]
      })
    }, [E]),
    y = l.useCallback(e => (0, a.jsx)("div", {
      className: i()({
        [A.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    I = l.useCallback(e => {
      !(E[e] <= 0) && u(e)
    }, [E, u]),
    j = (() => {
      let e = E[null != t ? t : D.EMPTY_STRING_SNOWFLAKE_ID];
      return null == e || e > 0 ? t : void 0
    })();
  return (0, a.jsx)(r.SearchableSelect, {
    className: n,
    onChange: I,
    value: j,
    multi: !1,
    options: M,
    renderOptionPrefix: C,
    renderOptionSuffix: b,
    renderOptionLabel: y,
    placeholder: 0 === M.length ? O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}
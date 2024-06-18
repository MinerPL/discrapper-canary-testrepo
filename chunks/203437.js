"use strict";
t.d(n, {
  Z: function() {
    return y
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  s = t(120356),
  i = t.n(s),
  r = t(442837),
  u = t(481060),
  o = t(889161),
  c = t(430824),
  d = t(496675),
  f = t(771845),
  m = t(594174),
  h = t(346656),
  g = t(632184),
  p = t(267642),
  N = t(709054),
  v = t(208049),
  _ = t(763296),
  D = t(710111),
  O = t(981631),
  x = t(689938),
  S = t(344734);

function E(e) {
  let {
    availableSlots: n,
    className: t
  } = e;
  return (0, l.jsxs)(u.Text, {
    className: i()(S.suffixNode, t),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, l.jsx)(g.Z, {
      className: S.speakerIcon
    }), x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
      slots: n
    })]
  })
}

function y(e) {
  let {
    value: n,
    className: t,
    onChange: s
  } = e, g = (0, r.cj)([f.ZP, d.Z, m.default, c.Z], () => {
    let e = {};
    for (let n of f.ZP.getFlattenedGuildIds()) {
      let t = c.Z.getGuild(n);
      if (null != t)(0, o.Gw)(t, d.Z, m.default).canCreateExpressions && (e[t.id] = t)
    }
    return e
  }), y = (0, r.cj)([_.Z], () => {
    let e = {};
    for (let [t, l] of N.default.entries(g)) {
      var n;
      let a = (0, p.yw)(l, null !== (n = _.Z.getSoundsForGuild(t)) && void 0 !== n ? n : D.Hy, l.premiumTier);
      e[t] = a
    }
    return e
  }, [g]);
  a.useEffect(() => {
    (0, v.w)()
  }, []);
  let A = a.useMemo(() => Object.values(g).map(e => {
      let {
        name: n,
        id: t
      } = e;
      return {
        label: n,
        value: t,
        disabled: y[t] <= 0
      }
    }), [g, y]),
    b = a.useCallback(e => null == e || "" === e.value ? null : (0, l.jsx)(h.Z, {
      className: i()(S.guildSelectOptionIcon, {
        [S.disabledOption]: e.disabled
      }),
      guild: g[e.value],
      size: h.Z.Sizes.SMOL,
      active: !0
    }), [g]),
    M = a.useCallback(e => {
      let n = null == e ? void 0 : e.value;
      return null == n || "" === n ? null : (0, l.jsx)(E, {
        className: i()({
          [S.disabledOption]: null == e ? void 0 : e.disabled
        }),
        availableSlots: y[n]
      })
    }, [y]),
    j = a.useCallback(e => (0, l.jsx)("div", {
      className: i()({
        [S.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    w = a.useCallback(e => {
      !(y[e] <= 0) && s(e)
    }, [y, s]),
    C = (() => {
      let e = y[null != n ? n : O.lds];
      return null == e || e > 0 ? n : void 0
    })();
  return (0, l.jsx)(u.SearchableSelect, {
    className: t,
    onChange: w,
    value: C,
    multi: !1,
    options: A,
    renderOptionPrefix: b,
    renderOptionSuffix: M,
    renderOptionLabel: j,
    placeholder: 0 === A.length ? x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
  })
}
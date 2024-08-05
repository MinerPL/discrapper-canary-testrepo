t.d(n, {
  Z: function() {
return S;
  }
}), t(47120), t(724458);
var i = t(735250),
  a = t(470079),
  l = t(481060),
  r = t(239091),
  o = t(236413),
  s = t(727072),
  u = t(85960),
  d = t(676317),
  c = t(65912),
  E = t(556012),
  M = t(572456),
  I = t(434404),
  m = t(981631),
  _ = t(273504),
  g = t(689938),
  f = t(509142);
let Z = _.fX.KEYWORD;

function S(e, n) {
  let {
perGuildMaxCount: t
  } = u.I6[Z], {
isLoading: S,
saveRule: v,
errorMessage: A
  } = (0, c.w)(), {
createNewEditingRule: T
  } = (0, c.V)(), [O, R] = a.useState(!1), [h, N] = (0, s.I2)(n), {
rulesByTriggerType: p,
updateRule: x
  } = (0, s.pH)(n), C = a.useMemo(() => {
var e;
return null !== (e = p[Z]) && void 0 !== e ? e : [];
  }, [p]), b = 0 === C.length, j = t > C.length && !b;
  if (!a.useMemo(() => (0, d.ze)(n), [n]) || null == e || 0 === e.length || null == n)
return null;
  let P = e.split(' '),
L = P.length;
  try {
(0, o.km)(P, _.RH);
  } catch (e) {
return null;
  }
  let D = () => {
  if (null != n)
    (0, r.Zy)(), I.Z.open(n, m.pNK.GUILD_AUTOMOD), setTimeout(() => {
      T(n, Z, {
        triggerMetadata: {
          keywordFilter: [e],
          regexPatterns: [],
          allowList: []
        }
      });
    }, 400);
},
G = async n => {
  var t, i;
  if ((0, r.Zy)(), !await (0, M.XN)(n.name, e))
    return;
  let a = {
    ...n,
    triggerMetadata: {
      ...n.triggerMetadata,
      keywordFilter: [
        ...null !== (i = null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter) && void 0 !== i ? i : [],
        e
      ]
    }
  };
  await v(a, C), x(a), null != A ? (0, l.showToast)((0, l.createToast)(g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, l.ToastType.SUCCESS));
}, U = (0, i.jsx)(i.Fragment, {
  children: (0, i.jsx)(l.MenuItem, {
    id: 'automod-rules-loading',
    label: g.Z.Messages.LOADING
  })
});
  return !h && (U = (0, i.jsxs)(i.Fragment, {
children: [
  b && (0, i.jsx)(l.MenuItem, {
    id: 'add-first-rule',
    label: g.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
    action: D,
    disabled: S
  }),
  C.map(e => {
    let n = (0, u.V9)(Z).reduce((n, t) => {
      let i = e.actions.find(e => {
        let {
          type: n
        } = e;
        return t === n;
      });
      if (null == i)
        return n;
      let a = (0, E.c)(t, i);
      return n += ', '.concat(null == a ? void 0 : a.headerText);
    }, '');
    return (0, i.jsx)(l.MenuRadioItem, {
      id: e.id,
      label: e.name,
      subtext: (0, i.jsx)(l.Text, {
        color: 'text-muted',
        className: f.actionTextHeader,
        variant: 'text-xs/normal',
        children: n.slice(2)
      }),
      group: 'automod-rule-selection',
      checked: !1,
      disabled: S,
      action: () => G(e)
    }, e.id);
  }),
  j && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(l.MenuSeparator, {}),
      (0, i.jsx)(l.MenuItem, {
        id: 'add-another-rule',
        label: g.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: D,
        disabled: S
      })
    ]
  })
]
  })), (0, i.jsx)(l.MenuItem, {
id: 'guild-automod-add-selection',
label: g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
  keywordCount: L
}),
onFocus: () => {
  if (!O)
    R(!0), N();
},
children: U
  });
}
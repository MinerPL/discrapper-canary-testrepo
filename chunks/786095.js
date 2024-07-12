t.d(n, {
  Z: function() {
return S;
  }
}), t(47120), t(724458);
var i = t(735250),
  a = t(470079),
  r = t(481060),
  l = t(239091),
  o = t(236413),
  s = t(727072),
  u = t(85960),
  c = t(676317),
  d = t(65912),
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
  } = (0, d.w)(), {
createNewEditingRule: O
  } = (0, d.V)(), [T, R] = a.useState(!1), [N, h] = (0, s.I2)(n), {
rulesByTriggerType: p,
updateRule: x
  } = (0, s.pH)(n), b = a.useMemo(() => {
var e;
return null !== (e = p[Z]) && void 0 !== e ? e : [];
  }, [p]), j = 0 === b.length, C = t > b.length && !j;
  if (!a.useMemo(() => (0, c.ze)(n), [n]) || null == e || 0 === e.length || null == n)
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
    (0, l.Zy)(), I.Z.open(n, m.pNK.GUILD_AUTOMOD), setTimeout(() => {
      O(n, Z, {
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
  if ((0, l.Zy)(), !await (0, M.XN)(n.name, e))
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
  await v(a, b), x(a), null != A ? (0, r.showToast)((0, r.createToast)(g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, r.ToastType.FAILURE)) : (0, r.showToast)((0, r.createToast)(g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, r.ToastType.SUCCESS));
}, U = (0, i.jsx)(i.Fragment, {
  children: (0, i.jsx)(r.MenuItem, {
    id: 'automod-rules-loading',
    label: g.Z.Messages.LOADING
  })
});
  return !N && (U = (0, i.jsxs)(i.Fragment, {
children: [
  j && (0, i.jsx)(r.MenuItem, {
    id: 'add-first-rule',
    label: g.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
    action: D,
    disabled: S
  }),
  b.map(e => {
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
    return (0, i.jsx)(r.MenuRadioItem, {
      id: e.id,
      label: e.name,
      subtext: (0, i.jsx)(r.Text, {
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
  C && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(r.MenuSeparator, {}),
      (0, i.jsx)(r.MenuItem, {
        id: 'add-another-rule',
        label: g.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: D,
        disabled: S
      })
    ]
  })
]
  })), (0, i.jsx)(r.MenuItem, {
id: 'guild-automod-add-selection',
label: g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
  keywordCount: L
}),
onFocus: () => {
  if (!T)
    R(!0), h();
},
children: U
  });
}
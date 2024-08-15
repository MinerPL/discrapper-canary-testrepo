t.d(s, {
  Z: function() {
return R;
  }
}), t(653041), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(660216),
  l = t(40908),
  c = t(600164),
  d = t(415795),
  _ = t(592125),
  E = t(984933),
  u = t(430824),
  I = t(914010),
  T = t(727785),
  S = t(689938),
  N = t(741632);

function C() {}
let m = [T.h8.VOICE_CHANNEL];

function A(e) {
  e.setOptions({
voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0);
}

function g(e) {
  let {
height: s
  } = e;
  return (0, n.jsx)('div', {
style: {
  height: s
}
  });
}

function O() {
  return (0, n.jsx)(g, {
height: 16
  }, 'footer');
}

function h() {
  return (0, n.jsx)(g, {
height: 8
  }, 'header');
}

function p() {
  return (0, n.jsx)('div', {
className: N.voiceListSearchEmpty,
children: (0, n.jsx)(r.Text, {
  variant: 'text-md/medium',
  color: 'text-muted',
  className: N.noVoiceChannelSelected,
  children: S.Z.Messages.USER_SETTINGS_KEYBINDS_SEARCH_NO_RESULTS_FOUND
})
  });
}

function R(e) {
  var s, t;
  let {
keybind: i
  } = e, l = a.useRef(i);
  a.useEffect(() => void(l.current = i));
  let [d, _] = a.useState(null !== (t = null === (s = i.params) || void 0 === s ? void 0 : s.channelId) && void 0 !== t ? t : void 0), E = a.useCallback(() => {
(0, r.openModalLazy)(async () => e => (0, n.jsx)(x, {
  ...e,
  onSelect: e => {
    _(e), o.Z.setKeybind({
      ...l.current,
      params: {
        channelId: e
      }
    });
  }
}));
  }, []);
  return (0, n.jsx)(r.FormSection, {
title: S.Z.Messages.USER_SETTINGS_KEYBIND_SWITCH_SERVER_SETTINGS_SECTION,
className: N.channelIdSection,
children: (0, n.jsxs)(c.Z, {
  align: c.Z.Align.STRETCH,
  children: [
    (0, n.jsx)('div', {
      className: N.selectedVoiceChannel,
      children: (0, n.jsx)(M, {
        channelId: d
      })
    }),
    (0, n.jsx)(c.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, n.jsx)(r.Button, {
        onClick: E,
        children: S.Z.Messages.USER_SETTINGS_KEYBINDS_SELECT_VOICE_CHANNEL
      })
    })
  ]
})
  });
}

function x(e) {
  let {
transitionState: s,
onClose: t,
onSelect: o
  } = e, c = a.useId(), C = a.useRef(null), {
mouseFocusEnabled: g,
enableMouseFocus: R,
disableMouseFocus: x
  } = function() {
let e = a.useRef(!1),
  s = a.useCallback(() => {
    e.current = !0;
  }, []),
  t = a.useCallback(() => {
    e.current = !1;
  }, []);
return {
  mouseFocusEnabled: e,
  enableMouseFocus: s,
  disableMouseFocus: t
};
  }(), {
query: M,
updateQuery: f,
queryResults: D
  } = (0, l.Z)({
visible: !0,
autocompleterResultTypes: m,
autocompleterBeforeCreateSearchContext: A
  }), P = function(e) {
let s = '' !== e,
  t = (0, i.Wu)([
    E.ZP,
    _.Z,
    I.Z
  ], () => {
    let e = I.Z.getGuildId();
    if (s || null == e)
      return [];
    let t = [];
    for (let s of E.ZP.getVocalChannelIds(e)) {
      let e = _.Z.getChannel(s);
      null != e && t.push(e);
    }
    return t;
  }, [s]);
return s ? null : t;
  }(M), {
focusedIndex: L,
setFocusedIndex: b
  } = function(e) {
let [s, t] = a.useState(0), n = a.useRef(e);
return e !== n.current && 0 !== s && t(0), a.useEffect(() => void(n.current = e)), {
  focusedIndex: s,
  setFocusedIndex: t
};
  }(M);
  a.useEffect(() => {
let {
  current: e
} = C;
!(null == e || e.isItemVisible(0, L, !0)) && e.scrollToIndex({
  section: 0,
  row: L
});
  }, [L]);
  let Z = null != P ? P.length : D.length,
v = (() => {
  if (null != P) {
    var e;
    return null === (e = P[L]) || void 0 === e ? void 0 : e.id;
  }
  let s = D[L];
  if ((null == s ? void 0 : s.type) === T.h8.VOICE_CHANNEL)
    return s.record.id;
})();
  return (0, n.jsx)('div', {
className: N.voiceModalContainer,
onMouseMove: R,
children: (0, n.jsxs)(r.ModalRoot, {
  transitionState: s,
  size: r.ModalSize.MEDIUM,
  className: N.voiceModalRootContainer,
  children: [
    (0, n.jsx)('div', {
      className: N.inputWrapper,
      children: (0, n.jsx)(r.TextInput, {
        value: M,
        onChange: f,
        onKeyDown: function(e) {
          x();
          let s = e.key.toLowerCase();
          if ('arrowdown' === s || 'arrowup' === s || 'enter' === s || 'escape' === s)
            switch (e.preventDefault(), s) {
              case 'escape':
                t();
                break;
              case 'enter': {
                let e = (() => {
                  if (null != P)
                    return P[L];
                  let e = D[L];
                  if ((null == e ? void 0 : e.type) === T.h8.VOICE_CHANNEL)
                    return e.record;
                })();
                null == e ? o(void 0) : o(e.id), t();
                break;
              }
              case 'arrowup':
                0 === L ? b(Z - 1) : b(L - 1);
                break;
              case 'arrowdown':
                L >= Z - 1 ? b(0) : b(L + 1);
            }
        },
        placeholder: S.Z.Messages.USER_SETTINGS_KEYBINDS_SEARCH_VOICE,
        role: 'combobox',
        'aria-controls': c,
        'aria-expanded': Z > 0,
        'aria-activedescendant': Z > 0 && null != v ? v : void 0,
        'aria-autocomplete': 'list',
        spellCheck: !1
      })
    }),
    0 === Z && '' !== M && (0, n.jsx)(p, {}),
    (Z > 0 || '' === M) && (0, n.jsx)(r.ListThin, {
      innerId: c,
      innerRole: 'listbox',
      'aria-label': S.Z.Messages.USER_SETTINGS_KEYBIND_VOICE_CHANNEL_RESULTS,
      ref: C,
      sections: [Z],
      renderRow: function(e) {
        let {
          row: s
        } = e, a = (() => {
          if (null != P)
            return P[s];
          let e = D[s];
          if ((null == e ? void 0 : e.type) === T.h8.VOICE_CHANNEL)
            return e.record;
        })();
        if (null == a)
          return null;
        let i = null != a.parent_id ? _.Z.getChannel(a.parent_id) : void 0,
          r = u.Z.getGuild(a.guild_id);
        return (0, n.jsx)(d.$W, {
          id: a.id,
          channel: a,
          category: i,
          focused: L === s,
          onMouseEnter: () => g.current && b(s),
          onClick: () => {
            o(a.id), t();
          },
          onFocus: () => b(s),
          children: null != r ? (0, n.jsx)('div', {
            className: N.guildName,
            children: r.name
          }) : null
        }, a.id);
      },
      renderListHeader: h,
      renderFooter: O,
      sectionHeight: 0,
      rowHeight: 34,
      className: N.voiceChannelList,
      listHeaderHeight: 8,
      footerHeight: 16
    })
  ]
})
  });
}

function M(e) {
  let {
channelId: s
  } = e, {
channel: t,
category: a,
guild: o
  } = (0, i.cj)([
_.Z,
u.Z
  ], () => {
let e = null != s ? _.Z.getChannel(s) : void 0;
return null != e ? {
  channel: e,
  category: null != e.parent_id ? _.Z.getChannel(e.parent_id) : void 0,
  guild: null != e.guild_id ? u.Z.getGuild(e.guild_id) : void 0
} : {
  channel: void 0,
  category: void 0,
  guild: void 0
};
  });
  return null == t ? (0, n.jsx)(r.Text, {
variant: 'text-md/medium',
color: 'text-muted',
className: N.noVoiceChannelSelected,
children: S.Z.Messages.USER_SETTINGS_KEYBINDS_NO_VOICE_CHANNEL_SELECTED
  }) : (0, n.jsx)(d.$W, {
channel: t,
id: t.id,
category: a,
onClick: C,
onFocus: C,
onMouseEnter: C,
focused: !1,
children: null != o ? (0, n.jsx)('div', {
  className: N.guildName,
  children: o.name
}) : null
  });
}
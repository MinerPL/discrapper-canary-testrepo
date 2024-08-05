s.d(t, {
  Z: function() {
return R;
  }
}), s(653041), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(660216),
  l = s(40908),
  c = s(592125),
  d = s(984933),
  _ = s(430824),
  E = s(914010),
  u = s(285952),
  T = s(107828),
  I = s(727785),
  S = s(689938),
  N = s(183500);

function C() {}
let m = [I.h8.VOICE_CHANNEL];

function A(e) {
  e.setOptions({
voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0);
}

function g(e) {
  let {
height: t
  } = e;
  return (0, n.jsx)('div', {
style: {
  height: t
}
  });
}

function h() {
  return (0, n.jsx)(g, {
height: 16
  }, 'footer');
}

function O() {
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
  var t, s;
  let {
keybind: i
  } = e, l = a.useRef(i);
  a.useEffect(() => void(l.current = i));
  let [c, d] = a.useState(null !== (s = null === (t = i.params) || void 0 === t ? void 0 : t.channelId) && void 0 !== s ? s : void 0), _ = a.useCallback(() => {
(0, r.openModalLazy)(async () => e => (0, n.jsx)(x, {
  ...e,
  onSelect: e => {
    d(e), o.Z.setKeybind({
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
children: (0, n.jsxs)(u.Z, {
  align: u.Z.Align.STRETCH,
  children: [
    (0, n.jsx)('div', {
      className: N.selectedVoiceChannel,
      children: (0, n.jsx)(M, {
        channelId: c
      })
    }),
    (0, n.jsx)(u.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, n.jsx)(r.Button, {
        onClick: _,
        children: S.Z.Messages.USER_SETTINGS_KEYBINDS_SELECT_VOICE_CHANNEL
      })
    })
  ]
})
  });
}

function x(e) {
  let {
transitionState: t,
onClose: s,
onSelect: o
  } = e, u = a.useId(), C = a.useRef(null), {
mouseFocusEnabled: g,
enableMouseFocus: R,
disableMouseFocus: x
  } = function() {
let e = a.useRef(!1),
  t = a.useCallback(() => {
    e.current = !0;
  }, []),
  s = a.useCallback(() => {
    e.current = !1;
  }, []);
return {
  mouseFocusEnabled: e,
  enableMouseFocus: t,
  disableMouseFocus: s
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
let t = '' !== e,
  s = (0, i.Wu)([
    d.ZP,
    c.Z,
    E.Z
  ], () => {
    let e = E.Z.getGuildId();
    if (t || null == e)
      return [];
    let s = [];
    for (let t of d.ZP.getVocalChannelIds(e)) {
      let e = c.Z.getChannel(t);
      null != e && s.push(e);
    }
    return s;
  }, [t]);
return t ? null : s;
  }(M), {
focusedIndex: L,
setFocusedIndex: b
  } = function(e) {
let [t, s] = a.useState(0), n = a.useRef(e);
return e !== n.current && 0 !== t && s(0), a.useEffect(() => void(n.current = e)), {
  focusedIndex: t,
  setFocusedIndex: s
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
  let t = D[L];
  if ((null == t ? void 0 : t.type) === I.h8.VOICE_CHANNEL)
    return t.record.id;
})();
  return (0, n.jsx)('div', {
className: N.voiceModalContainer,
onMouseMove: R,
children: (0, n.jsxs)(r.ModalRoot, {
  transitionState: t,
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
          let t = e.key.toLowerCase();
          if ('arrowdown' === t || 'arrowup' === t || 'enter' === t || 'escape' === t)
            switch (e.preventDefault(), t) {
              case 'escape':
                s();
                break;
              case 'enter': {
                let e = (() => {
                  if (null != P)
                    return P[L];
                  let e = D[L];
                  if ((null == e ? void 0 : e.type) === I.h8.VOICE_CHANNEL)
                    return e.record;
                })();
                null == e ? o(void 0) : o(e.id), s();
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
        'aria-controls': u,
        'aria-expanded': Z > 0,
        'aria-activedescendant': Z > 0 && null != v ? v : void 0,
        'aria-autocomplete': 'list',
        spellCheck: !1
      })
    }),
    0 === Z && '' !== M && (0, n.jsx)(p, {}),
    (Z > 0 || '' === M) && (0, n.jsx)(r.ListThin, {
      innerId: u,
      innerRole: 'listbox',
      'aria-label': S.Z.Messages.USER_SETTINGS_KEYBIND_VOICE_CHANNEL_RESULTS,
      ref: C,
      sections: [Z],
      renderRow: function(e) {
        let {
          row: t
        } = e, a = (() => {
          if (null != P)
            return P[t];
          let e = D[t];
          if ((null == e ? void 0 : e.type) === I.h8.VOICE_CHANNEL)
            return e.record;
        })();
        if (null == a)
          return null;
        let i = null != a.parent_id ? c.Z.getChannel(a.parent_id) : void 0,
          r = _.Z.getGuild(a.guild_id);
        return (0, n.jsx)(T.$W, {
          id: a.id,
          channel: a,
          category: i,
          focused: L === t,
          onMouseEnter: () => g.current && b(t),
          onClick: () => {
            o(a.id), s();
          },
          onFocus: () => b(t),
          children: null != r ? (0, n.jsx)('div', {
            className: N.guildName,
            children: r.name
          }) : null
        }, a.id);
      },
      renderListHeader: O,
      renderFooter: h,
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
channelId: t
  } = e, {
channel: s,
category: a,
guild: o
  } = (0, i.cj)([
c.Z,
_.Z
  ], () => {
let e = null != t ? c.Z.getChannel(t) : void 0;
return null != e ? {
  channel: e,
  category: null != e.parent_id ? c.Z.getChannel(e.parent_id) : void 0,
  guild: null != e.guild_id ? _.Z.getGuild(e.guild_id) : void 0
} : {
  channel: void 0,
  category: void 0,
  guild: void 0
};
  });
  return null == s ? (0, n.jsx)(r.Text, {
variant: 'text-md/medium',
color: 'text-muted',
className: N.noVoiceChannelSelected,
children: S.Z.Messages.USER_SETTINGS_KEYBINDS_NO_VOICE_CHANNEL_SELECTED
  }) : (0, n.jsx)(T.$W, {
channel: s,
id: s.id,
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
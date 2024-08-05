t.d(n, {
  Z: function() {
return N;
  }
}), t(653041), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(481060),
  l = t(139387),
  o = t(933557),
  r = t(699516),
  d = t(594174),
  c = t(491302),
  u = t(936726),
  I = t(981631),
  m = t(689938),
  _ = t(486912);

function N(e) {
  let {
webhooks: n,
selectableWebhookChannels: t,
lastCreatedWebhookId: N,
editedWebhook: E,
errors: T,
canNavigate: h
  } = e, g = a.useMemo(() => Object.values(t).map(e => ({
value: e.id,
label: (0, o.F6)(e, d.default, r.Z, !0)
  })), [t]), p = a.useMemo(() => {
let e = {};
for (let i of n)
  if (i.channel_id in e)
    e[i.channel_id].webhooks.push(i);
  else {
    let n = t[i.channel_id];
    null != n && (e[i.channel_id] = {
      channel: n,
      webhooks: [i]
    });
  }
return Object.values(e).sort((e, n) => e.channel.name.localeCompare(n.channel.name));
  }, [
t,
n
  ]), C = a.useCallback(e => {
h() && (e === (null == E ? void 0 : E.id) ? l.Z.stopEditingWebhook() : l.Z.startEditingWebhook(e));
  }, [
h,
E
  ]);
  return (0, i.jsx)('div', {
className: _.__invalid_list,
children: p.map(e => {
  let {
    channel: n,
    webhooks: t
  } = e;
  return function(e) {
    let {
      channel: n,
      webhooks: t,
      channelOptions: a,
      lastCreatedWebhookId: l,
      editedWebhook: N,
      errors: E,
      toggleWebhookExpand: T
    } = e;
    return (0, i.jsxs)('div', {
      children: [
        (0, i.jsx)(s.FormTitle, {
          className: _.groupHeader,
          children: m.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SECTION.format({
            channelHook: () => (0, i.jsx)('span', {
              className: _.channelName,
              children: (0, o.F6)(n, d.default, r.Z, !0)
            }, n.id)
          })
        }),
        t.map(e => {
          var n;
          if (e.type === I.ylB.CHANNEL_FOLLOWER)
            return (0, i.jsx)(c.Z, {
              webhook: e,
              editedWebhook: N,
              channelOptions: a,
              isExpanded: (null == N ? void 0 : N.id) === e.id,
              onToggleExpand: () => T(e.id),
              errors: E
            }, e.id);
          return (0, i.jsx)(u.Z, {
            id: (n = e.id, 'settings-integrations-webhook-'.concat(n)),
            webhook: e,
            editedWebhook: N,
            channelOptions: a,
            isExpanded: (null == N ? void 0 : N.id) === e.id,
            isNew: l === e.id,
            onToggleExpand: () => T(e.id),
            errors: E
          }, e.id);
        })
      ]
    }, n.id);
  }({
    channel: n,
    webhooks: t,
    channelOptions: g,
    lastCreatedWebhookId: N,
    editedWebhook: E,
    errors: T,
    toggleWebhookExpand: C
  });
})
  });
}
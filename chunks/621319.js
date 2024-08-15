n.d(t, {
  Gy: function() {
return o;
  },
  H7: function() {
return l;
  },
  en: function() {
return c;
  },
  xv: function() {
return r;
  }
});
var s = n(544891),
  a = n(570140),
  i = n(981631);

function r() {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_VANITY_URL_CLOSE'
  });
}

function l() {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_VANITY_URL_RESET'
  });
}

function o(e) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_VANITY_URL_SET',
code: e
  });
}

function c(e, t) {
  return s.tn.patch({
url: i.ANM.GUILD_VANITY_URL(e),
body: {
  code: t
},
oldFormErrors: !0
  }).then(e => {
let {
  body: {
    code: t,
    uses: n
  }
} = e;
a.Z.dispatch({
  type: 'GUILD_SETTINGS_SET_VANITY_URL',
  code: t,
  uses: n
});
  }, e => (a.Z.dispatch({
type: 'GUILD_SETTINGS_VANITY_URL_ERROR',
error: e.body
  }), e));
}
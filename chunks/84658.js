var s, l, a, i;
t.d(n, {
  PG: function() {
return s;
  },
  W$: function() {
return l;
  },
  lg: function() {
return c;
  },
  ug: function() {
return o;
  },
  xh: function() {
return r;
  }
}), (a = s || (s = {}))[a.LANDING = 0] = 'LANDING', a[a.SAFETY_CHECK = 1] = 'SAFETY_CHECK', a[a.DEFAULT_CHANNELS = 2] = 'DEFAULT_CHANNELS', a[a.WELCOME_CARD = 3] = 'WELCOME_CARD', a[a.CUSTOMIZATION_QUESTIONS = 4] = 'CUSTOMIZATION_QUESTIONS', a[a.REVIEW = 5] = 'REVIEW', a[a.HOME_SETTINGS = 6] = 'HOME_SETTINGS';
let r = [
  0,
  1,
  2,
  4,
  6,
  5
];
(i = l || (l = {}))[i.TOGGLE_ENABLED = 0] = 'TOGGLE_ENABLED', i[i.TOGGLE_DISABLED = 1] = 'TOGGLE_DISABLED', i[i.PREVIEW = 2] = 'PREVIEW', i[i.EDIT_DEFAULT_CHANNELS = 3] = 'EDIT_DEFAULT_CHANNELS', i[i.EDIT_CUSTOMIZATION_QUESTIONS = 4] = 'EDIT_CUSTOMIZATION_QUESTIONS', i[i.EDIT_HOME_SETTINGS = 5] = 'EDIT_HOME_SETTINGS';
let o = r.filter(e => 0 !== e);

function c(e) {
  switch (e) {
case 1:
  return 'Safety Check';
case 2:
  return 'Default Channels';
case 4:
  return 'Customization Questions';
case 6:
  return 'Home Settings';
default:
  return null;
  }
}
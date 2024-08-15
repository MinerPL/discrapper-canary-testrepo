t.d(n, {
  JE: function() {
return u;
  },
  ab: function() {
return l;
  },
  iG: function() {
return a;
  },
  lL: function() {
return c;
  },
  rC: function() {
return s;
  }
});
var r = t(293810),
  i = t(474936),
  o = t(689938);

function l(e) {
  return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}

function u(e) {
  let {
interval: n,
interval_count: t
  } = e;
  return function(e) {
switch (e) {
  case i.rV.DAY:
    return o.Z.Messages.DAY;
  case i.rV.MONTH:
    return o.Z.Messages.MONTH;
  case i.rV.YEAR:
    return o.Z.Messages.YEAR;
}
  }(n).format({
count: t
  });
}

function a(e) {
  let {
interval: n,
interval_count: t
  } = e;
  switch (n) {
case i.rV.DAY:
  if (t > 0 && t % 7 == 0)
    return o.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
      weeks: t / 7
    });
  return o.Z.Messages.DURATION_DAYS_CAPITALIZE.format({
    days: t
  });
case i.rV.MONTH:
  return o.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
    months: t
  });
case i.rV.YEAR:
  return o.Z.Messages.DURATION_YEARS_CAPITALIZE.format({
    years: t
  });
  }
}

function s(e) {
  return e.ref_type === r.Qs.CHANNEL;
}

function c(e) {
  return e.ref_type === r.Qs.INTANGIBLE;
}
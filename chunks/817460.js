t.d(n, {
  JE: function() {
return u;
  },
  ab: function() {
return l;
  },
  iG: function() {
return s;
  },
  lL: function() {
return c;
  },
  rC: function() {
return a;
  }
});
var i = t(293810),
  r = t(474936),
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
  case r.rV.DAY:
    return o.Z.Messages.DAY;
  case r.rV.MONTH:
    return o.Z.Messages.MONTH;
  case r.rV.YEAR:
    return o.Z.Messages.YEAR;
}
  }(n).format({
count: t
  });
}

function s(e) {
  let {
interval: n,
interval_count: t
  } = e;
  switch (n) {
case r.rV.DAY:
  if (t > 0 && t % 7 == 0)
    return o.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
      weeks: t / 7
    });
  return o.Z.Messages.DURATION_DAYS_CAPITALIZE.format({
    days: t
  });
case r.rV.MONTH:
  return o.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
    months: t
  });
case r.rV.YEAR:
  return o.Z.Messages.DURATION_YEARS_CAPITALIZE.format({
    years: t
  });
  }
}

function a(e) {
  return e.ref_type === i.Qs.CHANNEL;
}

function c(e) {
  return e.ref_type === i.Qs.INTANGIBLE;
}
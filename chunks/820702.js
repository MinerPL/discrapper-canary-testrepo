var r;
r = 0,
  function(e) {

function t(e) {
  return e > 1 && e < 5;
}

function n(e, n, r, i) {
  var a = e + ' ';
  switch (r) {
    case 's':
      return n || i ? 'pár sekúnd' : 'pár sekundami';
    case 'ss':
      if (n || i)
        return a + (t(e) ? 'sekundy' : 'sekúnd');
      return a + 'sekundami';
    case 'm':
      return n ? 'minúta' : i ? 'minútu' : 'minútou';
    case 'mm':
      if (n || i)
        return a + (t(e) ? 'minúty' : 'minút');
      return a + 'minútami';
    case 'h':
      return n ? 'hodina' : i ? 'hodinu' : 'hodinou';
    case 'hh':
      if (n || i)
        return a + (t(e) ? 'hodiny' : 'hodín');
      return a + 'hodinami';
    case 'd':
      return n || i ? 'deň' : 'dňom';
    case 'dd':
      if (n || i)
        return a + (t(e) ? 'dni' : 'dní');
      return a + 'dňami';
    case 'M':
      return n || i ? 'mesiac' : 'mesiacom';
    case 'MM':
      if (n || i)
        return a + (t(e) ? 'mesiace' : 'mesiacov');
      return a + 'mesiacmi';
    case 'y':
      return n || i ? 'rok' : 'rokom';
    case 'yy':
      if (n || i)
        return a + (t(e) ? 'roky' : 'rokov');
      return a + 'rokmi';
  }
}
e.defineLocale('sk', {
  months: 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
  monthsShort: 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_'),
  weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
  weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
  weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
  longDateFormat: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm'
  },
  calendar: {
    sameDay: '[dnes o] LT',
    nextDay: '[zajtra o] LT',
    nextWeek: function() {
      switch (this.day()) {
        case 0:
          return '[v nedeľu o] LT';
        case 1:
        case 2:
          return '[v] dddd [o] LT';
        case 3:
          return '[v stredu o] LT';
        case 4:
          return '[vo štvrtok o] LT';
        case 5:
          return '[v piatok o] LT';
        case 6:
          return '[v sobotu o] LT';
      }
    },
    lastDay: '[včera o] LT',
    lastWeek: function() {
      switch (this.day()) {
        case 0:
          return '[minulú nedeľu o] LT';
        case 1:
        case 2:
        case 4:
        case 5:
          return '[minulý] dddd [o] LT';
        case 3:
          return '[minulú stredu o] LT';
        case 6:
          return '[minulú sobotu o] LT';
      }
    },
    sameElse: 'L'
  },
  relativeTime: {
    future: 'za %s',
    past: 'pred %s',
    s: n,
    ss: n,
    m: n,
    mm: n,
    h: n,
    hh: n,
    d: n,
    dd: n,
    M: n,
    MM: n,
    y: n,
    yy: n
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: '%d.',
  week: {
    dow: 1,
    doy: 4
  }
});
  }(n(913527));
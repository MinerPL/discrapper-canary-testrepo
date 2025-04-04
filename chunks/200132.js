!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    var t = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
        n = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', t[7], t[8], t[9]];
    function r(e, t, n, r) {
        var o = '';
        switch (n) {
            case 's':
                return r ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
                return r ? 'sekunnin' : 'sekuntia';
            case 'm':
                return r ? 'minuutin' : 'minuutti';
            case 'mm':
                o = r ? 'minuutin' : 'minuuttia';
                break;
            case 'h':
                return r ? 'tunnin' : 'tunti';
            case 'hh':
                o = r ? 'tunnin' : 'tuntia';
                break;
            case 'd':
                return r ? 'päivän' : 'päivä';
            case 'dd':
                o = r ? 'päivän' : 'päivää';
                break;
            case 'M':
                return r ? 'kuukauden' : 'kuukausi';
            case 'MM':
                o = r ? 'kuukauden' : 'kuukautta';
                break;
            case 'y':
                return r ? 'vuoden' : 'vuosi';
            case 'yy':
                o = r ? 'vuoden' : 'vuotta';
        }
        return i(e, r) + ' ' + o;
    }
    function i(e, r) {
        return e < 10 ? (r ? n[e] : t[e]) : e;
    }
    return e.defineLocale('fi', {
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'Do MMMM[ta] YYYY',
            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l: 'D.M.YYYY',
            ll: 'Do MMM YYYY',
            lll: 'Do MMM YYYY, [klo] HH.mm',
            llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar: {
            sameDay: '[tänään] [klo] LT',
            nextDay: '[huomenna] [klo] LT',
            nextWeek: 'dddd [klo] LT',
            lastDay: '[eilen] [klo] LT',
            lastWeek: '[viime] dddd[na] [klo] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s päästä',
            past: '%s sitten',
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});

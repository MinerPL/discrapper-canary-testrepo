a.d(t, { Z: () => n });
var i = a(475637);
let n = {
    ordinalNumber: (0, a(925300).Z)({
        matchPattern: /^(\d+)\.?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
            return parseInt(e, 10);
        }
    }),
    era: (0, i.Z)({
        matchPatterns: {
            narrow: /^(ie\.|isz\.)/i,
            abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
            wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/ie/i, /isz/i],
            abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i],
            any: [/előtt/i, /(szerint|i. sz.)/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, i.Z)({
        matchPatterns: {
            narrow: /^[1234]\.?/i,
            abbreviated: /^[1234]?\.?\s?n\.év/i,
            wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i]
        },
        defaultParseWidth: 'any',
        valueCallback: function (e) {
            return e + 1;
        }
    }),
    month: (0, i.Z)({
        matchPatterns: {
            narrow: /^[jfmaásond]|sz/i,
            abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
            wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i],
            any: [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, i.Z)({
        matchPatterns: {
            narrow: /^([vhkpc]|sz|cs|sz)/i,
            short: /^([vhkp]|sze|cs|szo)/i,
            abbreviated: /^([vhkp]|sze|cs|szo)/i,
            wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i],
            any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, i.Z)({
        matchPatterns: { any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i },
        defaultMatchWidth: 'any',
        parsePatterns: {
            any: {
                am: /^de\.?/i,
                pm: /^du\.?/i,
                midnight: /^éjf/i,
                noon: /^dé/i,
                morning: /reg/i,
                afternoon: /^délu\.?/i,
                evening: /es/i,
                night: /éjj/i
            }
        },
        defaultParseWidth: 'any'
    })
};

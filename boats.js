const boats = [
    {
        id: 1,
        naam: "American Century",
        bedrijf: "American Steamship Company",
        bouwjaar: 1981,
        lengte: {
            feet: 1000,
            meter: 305
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 93.596,
        motorvermogen: "4 x 3500pk",
        weetjes: {
            w1: "de American Century vervoert voornamelijk ijzererts en steenkool",
            w2: "het schip heette eerst Columbia Star, als eerbetoon aan de eerste boot, genaamd Columbia, die ijzererts vervoerde",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=634095&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=3453349&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4265494&size=1600",
            youtube: "https://www.youtube.com/embed/tGluVSZ1olw"
        }
    },
    {
        id: 2,
        naam: "American Integrity",
        bedrijf: "American Steamship Company",
        bouwjaar: 1978,
        lengte: {
            feet: 1000,
            meter: 305
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 92.072,
        motorvermogen: "4 x 3500pk",
        weetjes: {
            w1: "dit schip heette eerst Lewis Wilson Foy, en later ook nog Oglebay Norton",
            w2: "de American Integrity heeft het record van de grootste lading ijzererts vervoerd, ruim 75.000 ton",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4277598&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=3841471&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1839573&size=1600",
            youtube: "https://www.youtube.com/embed/ujfdmyQuyPE"
        }      
    },
    {
        id: 3,
        naam: "American Spirit",
        bedrijf: "American Steamship Company",
        bouwjaar: 1978,
        lengte: {
            feet: 1004,
            meter: 306
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 61.565,
        motorvermogen: "2 x 8000pk",
        weetjes: {
            w1: "de American Spirit is meerdere keren bij slecht weer aan de grond gelopen",
            w2: "de oude naam van het schip is George A. Stinson",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=2936778&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=2022030&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4216844&size=1600",
            youtube: "https://www.youtube.com/embed/fL7ktPjIBlw"
        }    
    },
    {
        id: 4,
        naam: "Burns Harbor",
        bedrijf: "American Steamship Company",
        bouwjaar: 1980,
        lengte: {
            feet: 1000,
            meter: 305
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 82.061,
        motorvermogen: "4 x 3500pk",
        weetjes: {
            w1: "tijdens de bouw verwoestte een hevige brand de transportband en mechaniek daarvan",
            w2: "de Burns Harbor vervoert voornamelijk ijzererts",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1817823&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=3905803&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=841750&size=1600",
            youtube: "https://www.youtube.com/embed/-xKPwnyO0yk"
        }       
    },
    {
        id: 5,
        naam: "Edgar B. Speer",
        bedrijf: "Great Lakes Fleet Inc.",
        bouwjaar: 1980,
        lengte: {
            feet: 1004,
            meter: 306
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 75.385,
        motorvermogen: "2 x 9630pk",
        weetjes: {
            w1: "de Edgar B. Speer heeft een bijzonder soort los-systeem, waardoor er alleen erts vervoerd kan worden, en op slechts een paar plekken terecht kan om te lossen",
            w2: "het schip heeft een ander schip van de vloot 500 km op sleeptouw genomen toen het roer was afgebroken",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=3173397&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=926797&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=902996&size=1600",
            youtube: "https://www.youtube.com/embed/2YQqpS5Cih0"
        }   
    },
    {
        id: 6,
        naam: "Edwin H. Gott",
        bedrijf: "Great Lakes Fleet Inc.",
        bouwjaar: 1979,
        lengte: {
            feet: 1004,
            meter: 306
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 76.012,
        motorvermogen: "2 x 9650pk",
        weetjes: {
            w1: "de Edwin H. Gott heeft de krachtigste motoren van de 1000-footers",
            w2: "de los-arm is later vervangen door een langere, zodat er in meer havens gelost kon worden",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=787128&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1073293&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4257564&size=1600",
            youtube: "https://www.youtube.com/embed/rwHG3jxeNCA"
        }  
    },
    {
        id: 7,
        naam: "Indiana Harbor",
        bedrijf: "American Steamship Company",
        bouwjaar: 1979,
        lengte: {
            feet: 1000,
            meter: 305
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 93.646,
        motorvermogen: "4 x 3500pk",
        weetjes: {
            w1: "de Indiana Harbor heeft een aanvaring gehad met een drijvende vuurtoren, schade 2 miljoen dollar",
            w2: "het was het eerste schip op de Great Lakes met satelliet-navigatie",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1353236&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=2016672&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1165735&size=1600",
            youtube: "https://www.youtube.com/embed/NAUi8fVEkck"
        }        
    },
    {
        id: 8,
        naam: "James R. Barker",
        bedrijf: "Interlake Steamship Company",
        bouwjaar: 1976,
        lengte: {
            feet: 1004,
            meter: 306
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 61.564,
        motorvermogen: "2 x 8000pk",
        weetjes: {
            w1: "de James R. Barker stond model voor de 1000-footers die later gebouwd zijn",
            w2: "midden op Lake Huron brak er een korte hevige brand uit in de machinekamer",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4275570&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1286019&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4487784&size=1600",
            youtube: "https://www.youtube.com/embed/nc_8uIpYrdc"
        }         
    },
    {
        id: 9,
        naam: "Mesabi Miner",
        bedrijf: "Interlake Steamship Company",
        bouwjaar: 1977,
        lengte: {
            feet: 1004,
            meter: 306
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 64.457,
        motorvermogen: "2 x 8000pk",
        weetjes: {
            w1: "de Mesabi Miner was de eerste 1000-footer die over de Saginaw River voer",
            w2: "het schip heeft verschillende keren schade opgelopen door ijs",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=3438391&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=3752190&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4215145&size=1600",
            youtube: "https://www.youtube.com/embed/C03U12zhuKU"
        }        
    },
    {
        id: 10,
        naam: "Paul R. Tregurtha",
        bedrijf: "Interlake Steamship Company",
        bouwjaar: 1980,
        lengte: {
            feet: 1013,
            meter: 309
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 68.001,
        motorvermogen: "2 x 8560pk",
        weetjes: {
            w1: "de Paul R. Tregurtha heeft als grootste schip de bijnaam 'Queen of the Lakes'",
            w2: "het schip heette eerst William J. De Lancey",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=952043&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1772715&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=266171&size=1600",
            youtube: "https://www.youtube.com/embed/UEqwi52V73o"
        }         
    },
    {
        id: 11,
        naam: "Presque Isle",
        bedrijf: "Great Lakes Fleet Inc.",
        bouwjaar: 1973,
        lengte: {
            feet: 1000,
            meter: 300
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 57.501,
        motorvermogen: "2 x 7420pk",
        weetjes: {
            w1: "dit is de enige zogenaamde tug/barge-combinatie van 1000ft.",
            w2: "de duwboot zelf is 43 meter lang en 16 meter breed"
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1399262&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1985791&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=3050186&size=1600",
            youtube: "https://www.youtube.com/embed/oCfdMKgzkGo"
        }
    },
    {
        id: 12,
        naam: "Stewart J. Cort",
        bedrijf: "Interlake Steamship Company",
        bouwjaar: 1971,
        lengte: {
            feet: 1000,
            meter: 304
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 60.082,
        motorvermogen: "14400pk",
        weetjes: {
            w1: "bij aankomst op de Great Lakes zijn het voor- en achterstuk uit elkaar gezaagd en is er ruim 250 meter laadruimte tussen geplaatst",
            w2: "het is de enige 1000-footer met de stuurhut aan de voorkant",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4409464&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=1817571&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=422112&size=1600",
            youtube: "https://www.youtube.com/embed/KtT3wUYjVo4"
        }       
    },
    {
        id: 13,
        naam: "Walter J. McCarthy Jr.",
        bedrijf: "American Steamship Company",
        bouwjaar: 1977,
        lengte: {
            feet: 1000,
            meter: 305
        },
        breedte: {
            feet: 105,
            meter: 32
        },
        laadcapaciteit: 92.076,
        motorvermogen: "4 x 3500pk",
        weetjes: {
            w1: "het schip heette eerst Belle River",
            w2: "de Walter J. McCarthy Jr. is na een onbekende botsing deels gezonken in de haven van Superior",
        },
        media: {
            foto1: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=937780&size=1600",
            foto2: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4091872&size=1600",
            foto3: "https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=4465707&size=1600",
            youtube: "https://www.youtube.com/embed/0lJqQK8coCw"
        }       
    },
];
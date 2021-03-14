let express = require('express');
let bodyParser = require("body-parser");
let gotHttp = require("got");
let moment = require('moment');
let fs = require('fs');
const { kill } = require('process');


/*
lflDate = { 
    "11-02-2021" : '40', "12-02-2021" : '45', 
    "18-02-2021" : '50', "19-02-2021" : '55', 
    "25-02-2021" : '60', "26-02-2021" : '65', 
    "04-03-2021" : '70', "05-03-2021" : '75', 
    "10-03-2021": '80', "11-03-2021" : '85', "12-03-2021" : '90' 
},
lflListOfGames = [
'6f7f2b88-5598-11eb-892c-065e1d3d7cd4',
'c4630b4d-5598-11eb-892c-065e1d3d7cd4',
'ae665f1d-5598-11eb-892c-065e1d3d7cd4',
'9798a5e7-5598-11eb-892c-065e1d3d7cd4',
'b8bf0f27-5598-11eb-892c-065e1d3d7cd4',
'0c8b1bde-5599-11eb-892c-065e1d3d7cd4',
'e6eaf170-5598-11eb-892c-065e1d3d7cd4',
'efa56ee0-5598-11eb-892c-065e1d3d7cd4',
'f68a7427-5598-11eb-892c-065e1d3d7cd4',
'048c973f-5599-11eb-892c-065e1d3d7cd4',
'4c11b434-5599-11eb-892c-065e1d3d7cd4',
'2226cff7-5599-11eb-892c-065e1d3d7cd4',
'8990f021-5599-11eb-892c-065e1d3d7cd4',
'42b423bc-5599-11eb-892c-065e1d3d7cd4',
'1a31c2ee-5599-11eb-892c-065e1d3d7cd4',
'bb3630ff-5599-11eb-892c-065e1d3d7cd4',
'c42fc86e-5599-11eb-892c-065e1d3d7cd4',
'd90c83ed-5599-11eb-892c-065e1d3d7cd4',
'cc2f0f29-5599-11eb-892c-065e1d3d7cd4',
'e0771959-5599-11eb-892c-065e1d3d7cd4',
'edac064f-5599-11eb-892c-065e1d3d7cd4',
'f767edbe-5599-11eb-892c-065e1d3d7cd4',
'7c9a5ab2-559a-11eb-892c-065e1d3d7cd4',
'85f2cad0-559a-11eb-892c-065e1d3d7cd4',
'1727e9bc-559a-11eb-892c-065e1d3d7cd4',
'0235a426-559b-11eb-892c-065e1d3d7cd4',
'338b4160-559b-11eb-892c-065e1d3d7cd4',
'f78e1101-559a-11eb-892c-065e1d3d7cd4',
'1a224d57-559b-11eb-892c-065e1d3d7cd4',
'0ef55799-559b-11eb-892c-065e1d3d7cd4',
'ccee1bf9-55a4-11eb-892c-065e1d3d7cd4',
'47b6f050-559b-11eb-892c-065e1d3d7cd4',
'64dc9343-55a4-11eb-892c-065e1d3d7cd4',
'79d2f587-55a4-11eb-892c-065e1d3d7cd4',
'c327cdb4-55a4-11eb-892c-065e1d3d7cd4',
'eb158bed-55a4-11eb-892c-065e1d3d7cd4',
'f7c2c1ee-55a4-11eb-892c-065e1d3d7cd4',
'01992708-55a5-11eb-892c-065e1d3d7cd4',
'17d2a31d-55a5-11eb-892c-065e1d3d7cd4',
'21bf5704-55a5-11eb-892c-065e1d3d7cd4',
'9352a202-55a5-11eb-892c-065e1d3d7cd4',
'9a82f4d4-55a5-11eb-892c-065e1d3d7cd4',
'465ed2d4-55a5-11eb-892c-065e1d3d7cd4',
'79f58c78-55a5-11eb-892c-065e1d3d7cd4',
'838454d0-55a5-11eb-892c-065e1d3d7cd4',
'c5e15921-55a5-11eb-892c-065e1d3d7cd4',
'b0904dd1-55a6-11eb-892c-065e1d3d7cd4',
'8601b0a9-55a6-11eb-892c-065e1d3d7cd4',
'7a5b8a61-55a6-11eb-892c-065e1d3d7cd4',
'a5307abf-55b1-11eb-892c-065e1d3d7cd4',
'ea4bbc96-55b1-11eb-892c-065e1d3d7cd4',
'f134c1f3-55b1-11eb-892c-065e1d3d7cd4',
'de0071cc-55b1-11eb-892c-065e1d3d7cd4',
'cebdf759-55b1-11eb-892c-065e1d3d7cd4',
'c7944a1d-55b1-11eb-892c-065e1d3d7cd4',
'35e79168-55b2-11eb-892c-065e1d3d7cd4',
'28cb7075-55b2-11eb-892c-065e1d3d7cd4',
'1be29228-55b2-11eb-892c-065e1d3d7cd4',
'0f7c3c5a-55b2-11eb-892c-065e1d3d7cd4',
'fc3ee7d1-55b1-11eb-892c-065e1d3d7cd4',
'87fca7c4-55b2-11eb-892c-065e1d3d7cd4',
'83e500d1-55b2-11eb-892c-065e1d3d7cd4',
'7893b9ab-55b2-11eb-892c-065e1d3d7cd4',
'664a2d64-55b2-11eb-892c-065e1d3d7cd4',
'470c988f-55b2-11eb-892c-065e1d3d7cd4',
'cd7eaf90-55b2-11eb-892c-065e1d3d7cd4',
'c8391372-55b2-11eb-892c-065e1d3d7cd4',
'c47bfd53-55b2-11eb-892c-065e1d3d7cd4',
'b5e8c926-55b2-11eb-892c-065e1d3d7cd4',
'acb506d0-55b2-11eb-892c-065e1d3d7cd4',
'e19fece5-55b2-11eb-892c-065e1d3d7cd4',
'f9b52473-55b2-11eb-892c-065e1d3d7cd4',
'f4053dd1-55b2-11eb-892c-065e1d3d7cd4',
'ee0c7368-55b2-11eb-892c-065e1d3d7cd4',
'e885092b-55b2-11eb-892c-065e1d3d7cd4',
'09aa9a3a-55b3-11eb-892c-065e1d3d7cd4',
'17e33d8a-55b3-11eb-892c-065e1d3d7cd4',
'1c45951c-55b3-11eb-892c-065e1d3d7cd4',
'0f166b56-55b3-11eb-892c-065e1d3d7cd4',
'13cd02b7-55b3-11eb-892c-065e1d3d7cd4',
'35ad2540-55b3-11eb-892c-065e1d3d7cd4',
'31310bf6-55b3-11eb-892c-065e1d3d7cd4',
'3bfd1e99-55b3-11eb-892c-065e1d3d7cd4',
'44c78275-55b3-11eb-892c-065e1d3d7cd4',
'4998b0fa-55b3-11eb-892c-065e1d3d7cd4',
'6fbb6eb1-55b3-11eb-892c-065e1d3d7cd4',
'6a8a64d4-55b3-11eb-892c-065e1d3d7cd4',
'62e43603-55b3-11eb-892c-065e1d3d7cd4',
'5e927993-55b3-11eb-892c-065e1d3d7cd4',
'582e882b-55b3-11eb-892c-065e1d3d7cd4'
],
*/

var app = express();

app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(bodyParser.urlencoded({extended: true}))

let d = new Date();
let date = `${moment().format('DD-MM-YYYY')} ${moment().format('HH:mm:ss')} -> `;

const {
    PORT = 32222,
    lecPlayer = 'https://api-lec.superfantasylol.com/api/v1/playerinfos/',
    lefGames = 'https://api-lec.superfantasylol.com/api/v1/games/',
    lecCollection = 'https://api-lec.superfantasylol.com/api/v1/users/bigc/collection',
    lflPlayer = 'https://api-lfl.superfantasylol.com/api/v1/playerinfos/',
    lflGames = 'https://api-lfl.superfantasylol.com/api/v1/games/',
    lflMatches = 'https://api-lfl.superfantasylol.com/api/v1/matches/',
    lflTeams = {
        "misfitspremier" : {
            "name" : 'Misfits Premier',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "ldlcol" : {
            "name" : 'LDLC OL',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "bds" : {
            "name" : 'BDS',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "gameward" : {
            "name" : 'Gameward',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "izidream" : {
            "name" : 'Izi Dream',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "solary" : {
            "name" : 'Solary',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "karminecorp" : {
            "name" : 'Karmine-Corp',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "vitalitybee" : {
            "name" : 'Vitality.Bee',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "gamersorigin" : {
            "name" : 'GamersOrigin',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {
                    "TOP" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        },
        "mces" : {
            "name" : 'MCES',
            "duration" : [],                                    // list of the time
            "players" : {
                "TOP" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "JUNGLER" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "MID" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "ADC" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "SUPPORT" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                },
                "COACH" : {
                    "player" : [],
                    "metrics" : [],
                    "items" : []
                }
            },
            "score" : [],                                       // key : teams vs + value : 0 = lose / 1 = win
            "points" : {
                "bestPlayerOverAll" : [],                   // Rank of them
                "eachGamesBestPlayer" : [],                 // eachGamesRank of
                "bestWin" : {},
                "bestLose" : {},
                "duration" : {
                    "time" : [],
                    "averageTotal" : '',
                    "averageWin" : '',
                    "averageLose" : ''
                },
                "points" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "metrics" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {}
                },
                "items" : {
                    "eachGames" : [],
                    "total" : {},
                    "win" : {},
                    "lose" : {},
                    "averageTotal" : {},
                    "averageWin" : {},
                    "averageLose" : {},
                    "bestEachGames" : [],
                    "bestEachWin" :{},
                    "bestEachLose" : {},
                    "bestTotal" : {}
                },
                "player" : {//////////////////////////////////  
                    "TOP" : {///////////////////////////////// stats + items pts + pts + players at this role  + more personnal players at this roles datas (same as role)
                        // todo : for all make a player an Objt
                        // todo : verify if all var are ok in players 
                        "players" : {},                     // stats + items + pts for each players at it role
                        "bestTotal" : {},                   // which players at this role is the best overall
                        "bestWin" : {},                     // which players at this role is the best in case of win
                        "bestLose" : {},                    // which players at this role is the best in case of lose
                        "points" : {////////////////////////// stats + items + pts for role
                            // todo : do it for all role players
                            // todo : do it for all int var
                            "eachGames" : [],               // pts for each game
                            "total" : 0,                    // total pts overal
                            "win" : 0,                      // total pts for the wins games
                            "lose" : 0,                     // total pts for the wins loses
                            "averageTotal" : 0,             // average overall pts
                            "averageWin" : 0,               // average pts for wins
                            "averageLose" : 0               // average pts for loses
                        },
                        "metrics" : {///////////////////////// stats of the role
                            "eachGames" : [],               // stats for each games
                            "total" : {},                   // total overall
                            "win" : {},                     // total for each win
                            "lose" : {},                    // total for each lose
                            "averageTotal" : {},            // average overall
                            "averageWin" : {},              // average for each win
                            "averageLose" : {}              // average for each lose
                        },
                        "items" : {/////////////////////////// pts per items
                            "eachGames" : [],               // each games
                            "total" : {},                   // total of point per items
                            "win" : {},                     // total of point per items per win
                            "lose" : {},                    // total of point per items per lose
                            "averageTotal" : {},            // average of point per items
                            "averageWin" : {},              // average of point per items per win
                            "averageLose" : {},             // average of point per items per lose
                            "bestEachGames" : [],           // rank the items for each games
                            "bestWin" :{},                  // rank the items for each win
                            "bestLose" : {},                // rank the items for each lose
                            "bestTotal" : {}                // rank the items overall
                        }
                    },
                    "JUNGLER" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "MID" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "ADC" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "SUPPORT" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        }
                    },
                    "COACH" : {
                        "players" : [],
                        "bestTotal" : {},
                        "bestWin" : {},
                        "bestLose" : {},
                        "points" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "metrics" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {}
                        },
                        "items" : {
                            "eachGames" : [],
                            "total" : {},
                            "win" : {},
                            "lose" : {},
                            "averageTotal" : {},
                            "averageWin" : {},
                            "averageLose" : {},
                            "bestEachGames" : [],
                            "bestEachWin" :{},
                            "bestEachLose" : {},
                            "bestTotal" : {}
                        },
                    }
                },
            }
        }
    },
    lflListOfItems = [],
    oldLFLDate = [ 35 ],
    lflDate = { 
                "11-02-2021" : '40', "12-02-2021" : '45', 
                "18-02-2021" : '50', "19-02-2021" : '55', 
                "25-02-2021" : '60', "26-02-2021" : '65', 
                "04-03-2021" : '70', "05-03-2021" : '75', 
                "10-03-2021": '80', "11-03-2021" : '85', "12-03-2021" : '90' 
            },
    lflListOfGames = [
        '6f7f2b88-5598-11eb-892c-065e1d3d7cd4',
'c4630b4d-5598-11eb-892c-065e1d3d7cd4',
'ae665f1d-5598-11eb-892c-065e1d3d7cd4',
'9798a5e7-5598-11eb-892c-065e1d3d7cd4',
'b8bf0f27-5598-11eb-892c-065e1d3d7cd4',
'0c8b1bde-5599-11eb-892c-065e1d3d7cd4',
'e6eaf170-5598-11eb-892c-065e1d3d7cd4',
'efa56ee0-5598-11eb-892c-065e1d3d7cd4',
'f68a7427-5598-11eb-892c-065e1d3d7cd4',
'048c973f-5599-11eb-892c-065e1d3d7cd4',
'4c11b434-5599-11eb-892c-065e1d3d7cd4',
'2226cff7-5599-11eb-892c-065e1d3d7cd4',
'8990f021-5599-11eb-892c-065e1d3d7cd4',
'42b423bc-5599-11eb-892c-065e1d3d7cd4',
'1a31c2ee-5599-11eb-892c-065e1d3d7cd4',
'bb3630ff-5599-11eb-892c-065e1d3d7cd4',
'c42fc86e-5599-11eb-892c-065e1d3d7cd4',
'd90c83ed-5599-11eb-892c-065e1d3d7cd4',
'cc2f0f29-5599-11eb-892c-065e1d3d7cd4',
'e0771959-5599-11eb-892c-065e1d3d7cd4',
'edac064f-5599-11eb-892c-065e1d3d7cd4',
'f767edbe-5599-11eb-892c-065e1d3d7cd4',
'7c9a5ab2-559a-11eb-892c-065e1d3d7cd4',
'85f2cad0-559a-11eb-892c-065e1d3d7cd4',
'1727e9bc-559a-11eb-892c-065e1d3d7cd4',
'0235a426-559b-11eb-892c-065e1d3d7cd4',
'338b4160-559b-11eb-892c-065e1d3d7cd4',
'f78e1101-559a-11eb-892c-065e1d3d7cd4',
'1a224d57-559b-11eb-892c-065e1d3d7cd4',
'0ef55799-559b-11eb-892c-065e1d3d7cd4',
'ccee1bf9-55a4-11eb-892c-065e1d3d7cd4',
'47b6f050-559b-11eb-892c-065e1d3d7cd4',
'64dc9343-55a4-11eb-892c-065e1d3d7cd4',
'79d2f587-55a4-11eb-892c-065e1d3d7cd4',
'c327cdb4-55a4-11eb-892c-065e1d3d7cd4',
'eb158bed-55a4-11eb-892c-065e1d3d7cd4',
'f7c2c1ee-55a4-11eb-892c-065e1d3d7cd4',
'01992708-55a5-11eb-892c-065e1d3d7cd4',
'17d2a31d-55a5-11eb-892c-065e1d3d7cd4',
'21bf5704-55a5-11eb-892c-065e1d3d7cd4',
'9352a202-55a5-11eb-892c-065e1d3d7cd4',
'9a82f4d4-55a5-11eb-892c-065e1d3d7cd4',
'465ed2d4-55a5-11eb-892c-065e1d3d7cd4',
'79f58c78-55a5-11eb-892c-065e1d3d7cd4',
'838454d0-55a5-11eb-892c-065e1d3d7cd4',
'c5e15921-55a5-11eb-892c-065e1d3d7cd4',
'b0904dd1-55a6-11eb-892c-065e1d3d7cd4',
'8601b0a9-55a6-11eb-892c-065e1d3d7cd4',
'7a5b8a61-55a6-11eb-892c-065e1d3d7cd4',
'a5307abf-55b1-11eb-892c-065e1d3d7cd4',
'ea4bbc96-55b1-11eb-892c-065e1d3d7cd4',
'f134c1f3-55b1-11eb-892c-065e1d3d7cd4',
'de0071cc-55b1-11eb-892c-065e1d3d7cd4',
'cebdf759-55b1-11eb-892c-065e1d3d7cd4',
'c7944a1d-55b1-11eb-892c-065e1d3d7cd4',
'35e79168-55b2-11eb-892c-065e1d3d7cd4',
'28cb7075-55b2-11eb-892c-065e1d3d7cd4',
'1be29228-55b2-11eb-892c-065e1d3d7cd4',
'0f7c3c5a-55b2-11eb-892c-065e1d3d7cd4',
'fc3ee7d1-55b1-11eb-892c-065e1d3d7cd4',
'87fca7c4-55b2-11eb-892c-065e1d3d7cd4',
'83e500d1-55b2-11eb-892c-065e1d3d7cd4',
'7893b9ab-55b2-11eb-892c-065e1d3d7cd4',
'664a2d64-55b2-11eb-892c-065e1d3d7cd4',
'470c988f-55b2-11eb-892c-065e1d3d7cd4',
'cd7eaf90-55b2-11eb-892c-065e1d3d7cd4',
'c8391372-55b2-11eb-892c-065e1d3d7cd4',
'c47bfd53-55b2-11eb-892c-065e1d3d7cd4',
'b5e8c926-55b2-11eb-892c-065e1d3d7cd4',
'acb506d0-55b2-11eb-892c-065e1d3d7cd4',
'e19fece5-55b2-11eb-892c-065e1d3d7cd4',
'f9b52473-55b2-11eb-892c-065e1d3d7cd4',
'f4053dd1-55b2-11eb-892c-065e1d3d7cd4',
'ee0c7368-55b2-11eb-892c-065e1d3d7cd4',
'e885092b-55b2-11eb-892c-065e1d3d7cd4',
'09aa9a3a-55b3-11eb-892c-065e1d3d7cd4',
'17e33d8a-55b3-11eb-892c-065e1d3d7cd4',
'1c45951c-55b3-11eb-892c-065e1d3d7cd4',
'0f166b56-55b3-11eb-892c-065e1d3d7cd4',
'13cd02b7-55b3-11eb-892c-065e1d3d7cd4',
'35ad2540-55b3-11eb-892c-065e1d3d7cd4',
'31310bf6-55b3-11eb-892c-065e1d3d7cd4',
'3bfd1e99-55b3-11eb-892c-065e1d3d7cd4',
'44c78275-55b3-11eb-892c-065e1d3d7cd4',
'4998b0fa-55b3-11eb-892c-065e1d3d7cd4',
'6fbb6eb1-55b3-11eb-892c-065e1d3d7cd4',
'6a8a64d4-55b3-11eb-892c-065e1d3d7cd4',
'62e43603-55b3-11eb-892c-065e1d3d7cd4',
'5e927993-55b3-11eb-892c-065e1d3d7cd4',
'582e882b-55b3-11eb-892c-065e1d3d7cd4'
    ],
    lflCollection = 'https://api-lfl.superfantasylol.com/api/v1/users/bigc/collection'
} = process.env;


app.get("/", (req, res) => 
{
    res.setHeader("Content-Type", "text/html");

    (async () => 
    {
        let lflListofMatchesAndGames;            // charger le fichier matchesGames.json
    
        fs.readFile('matchesGames.json', 'utf8', (err, data) => 
        { 
            if (err) 
            { 
                console.log(`Error reading file from disk: ${err}`); 
            } 
            else 
            { 
                lflListofMatchesAndGames = JSON.parse(data); 
            }
        });   // todo : field the matches and games at the start of the server
    
        console.log(lflListofMatchesAndGames);

        let peopleData = await gotHttp(lflPlayer).json();
        peopleData = peopleData.data;

        res.render('index.ejs', { PlayersRanked : peopleData });
    })();
});


app.get("/team", (req, res) => 
{
    res.setHeader("Content-Type", "text/html");

    (async () => 
    {
        let teamData;
        let teams = {};
        
        if (Object.keys(lflDate)[0] == moment().format('DD-MM-YYYY'))
        {
            for (let i = oldLFLDate[0]; i < lflDate[moment().format('DD-MM-YYYY')]; i++)
            {
                console.log(i + ' - ' + lflListOfGames[i]);

                teamData = await gotHttp(lflGames + lflListOfGames[i]).json();
                teams[i] = teamData.data;

                if (i == lflDate[moment().format('DD-MM-YYYY')] - 1)
                {
                    let teams2;

                    fs.readFile('lflGames.json', 'utf8', (err, data) => 
                    {
                        if (err) 
                        {
                            console.log(`Error reading file from disk: ${err}`);
                        } 
                        else 
                        {
                            teams2 = JSON.parse(data);
                        }
                    });

                    // todo : faire le mix des 2 


                    fs.writeFile('lflGames.json', JSON.stringify(teams3), 'utf8', (err)=>
                    {
                        if(err)
                        {
                            console.log(err)
                        }
                        else
                        {
                            oldLFLDate[0] = lflDate[moment().format('DD-MM-YYYY')];

                            delete lflDate[moment().format('DD-MM-YYYY')];
                        }
                    });

                    res.render('team.ejs', { PlayersRanked : teams3 });
                }
            };
        }
        else if (!fs.existsSync('lflGames.json'))
        {
            for (let i = 0; i < oldLFLDate[0]; i++)
            {
                console.log(i + ' - ' + lflListofMatchesAndGames[Object.keys(lflListofMatchesAndGames)[i]]);

                teamData = await gotHttp(lflGames + lflListofMatchesAndGames[Object.keys(lflListofMatchesAndGames)[i]]).json();
                teamData = teamData.data;
                
                matchesData = await gotHttp(lflMatches + Object.keys(lflListofMatchesAndGames)[i]).json();
                matchesData = matchesData.data;

                teams[i] = { teamData, matchesData }; 

                if (lflListOfItems.length == 0) { lflListOfItems = teamData.itemCards }

                if (i == oldLFLDate[0] - 1)
                {
                    // For each match we're building the object lflTeams
                    for (let i = 0; i < Object.keys(teams).length; i++)
                    {
                        // todo : Change to the new form
                        // Local  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                        // Duration
                        lflTeams[teams[i].teamData.local.team.slug]['duration'].push(teams[i].teamData.duration);

                        // Score
                        lflTeams[teams[i].teamData.local.team.slug]['score'].push({});
                        lflTeams[teams[i].teamData.local.team.slug].score[lflTeams[teams[i].teamData.local.team.slug].score.length - 1][teams[i].teamData.visitor.team.slug] = teams[i].teamData.local.score;


                        // Visitor
                        // Duration
                        lflTeams[teams[i].teamData.visitor.team.slug]['duration'].push(teams[i].teamData.duration);

                        // Score
                        lflTeams[teams[i].teamData.visitor.team.slug]['score'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['score'][lflTeams[teams[i].teamData.visitor.team.slug]['score'].length - 1][teams[i].teamData.local.team.slug] = teams[i].teamData.visitor.score;

                        // Points
                        // player : points, items, metrics
                        // ON TRAITE CHAQUE ROLE DE NOTRE TEAM UN PAR UN QUI RECOIT LES DONNEES
                        for (let j = 0; j < Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player).length; j++)
                        {
                            // Players   
                            // LOCAL
                            // lflTeams.team.players.ROLE.player
                            // Création du player du jour
                            lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['player'].push({});
                            // lflTeams.team.players.ROLE..player.SUBSTITUTE OR TITULAR
                            lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['player'][lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['player'].length - 1].role = teams[i].teamData.local.players[j].role;
                            // Name
                            lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['player'][lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['player'].length - 1].name = teams[i].teamData.local.players[j].player.nickname;
                            // pts
                            lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['player'][lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['player'].length - 1].pts = teams[i].matchesData.local.players[j].score;

                            // metrics
                            lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['metrics'].push({});
                            lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['metrics'][lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['metrics'].length - 1] = teams[i].teamData.local.players[j].metrics;

                            // items
                            lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['items'].push({});
                            lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['items'][lflTeams[teams[i].teamData.local.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['items'].length - 1] = teams[i].teamData.local.players[j].items;

                            // Players
                            // lflTeams.team.players.ROLE.player
                            // Création du player du jour
                            lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]]['player'].push({});
                            // lflTeams.team.players.ROLE..player.SUBSTITUTE OR TITULAR
                            lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]]['player'][lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]]['player'].length - 1].role = teams[i].teamData.visitor.players[j].role;
                            // Name
                            lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]]['player'][lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]]['player'].length - 1].name = teams[i].teamData.visitor.players[j].player.nickname;
                            // pts
                            lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]]['player'][lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]]['player'].length - 1].pts = teams[i].matchesData.visitor.players[j].score;

                            
                            // metrics
                            lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['metrics'].push({});
                            lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['metrics'][lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['metrics'].length - 1] = teams[i].teamData.visitor.players[j].metrics;

                            // items
                            lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['items'].push({});
                            lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['items'][lflTeams[teams[i].teamData.visitor.team.slug]['players'][Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]]['items'].length - 1] = teams[i].teamData.visitor.players[j].items;


                            // LOCAL
                            // Si il n'y a pas de joueur ajouté à ce role on en créer et on le remplit
                            // lflTeams.team.points.player.ROLE.players.namePlayer
                            if (lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players.hasOwnProperty(teams[i].teamData.local.players[j].player.nickname) == false)
                            {
                                // création du premier joueur 
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname] = {};

                                // création de son object concernant les pts
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname]['points'] = {};

                                // Suivit des pts pour each games
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['eachGames'] = [];
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.eachGames.push(teams[i].matchesData.local.players[j].score);

                                // Points totaux
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['total'] = teams[i].matchesData.local.players[j].score;

                                // Points en cas de win
                                if (teams[i].teamData.local.team.score == 1) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['win'] = teams[i].matchesData.local.players[j].score; }

                                // Points en cas de lose
                                if (teams[i].teamData.local.team.score == 0) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['lose'] = teams[i].matchesData.local.players[j].score; }

                                // averageTotal 
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['averageTotal'] = teams[i].matchesData.local.players[j].score;

                                 // averageWin
                                 if (teams[i].teamData.local.team.score == 1) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['averageWin'] = teams[i].matchesData.local.players[j].score; }

                                // averageLose
                                if (teams[i].teamData.local.team.score == 0) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['averageLose'] = teams[i].matchesData.local.players[j].score; }
                                

                                // Création du suivis de ses scores avec l'équipe
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname]['score'] = [];
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].score.push({});
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname][lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].score.length - 1][teams[i].teamData.visitor.team.slug] = teams[i].teamData.local.score;

                                // création de sa rubrique items
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname]['items'] = {};

                                // pour chaque items à chaque games ses stats 
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['eachGames'] = [];
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.eachGames.push(teams[i].teamData.local.players[j].items);

                                // Total de chaque items pour toutes les games
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['total'] = teams[i].teamData.local.players[j].items;

                                // Total de chaque items en cas de win
                                if (teams[i].teamData.local.team.score == 1) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['win'] = teams[i].teamData.local.players[j].items };

                                // total de chaque items en cas de lose
                                if (teams[i].teamData.local.team.score == 0) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['lose'] = teams[i].teamData.local.players[j].items };

                                // Average total des items
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['averageTotal'] = teams[i].teamData.local.players[j].items;

                                // Average en fonction des wins
                                if (teams[i].teamData.local.team.score == 1) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['averageWin'] = teams[i].teamData.local.players[j].items };

                                // Average en fonction des loses
                                if (teams[i].teamData.local.team.score == 0) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['averageLose'] = teams[i].teamData.local.players[j].items };

                                // Création de la rubrique bestEachGames
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['bestEachGames'] = [];

                                // Classement de chaque items & assignement 
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.bestEachGames.push(Object.fromEntries(Object.entries(teams[i].teamData.local.players[j].items).sort(([,a],[,b]) => b-a)));

                                // Best items for the wins Classement de chaque items & assignement 
                                if (teams[i].teamData.local.team.score == 1) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['bestWin'] = Object.fromEntries(Object.entries(teams[i].teamData.local.players[j].items).sort(([,a],[,b]) => b-a)) };

                                // Best items for the Loses Classement de chaque items & assignement 
                                if (teams[i].teamData.local.team.score == 0) { lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['bestLose'] = Object.fromEntries(Object.entries(teams[i].teamData.local.players[j].items).sort(([,a],[,b]) => b-a)) };

                                // Best items overAll Classement de chaque items & assignement 
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['bestTotal'] = Object.fromEntries(Object.entries(teams[i].teamData.local.players[j].items).sort(([,a],[,b]) => b-a));
                            }
                            else
                            {
                                // add the pts of the player to the tab
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.eachGames.push(teams[i].matchesData.local.players[j].score);

                                // Points totaux
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.total = sumTab(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.eachGames);

                                //  Points en cas de win
                                if (teams[i].teamData.local.team.score == 1 && typeof lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.win != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.win += teams[i].matchesData.local.players[j].score; 
                                }
                                else if (teams[i].teamData.local.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['win'] = teams[i].matchesData.local.players[j].score;
                                }

                                // Points en cas de lose
                                if (teams[i].teamData.local.team.score == 0 && typeof lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.lose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.lose += teams[i].matchesData.local.players[j].score; 
                                }
                                else if (teams[i].teamData.local.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['lose'] = teams[i].matchesData.local.players[j].score;
                                }

                                // averageTotal 
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.averageTotal = averageTab(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.eachGames);

                                 // averageWin
                                if (teams[i].teamData.local.team.score == 1 && typeof lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.averageWin != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.averageWin = avWin(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score, lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.win); 
                                }
                                else if (teams[i].teamData.local.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['averageWin'] = teams[i].matchesData.local.players[j].score; 
                                }

                                // averageLose
                                if (teams[i].teamData.local.team.score == 0 && typeof lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.averageLose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.averageLose = avLose(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score, lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points.lose); 
                                }
                                else if (teams[i].teamData.local.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].points['averageLose'] = teams[i].matchesData.local.players[j].score; 
                                }
  

                                //  Cas ou le joueur existe gestion de son score
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].score.push({});
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname][lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].score.length - 1][teams[i].teamData.visitor.team.slug] = teams[i].teamData.local.score;

                                // Add his stats to the eachGames object
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.eachGames.push(teams[i].teamData.local.players[j].items);

                                // Total de chaque items pour toutes les games
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].total = sum2Object(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].total, teams[i].teamData.local.players[j].items);

                                // Total de chaque items en cas de win
                                if (teams[i].teamData.local.team.score == 1 && typeof lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.win != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.win = sum2Object(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].win, teams[i].teamData.local.players[j].items) ;
                                }
                                else if (teams[i].teamData.local.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['win'] = teams[i].teamData.local.players[j].items;
                                }

                                // total de chaque items en cas de lose
                                if (teams[i].teamData.local.team.score == 0 && typeof lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.lose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.lose = sum2Object(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].lose, teams[i].teamData.local.players[j].items); 
                                }
                                else if (teams[i].teamData.local.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['lose'] = teams[i].teamData.local.players[j].items;
                                }

                                // Average total des items
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.averageTotal = averageTabObjectToObject(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.eachGames);

                                // Average en fonction des wins attention win peut ne pas exister et le créer pour chaque donc ne pas passer par .win mais par ['win']
                                if (teams[i].teamData.local.team.score == 1 && typeof lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.averageWin != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.averageWin = averageWin(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].score, lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.win);
                                }
                                else if (teams[i].teamData.local.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['averageWin'] = teams[i].teamData.local.players[j].items;
                                }
                                // Average en fonction des loses
                                if (teams[i].teamData.local.team.score == 0 && typeof lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.averageLose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.averageLose = averageLose(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].score, lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.lose);
                                }
                                else if (teams[i].teamData.local.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['averageLose'] = teams[i].teamData.local.players[j].items;
                                }

                                // best Each Games items
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.bestEachGames.push(Object.fromEntries(Object.entries(teams[i].teamData.local.players[j].items).sort(([,a],[,b]) => b-a)));

                                // Best items for the wins Classement de chaque items & assignement 
                                if (teams[i].teamData.local.team.score == 1 && lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['bestWin'] != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.bestWin = Object.fromEntries(Object.entries(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['averageWin']).sort(([,a],[,b]) => b-a)); 
                                }
                                else if (teams[i].teamData.local.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['bestWin'] = Object.fromEntries(Object.entries(teams[i].teamData.local.players[j].items).sort(([,a],[,b]) => b-a));
                                }

                                // Best items for the Loses Classement de chaque items & assignement 
                                if (teams[i].teamData.local.team.score == 0 && lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.bestLose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items.bestLose = Object.fromEntries(Object.entries(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['averageLose']).sort(([,a],[,b]) => b-a)); 
                                }
                                else if (teams[i].teamData.local.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['bestLose'] = Object.fromEntries(Object.entries(teams[i].teamData.local.players[j].items).sort(([,a],[,b]) => b-a));
                                }

                                // Best items overAll Classement de chaque items & assignement 
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].items['bestTotal'] = Object.fromEntries(Object.entries(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].players[teams[i].teamData.local.players[j].player.nickname].averageTotal).sort(([,a],[,b]) => b-a));
                            }
                            
                            // todo : filled the empties space with the data from teams[i]
                            // Si il n'y a pas de joueur ajouté à ce role on en créer et on le remplit
                            // lflTeams.team.points.player.ROLE.points
                            // eachGames
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.eachGames.push();

                            // todo : add this tab of win
                            if ()
                            {
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.eachWin.push();
                            }
                            else
                            {
                                // todo : add this tab of lose
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.eachLose.push();
                            }

                            // total
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.total += ;

                            // win
                            if ()
                            {
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.win += ;
                            }
                            
                            // lose 
                            if ()
                            {
                                lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.lose += ;
                            }

                            // averageTotal
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.averageTotal = avTotal(lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.eachGames);

                            // averageWin
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.averageWin = avWin();

                            // averageLose
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].points.averageLose = avLose();

                            // lflTeams.team.points.player.ROLE.metrics
                            // eachGames
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].metrics.eachGames.push();

                            // total
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].metrics.total = ;

                            // win
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].metrics.win = ;

                            // lose
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].metrics.lose = ;

                            // averageTotal
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].metrics.averageTotal = ;

                            // averageWin
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].metrics.averageWin = ;

                            // averageLose
                            lflTeams[teams[i].teamData.local.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.player)[j]].metrics.averageLose = ;

                            

                            // VISITOR
                            // Si il n'y a pas de joueur ajouté à ce role on en créer et on le remplit
                            // lflTeams.team.points.player.ROLE.players.namePlayer
                            if (lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players.hasOwnProperty(teams[i].teamData.visitor.players[j].player.nickname) == false)
                            {
                                // création du premier joueur 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname] = {};


                                // création du premier joueur 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname] = {};

                                // création de son object concernant les pts
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname]['points'] = {};

                                // Suivit des pts pour each games
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['eachGames'] = [];
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.eachGames.push(teams[i].matchesData.visitor.players[j].score);

                                // Points totaux
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['total'] = teams[i].matchesData.visitor.players[j].score;

                                // Points en cas de win
                                if (teams[i].teamData.visitor.team.score == 1) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['win'] = teams[i].matchesData.visitor.players[j].score; }

                                // Points en cas de lose
                                if (teams[i].teamData.visitor.team.score == 0) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['lose'] = teams[i].matchesData.visitor.players[j].score; }

                                // averageTotal 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['averageTotal'] = teams[i].matchesData.visitor.players[j].score;

                                 // averageWin
                                 if (teams[i].teamData.visitor.team.score == 1) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['averageWin'] = teams[i].matchesData.visitor.players[j].score; }

                                // averageLose
                                if (teams[i].teamData.visitor.team.score == 0) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['averageLose'] = teams[i].matchesData.visitor.players[j].score; }



                                // création du suivis de ses scores avec l'équipe
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname]['score'] = [];
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score.push({});
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname][lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score.length - 1][teams[i].teamData.visitor.team.slug] = teams[i].teamData.visitor.score;

                                // création de sa rubrique items
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname]['items'] = {};
                                // pour chaque items à chaque games ses stats 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['eachGames'] = [];
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.eachGames.push(teams[i].teamData.visitor.players[j].items);
                                // Total de chaque items pour toutes les games
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['total'] = teams[i].teamData.visitor.players[j].items;

                                // Total de chaque items en cas de win
                                if (teams[i].teamData.visitor.team.score == 1) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['win'] = teams[i].teamData.visitor.players[j].items };

                                // total de chaque items en cas de lose
                                if (teams[i].teamData.visitor.team.score == 0) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['lose'] = teams[i].teamData.visitor.players[j].items };

                                // Average total des items
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['averageTotal'] = teams[i].teamData.visitor.players[j].items;

                                // Average en fonction des wins
                                if (teams[i].teamData.visitor.team.score == 1) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['averageWin'] = teams[i].teamData.visitor.players[j].items };

                                // Average en fonction des loses
                                if (teams[i].teamData.visitor.team.score == 0) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['averageLose'] = teams[i].teamData.visitor.players[j].items };

                                // Création de la rubrique bestEachGames
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['bestEachGames'] = [];

                                // Classement de chaque items & assignement 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.bestEachGames.push(Object.fromEntries(Object.entries(teams[i].teamData.visitor.players[j].items).sort(([,a],[,b]) => b-a)));

                                // Best items for the wins Classement de chaque items & assignement 
                                if (teams[i].teamData.visitor.team.score == 1) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['bestWin'] = Object.fromEntries(Object.entries(teams[i].teamData.visitor.players[j].items).sort(([,a],[,b]) => b-a)) };

                                // Best items for the Loses Classement de chaque items & assignement 
                                if (teams[i].teamData.visitor.team.score == 0) { lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['bestLose'] = Object.fromEntries(Object.entries(teams[i].teamData.visitor.players[j].items).sort(([,a],[,b]) => b-a)) };

                                // Best items overAll Classement de chaque items & assignement 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['bestTotal'] = Object.fromEntries(Object.entries(teams[i].teamData.visitor.players[j].items).sort(([,a],[,b]) => b-a));
                            }
                            else
                            {
                                // add the pts of the player to the tab
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.eachGames.push(teams[i].matchesData.visitor.players[j].score);

                                // Points totaux
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.total = sumTab(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.eachGames);

                                //  Points en cas de win
                                if (teams[i].teamData.visitor.team.score == 1 && typeof lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.win != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.win += teams[i].matchesData.visitor.players[j].score; 
                                }
                                else if (teams[i].teamData.visitor.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['win'] = teams[i].matchesData.visitor.players[j].score;
                                }

                                // Points en cas de lose
                                if (teams[i].teamData.visitor.team.score == 0 && typeof lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.lose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.lose += teams[i].matchesData.visitor.players[j].score; 
                                }
                                else if (teams[i].teamData.visitor.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['lose'] = teams[i].matchesData.visitor.players[j].score;
                                }

                                // averageTotal 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.averageTotal = averageTab(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.eachGames);

                                 // averageWin
                                if (teams[i].teamData.visitor.team.score == 1 && typeof lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.averageWin != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.averageWin = avWin(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score, lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.win); 
                                }
                                else if (teams[i].teamData.visitor.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['averageWin'] = teams[i].matchesData.visitor.players[j].score; 
                                }

                                // averageLose
                                if (teams[i].teamData.visitor.team.score == 0 && typeof lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.averageLose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.averageLose = avLose(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score, lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points.lose); 
                                }
                                else if (teams[i].teamData.visitor.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].points['averageLose'] = teams[i].matchesData.visitor.players[j].score; 
                                }

                                // Cas ou le joueur existe 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score.push({});
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname][lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score.length - 1][teams[i].teamData.visitor.team.slug] = teams[i].teamData.visitor.score;

                                // Add his stats to the eachGames object
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.eachGames.push(teams[i].teamData.visitor.players[j].items);

                                // Total de chaque items pour toutes les games
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].total = sum2Object(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].total, teams[i].teamData.visitor.players[j].items);

                                // Total de chaque items en cas de win
                                if (teams[i].teamData.visitor.team.score == 1 && typeof lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.win != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.win = sum2Object(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].win, teams[i].teamData.visitor.players[j].items) ;
                                }
                                else if (teams[i].teamData.visitor.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['win'] = teams[i].teamData.visitor.players[j].items;
                                }

                                // total de chaque items en cas de lose
                                if (teams[i].teamData.visitor.team.score == 0 && typeof lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.lose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.lose = sum2Object(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].lose, teams[i].teamData.visitor.players[j].items); 
                                }
                                else if (teams[i].teamData.visitor.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['lose'] = teams[i].teamData.visitor.players[j].items;
                                }

                                // Average total des items
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.averageTotal = averageTabObjectToObject(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.eachGames);

                                // Average en fonction des wins attention win peut ne pas exister et le créer pour chaque donc ne pas passer par .win mais par ['win']
                                if (teams[i].teamData.visitor.team.score == 1 && typeof lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.averageWin != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.averageWin = averageWin(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score, lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.win);
                                }
                                else if (teams[i].teamData.visitor.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['averageWin'] = teams[i].teamData.visitor.players[j].items;
                                }
                                // Average en fonction des loses
                                if (teams[i].teamData.visitor.team.score == 0 && typeof lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.averageLose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.averageLose = averageLose(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].score, lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.lose);
                                }
                                else if (teams[i].teamData.visitor.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['averageLose'] = teams[i].teamData.visitor.players[j].items;
                                }

                                // best Each Games items
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.bestEachGames.push(Object.fromEntries(Object.entries(teams[i].teamData.visitor.players[j].items).sort(([,a],[,b]) => b-a)));

                                // Best items for the wins Classement de chaque items & assignement 
                                if (teams[i].teamData.visitor.team.score == 1 && lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['bestWin'] != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.bestWin = Object.fromEntries(Object.entries(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['averageWin']).sort(([,a],[,b]) => b-a)); 
                                }
                                else if (teams[i].teamData.visitor.team.score == 1)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['bestWin'] = Object.fromEntries(Object.entries(teams[i].teamData.visitor.players[j].items).sort(([,a],[,b]) => b-a));
                                }

                                // Best items for the Loses Classement de chaque items & assignement 
                                if (teams[i].teamData.visitor.team.score == 0 && lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.bestLose != "undefined") 
                                { 
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items.bestLose = Object.fromEntries(Object.entries(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['averageLose']).sort(([,a],[,b]) => b-a)); 
                                }
                                else if (teams[i].teamData.visitor.team.score == 0)
                                {
                                    lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['bestLose'] = Object.fromEntries(Object.entries(teams[i].teamData.visitor.players[j].items).sort(([,a],[,b]) => b-a));
                                }

                                // Best items overAll Classement de chaque items & assignement 
                                lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].items['bestTotal'] = Object.fromEntries(Object.entries(lflTeams[teams[i].teamData.visitor.team.slug].points.player[Object.keys(lflTeams[teams[i].teamData.visitor.team.slug].points.player)[j]].players[teams[i].teamData.visitor.players[j].player.nickname].averageTotal).sort(([,a],[,b]) => b-a));
                            }
                        }
                    }

                    fs.writeFile('lflGames.json', JSON.stringify(lflTeams), 'utf8', (err)=>
                    {
                        if(err)
                        {
                            console.log(err)
                        }
                    });

                    res.render('team.ejs', { TeamRanked : lflTeams, ListOfItems : lflListOfItems });
                }
            };
        }
        else
        {
            fs.readFile('lflGames.json', 'utf8', (err, data) => 
            {
                if (err) 
                {
                    console.log(`Error reading file from disk: ${err}`);
                } 
                else 
                {
                    teams = JSON.parse(data);

                    res.render('team.ejs', { TeamRanked : teams });
                }
            });
        }
    })();
});

// Lancement du serveur
app.listen(PORT, () =>
{
  console.log(date + "Serveur is listening in http://localhost:" + PORT);
});


// some of the function

function sum2Object(o1, o2)
{
    let objFinal = {};
    
    for (let key2 in o2) 
    {
        if (o1.hasOwnProperty(key2))
        {
            objFinal[key2] = o1[key2] + o2[key2];
        }
        else
        {
            console.log('Error of the sum of 2 object');
        }
    }

    return objFinal;
}

function averageWin(tabOfW, totalWin)
{
    let winALL = [];
	let avWin = {};

    for (let idGames in tabOfW) 
    {
        if(tabOfW[idGames][Object.keys(tabOfW[idGames])[0]] == 1)
        {
            winALL.push(Object.keys(tabOfW[idGames])[0])
        }
    }

    for(let item in totalWin)
    {
        avWin[item] = totalWin[item] / winALL.length
    }
  
    return avWin;
}

function averageLose(tabOfL, totalLose)
{
    let loseALL = [];
	let avLose = {};

    for (let idGames in tabOfL) 
    {
        if(tabOfL[idGames][Object.keys(tabOfL[idGames])[0]] == 0)
        {
            loseALL.push(Object.keys(tabOfL[idGames])[0])
        }
    }

    for(let item in totalLose)
    {
        avLose[item] = totalLose[item] / loseALL.length
    }
  
    return avLose;
}

function averageTabObjectToObject(tabO)
{
    let objFinal = {};
    
    tabO.forEach(obj => 
    {
        for (let att in obj) 
        {
            if (objFinal.hasOwnProperty(att))
            {
                objFinal[att] = (objFinal[att] + obj[att]) / tabO.length;
            }
            else
            {
              objFinal[att] = obj[att];
            }
        }
    });

    return objFinal;
}


function sumTab(tab)
{
    let sum = 0;

    for (let i = 0; i < tab.length; i++)
    {
        sum += tab[i];
    }

    return sum;
}

function averageTab(tab)
{
    let sum  = sumTab(tab);

    return sum / tab.length;
}

function avWin(totalWin, tabOfW)
{
    let winALL = [];
    
    for (let idGames in tabOfW) 
    {
        if(tabOfW[idGames][Object.keys(tabOfW[idGames])[0]] == 1)
        {
            winALL.push(Object.keys(tabOfW[idGames])[0])
        }
    }

    return totalWin / winALL.length;
}

function avLose(totalLose, tabOfL)
{
    let loseALL = [];
    
    for (let idGames in tabOfL) 
    {
        if(tabOfL[idGames][Object.keys(tabOfL[idGames])[0]] == 0)
        {
            winALL.push(Object.keys(tabOfL[idGames])[0])
        }
    }

    return totalLose / loseALL.length;
}

function kda(kills, assists, deaths)
{
    return (kills + assists) / deaths;
}


function participationKills (playerK, playerA, hisMate1, hisMate2, hisMate3, hisMate4)
{
    return (((playerK + playerA) / (playerK + hisMate1 + hisMate2 + hisMate3 + hisMate4)) * 100).toFixed(2);
}






// app.get("/test", (req, res) => 
// {
//     res.setHeader("Content-Type", "text/html");
    
//     (async () => 
//     {
//         let peopleData = await gotHttp('https://api-lfl.superfantasylol.com/api/v1/gamedays').json();
//         peopleData = peopleData.data;

//         let all = {};

//         for (let i = 18; i--;)
//         {
//             console.log('Day -> ' + i);
//             for (let j = 0; j < 5; j++)
//             {
//                 console.log('Game -> '+ j);
//                 all[peopleData[i].matches[j].id] = peopleData[i].matches[j].games['0'].id;

//             }
//         }

//         console.log(all);

//         fs.writeFile('matchesGames.json', JSON.stringify(all), 'utf8', (err)=>
//         {
//             if(err)
//             {
//                 console.log(err)
//             }
//         });

//         res.render('index.ejs', { PlayersRanked : peopleData });
        
//     })();
// });
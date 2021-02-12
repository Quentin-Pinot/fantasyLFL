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
                "players" : { 
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
                "players" : { 
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
                "players" : { 
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
                "players" : { 
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
                "players" : { 
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
                "players" : { 
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
                "players" : { 
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
                "players" : { 
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
                "players" : { 
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
                "players" : { 
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
                        // todo : how to find calculate the average time duration -> entier : Math.floor((somme of all duration/nbr of duration)/60) + ':' + (somme of all duration/nbr of duration)%60;
                        lflTeams[teams[i].teamData.local.team.slug]['duration'].push(teams[i].teamData.duration);

                        // Score
                        lflTeams[teams[i].teamData.local.team.slug]['score'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['score'][lflTeams[teams[i].teamData.local.team.slug]['score'].length - 1][teams[i].teamData.visitor.team.slug] = teams[i].teamData.local.score;


                        // Players
                        // TOP   
                        // playerInfo
                        lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['player'].push({});
                        // SUBSTITUTE OR TITULAR
                        lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['player'].length - 1].role = teams[i].teamData.local.players['0'].role;
                        // Name
                        lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['player'].length - 1].name = teams[i].teamData.local.players['0'].player.nickname;
                        // pts
                        lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['player'].length - 1].pts = teams[i].matchesData.local.players['0'].score;

                        // metrics
                        lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['metrics'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['metrics'][lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['metrics'].length - 1] = teams[i].teamData.local.players['0'].metrics;

                        // items
                        lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['items'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['items'][lflTeams[teams[i].teamData.local.team.slug]['players']['TOP']['items'].length - 1] = teams[i].teamData.local.players['0'].items;

                        // JUNGLER
                        // playerInfo
                        lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['player'].push({});
                        // SUBSTITUTE OR TITULAR
                        lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['player'].length - 1].role = teams[i].teamData.local.players['1'].role;
                        // Name
                        lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['player'].length - 1].name = teams[i].teamData.local.players['1'].player.nickname;
                        // slug
                        lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['player'].length - 1].slug = teams[i].teamData.local.players['1'].player.slug;

                        // metrics
                        lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['metrics'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['metrics'][lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['metrics'].length - 1] = teams[i].teamData.local.players['1'].metrics;

                        // items
                        lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['items'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['items'][lflTeams[teams[i].teamData.local.team.slug]['players']['JUNGLER']['items'].length - 1] = teams[i].teamData.local.players['1'].items;
                        
                        // MID
                        // playerInfo
                        lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['player'].push({});
                        // SUBSTITUTE OR TITULAR
                        lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['player'].length - 1].role = teams[i].teamData.local.players['2'].role;
                        // Name
                        lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['player'].length - 1].name = teams[i].teamData.local.players['2'].player.nickname;
                        // slug
                        lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['player'].length - 1].slug = teams[i].teamData.local.players['2'].player.slug;

                        // metrics
                        lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['metrics'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['metrics'][lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['metrics'].length - 1] = teams[i].teamData.local.players['2'].metrics;

                        // items
                        lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['items'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['items'][lflTeams[teams[i].teamData.local.team.slug]['players']['MID']['items'].length - 1] = teams[i].teamData.local.players['2'].items;

                        // ADC
                        // playerInfo
                        lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['player'].push({});
                        // SUBSTITUTE OR TITULAR
                        lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['player'].length - 1].role = teams[i].teamData.local.players['3'].role;
                        // Name
                        lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['player'].length - 1].name = teams[i].teamData.local.players['3'].player.nickname;
                        // slug
                        lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['player'].length - 1].slug = teams[i].teamData.local.players['3'].player.slug;

                        // metrics
                        lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['metrics'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['metrics'][lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['metrics'].length - 1] = teams[i].teamData.local.players['3'].metrics;

                        // items
                        lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['items'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['items'][lflTeams[teams[i].teamData.local.team.slug]['players']['ADC']['items'].length - 1] = teams[i].teamData.local.players['3'].items;

                        // SUPPORT
                        // playerInfo
                        lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['player'].push({});
                        // SUBSTITUTE OR TITULAR
                        lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['player'].length - 1].role = teams[i].teamData.local.players['4'].role;
                        // Name
                        lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['player'].length - 1].name = teams[i].teamData.local.players['4'].player.nickname;
                        // slug
                        lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['player'].length - 1].slug = teams[i].teamData.local.players['4'].player.slug;

                        // metrics
                        lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['metrics'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['metrics'][lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['metrics'].length - 1] = teams[i].teamData.local.players['4'].metrics;

                        // items
                        lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['items'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['items'][lflTeams[teams[i].teamData.local.team.slug]['players']['SUPPORT']['items'].length - 1] = teams[i].teamData.local.players['4'].items;

                        // COACH
                        // playerInfo
                        lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['player'].push({});
                        // SUBSTITUTE OR TITULAR
                        lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['player'].length - 1].role = teams[i].teamData.local.players['5'].role;
                        // Name
                        lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['player'].length - 1].name = teams[i].teamData.local.players['5'].player.nickname;
                        // slug
                        lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['player'][lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['player'].length - 1].slug = teams[i].teamData.local.players['5'].player.slug;

                        // metrics
                        lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['metrics'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['metrics'][lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['metrics'].length - 1] = teams[i].teamData.local.players['5'].metrics;

                        // items
                        lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['items'].push({});
                        lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['items'][lflTeams[teams[i].teamData.local.team.slug]['players']['COACH']['items'].length - 1] = teams[i].teamData.local.players['5'].items;

                        // Points
                        // players
                        // player : metrics, items
                        //lflTeams[teams[i].teamData.local.team.slug]['points']['players']['player']['TOP'] ;
                        // ON TRAITE CHAQUE ROLE DE NOTRE TEAM UN PAR UN QUI RECOIT LES DONNEES
                        for (let j = 0; j < Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.players.player).length; j++)
                        {
                            // ITEMS : ON TRAITE POUR CHAQUE PLAYER LE NOMBRE D'ITEM EXISTANT POUR CE PLAYER
                            for (let k = 0; k < Object.keys(teams[i].teamData.local.players[j].items).length; k++) 
                            { 
                                // lflTeams.team.points.players.ROLE
                                // S'IL N'A PAS ETE REMPLI ALORS ON NE FAIT PAS DE SOMME + UNDEFINED
                                if (lflTeams[teams[i].teamData.local.team.slug].points.players.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.players.player)[j]].items.hasOwnProperty(Object.keys(teams[i].teamData.local.players[j].items)[i]) == false)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.players.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.players.player)[j]].items[Object.keys(teams[i].teamData.local.players[j].items)[k]] = teams[i].teamData.local.players[j].items[k];
                                }
                                else
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.players.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.players.player)[j]].items[Object.keys(teams[i].teamData.local.players[j].items)[k]] += teams[i].teamData.local.players[j].items[k];
                                }


                                // lflTeams.team.points.players.ROLE.namePlayer
                                // S'IL N'A PAS ETE REMPLI ALORS ON NE FAIT PAS DE SOMME + UNDEFINED
                                if (lflTeams[teams[i].teamData.local.team.slug].points.players.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.players.player)[j]][teams[i].teamData.local.players[j].player.nickname].items.hasOwnProperty(Object.keys(teams[i].teamData.local.players[j].items)[i]) == false)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.players.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.players.player)[j]][teams[i].teamData.local.players[j].player.nickname].items[Object.keys(teams[i].teamData.local.players[j].items)[k]] = teams[i].teamData.local.players[j].items[k];
                                }
                                else
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.players.player[Object.keys(lflTeams[teams[i].teamData.local.team.slug].points.players.player)[j]][teams[i].teamData.local.players[j].player.nickname].items[Object.keys(teams[i].teamData.local.players[j].items)[k]] += teams[i].teamData.local.players[j].items[k];
                                }

                                // lflTeams.team.points.items.item
                                // S'IL N'A PAS ETE REMPLI ALORS ON NE FAIT PAS DE SOMME + UNDEFINED
                                if (lflTeams[teams[i].teamData.local.team.slug].points.items.item.hasOwnProperty(Object.keys(teams[i].teamData.local.players[j].items)[i]) == false)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.items.item[Object.keys(teams[i].teamData.local.players[j].items)[k]] = teams[i].teamData.local.players[j].items[k];
                                }
                                else
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.items.item[Object.keys(teams[i].teamData.local.players[j].items)[k]] += teams[i].teamData.local.players[j].items[k];
                                }

                                // lflTeams.team.points.items.win
                                // S'IL N'A PAS ETE REMPLI ALORS ON NE FAIT PAS DE SOMME + UNDEFINED
                                if (lflTeams[teams[i].teamData.local.team.slug].points.items.item.hasOwnProperty(Object.keys(teams[i].teamData.local.players[j].items)[i]) == false)
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.items.item[Object.keys(teams[i].teamData.local.players[j].items)[k]] = teams[i].teamData.local.players[j].items[k];
                                }
                                else
                                {
                                    lflTeams[teams[i].teamData.local.team.slug].points.items.item[Object.keys(teams[i].teamData.local.players[j].items)[k]] += teams[i].teamData.local.players[j].items[k];
                                }
                            }
                        }

                        
                        // Visitor
                        // Duration
                        // todo : how to find calculate the average time duration -> entier : Math.floor((somme of all duration/nbr of duration)/60) + ':' + (somme of all duration/nbr of duration)%60;
                        lflTeams[teams[i].teamData.visitor.team.slug]['duration'].push(teams[i].teamData.duration);

                        // Score
                        lflTeams[teams[i].teamData.visitor.team.slug]['score'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['score'][lflTeams[teams[i].teamData.visitor.team.slug]['score'].length - 1][teams[i].teamData.local.team.slug] = teams[i].teamData.visitor.score;

                        // Players
                        // TOP
                        // metrics
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['TOP']['metrics'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['TOP']['metrics'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['TOP']['metrics'].length - 1] = teams[i].teamData.visitor.players['0'].metrics;

                        // items
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['TOP']['items'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['TOP']['items'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['TOP']['items'].length - 1] = teams[i].teamData.visitor.players['0'].items;

                        // JUNGLER
                        // metrics
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['JUNGLER']['metrics'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['JUNGLER']['metrics'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['JUNGLER']['metrics'].length - 1] = teams[i].teamData.visitor.players['1'].metrics;

                        // items
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['JUNGLER']['items'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['JUNGLER']['items'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['JUNGLER']['items'].length - 1] = teams[i].teamData.visitor.players['1'].items;
                        
                        // MID
                        // metrics
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['MID']['metrics'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['MID']['metrics'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['MID']['metrics'].length - 1] = teams[i].teamData.visitor.players['2'].metrics;

                        // items
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['MID']['items'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['MID']['items'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['MID']['items'].length - 1] = teams[i].teamData.visitor.players['2'].items;

                        // ADC
                        // metrics
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['ADC']['metrics'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['ADC']['metrics'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['ADC']['metrics'].length - 1] = teams[i].teamData.visitor.players['3'].metrics;

                        // items
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['ADC']['items'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['ADC']['items'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['ADC']['items'].length - 1] = teams[i].teamData.visitor.players['3'].items;

                        // SUPPORT
                        // metrics
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['SUPPORT']['metrics'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['SUPPORT']['metrics'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['SUPPORT']['metrics'].length - 1] = teams[i].teamData.visitor.players['4'].metrics;

                        // items
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['SUPPORT']['items'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['SUPPORT']['items'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['SUPPORT']['items'].length - 1] = teams[i].teamData.visitor.players['4'].items;

                        // COACH
                        // metrics
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['COACH']['metrics'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['COACH']['metrics'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['COACH']['metrics'].length - 1] = teams[i].teamData.visitor.players['5'].metrics;

                        // items
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['COACH']['items'].push({});
                        lflTeams[teams[i].teamData.visitor.team.slug]['players']['COACH']['items'][lflTeams[teams[i].teamData.visitor.team.slug]['players']['COACH']['items'].length - 1] = teams[i].teamData.visitor.players['5'].items;
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

function sum(tab)
{
    let sum

    for (let i = 0; i < tab.length; i++)
    {
        sum += tab[i];
    }

    return sum;
}

function average(tab)
{
    let sum  = sum(tab);

    return sum / tab.length;
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
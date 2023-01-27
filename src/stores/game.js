import { defineStore } from "pinia";
import { getPieceImageUrl } from "../utils";
import { TURNS } from "../vars";

export const useGameStore = defineStore ('pieces', {

    state: () => {

        var turn = TURNS.WHITES;

        const pieces = [
            {
                id: 'blackrook1',
                type: 'black',
                name: 'rook',
                coordinates: {x: 1, y:1},
                out: false,
                imageURL: getPieceImageUrl ('black', 'rook')
            },
            {
                id: 'blackknight1',
                type: 'black',
                name: 'knight',
                coordinates: {x: 2, y:1},
                out: false,
                imageURL: getPieceImageUrl ('black', 'knight')
            },
            {
                id: 'blackbishop1',
                type: 'black',
                name: 'bishop',
                coordinates: {x: 3, y:1},
                out: false,
                imageURL: getPieceImageUrl ('black', 'bishop')
            },
            {
                id: 'blackking',
                type: 'black',
                name: 'king',
                coordinates: {x: 4, y:1},
                out: false,
                imageURL: getPieceImageUrl ('black', 'king')
            },
            {
                id: 'blackqueen',
                type: 'black',
                name: 'queen',
                coordinates: {x: 5, y:1},
                out: false,
                imageURL: getPieceImageUrl ('black', 'queen')
            },
            {
                id: 'blackbishop2',
                type: 'black',
                name: 'rook',
                coordinates: {x: 6, y:1},
                out: false,
                imageURL: getPieceImageUrl ('black', 'rook')
            },
            {
                id: 'blackknight2',
                type: 'black',
                name: 'knight',
                coordinates: {x: 7, y:1},
                out: false,
                imageURL: getPieceImageUrl ('black', 'knight')
            },
            {
                id: 'blackrook2',
                type: 'black',
                name: 'rook',
                coordinates: {x: 8, y:1},
                out: false,
                imageURL: getPieceImageUrl ('black', 'rook')
            },
            {
                id: 'blackpawn1',
                type: 'black',
                name: 'pawn',
                coordinates: {x: 1, y:2},
                out: false,
                imageURL: getPieceImageUrl ('black', 'pawn')
            },
            {
                id: 'blackpawn2',
                type: 'black',
                name: 'pawn',
                coordinates: {x: 2, y:2},
                out: false,
                imageURL: getPieceImageUrl ('black', 'pawn')
            },
            {
                id: 'blackpawn3',
                type: 'black',
                name: 'pawn',
                coordinates: {x: 3, y:2},
                out: false,
                imageURL: getPieceImageUrl ('black', 'pawn')
            },
            {
                id: 'blackpawn4',
                type: 'black',
                name: 'pawn',
                coordinates: {x: 4, y:2},
                out: false,
                imageURL: getPieceImageUrl ('black', 'pawn')
            },
            {
                id: 'blackpawn5',
                type: 'black',
                name: 'pawn',
                coordinates: {x: 5, y:2},
                out: false,
                imageURL: getPieceImageUrl ('black', 'pawn')
            },
            {
                id: 'blackpawn6',
                type: 'black',
                name: 'pawn',
                coordinates: {x: 6, y:2},
                out: false,
                imageURL: getPieceImageUrl ('black', 'pawn')
            },
            {
                id: 'blackpawn7',
                type: 'black',
                name: 'pawn',
                coordinates: {x: 7, y:2},
                out: false,
                imageURL: getPieceImageUrl ('black', 'pawn')
            },
            {
                id: 'blackpawn8',
                type: 'black',
                name: 'pawn',
                coordinates: {x: 8, y:2},
                out: false,
                imageURL: getPieceImageUrl ('black', 'pawn')
            },
            {
                id: 'whiterook1',
                type: 'white',
                name: 'rook',
                coordinates: {x: 1, y:8},
                out: false,
                imageURL: getPieceImageUrl ('white', 'rook')
            },
            {
                id: 'whiteknight1',
                type: 'white',
                name: 'knight',
                coordinates: {x: 2, y:8},
                out: false,
                imageURL: getPieceImageUrl ('white', 'knight')
            },
            {
                id: 'whitebishop1',
                type: 'white',
                name: 'bishop',
                coordinates: {x: 3, y:8},
                out: false,
                imageURL: getPieceImageUrl ('white', 'bishop')
            },
            {
                id: 'whiteking',
                type: 'white',
                name: 'king',
                coordinates: {x: 4, y:8},
                out: false,
                imageURL: getPieceImageUrl ('white', 'king')
            },
            {
                id: 'whitequeen',
                type: 'white',
                name: 'queen',
                coordinates: {x: 5, y:8},
                out: false,
                imageURL: getPieceImageUrl ('white', 'queen')
            },
            {
                id: 'whitebishop2',
                type: 'white',
                name: 'rook',
                coordinates: {x: 6, y:8},
                out: false,
                imageURL: getPieceImageUrl ('white', 'rook')
            },
            {
                id: 'whiteknight2',
                type: 'white',
                name: 'knight',
                coordinates: {x: 7, y:8},
                out: false,
                imageURL: getPieceImageUrl ('white', 'knight')
            },
            {
                id: 'whiterook2',
                type: 'white',
                name: 'rook',
                coordinates: {x: 8, y:8},
                out: false,
                imageURL: getPieceImageUrl ('white', 'rook')
            },
            {
                id: 'whitepawn1',
                type: 'white',
                name: 'pawn',
                coordinates: {x: 1, y:7},
                out: false,
                imageURL: getPieceImageUrl ('white', 'pawn')
            },
            {
                id: 'whitepawn2',
                type: 'white',
                name: 'pawn',
                coordinates: {x: 2, y:7},
                out: false,
                imageURL: getPieceImageUrl ('white', 'pawn')
            },
            {
                id: 'whitepawn3',
                type: 'white',
                name: 'pawn',
                coordinates: {x: 3, y:7},
                out: false,
                imageURL: getPieceImageUrl ('white', 'pawn')
            },
            {
                id: 'whitepawn4',
                type: 'white',
                name: 'pawn',
                coordinates: {x: 4, y:7},
                out: false,
                imageURL: getPieceImageUrl ('white', 'pawn')
            },
            {
                id: 'whitepawn5',
                type: 'white',
                name: 'pawn',
                coordinates: {x: 5, y:7},
                out: false,
                imageURL: getPieceImageUrl ('white', 'pawn')
            },
            {
                id: 'whitepawn6',
                type: 'white',
                name: 'pawn',
                coordinates: {x: 6, y:7},
                out: false,
                imageURL: getPieceImageUrl ('white', 'pawn')
            },
            {
                id: 'whitepawn7',
                type: 'white',
                name: 'pawn',
                coordinates: {x: 7, y:7},
                out: false,
                imageURL: getPieceImageUrl ('white', 'pawn')
            },
            {
                id: 'whitepawn8',
                type: 'white',
                name: 'pawn',
                coordinates: {x: 8, y:7},
                out: false,
                imageURL: getPieceImageUrl ('white', 'pawn')
            }
        ];

        return { pieces, turn }
    },

    getters: {
        
        getBlacksNotPawns: (state) => {

            return state.pieces.filter (piece => piece.type == 'black' && piece.name != 'pawn');
        },
        getBlacksPawns: (state) => {
            
            return state.pieces.filter (piece => piece.type == 'black' && piece.name == 'pawn');
        },
        getWhitesNotPawns: (state) => {

            return state.pieces.filter (piece => piece.type == 'white' && piece.name != 'pawn');
        },
        getWhitesPawns: (state) => {
            
            return state.pieces.filter (piece => piece.type == 'white' && piece.name == 'pawn');
        }

    },

    actions: {

        changeTurn () {

            this.turn = (this.turn == TURNS.WHITES ? TURNS.BLACKS : TURNS.WHITES);
        }
    }
});
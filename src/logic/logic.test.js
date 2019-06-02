// import React from 'react';
import * as checks from './logic';

describe('test checkAll functions', () => {
    it('Horizontal it will connect with 4', () => {
        let board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, "orange", null, null, null],
            [null, null, null, "orange", "orange", "orange", null],
            [null, null, null, "purple", "purple", "purple", "purple"]
        ],
            r = 5,
            c = 6;
        expect(checks.checkHorizontal(board, r, c)).toBe('purple')
    })

    it('Vertical it will connect with 4', () => {
        let board = [
            ["purple", "purple", "purple", null, null, null, null],
            [null, null, null, "orange", null, null, null],
            [null, "orange", "purple", "orange", "orange", "orange", null],
            [null, null, null, "orange", null, null, null],
            [null, null, null, "orange", "orange", "orange", null],
            [null, null, null, "purple", "purple", "purple", "purple"]
        ],
            r = 4,
            c = 3;
        expect(checks.checkVertical(board, r, c)).toBe('orange')
    })

    it('Diagonal from left top to bottom right it will connect with 4', () => {
        let board = [
            ["purple", "purple", null, null, null, null, null],
            [null, "purple", null, "orange", null, null, null],
            [null, null, "orange", "orange", "purple", "orange", null],
            [null, null, null, "orange", null, null, null],
            [null, null, null, null, "orange", "orange", null],
            [null, null, null, "purple", "purple", "orange", "purple"]
        ],
            r = 4,
            c = 4;
        expect(checks.checkTopDiagonal(board, r, c)).toBe('orange')
    })

    it('Diagonal from left bottom to top right it will connect with 4', () => {
        let board = [
            ["purple", "purple", "purple", null, null, null, null],
            [null, "purple", null, "orange", null, null, "purple"],
            ["purple", "purple", null, "orange", "purple", "orange", null],
            [null, null, null, "purple", "orange", null, null],
            [null, null, null, "orange", "orange", "orange", null],
            [null, null, "orange", "purple", "purple", "orange", "purple"]
        ],
            r = 2,
            c = 5;
        expect(checks.checkBottomDiagonal(board, r, c)).toBe('orange')
    })

    it('Draw Check', () => {
        let board = [
            ["purple", "purple", "purple", "orange", "purple", "purple", "orange"],
            ["orange", "purple", "orange", "orange", "purple", "orange", "purple"],
            ["purple", "purple", "purple", "orange", "purple", "purple", "orange"],
            ["orange", "orange", "orange", "purple", "orange", "purple", "purple"],
            ["purple", "purple", "purple", "orange", "orange", "orange", "purple"],
            ["orange", "orange", "orange", "purple", "purple", "orange", "purple"]
        ];
        expect(checks.checkDraw(board)).toBe('draw')
    })

    it('Draw Check', () => {
        let board = [
            ["purple", "purple", "purple", "orange", "purple", "purple", "orange"],
            ["orange", "purple", "orange", "orange", "purple", "orange", "purple"],
            ["purple", "purple", null, "orange", "purple", "purple", "orange"],
            ["orange", "orange", "orange", "purple", "orange", "purple", "purple"],
            ["purple", "purple", "purple", "orange", "orange", "orange", "purple"],
            ["orange", "orange", "orange", "purple", "purple", "orange", "purple"]
        ],
            r = 2,
            c = 5;
        expect(checks.checkAll(board, r, c)).toBe(null)
    })

    it('Draw Check', () => {
        let board = [
            ["purple", "purple", "purple", "orange", "purple", "purple", "orange"],
            ["orange", "purple", "orange", "orange", "purple", "orange", "purple"],
            ["purple", "purple", "purple", "orange", "purple", "purple", "orange"],
            ["orange", "orange", "orange", "purple", "orange", "purple", "purple"],
            ["purple", "purple", "purple", "orange", "orange", "orange", "purple"],
            ["orange", "orange", "orange", "purple", "purple", "orange", "purple"]
        ],
            r = 0,
            c = 0;
        expect(checks.checkAll(board, r, c)).toBe('purple')
    })
})
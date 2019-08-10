var assert = require('assert')

describe('Mathematical Operations', function(){
    it('Addition', function(){
        var a = b = 10;
        var c = a+b;
        assert(c,20)
    })

    it('Addition1', function(){
        var a = 20;
        var b = 10;
        var c = a-b;
        assert(c,10)
    })

    it('Addition2', function(){
        var a = b = 10;
        var c = a*b;
        assert(c,100)
    })
})
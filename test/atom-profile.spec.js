var ap = require('../lib/atom-profile');
var should = require('chai').should();
var noop = function() {};
var events = require('../lib/event-disposables');

describe('atom-profile', function(){
    var evRegistered = 0;
    var evUnregistered = 0;
	var increaseCounter = function() {
        evRegistered++;
        return {dispose: function() {
            evUnregistered++;
        }}
    };


    before(function() {
        //atom object mock
        GLOBAL.atom = {
            packages: {},
            workspace: {
                addModalPanel: function() {
                    return {show: noop};
                }
            }
        };
        Object.keys(events).forEach(function (event){
            atom.packages[event] = increaseCounter;
        });

        //document object mock
        GLOBAL.document = {
            createElement: function() {
                return {classList: {add: noop}, appendChild: noop};
            }
        }
    });

    it('should register package events when activated and unregister when deactivated', function(){
        ap.activate();
        evRegistered.should.equal(4);
        ap.deactivate();
        evUnregistered.should.equal(4);
    });

    after(function() {
        delete GLOBAL.atom;
        delete GLOBAL.document;
    });

    it('should fetch the last package state from backend', function(){
        //TODO
    });
    
    it('should send a POST when package is loaded, unloaded, activated, deactivated, with the payload containing the package name and action', function(){
        //TODO
    });

});
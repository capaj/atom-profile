var loginPrompt;
var element;
var eventDisposables = require('./event-disposables')

var atomProfile = {
  activate: function(state){
     console.log('activate atom-profile');
    element = document.createElement('div');
    element.classList.add('atom-profile');

    var message = document.createElement('div');
    message.textContent = "The Atom profile package needs your github authentication";
    message.classList.add('message');
    element.appendChild(message);

    loginPrompt = atom.workspace.addModalPanel({item: element, visible: false});
    loginPrompt.show();
    setTimeout(function(){
    	loginPrompt.hide();
    }, 5000);

    Object.keys(eventDisposables).forEach(function (event){
      eventDisposables[event] = atom.packages[event](function packageChange() {
        //TODO satisfy 3rd spec
      });
    });
  },
  serialize: function() {

  },
  deactivate: function(){
    console.log('deactivate');
    Object.keys(eventDisposables).forEach(function (event){
        eventDisposables[event].dispose();
    });
  }
};

module.exports = atomProfile;

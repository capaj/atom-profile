var loginPrompt;
var element;
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
  },
  serialize: function() {

  },
  deactivate: function(){
    // console.log('deactivate');
  }
};

module.exports = atomProfile;

function GroupsController (Group){
  this.groups = Group.query({cohort: 1});
  debugger;

}

groupApp.controller('GroupsController', ['Group', GroupsController])

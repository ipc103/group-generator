function GroupsController (Group){
  this.groups = Group.query({cohort: 1});
}

groupApp.controller('GroupsController', ['Group', GroupsController])

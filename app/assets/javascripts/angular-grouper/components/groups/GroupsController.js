function GroupsController (Group){
  var id = window.location.pathname.split("/")[2]
  this.groups = Group.query({cohort: id});
  this.newGroup = new Group({cohort: id});

  this.createGroups = function(groupTypes){
    this.newGroup.group_types = groupTypes
    var self = this;
    this.newGroup.$save(function(response){
      debugger;
      self.groups = Group.query({cohort: id });
      self.newGroup = new Group({cohort: id});
    })
  }
}

groupApp.controller('GroupsController', ['Group', GroupsController])

function GroupsController (Group){
  var id = window.location.pathname.split("/")[2]
  var self = this;
  Group.query({cohort: id}, function(response){
    self.groups = response;
  });

  this.createGroups = function(groupTypes){
    var params = {cohort: id, group_types: groupTypes}
    var self = this;
    Group.create(params, function(response){
      self.groups = response;
    })
  }
}

groupApp.controller('GroupsController', ['Group', GroupsController])

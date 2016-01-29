function CohortsCtrl(Cohort){
  var id = window.location.pathname.split("/")[2]
  this.cohort = Cohort.get({id: id});
}

groupApp.controller('CohortsCtrl', ['Cohort', CohortsCtrl])

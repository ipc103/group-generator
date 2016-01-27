function CohortsCtrl(Cohort){
  this.cohort = Cohort.get({id: 1});
}

groupApp.controller('CohortsCtrl', ['Cohort', '$stateParams', CohortsCtrl])

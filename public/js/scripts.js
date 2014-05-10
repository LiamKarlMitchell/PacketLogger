angular.module('packetLogger', ['ui.bootstrap']);

var ModalCtrl = function($scope, $modal, $log) {
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function(size) {
    var modalInstance = $modal.open({
      templateUrl: 'modal-content.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        items: function() {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $scope.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};

var ModalInstanceCtrl = function($scope, $modalInstance, items, $log) {
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function() {
    $modalInstance.close($scope.selected.item);
    $log.info('Modal OK selected.');
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
    $log.info('Modal Cancel selected.');
  };
};
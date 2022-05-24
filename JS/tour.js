AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards();
    },
  }
  
    );
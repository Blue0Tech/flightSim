//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    verticalChange: {type:'number',default:0}
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRoation < 0.1) {
          this.data.speedOfRoation += 0.003;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRoation > -0.1) {
          this.data.speedOfRoation -= 0.003;
        }
      }
      if(e.key==="ArrowUp") {
          this.data.verticalChange -= 0.2;
      }
      if(e.key==="ArrowDown") {
        this.data.verticalChange += 0.2;
    }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");
    var mapPos = this.el.getAttribute("position");
    mapRotation.y += this.data.speedOfRoation;
    mapPos.y += this.data.verticalChange;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
    this.el.setAttribute("position",mapPos);
  }
});
// Plane rotation
AFRAME.registerComponent('plane-rotation-reader',{
    init: function() {
        window.addEventListener('keydown',(event)=>{
            var planeRot = this.el.getAttribute('rotation');
            var planePos = this.el.getAttribute('position');
            if(event.key==="ArrowRight" && planeRot.x<10) {
                planeRot.x+=0.25;
                this.el.setAttribute('rotation',planeRot);
            }
            if(event.key==="ArrowLeft" && planeRot.x>-10) {
                planeRot.x-=0.25;
                this.el.setAttribute('rotation',planeRot);
            }
            if(event.key=="ArrowUp" && planeRot.z<20 && planePos.y<2) {
                planeRot.z+=0.25;
                this.el.setAttribute('rotation',planeRot);
                planePos.y+=0.01;
                this.el.setAttribute('position',planePos);
            }
            if(event.key=="ArrowDown" && planeRot.z>-20 && planePos.y>-2) {
                planeRot.z-=0.25;
                this.el.setAttribute('rotation',planeRot);
                planePos.y-=0.01;
                this.el.setAttribute('position',planePos);
            }
        });
    },
    tick: function() {
        var planeRot = this.el.getAttribute('rotation');
        planeRot.z = planeRot.z/1.01;
        this.el.setAttribute('rotation',planeRot);
    }
});
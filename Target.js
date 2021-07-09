AFRAME.registerComponent('target',{
    init: function() {
        for(var i=1;i<=20;i++) {
            var id = `target${i}`;
            var posX = (Math.random()*3000+(-1000));
            var posY = (Math.random()*20+(-10));
            var posZ = (Math.random()*3000+(-1000));
            var position = {x:posX,y:posY,z:posZ};
            this.createTarget(id,position);
        }
    },
    createTarget: function(id,position) {
        var terrainElement = document.querySelector('#terrain');
        var targetElement = document.createElement('a-entity');
        targetElement.setAttribute('id',id);
        targetElement.setAttribute('position',position);
        targetElement.setAttribute('material','color','gold');
        targetElement.setAttribute('geometry',{primitive:'torus',radius:8});
        terrainElement.append(targetElement);
    }
});
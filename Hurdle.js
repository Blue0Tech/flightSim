AFRAME.registerComponent('hurdle',{
    init: function() {
        for(var i=1;i<=20;i++) {
            var id = `hurdle${i}`;
            var posX = (Math.random()*3000+(-1000));
            var posY = (Math.random()*20+(-10));
            var posZ = (Math.random()*3000+(-1000));
            var position = {x:posX,y:posY,z:posZ};
            this.createHurdle(id,position);
        }
    },
    createHurdle: function(id,position) {
        var terrainElement = document.querySelector('#terrain');
        var HurdleElement = document.createElement('a-entity');
        HurdleElement.setAttribute('id',id);
        HurdleElement.setAttribute('position',position);
        HurdleElement.setAttribute('gltf-model','./flying_bird/scene.gltf');
        HurdleElement.setAttribute('animation-mixer',{});
        HurdleElement.setAttribute('scale',{x:500,y:500,z:500});
        HurdleElement.setAttribute('static-body',{shape:'sphere',sphereRadius:5});
        HurdleElement.setAttribute('gameplay',{elementId:`#${id}`});
        terrainElement.append(HurdleElement);
    }
});
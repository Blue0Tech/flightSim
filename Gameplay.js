AFRAME.registerComponent('gameplay',{
    schema: {
        elementId: {type:"string",default:'#target1'}
    },
    update: function() {
        this.isCollided(this.data.elementId);
    },
    isCollided: function(elementId) {
        var element = document.querySelector(elementId);
        console.log(elementId);
        element.addEventListener("collide",(e) => {
            console.log('in event listener');
            if(elementId.includes('#target')) {
                console.log(elementId+'collision');
            } else if(elementId.includes("#hurdle")) {
                console.log(elementId+'collision');
            }
        });
    }
});
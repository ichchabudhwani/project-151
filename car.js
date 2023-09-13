AFRAME.registerComponent("car",{
    schema:{
        radius:{type:"number",default:0},
        height:{type:"number",default:0}
    },
    init:function() {
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height
        });
        this.el.setAttribute("material",{color:"#1769aa"})
    }
})
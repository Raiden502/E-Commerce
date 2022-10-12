const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id : {
        type:String,
        required:true
    },
	category : {
        type:String,
        required:true
    },
	product_name : {
        type:String,
        required:true
    },
	model : {
        type:String,
        required:true
    },
	product_info : {
		series :{
            type:String,
        },
		price : {
            type:String,
            required:true
        },
		seller : {
            type:String,
            required:true
        },
		discount : {
            type:String,
            required:true
        },
		description : {
            type:String,
            required:true
        },
		color : {
            type:String,
            required:true
        },
	},
	core_info : {
		os: {
            type:String,
        },
		memory : {
            type:String,
            required:true
        },
		storage : {
            type:String,
            required:true
        },
		network : {
            type:String,
        },
		processor : {
            type:String,
            required:true
        },
		wifi : {
            type:String,
        },
		bluetooth : {
            type:String,
        },
		power_supply : {
            type:String,
            required:true
        },
		screen_size : {
            type:String,
            required:true
        },
	}
});
module.exports = mongoose.model('productinfo',productSchema);
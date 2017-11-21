var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    name: {
        type: String,
        match: [/^[a-zA-Z0-9 ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/,"Tiêu đề sai định dạng"],
        validate: [(name) => {
            return name.length >= 5 && name.length <= 100;
        }, "Name is wrong format"]
    },
    description: {
        type: String,
        match: [/^[a-zA-Z0-9 ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/,"Tiêu đề sai định dạng"],        
        validate: [(description) => {
            return description.length >=5 && description.length <= 500;
        }, "Description is wrong format"]
    },
    price: {
        type: Number,
        validate: [(price) => {
            return price > 0;
        },"Price must be greater than 0"]
    }
});

module.exports = mongoose.model('Product',ProductSchema);

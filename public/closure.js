function users(names) {
    const list = names;

    return {
        add : function(name) {
            list.push(name)
        },
        remove : function(index) {
            list.splice(index,1);
        },
        removeAll : function() {
            list.splice(0,list.length);
        },
        get : function(index) {
            return list[index];
        },
        getAll : function() {
            return list;
        }
    }

}

const Workers = users(['camilo','sergio','valeria']);
console.log(Workers.get(0));
Workers.add('Lezkk');
Workers.removeAll();
console.log(Workers.getAll());
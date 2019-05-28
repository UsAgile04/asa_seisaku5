var allList = [
    {
        id: "id001",
        life: 14,
        title: "My camera",
        tag: ["二眼カメラ", "かわいい", "かっこいい"],
        description: "romonomawasimono"
    },
    {
        id: "id002",
        title: "title",
        tag: ["鳥類", "かっこいい", "こわい", "うごかない"],
        description: "creator"
    },
];    

function onFilterChange(e) {

    var filterFncs = [];
    var result = [];

    // filterFncs.push(
    //     function (list) {
    //         return filterByLife(list, $('.filter_life select').val());
    //     }
    // );

    // filterFncs.push(
    //     function (list) {
    //         return filterByTag(list, $('.filter_tag input:checked'));
    //     }
    // );

    filterFncs.push(
        function (list) {
            return filterByKeyword(list, _.escape($('.filter_keyword input').val()));
        }
    );

    result = _.reduce(filterFncs, function (list, fnc) {
        return fnc(list);
    }, allList);

    refleshHtml(result);
}   


// キーワード検索機能

function init() {
    // $(".filter_life select").on("change", onFilterChange);
    // $(".filter_tag input").on("change", onFilterChange);
    $(".filter_keyword input").on("click", onFilterChange);
    refleshHtml(allList);
}

function filterByKeyword(list, value) {
    if (value == "") {
        return list;
    }

    var freeAry = [];
    var val = value.replace(/　/g, " ");
    searchAry = val.split(" ");

    return _.filter(list, function (item) {
        var isMatch = false;

        _.each(searchAry, function (data, i) {
            if (
                item.title.indexOf(data) != -1 ||
                item.description.indexOf(data) != -1
            ) {
                isMatch = true;
            }
        });

        return isMatch;
    });
}

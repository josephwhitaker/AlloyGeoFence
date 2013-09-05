function Controller() {
    function triangleArea(A, B, C) {
        return C.x * B.y - B.x * C.y - (C.x * A.y - A.x * C.y) + (B.x * A.y - A.x * B.y);
    }
    function isPointInSqaure(poly, pt) {
        if (triangleArea(poly[0], poly[1], pt) > 0 || triangleArea(poly[1], poly[2], pt) > 0 || triangleArea(poly[2], poly[3], pt) > 0 || triangleArea(poly[3], poly[0], pt) > 0) return false;
        return true;
    }
    function locationCallback(e) {
        if (!e.success || e.error) return;
        var point = (e.coords.timestamp, {
            x: e.coords.latitude,
            y: e.coords.longitude
        }), DESig = false;
        if (isPointInSqaure(square, point) && false === DESig) {
            alert("You are in Dominion Enterprises");
            DESig = true;
        } else false === isPointInSqaure(square, point) && (DESig = false);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var mapView = Titanium.Map.createView({
        mapType: Titanium.Map.STANDARD_TYPE,
        userLocation: true,
        animate: true,
        regionFit: true
    });
    var isAndroid = false;
    isAndroid || Ti.Geolocation.setPurpose("To find and track you");
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_NEAREST_TEN_METERS;
    var square = [];
    square.push({
        x: 36.847855,
        y: -76.291497
    });
    square.push({
        x: 36.847737,
        y: -76.290933
    });
    square.push({
        x: 36.847196,
        y: -76.291191
    });
    square.push({
        x: 36.847344,
        y: -76.291785
    });
    Titanium.Geolocation.addEventListener("location", locationCallback);
    $.index.add(mapView);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
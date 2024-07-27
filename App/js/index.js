// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("9.285714285714286em")
                .setTop("1.0714285714285714em")
                .setWidth("7.357142857142857em")
                .setHeight("1.25em")
                .setCaption("LinksCo. | Login")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "28px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setLeft("17.523809523809526em")
                .setTop("9.142857142857142em")
                .setWidth("23.314285714285713em")
                .setHeight("2.361904761904762em")
                .setLabelSize("8em")
                .setLabelCaption("Username")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setLeft("19.047619047619047em")
                .setTop("12.19047619047619em")
                .setWidth("21.79047619047619em")
                .setHeight("2.5142857142857142em")
                .setLabelSize("8em")
                .setLabelCaption("Password Input")
                .setType("password")
                .setValue("1234")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});

// Setup

function onSetUp(context) {
    // Load framework
    if (NSClassFromString("PrimaryManager") == null) {
        var path = context.plugin.urlForResourceNamed("Primary.framework").path().stringByDeletingLastPathComponent()
        Mocha.sharedRuntime().loadFrameworkWithName_inDirectory("Primary", path)
    }

    PrimaryManager.updateContext(context)
}


// Auto actions

function start(context) {
    // Stub, so that 'onSetUp' is run on plugin being enabled or Sketch starting
    PrimaryManager.setup()
}

function openDocument(context) {
    PrimaryManager.openDocument(context.actionContext.document)
}


// User actions

function showSettings(context) {
    PrimaryManager.showSettings()
}

function sync(context) {
    PrimaryManager.sync()
}



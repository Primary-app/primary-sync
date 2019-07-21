
// Setup

function onSetUp(context) {
    // Load framework
    if (NSClassFromString("PrimaryManager") == null) {
        var path = context.plugin.urlForResourceNamed("Primary.framework").path().stringByDeletingLastPathComponent()
        removeQuarantineFlag(path)
        Mocha.sharedRuntime().loadFrameworkWithName_inDirectory("Primary", path)
    }

    PrimaryManager.updateContext(context)
}

function removeQuarantineFlag(path) {
    var xattr = "/usr/bin/xattr";
    var args = ["-r", "-d", "com.apple.quarantine", path]
    var task = NSTask.launchedTaskWithLaunchPath_arguments(xattr, args)
    task.waitUntilExit()
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



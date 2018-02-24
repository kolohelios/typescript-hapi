const { FuseBox } = require('fuse-box')

const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'build/$name.js',
    target: 'server@es7',
})

fuse.bundle('server/bundle')
    .watch('src/**')
    .instructions(' > [index.ts]')
    .completed(proc => proc.start())

fuse.run()

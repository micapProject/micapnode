const spawn = require('child_process').spawn;
const ls = spawn('git', ['add','-A']);
const ls2 = spawn('git', ['commit','-m','"warren"']);

ls.stdout.on('data', (data) => {
    ls2.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ls2.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    ls2.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
const spawn = require('child_process').spawn;
const ls = spawn('git', ['commit','-m',"'war'"]);
const l2 = spawn('git', ['add','-A']);
const l3 = spawn('git', ['push','origin','master']);
const l4 = spawn('attrib', []);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
l4.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

l4.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});


const spawn = require('child_process').spawn;
const ls = spawn('git', ['commit','-m',"'war'"]);
const l2 = spawn('git', ['add','-A']);
const l3 = spawn('git', ['push','origin','master']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});


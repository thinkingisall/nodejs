// test for buffered and unbuffered output

var PB_BASE_DIR = '<ANSIBLE_PLAYBOOK_HOME>';

var Ansible = require('node-ansible');

var playbook_file = PB_BASE_DIR+'/site';//do not add .yml as it will be added automatically
var inventory_file = PB_BASE_DIR+'/hosts';

var playbook = new Ansible.Playbook().playbook(playbook_file)
                        .inventory(inventory_file)
                        .tags(['setup','cleanup'])
                        .variables({
                            env_name: 'colt-sa-01',
                            env_action: 'setup'
                        });

playbook.on('stdout', function(data) {
    console.log(data.toString());
});

playbook.on('stderr', function(data) {
    console.log(data.toString());
});

playbook.exec();

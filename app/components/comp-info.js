import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
    // start: inject(),
    message: null,
    actions:{
        pressMe(){
            this.start.toggleProperty('isOn');
            this.set('message', this.start.importantInfo());
            console.log(this.start.isOn);
        }
    }
});

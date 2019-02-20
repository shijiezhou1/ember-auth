import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    token: null,
    authenticate(log,pass){
        return Ember.$.ajax({
            method:'POST',
            url:'/token',
            data:{username:log, password:pass}
        }).then((info) => {
            console.log(info);
            this.set('token',info.access_token);
        });
    }
});

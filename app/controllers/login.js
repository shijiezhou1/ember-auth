import Controller from '@ember/controller';

export default Controller.extend({
    loginName:null,
    password:null,
    session:Ember.inject.service(),
    actions:{
        authenticate(){
            //GO TO SERVER => SESSION
            this.get('session').authenticate(this.get('loginName'),this.get('password'))
            .then(()=>{
                alert('greate you are login!');
                
                this.transitionToRoute('students');
            }, (err) => {
                alert(' Error! problem with token !' + err.responseText);
            });
        }
    }
});

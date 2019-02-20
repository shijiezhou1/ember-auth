import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if(!this.get('session')){
            this.transitionTo('login'); // Implicitly aborts the on-going transition.
        }
    }
});

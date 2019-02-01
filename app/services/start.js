import Service from '@ember/service';

export default Service.extend({
    isOn:false,
    importantInfo(){
        return "IMPORTANT INFO IS " + this.get('isOn');
    }
});

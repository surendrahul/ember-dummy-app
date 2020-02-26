import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        let self = this;
        self.$().attr({ tabindex: 1 });
    },
    mouseLeave() {
        console.log('mouse leave', this.friend.name);
    },
    focusIn() {
        console.log('focus in');
    },
    focusOut() {
        console.log('focus out');
    },

});

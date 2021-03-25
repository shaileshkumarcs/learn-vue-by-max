const app = Vue.createApp({
    data() {
        return {
            firstStyle: '',
            paraIsVisible: true,
            inputColor: '',
        };
    },
    computed: {
        styleClass() {
            return {
                user1: this.firstStyle === 'user1',
                user2: this.firstStyle === 'user1',
                visible: this.paraIsVisible,
                hidden: !this.paraIsVisible,
            };
        }
    },
    methods: {
        togglePara() {
            this.paraIsVisible = !this.paraIsVisible;
        }
    },
});

app.mount("#assignment");
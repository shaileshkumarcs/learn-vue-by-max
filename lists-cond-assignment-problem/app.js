const app = Vue.createApp({
    data() {
        return {
            enterdTask: '',
            tasks: [],
            isTaskListVisible: true,
        }
    },
    computed: {
        showCaption() {
            return this.isTaskListVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enterdTask);
            this.enterdTask = "";
        },
        toggleTaskList() {
            this.isTaskListVisible = !this.isTaskListVisible;
        }
    }
});

app.mount("#assignment");
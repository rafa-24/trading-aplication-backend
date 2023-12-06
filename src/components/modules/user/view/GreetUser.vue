<template>
  <h1>{{ greet }}</h1>
</template>

<script>
import { greetUser } from "../store/store";
export default {
  name: "GreetUser",
  data() {
    return {
      token_value: null,
      greet: "",
    };
  },
  mounted() {
    this.greetingUser();
    this.$watch(
      () => localStorage.getItem("token"),
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          this.greetingUser();
        }
      }
    );
  },
  methods: {
    async greetingUser() {
      try {
        this.token_value = localStorage.getItem("token");
        const config = {
          headers: {
            token_access: this.token_value,
          },
        };
        const resp = await greetUser(config);
        this.greet = resp;
      } catch (error) {
        return error;
      }
    },
  },
};
</script>

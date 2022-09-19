<template>
    <div class="formContainer" id="formContainer">
        <form class="form" @submit.prevent>
            <div class="formLine" >
                <label for="title">
                    Title
                </label>
                <input type="text" id="title" name="title" :maxlength="limitOfTitle" v-model="title">
                <div class="limit">
                    {{ (title ? title.length : 0) + " / " + limitOfTitle }}
                </div>
            </div>
            <div class="formLine">
                <label for="text">
                    Text
                </label>
                <input type="text" id="text" name="text" :maxlength="limitOfText" v-model="text">
                <div class="limit">
                    {{ (text ? text.length : 0) + " / " + limitOfText }}
                </div>
            </div>
            <div class="formLine">
                <label for="date">
                    Date
                </label>
                <input type="date" id="date" name="date" v-model="date">
            </div>
            <div class="formLine">
                <button class="submitButton" @click="onSave">Save</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'RyzeFormular',
  props: {
    defaultValues: {
      type: Object
    }
  },
  data () {
    return {
      limitOfTitle: 100,
      limitOfText: 300,
      title: '',
      text: '',
      date: ''
    }
  },
  methods: {
    onSave () {
      this.$emit('onSave', {title: this.title, text: this.text, date: this.date})
      this.title = ''
      this.text = ''
      this.date = ''
    },
    onEdit (field) {
      this.$emit('onEdit', field)
    }
  },
  watch: {
    defaultValues: {
      immediate: true,
      handler (newVal) {
        this.title = newVal && newVal.title ? newVal.title : ''
        this.text = newVal && newVal.text ? newVal.text : ''
        this.date = newVal && newVal.date ? newVal.date : ''
      },
      deep: true
    }
  }
}
</script>
